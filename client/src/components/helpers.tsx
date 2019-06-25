export function format( value: number, type: string = 'meters' ) {
    switch (type) {
        case 'meters':
            const x = 100;
            return (Math.round((value/1000)*x)/x) + 'km';
    }
    return value;
}

export function enumToStr( key, val ) {
    const ENUMS = {
        'precisione': {
            0: 'Sconosciuta',
            1: 'Incerta',
            2: 'Approssimata',
            3: 'Sicura'
        },
        'condizione': {
            0: 'Nulla',
            1: 'Scarsa',
            2: 'Discreta',
            3: 'Buona'
        }
    }
    if (!ENUMS[key]) return val;
    return ENUMS[key][val] || 'sconosciuto';
}