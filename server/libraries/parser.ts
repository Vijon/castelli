const { JSDOM } = require('jsdom');
const slug = require('slug');

// projection
const proj4 = require('proj4');
proj4.defs("UTM", "+proj=utm +zone=32 +ellps=intl +units=m +no_defs"); // ED50 / UTM Zone 32N - EPSG:23032
proj4.defs("WGS", "+title=long/lat:WGS84 +proj=longlat +a=6378137.0 +b=6356752.31424518 +ellps=WGS84 +datum=WGS84 +units=degrees"); // WGS84 - EPSG:4326

const MONTHS = {'gennaio': 1, 'febbraio': 2, 'marzo': 3, 'aprile': 4, 'maggio': 5, 'giugno': 6, 'luglio': 7, 'agosto': 8, 'settembre': 9, 'ottobre': 10, 'novembre': 11, 'dicembre': 12};

// arrays with default conversion with matching indices
const ROMAN_DEC = {'I':1, 'V':5, 'X':10, 'L':50, 'C':100, 'D':500, 'M':1000};

const ENUMS = {
    'precisione': {
        'Sconosciuta': 0,
        'Incerta': 1,
        'Approssimata': 2,
        'Sicura': 3
    },
    'condizione': {
        'Nulla': 0,
        'Scarsa': 1,
        'Discreta': 2,
        'Buona': 3
    }
}

export default class parser {
    static index( content ) {
        const dom = new JSDOM(content);
        const doc = dom.window.document;
        const body = doc.body;
        const nodes = body.querySelectorAll(".titolo a");
        if (nodes.length == 0) return false;
        var items = [];
        nodes.forEach( (n) => {
            let pts = n.href.split('='); let id = [...pts].pop();
            items.push( {
                id: id,
                url: n.href,
                name: n.textContent.replace('»', '').trim()
            } )
        });
        return items;
    }

    static label( str ) {
        return slug( str.replace(':', '').trim().toLowerCase() );
    }

    static enum( key, str ) {
        if (!ENUMS[key]) return str;
        return Object.keys(ENUMS[key]).reduce( (e, k) => {
            let v = ENUMS[key][k];
            return (str.toLowerCase().includes(k.toLowerCase()) ? v : e);
        }, -1);
        //return ENUMS[key] ? ( str.toLowerCase().includes(ENUMS[key].toLowerCase()) ? ENUMS[key] : -1 ) : str;
    }

    static details( content ) {
        try {

        const dom = new JSDOM(content);
        const doc = dom.window.document;
        const body = doc.body;

        var obj = {
            $internal: {
                history_pages: []
            },
            id: null,
            title: body.querySelector(".titolo_pagina").textContent,
            info: {
                images: []
            },
            geo: {
                lat: null,
                lng: null
            },
            history: {}
        }
        // find ID
        body.querySelectorAll('.menu_link a').forEach( (n) => {
            let s = 'index.jsp?idsel=';
            if (n.href.indexOf(s) !== -1) {
                obj.id = n.href.replace(s, '');
            }
        });
        // general info
        body.querySelector('.descrizione').querySelectorAll(".box").forEach( (n) => {
            if (!n.querySelector('.etichetta')) { console.log(n.textContent); return; }
            let [key] = parser.label(n.querySelector('.etichetta').textContent).split('-');
            let value = n.querySelector('.cont').textContent.trim();
            obj.info[key] = parser.enum(key, value);
            if (['dato non inserito', ''].indexOf(obj.info[key]) != -1) { delete obj.info[key]; }
        });
        // images
        body.querySelectorAll(".thumb img").forEach( (n) => {
            obj.info.images.push( {
                title: n.alt,
                src: `http://mappegis.regione.emilia-romagna.it${n.src}`
            } );
        });
        // geoposition related
        const map = new JSDOM(doc.getElementById('spazio_mappa').querySelector("noscript").textContent);
        var values = map.window.document.querySelectorAll(".cont");
        map.window.document.querySelectorAll(".etichetta").forEach( (n, i) => {
            let key = parser.label(n.textContent);
            if (!values[i]) return;
            let value = values[i].textContent.trim();
            obj.geo[key] = value;
        });
        
        if (obj.geo['x-max']) {
            let ll = proj4( 'UTM', 'WGS', [
                Number.parseFloat(obj.geo['x-max']),
                Number.parseFloat(obj.geo['y-max'])
            ] );
            obj.geo = {
                lat: ll[1],
                lng: ll[0]
            }
        }
        // history
        let box = body.querySelector('.sottolista');
        if (box) {
            var pp = {};
            box.querySelectorAll('.navigazione a').forEach( (a) => {
                pp[a.href] = true;
            });
            obj.$internal.history_pages = Object.keys(pp);
            
            var titles = box.querySelectorAll(".titolo h3");
            var texts = box.querySelectorAll(".cont");
            titles.forEach( (n, i) => {
                let date = parser.findDate(n.textContent);
                let key = date.year;
                obj.history[key] = {
                    title: n.textContent.trim(),
                    text: texts[i].textContent.trim()
                };
            });
        }

        return obj;
        
        }
        catch(err) {
            //console.trace(err);
        }        
    }

    // add logic to parse dates
    static findDate( str ) {
        var num = function(v) {
            return parseInt(v);
        }

        str = slug(str);
        // • is it roman?
        let result;
        result = str.match(/^.*([I|V|X|L|C|D|M]{2,})/);
        if (result) {
            // convert from roman to year (numero secolo - 1 per 100)
            let century = parser.convertRoman2Arabic(result[0]);
            return { year: num(century - 1) * 100, century: num(century) };
        }
        // • is an year?
        result = str.match(/^([0-9]{3,4})$/);
        if (result) {
            return { year: num(result[0]) };
        }
        // • is a dd-J-YYYY formatted date?
        result = str.match(/^([0-9]{1,2})-([a-zA-Z]+)-([0-9]{3,4})$/);
        if (result) {
            return { year: num(result[3]), month: MONTHS[result[2]], day: num(result[1]) };
        }
        // • is a J-YYYY formatted date?
        result = str.match(/^([a-zA-Z]+)-([0-9]{3,4})$/);
        if (result) {
            return { year: num(result[2]), month: MONTHS[result[1]] };
        }
        // • manual parse
        let pts = str.split('-');
        var mode = 'from';
        var obj = { from: {}, to: {} };
        pts.forEach( (pt) => {
            // yyyy
            result = pt.match(/^([0-9]{3,4})$/);
            if (result) obj[mode]['year'] = num(pt);
            // dd
            result = pt.match(/^([0-9]{1,2})$/);
            if (result) obj[mode]['day'] = num(pt);
            // J
            if (MONTHS[pt]) {
                obj[mode]['month'] = MONTHS[pt];
            }
            // detect trigger, change mode
            if (pt == 'al') mode = 'to';
        });
        if (obj.from['year']) {
            return Object.assign( {}, obj.from, { to: obj.to } );
        }
        return str;
    }

    static convertRoman2Arabic(num) {        
        var arabic;
        var recursive = function(n) {
            if (n.length < 2){
                return arabic;
            }
            if (!arabic) {
                arabic = ROMAN_DEC[n.charAt(0)];
            }
            var pre = ROMAN_DEC[n.charAt(0)], curr = ROMAN_DEC[n.charAt(1)];
            if (curr <= pre) {
                arabic += curr;
            } else {
                arabic += curr - pre*2;
            }
            return recursive( n.substr(1) );
        };
        
        arabic = 0;
        return recursive(num);
        
    }
        
        
}