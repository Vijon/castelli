import * as firebase from 'firebase';
import { Observable } from 'rxjs';

import CONFIG from '../../config';
import { toMap } from '../../types';

class Data {
    private $db: firebase.database.Database;

    constructor() {
    }

    private connect() {
        if (!this.$db) {
            this.$db = firebase.initializeApp(CONFIG.firebase).database();
        }
    }

    private getVer() {
        return new Promise( (resolve, reject) => {
            this.connect();
            this.$db.ref('/server/version').once('value').then(function(snapshot: any) {
                const ver = snapshot.val();
                resolve(ver);
            });
        });
    }

    check() {
        const current = localStorage.getItem('version');
        return new Promise( (resolve, reject) => {
            this.getVer().then(ver => {
                // if current version is not available, bypass
                if (!current) {
                    reject([,]);
                }
                // check versions
                if (ver !== current) {
                    resolve([ver, current]);
                } else {
                    reject([ver, current]);
                }
            })
        });
    }

    list(force = false) {
        const transform = (raw) => {
            // tranform in map
            let items = new Map();
            Object.keys(raw).forEach( k => {
                let item = Object.assign( {}, raw[k]);
                if (item.history) {
                    item.history = toMap(item.history);
                }
                items.set(k, item);
            });
            return items;
        }

        // check if data is cached
        const cached = this.loadCache();
        if (cached && !force) {
            return Observable.from([JSON.parse(cached)]).map( raw => transform(raw) );
        }
        
        // if not cached, connect to firebase
        this.connect();
        let itemsRef: any = this.$db.ref('/server/castelli')
        //.limitToFirst(100); // TOREMOVE limit!
        return Observable.fromEvent(itemsRef, 'value').map( (snapshot: any) => {
            const s = snapshot.val();
            const items = transform(s);
            this.saveCache(JSON.stringify(s));
            // update ver
            this.getVer().then( (ver: string) => {
                localStorage.setItem('version', ver);
            });
            return items;
        } );
    }

    purgeCache() {
        localStorage.removeItem(`items`);
        for (let i=0; i<1000; i++) {
            let k = `items_${i}`;
            if (!localStorage.getItem(k)) return;
            localStorage.removeItem(k)
        }
    }

    loadCache() {
        var str = '';
        for (let i=0; i<1000; i++) {
            let k = `items_${i}`;
            if (!localStorage.getItem(k)) return str;
            str += localStorage.getItem(k)
        }
        return str;
    }

    saveCache(str) {
        this.purgeCache();

        // chunk string
        const len = 100000;
        var _size = Math.ceil(str.length/len),
            _ret  = new Array(_size),
            _offset
        ;
        
        for (var _i=0; _i<_size; _i++) {
            _offset = _i * len;
            _ret[_i] = str.substring(_offset, _offset + len);
            localStorage.setItem(`items_${_i}`, _ret[_i]);
        }
    }
}

export default new Data();