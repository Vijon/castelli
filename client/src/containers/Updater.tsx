import { connect } from 'react-redux';
import Updater from '../components/Updater';
import { history } from '../store/store';
import { sortItems, gotItems, getUpdate, gotUpdate, cancelUpdate } from '../store/actions';
import { Data, Geo } from '../store/services/';
import { mergeProps } from './helpers';

const mapStateToProps = (state: any) => {
    return {
        update: state.settings.update
    };
}

const mapDispatchToProps = (dispatch: Function) => {
    return {
        onConfirm: () => {
            dispatch(getUpdate());
            Data.list(true).subscribe((items) => {
                dispatch(gotItems(items));
                dispatch(gotUpdate());
                Geo.geoLocate().subscribe((position: any) => {
                    dispatch(sortItems(position));
                });
            });
        },
        onDismiss: () => dispatch(cancelUpdate()),
    };
}

const container = connect(mapStateToProps, mapDispatchToProps, mergeProps)(Updater);

export default container;
