import styled, { injectGlobal } from 'styled-components';

// reset.css (ugly inclusion, sorry)
import './reset';

// import fonts
import { fontFaces } from './fonts/';
Object.keys(fontFaces).forEach( k => {
    injectGlobal`
    @font-face {
        font-family: '${k}';
        src: url('${fontFaces[k]}') format('opentype');
    }`;
});

export const fonts = {
    bigtitle: 'roboto thin',
    title: 'roboto bold',
    text: 'roboto thin',
    bold: 'roboto'
}

// colors
export const colors = {
    white: '#fff',
    black: '#222',
    grey: {
        light: '#eee',
        normal: '#dadada',
        dark: '#999'
    }
}

// dimensions
export const dimensions = {
    screen: {
        margin: 20,
        fontSize: 28,
        lineHeight: 1.2
    },
    header: {
        height: 80
    },
    title: {
        height: 230
    },
    icon: 52
}

export function dpi( value: number ) {
    return value/2;
}

// styled components
export const styles = {
    panel: styled.div`
        position: absolute;
        z-index: 2;
        top: 0;
        left: 0;
        width: 100%;
        min-height: 100%;
        padding-top: ${dimensions.header.height}px;
        line-height: ${dimensions.screen.lineHeight};
        color: ${colors.white};
        background-color: rgba(0,0,0,.7);
    `,
    title: styled.h1`
        display: flex;   
        font-family: '${fonts.bigtitle}'; 
        font-size: ${dpi(120)}px;
        font-weight: bold;
        line-height: .9;
        min-height: ${dpi(dimensions.title.height)}px;
        padding: 0 ${dpi(dimensions.screen.margin)}px;

        > * {
            display: block;
            align-self: flex-end;
        }
    `,
    icon: styled.span`
        display: inline-block;
        color: white;
        width: ${dpi(dimensions.icon)}px;
        height: ${dpi(dimensions.icon)}px;
        text-align: center;
        background-size: contain;

        &.menu {
            background-image: url(${require('./images/menu.png')});
        }
        &.search {
            background-image: url(${require('./images/search.png')});
        }
        &.back {
            background-image: url(${require('./images/back.png')});
        }
    `,
    btnbox: styled.div`
        text-align: center;
        padding: 1em;

        button {
            width: 100%;
        }
    `,
    btn: styled.button`
        position: relative;
        padding: 1em;
        font-size: 1.2em;
        border: none;
        background: ${colors.black};
        color: ${colors.white};
    `,
    close: styled.span`
        position: absolute;
        right: 5px;
        top: 5px;
        width: 1em;
        height: 1em;
        &:after {
            content: '✖';
        }
    `
}

export default styles;