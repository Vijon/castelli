import * as React from 'react';
import styled from 'styled-components';

import * as $helpers from './helpers';
import { colors, fonts, dimensions, dpi, styles } from './styles/scaffolding';

interface Props {
    update?: any,
    onConfirm?: Function,
    onDismiss?: Function
}

const $ = Object.assign( {}, styles, {
    updater: styled.div`
        position: fixed;
        z-index: 3;
        bottom: ${dpi(dimensions.screen.margin)}px;;
        left: ${dpi(dimensions.screen.margin)}px;
        right: ${dpi(dimensions.screen.margin)}px;
        height: ${dpi(dimensions.header.height)}px;

        
    `,
    btn: styles.btn.extend`
        display: block;
        width: 100%;
    `
})

class Updater extends React.Component<Props, null> {
    componentWillMount() {
    }

    onPressConfirm() {
        if (this.props.onConfirm) {
            this.props.onConfirm();
        }
    }
    onPressDismiss() {
        if (this.props.onDismiss) {
            this.props.onDismiss();
        }
    }

    render() {
        if (!this.props.update.available) return null;
        return (
            <$.updater onClick={() => this.onPressConfirm()}>
                <$.btn>
                    Aggiornamento disponibile
                    <$.close onClick={() => this.onPressDismiss()} />
                </$.btn>
            </$.updater>
        )
    }
}

export default Updater;