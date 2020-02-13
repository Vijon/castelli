import * as React from 'react';
import styled from 'styled-components';

import * as $helpers from './helpers';
import { colors, fonts, dimensions, dpi, styles } from './styles/scaffolding';

interface Props {
    image?: string,
}

class Background extends React.Component<Props, null> {
    public static defaultProps: Props = {
        image: './styles/images/bg.png'
    };

    componentWillMount() {
    }

    render() {
        let img = (this.props.image.substr(0,1) == '.') ? require(`${this.props.image}`) : this.props.image;
        const $ = Object.assign( {}, styles, {
            box: styled.div`
                position: fixed;
                z-index: 1;
                top: 0;
                left: 0;
                right: 0;
                bottom: 0;
                background-image: url(${String(img)});
                background-repeat: no-repeat;
                background-size: cover;
            `,
        })
        return (
            <$.box>
            </$.box>
        )
    }
}

export default Background;