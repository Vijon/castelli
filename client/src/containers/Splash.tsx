import { connect } from 'react-redux';
import Splash from '../components/Splash';
import { history } from '../store/store';
import { mergeProps } from './helpers';

const mapStateToProps = (state: any) => {
    return {
        items: state.items
    };
}

const mapDispatchToProps = (dispatch: Function) => {
    return {
    };
}

const container = connect(mapStateToProps, mapDispatchToProps, mergeProps)(Splash);

export default container;
