import * as React from 'react';
import styled from 'styled-components';
import { colors, fonts, dimensions, dpi, styles } from './styles/scaffolding';

const $ = Object.assign( {}, styles, {
    warning: styled.div`
        color: ${colors.black};
        font-family: ${fonts.title};
        font-size: ${dpi(40)}px;
        text-align: center;
    `
})

const QRCode = () => {
    const qr = require(`./styles/images/qrcode.jpg`);
    return (
        <$.warning>
            <figure>
                <img src={ String(qr) } />
            </figure>
            Questa app per ora ha senso solo da mobile!
        </$.warning>
    );
}

export default QRCode;