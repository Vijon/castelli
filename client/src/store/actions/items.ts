import { ItemType } from '../../types';

export const Actions = {
  POPULATED_ITEMS: 'POPULATED_ITEMS',
  SORTED_ITEMS: 'SORTED_ITEMS',
};

export function gotItems(items) {
  return (dispatch: Function) => dispatch(populateItems(items));
}

export function sortItems(position: Position) {
  return (dispatch: Function) => dispatch(sortItemsByGeo(position));
}

export function populateItems(items: Map<string, ItemType>) {
  return {
    type: Actions.POPULATED_ITEMS,
    items
  };
}

export function sortItemsByGeo(position: Position) {
  return {
    type: Actions.SORTED_ITEMS,
    position
  };
}