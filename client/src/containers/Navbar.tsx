import { connect } from 'react-redux';
import { toggleFilters } from '../store/actions';
import Navbar from '../components/Navbar';
import { history } from '../store/store';
import { mergeProps } from './helpers';

const mapStateToProps = (state: any) => {
    return {
        level: state.settings.item ? 1 : 0,
        filters: state.settings.filters
    };
}

const mapDispatchToProps = (dispatch: Function) => {
    return {
        onNavigateBack: () => {
            history.goBack();
        },
        onToggleFilters: () => {
            dispatch(toggleFilters())
        }
    };
}

const container = connect(mapStateToProps, mapDispatchToProps, mergeProps)(Navbar);

export default container;
