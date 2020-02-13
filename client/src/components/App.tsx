import * as React from 'react';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router'

import { ItemType } from '../types';
import Splash from '../containers/Splash';
import NavbarContainer from '../containers/Navbar';
import UpdaterContainer from '../containers/Updater';
import Background from '../containers/Background';
import ListContainer from '../containers/List';
import DetailsContainer from '../containers/Details';
import ScrollToTop from '../containers/utils/ScrollToTop';

enum NavigationRouteId {
    ListContainer,
    DetailsContainer
}

interface Props {
    items?: Map<String, ItemType>,
    settings?: any,
    onCheckForUpdates?: Function,
    onGetLocation?: Function
    onGetItems?: Function,
    onSortItems?: Function,
}

// I know it's in a component, it would stay in a container... :(
const ConnectedSwitch = connect((state: any) => ({
	location: state.location
}), {}, (stateProps: Object, dispatchProps: Object, ownProps: Object) => {
    return Object.assign({}, ownProps, stateProps, dispatchProps);
})(Switch);


class App extends React.Component<Props, null> {

    componentWillMount() {
        if (this.props.onCheckForUpdates) {
            this.props.onCheckForUpdates();
        }
        if (this.props.onGetLocation) {
            this.props.onGetLocation();
        }
        if (this.props.onGetItems) {
            this.props.onGetItems();
        }
    }
    
    componentWillReceiveProps(nextProps: Props) {
        const $chk = [
            () => {
                // check if must sort by distance
                if (!nextProps.settings.position || !nextProps.settings.position.coords) return;
                if (!nextProps.items || !nextProps.items.size) return;

                if (
                    (!this.props.settings.position || (this.props.settings.position.coords != nextProps.settings.position.coords)) ||
                    (this.props.items.size != nextProps.items.size)
                ) {
                    this.props.onSortItems(nextProps.settings.position);
                }
            },
            () => {
                // if update advance, then force items to be loaded on db
                /*if (nextProps.settings.version && this.props.settings.version && (nextProps.settings.version.available != this.props.settings.version.available)) {
                    this.props.onGetItems(true);
                }*/
            }
        ]
        $chk.forEach( (fn) => fn() );
    }

    render() {
        return (
            <div>
                <NavbarContainer />
                <UpdaterContainer />
                <ScrollToTop />
                <ConnectedSwitch>
                    <Route exact path="/" component={ListContainer} />
                    <Route path="/details/:id" component={DetailsContainer} />
                </ConnectedSwitch>
                <Splash />
                <Background />
            </div>
        );
    }
}

export default App;
