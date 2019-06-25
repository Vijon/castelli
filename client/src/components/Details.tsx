import * as React from 'react';
import styled from 'styled-components';

import * as $helpers from './helpers';
import { colors, fonts, dimensions, dpi, styles } from './styles/scaffolding';
import { Loading } from './Loading';

interface Props {
    item: any,
    position: Position,
    onInit?: Function
}

let offset = 62, bullet = 20;
const $ = Object.assign( {}, styles, {
    info: styled.div`
        padding: ${dpi(dimensions.screen.margin)}px;
        font-family: '${fonts.text}';
        font-size: ${dpi(dimensions.screen.fontSize)}px;

        strong {
            font-family: '${fonts.bold}';
            font-weight: normal;
        }
    `,
    history: styled.div`
        padding: ${dpi(dimensions.screen.margin)}px;
        color: ${colors.black};
        background: ${colors.white} url(${require('./styles/images/px-grey.png')}) repeat-y ${dpi(offset)}px 0;
    `,
    event: styled.div`
        position: relative;
        padding-left: ${dpi(offset+10)}px;
        padding-bottom: 1em;

        &:before {
            position: absolute;
            left: ${dpi(offset/2)}px;
            content: '';
            display: block;
            width: ${dpi(bullet)}px;
            height: ${dpi(bullet)}px;
            background: ${colors.grey.normal};
            border: 2px solid ${colors.white};
            border-radius: 100%;
        }

        > h4 {
            color: ${colors.grey.dark};
            font-family: ${fonts.bold};
            font-size: ${dpi(24)}px;
            text-indent: -${dpi(10)}px;
        }
        > p {
            font-family: ${fonts.bold};
            font-size: ${dpi(24)}px;
        }
    `
})

class Details extends React.Component<Props, null> {
    
    constructor() {
        super();
    }

    _init() {
        if (!this.props.item || !this.props.item.id) return;
        this.props.onInit( this.props.item );
    }

    componentDidMount() {
        this._init();
    }

    componentWillReceiveProps(nextProps: Props) {
        if (nextProps.item.id != this.props.item.id) {
            this._init();
        }
    }

    onPressTravel() {
        return () => {
            //window.open(`https://www.google.com/maps/@${this.props.item.geo.lat},${this.props.item.geo.lng},6z`);
            window.open(`https://www.google.com/maps/dir/?api=1&destination=${this.props.item.geo.lat},${this.props.item.geo.lng}`);
        }
    }

    render() {
        let item = this.props.item;
        if (!item) return (
            <Loading />
        );
        let img = (item.info.images ? 'http://mappegis.regione.emilia-romagna.it' + item.info.images[0].src : null);
        let map = `https://maps.googleapis.com/maps/api/staticmap?center=${item.geo.lat},${item.geo.lng}&zoom=13&size=600x300&maptype=streets&markers=color:blue%7C${item.geo.lat},${item.geo.lng}`
        return (
            <$.panel>
                <$.title>
                    <span>{ item.title }</span>
                </$.title>
                <$.info>
                    {item.name} è nel comune di <strong>{item.info.comune}</strong>
                    {(item.info.localita ? [' in località ', <strong>{item.info.localita}</strong>] : null )}.<br />
                    Il castello è in una condizione <strong>{$helpers.enumToStr('condizione', item.info.condizione)}</strong>
                    {(item.info['precisione'] ? [' e la sua ubicazione è ', <strong>{$helpers.enumToStr('precisione', item.info['precisione'])}</strong>] : null )}.<br />
                    Dista da te in linea d’aria <strong>{$helpers.format(item.distance)}.</strong>
                </$.info>
                <$.btnbox>
                    <$.btn onClick={this.onPressTravel()}>Raggiungilo</$.btn>
                </$.btnbox>
                <$.history>
                { Array.from(item.history.values()).map( (evt: any, key: number) => {
                    return <$.event key={ 'evt_' + key }>
                        <h4>{ evt.title }</h4>
                        <p>{ evt.text }</p>
                    </$.event>
                } ) }
                </$.history>
            </$.panel>
        )
    }
}

export default Details;