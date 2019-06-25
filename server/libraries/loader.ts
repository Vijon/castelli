const http  = require('http');
const path  = require('path');
const fs    = require('fs');
const slug = require('slug');

import parser from './parser';

export default class loader {
    static index( ) {
        return new Promise( (resolve, reject) => {
            var promises = [];
            for (let i=1; i<=100; i++) {
                promises.push( loader.get(`/schede/castelli/index.jsp?pagina=${i}`) );
            }
            Promise.all( promises ).then( (dataset) => {
                var items = [];
                dataset.forEach( (data) => {
                    let _items = parser.index(data);
                    if (_items != false) {
                        items.push(..._items);
                    }
                });
                resolve(items);
            });
        });
    }

    static get( url ) {
        return new Promise( (resolve, reject) => {
            const base = 'geo.regione.emilia-romagna.it';
            const cache = '../.cache';
            const local = path.resolve(__dirname, cache, slug(url) );
            if (fs.existsSync(local)) {
                // local file loader
                fs.readFile(local, 'utf8', (err, data) => {
                    if (err) reject(err);
                    resolve(data);
                });
            } else {
                // remote file (and then cache)
                var options = {
                    host: base,
                    port: 80,
                    path: url
                };
                http.get(options, function(res) {
                    var data = '';
                    res.setEncoding("utf8");
                    res.on("data", function (chunk) {
                        data += chunk;
                    });
                    res.on("end", function () {
                        // save on cache!
                        fs.writeFileSync(local, data, 'utf-8');

                        resolve(data);
                    });
                }).on('error', function(e) {
                    reject(e);
                });
            }
        });
    }
}
