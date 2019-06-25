import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Root from './Root';
import registerServiceWorker from './registerServiceWorker';
import store, { history } from './store/store';

ReactDOM.render(
  <Root store={store} history={history} />,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();

