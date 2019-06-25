import { connect } from 'react-redux';
import Background from '../components/Background';
import { history } from '../store/store';
import { mergeProps } from './helpers';

const mapStateToProps = (state: any) => {
    return {
    };
}

const mapDispatchToProps = (dispatch: Function) => {
    return {
    };
}

const container = connect(mapStateToProps, mapDispatchToProps, mergeProps)(Background);

export default container;
