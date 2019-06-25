import { ActionsItems} from '../actions';
import { Geo } from '../services';
import { ItemType } from '../../types';

interface SortItemType {
    id: string,
    distance: number
}


const reducer = function reducer(state: any = {}, action: any) {
    switch (action.type) {
        case ActionsItems.POPULATED_ITEMS:
            return action.items; //Object.assign({}, state, action.items)

        case ActionsItems.SORTED_ITEMS:
            var p = action.position.coords;
            var index: SortItemType[] = [];
            state.forEach( (i: ItemType) => {
                index.push( {
                    id: i.id,
                    distance: Geo.distance(p.latitude, p.longitude, i.geo.lat, i.geo.lng)
                } );
            });
            // sorting by distance asc
            index = index.sort(function(a: SortItemType, b: SortItemType) {
                return a['distance'] - b['distance'];
            });
            var sorted = new Map();
            index.forEach( (i: SortItemType) => {
                let item = state.get(i.id);
                sorted.set( i.id, Object.assign({}, item, { distance: i.distance } ) );
            })
            return sorted;
        
        default:
            return state
    }
}
export default reducer;

