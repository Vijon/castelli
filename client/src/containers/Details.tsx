import { connect } from 'react-redux';
import store from '../store/store';
import { selectItem, setBackground } from '../store/actions';
import Details from '../components/Details';
import { mergeProps } from './helpers';

const mapStateToProps = (state: any, ownProps) => {
    const id = ownProps.match.params.id;
    return {
        item: state.items ? state.items.get(id) : null, //state.settings.item,
        position: state.settings.position
    };
}

const mapDispatchToProps = (dispatch: Function) => {
    return {
        onInit: (item) => {
            dispatch(selectItem(item));
            dispatch(setBackground((item.info && item.info.images && item.info.images.length ? item.info.images[0].src : null )));
        },
    };
}

const container = connect(mapStateToProps, mapDispatchToProps, mergeProps)(Details);

export default container;
