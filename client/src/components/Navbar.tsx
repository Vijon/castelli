import * as React from 'react';
import styled from 'styled-components';

import * as $helpers from './helpers';
import { colors, fonts, dimensions, dpi, styles } from './styles/scaffolding';

interface Props {
    level?: number,
    filters?: boolean,
    onToggleMenu?: Function,
    onNavigateBack?: Function,
    onToggleFilters?: Function
}

const $ = Object.assign( {}, styles, {
    navbar: styled.div`
        position: fixed;
        z-index: 3;
        top: ${dpi(dimensions.screen.margin)}px;;
        left: ${dpi(dimensions.screen.margin)}px;
        right: ${dpi(dimensions.screen.margin)}px;
        height: ${dpi(dimensions.header.height)}px;

        display: flex;
        justify-content: space-between;

        > * {
            align-self: flex-end;
        }
    `,
})

class Navbar extends React.Component<Props, null> {
    public static defaultProps: Props = {
        level: 0,
        filters: true
    };     
    
    constructor() {
        super();
    }

    componentWillMount() {
    }

    onPressMenu() {
        if (this.props.onToggleMenu) {
            this.props.onToggleMenu();
        }
    }
    onPressBack() {
        if (this.props.onNavigateBack) {
            this.props.onNavigateBack();
        }
    }
    onPressSearch() {
        if (this.props.onToggleFilters) {
            this.props.onToggleFilters();
        }
    }

    render() {
        return (
            <$.navbar>
                {(this.props.level > 0) ? (
                <$.icon className="back" onClick={() => this.onPressBack()} />
                ) : (
                null    //<$.icon className="menu" onClick={() => this.onPressMenu()} />
                )}
                {(
                null    //<$.icon className="search" onClick={() => this.onPressSearch()} />
                )}
            </$.navbar>
        )
    }
}

export default Navbar;