import { Data, Geo } from '../services/';
import { ItemType } from '../../types';

export const Actions = {
  SET_LOCATION: 'SET_LOCATION',
  SET_ITEM: 'SET_ITEM',
  UNSET_ITEM: 'UNSET_ITEM',
  SET_BG: 'SET_BG',
  TOGGLE_FILTERS: 'TOGGLE_FILTERS',
  SET_PAGE: 'SET_PAGE',
  UPDATE_AVAILABLE: 'UPDATE_AVAILABLE',
  UPDATE_INSTALLING: 'UPDATE_INSTALLING',
  UPDATE_INSTALLED: 'UPDATE_INSTALLED',
  UPDATE_DISMISS: 'UPDATE_DISMISS',
};

export function getLocation() {
    return (dispatch: Function) => {
      const locate = Geo.geoLocate();
      if (locate) {
        locate.subscribe( (position: any) => {
          dispatch( setLocation(position) );
        });
      }
    }
}

export function checkForUpdates() {
  return (dispatch: Function) => {
    Data.check().then(([ver, current]) => {
      dispatch(updateIsAvailable(ver, current));
    }).catch((ver: string) => {
      // silence is golden
    });
  }
}

export function getUpdate() {
  return (dispatch: Function) => dispatch(updateIsInstalling());
}
export function gotUpdate() {
  return (dispatch: Function) => dispatch(updateIsInstalled());
}

export function cancelUpdate() {
  return (dispatch: Function) => dispatch(updateIsCancelled());
}

export function setLocation(position: Position) {
  return {
      type: Actions.SET_LOCATION,
      position
  };
}

export function updateIsAvailable( ver: string, current: string ) {
  return {
    type: Actions.UPDATE_AVAILABLE,
    available: ver,
    installed: current
  };
}

export function updateIsInstalling() {
  return {
    type: Actions.UPDATE_INSTALLING
  };
}

export function updateIsInstalled() {
  return {
    type: Actions.UPDATE_INSTALLED
  };
}

export function updateIsCancelled() {
  return {
    type: Actions.UPDATE_DISMISS
  };
}


export function selectItem(item: ItemType) {
  return {
      type: Actions.SET_ITEM,
      item
  };
}

export function unselectItem() {
  return {
      type: Actions.UNSET_ITEM
  };
}

export function setBackground(path: string) {
  return {
    type: Actions.SET_BG,
    path
  };
}

export function toggleFilters() {
  return {
    type: Actions.TOGGLE_FILTERS
  };
}

export function setPage(page: number) {
  return {
    type: Actions.SET_PAGE,
    page: page
  };
}