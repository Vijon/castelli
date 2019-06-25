import { Observable, Subscriber } from 'rxjs'

class Geo {
    private position: Position;
    private $observables: {
        position?: Observable<String>
    } = {};

    geoLocate() {
        if (this.position) {
            //return Observable.from([this.position]);
            return Observable.create( (obs: Subscriber<Position>) => { obs.next( this.position ); } );
        }
        if (!this.$observables.position) {
            this.$observables.position = Observable.create( (obs: Subscriber<Position>) => {
                navigator.geolocation.watchPosition( (position: Position) => {
                    this.position = position;
                    obs.next( position );
                }, (err) => {
                    
                })
            } );
        }
        return this.$observables.position;
    }

    toRadians(n: number) {
        return n * Math.PI / 180;
    }

    distance(lat1: number, lng1: number, lat2: number, lng2: number) {
        var R = 6371e3; // metres
        var φ1 = this.toRadians(lat1);
        var φ2 = this.toRadians(lat2);
        var Δφ = this.toRadians(lat2 - lat1);
        var Δλ = this.toRadians(lng2 - lng1);

        var a = Math.sin(Δφ / 2) * Math.sin(Δφ / 2) +
            Math.cos(φ1) * Math.cos(φ2) *
            Math.sin(Δλ / 2) * Math.sin(Δλ / 2);
        var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

        var d = R * c;

        return d;
    }
}

export default new Geo();