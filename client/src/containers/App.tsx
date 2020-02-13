import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'
import { ItemType } from '../types';
import { checkForUpdates, gotItems, sortItems, getLocation, selectItem } from '../store/actions';
import { Data } from '../store/services/';
import App from '../components/App';
import { mergeProps } from './helpers';


const mapStateToProps = (state: any) => {
    return {
        items: state.items,
        settings: state.settings
    };
}

const mapDispatchToProps = (dispatch: Function) => {
    return {
        onGetLocation: () => dispatch(getLocation()),
        onCheckForUpdates: () => dispatch(checkForUpdates()),
        onGetItems: () => {
            Data.list().subscribe((items) => {
                dispatch(gotItems(items));
            });
        },
        onSortItems: (position: Position) => dispatch(sortItems(position))
    };
}

const container = withRouter(connect(mapStateToProps, mapDispatchToProps, mergeProps)(App) as any);

export default container;
