import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import SettingsReducer from './settings';
import ItemsReducer from './items';

const RootReducer = combineReducers({
  settings: SettingsReducer,
  items: ItemsReducer,
  router: routerReducer
});

export default RootReducer;
