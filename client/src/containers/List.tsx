import { connect } from 'react-redux';
import { ItemType } from '../types';
import { unselectItem, setBackground, setPage } from '../store/actions';
import List from '../components/List';
import { mergeProps, pushPath } from './helpers';

const mapStateToProps = (state: any) => {
    return {
        items: state.items || new Map(),
        position: state.settings ? state.settings.position : null,
        page: state.settings ? state.settings.page : null
    };
}

const mapDispatchToProps = (dispatch: Function) => {
    return {
        onInit: (item) => {
            dispatch(unselectItem());
            dispatch(setBackground(null));
        },
        onSetPage: (page) => {
            dispatch(setPage(page));
        }
    };
}

const container = connect(mapStateToProps, mapDispatchToProps, mergeProps)(List);

export default container;
