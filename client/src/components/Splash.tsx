import * as React from 'react';
import styled from 'styled-components';

import CONFIG from '../config';
import * as $helpers from './helpers';
import { colors, fonts, dimensions, dpi, styles } from './styles/scaffolding';
import { Loading } from './Loading';

interface Props {
    items?: any,
}

var timeout: boolean = false;
class Splash extends React.Component<Props, null> {
    componentWillMount() {
        setTimeout( () => {
            timeout = true;
            this.forceUpdate();
        }, CONFIG.ui.splash);
    }

    render() {
        let bg = require(`./styles/images/bg.png`);
        let logo = require(`./styles/images/logo.png`);
        const $ = Object.assign( {}, styles, {
            splash: styled.div`
                position: fixed;
                z-index: 10;
                top: 0;
                left: 0;
                right: 0;
                bottom: 0;
                background-image: url(${String(bg)});
                background-repeat: no-repeat;
                background-size: cover;
                background-position: center;
                background-color: #000;

                &:before {
                    content: '';
                    position: absolute;
                    z-index: 1;
                    top: 0;
                    left: 0;
                    right: 0;
                    bottom: 0;
                    background: rgba(0,0,0,.7);
                }
            `,
            logo: styled.div`
                position: absolute;
                z-index: 11;
                top: 0;
                left: 0;
                right: 0;
                bottom: 0;
                background-image: url(${String(logo)});
                background-repeat: no-repeat;
                background-size: contain;
                background-position: center;
            `,
            foot: styled.div`
                position: absolute;
                z-index: 2;
                bottom: 0;
                left: 0;
                width: 100%;
                padding: 10px 0;
                text-align: center;
                font-family: '${fonts.text}';
                font-size: ${dpi(28)}px;
                color: ${colors.white};
            `,
        });
        if ((this.props.items.size > 0) && timeout == true) {
            return null;
        }
        return (
            <$.splash>
                <$.logo />
                <Loading />
                <$.foot>
                    Dati presi in prestito dal<br /> sito della Regione Emilia-Romagna<br />geo.regione.emilia-romagna.it/schede/castelli
                </$.foot>
            </$.splash>
        )
    }
}

export default Splash;