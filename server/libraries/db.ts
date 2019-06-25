const firebase = require('firebase-admin');

export default class db {
    static connect() {
        var serviceAccount = require("../secure/serviceAccountKey.json");
        firebase.initializeApp({
            credential: firebase.credential.cert(serviceAccount),
            databaseURL: `https://${serviceAccount.project_id}.firebaseio.com`
        });
    }

    static save( items ) {
        var $db = firebase.database();
        var ref = $db.ref("server");
        var itemsRef = ref.child("castelli");
        var promises = [];
        Object.keys(items).forEach( k => {
            promises.push(
                itemsRef.child(k).set( items[k] )
            );
        } )
        return Promise.all( promises );
        //return itemsRef.set(items);
    }

    static ver( version ) {
        var $db = firebase.database();
        var ref = $db.ref("server");
        var versionRef = ref.child("version");
        return versionRef.set( version );
    }
}
