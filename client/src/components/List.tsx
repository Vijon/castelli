import * as React from 'react';
import styled from 'styled-components';

import CONFIG from '../config';
import { ItemType } from '../types';
import * as $helpers from './helpers';
import { colors, fonts, dimensions, dpi, styles } from './styles/scaffolding';

import Item from '../components/Item';

interface Props {
    items?: Map<String, ItemType>,
    page?: number,
    position?: Position,
    onInit?: Function,
    onSetPage?: Function
}

const $ = Object.assign( {}, styles, {
});

class List extends React.Component<Props, null> {
    _init() {
        this.props.onInit( );
    }

    componentWillMount() {
        this._init();
    }

    onPressMore() {
        return () => {
            this.props.onSetPage( this.props.page+1 );
        }
    }

    render() {
        const items = Array.from(this.props.items.values()).slice(0, CONFIG.ui.ipp * this.props.page);
        const maxpages = Math.ceil(this.props.items.size / CONFIG.ui.ipp);
        return (
            <$.panel>
                <$.title>
                    <span>Vicino a te.</span>
                </$.title>
                { items.map( (item) => {
                    return <Item key={item.id} item={item}></Item>
                }) }
                {(this.props.page < maxpages) &&
                <$.btnbox>
                    <$.btn onClick={this.onPressMore()}>Più castelli!</$.btn>
                </$.btnbox>
                }
            </$.panel>
        )
    }
}

export default List;