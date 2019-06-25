// imports
import loader from './libraries/loader';
import parser from './libraries/parser';
import db from './libraries/db';

// cli vars
var ARGS: any = {};
process.argv.slice(2).forEach( (arg) => ARGS[arg] = true );

try {

// 1) collect items from paginated index
var $ITEMS = {};
db.connect();
loader.index().then( (result: any) => {
    // 2) retrieve single items
    let ipp = 5;
    let pagestart = 0;
    let pages = Math.ceil(result.length / ipp);
    //pagestart = 1;  // TOREMOVE!!!!
    //pages = 1; // TOREMOVE!!!!

    var $page = (page) => {
        return new Promise( (resolve, reject) => {
            var promises = [];
            let start = ipp*page;
            let end = ipp*(page+1);
            let set = result.slice(start, end);
            set.forEach( (item) => {
                promises.push( loader.get(`/schede/castelli/${item.url}`) );
            });
            Promise.all( promises ).then( (dataset) => {
                var items = {};
                var promises = [];
                dataset.forEach( (data, i) => {
                    let item = set[i];
                    item = Object.assign( {}, item, parser.details(data) );
                    items[ item.id ] = item;
                    console.log(`Retrieve item #${item.id} (${item.name})`)
                    
                    // load other history pages
                    if (item.$internal.history_pages.length) {
                        item.$internal.history_pages.forEach( (p) => {
                            promises.push( loader.get(`/schede/castelli/${p}`) );
                        });
                    }
                });

                var $resolve = (items) => {
                    Object.keys(items).forEach( (k) => {
                        let item = items[k];
                        delete item.$internal;
                        items[k] = item;
                        $ITEMS[k] = item;
                    });
                    if (ARGS.save) {
                        console.log('*** SAVING ON DB ****')
                        // 4) save on DB!
                        db.save( items ).then( () => {
                            console.log(`Saving page ${page} (${start} - ${end})`);
                            resolve(items);
                        });
                    } else {
                        resolve(items);
                    }
                }
                if (promises.length) {
                    Promise.all( promises ).then( (dataset) => {
                        dataset.forEach( (d) => {
                            // merge paginated history
                            let pitem = parser.details(d);
                            if (!pitem) {
                                console.log(pitem, 'not found')
                                return;
                            }
                            items[ pitem.id ].history = Object.assign( {}, items[ pitem.id ].history, pitem.history );
                        });
                        console.log(`|__Retrieved ${dataset.length} history pages`)
                        $resolve(items);
                    });
                } else {
                    $resolve(items);
                }
            });
        });
    }
    // 3) divide in pages (otherwise too memory allocation)
    var promises = [];
    for (let page=pagestart; page<pages; page++) {
        promises.push( () => $page(page) );
    }
    var sequence = (promises) => {
        return new Promise( (resolve, reject) => {
            promises.reduce( (p: Promise<any>, fn) => {
                return p.then( () => fn(), (err) => console.log( err )  );
            }, Promise.resolve() ).then( (result) => {
                resolve( );
            }, (reason) => {
                reject( reason );
            });
        });
    };

    sequence( promises ).then( () => {
        if (ARGS.stats) {
            console.log('*** COLLECT STATS ****');
            var stats = {
                '404': {
                    'geo': 0
                }
            };
            Object.keys($ITEMS).forEach( id => {
                let item = $ITEMS[id];
                ['precisione', 'condizione', 'manutenzione'].forEach( k => {
                    if (!stats[k]) stats[k] = {};
                    if (!stats[k][ item.info[k] ]) stats[k][ item.info[k] ] = 0;
                    stats[k][ item.info[k] ]++;
                });
                ['comune', 'condizione', 'informazioni-turistiche', 'localita', 'manutenzione', 'toponimo'].forEach( k => {
                    if (item.info[k].length > 0) return;
                    if (!stats['404'][ k ]) stats['404'][ k ] = 0;
                    stats['404'][ k ]++;
                });
                if (parseInt(item.geo['x-max']) == 0) {
                    stats['404']['geo']++;
                }
            } );
            console.log(stats)
        }

        db.ver( `dbver_${Date.now()}_${result.length}` );
    });
})

}
catch(err) {
    console.trace(err);
}