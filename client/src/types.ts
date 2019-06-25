interface EventType {
    title: string,
    text: string
}

export interface ItemType {
    id: string,
    title: string,
    info: {
        comune: string,
        condizione: string | number,
        informazioni :string,
        localita : string,
        manutenzione : string,
        precisione : string | number,
        toponimo : string,
        images: any[],
    },
    geo: {
        lat: number,
        lng: number
    },
    history: Map<string, EventType>,

    distance?: number,

    // ?
    name?: string,
    url?: string
}

export function toMap( obj ) {
    let map = new Map();
    Object.keys(obj).forEach(key => {
        map.set(key, obj[key]);
    });
    return map;
}