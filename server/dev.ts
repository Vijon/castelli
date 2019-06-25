import loader from './libraries/loader';
import parser from './libraries/parser';

// Castello Canossa         /schede/castelli/index.jsp?id=3709
loader.get(`/schede/castelli/index.jsp?id=100`).then( (data) => {
    let obj = {
        title: 'Corneto'
    }
    let item = parser.details(data);
    var promises = [];
    item.$internal.history_pages.forEach( (p) => {
        promises.push( loader.get(`/schede/castelli/` + p) );
    });
    Promise.all( promises ).then( (dataset) => {
        item.history = dataset.reduce( (i, d) => {
            return Object.assign( {}, i, parser.details(d).history )
        }, item.history);
        console.log(item)
    });
});