import * as React from 'react';
import { Link } from 'react-router-dom' 
import styled from 'styled-components';

import { ItemType } from '../types';
import * as $helpers from './helpers';
import { colors, fonts, dimensions, dpi, styles } from './styles/scaffolding';

interface Props {
    key: String,
    item: ItemType,
    position?: Position,
}

const $ = Object.assign( {}, styles, {
    box: styled.div`
        display: flex;
        justify-content: space-between;
        padding: ${dpi(dimensions.screen.margin)}px;
        font-family: '${fonts.text}';
        font-size: ${dpi(28)}px;
        border-top: 1px solid ${colors.grey.light};

        > * {
            strong {
                font-family: '${fonts.bold}';
            }
            &:last-child {
                text-align: right;
            }
        }
    `,
});

class Item extends React.Component<Props, null> {

    componentWillMount() {
    }

    render() {
        let item = this.props.item;
        return (
                <Link to={`/details/${item.id}`}>
                    <$.box>
                        <div>
                            <strong>{item.title}</strong><br />
                            {item.info &&
                            <span>{item.info.comune}</span>
                            }
                        </div>
                        <div>
                            {item.distance &&
                            <div><strong>{$helpers.format(item.distance)}</strong></div>
                            }
                            {item.history &&
                            <div>{(item.history.size > 1) ? item.history.size + ' fatti storici' : 'un fatto storico'}</div>
                            }
                        </div>
                    </$.box>
                </Link>
        )
    }
}

export default Item;