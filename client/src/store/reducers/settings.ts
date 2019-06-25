import { ActionsSettings } from '../actions';

const reducer = function reducer(state: any = {}, action: any) {
    switch (action.type) {
        case ActionsSettings.SET_LOCATION:
            return Object.assign({}, state, {
                position: action.position
            })
            
        case ActionsSettings.UPDATE_AVAILABLE:
            return Object.assign({}, state, {
                update: {
                    available: action.available,
                    installed: action.installed
                }
            })
            
        case ActionsSettings.UPDATE_INSTALLING:
            return Object.assign({}, state, {
                update: {
                    installing: true
                }
            })
            
        case ActionsSettings.UPDATE_INSTALLED:
            return Object.assign({}, state, {
                update: {
                    installing: false,
                    available: null,
                    installed: state.update.available
                }
            })

        case ActionsSettings.UPDATE_DISMISS:
            return Object.assign({}, state, {
                update: {
                    dismiss: true
                }
            })
        
        case ActionsSettings.SET_ITEM:
            return Object.assign({}, state, {
                item: action.item
            })
        case ActionsSettings.SET_BG:
            return Object.assign({}, state, {
                background: action.background,
            })
        case ActionsSettings.UNSET_ITEM:
            return Object.assign({}, state, {
                item: null
            })
        case ActionsSettings.TOGGLE_FILTERS:
            return Object.assign({}, state, {
                filters: !state.filters
            })
        case ActionsSettings.SET_PAGE:
                return Object.assign({}, state, {
                    page: action.page
                })
        default:
            return state
    }
}
export default reducer;