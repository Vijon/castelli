import * as React from 'react';
import { Provider } from 'react-redux';
import { ConnectedRouter, routerReducer, routerMiddleware, push } from 'react-router-redux';

import MobileDetect from 'mobile-detect';

import App from './containers/App';
import QRCode from './components/QRCode';

const md = new MobileDetect(window.navigator.userAgent);
var Root;
if (!md.mobile() && (window.location.hash != '#demo')) {
  Root = () => (
    <QRCode />
  )
} else {
  Root = ({ store, history }) => (
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <App />
      </ConnectedRouter>
    </Provider>
  )
}
export default Root
