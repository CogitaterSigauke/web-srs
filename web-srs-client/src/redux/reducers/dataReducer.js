import {
    SELECT_FLUSHCARD,
    DESELECT_FLUSHCARD,
    SELECT_MODULE,
    DESELECT_MODULE
} from '../types';

const initialState = {
    selectedCards: [],
    selectedModules: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case SELECT_FLUSHCARD:
        state.selectedCards.push(action.cardId);

        return {
            ...state,

        }
        
    case DESELECT_FLUSHCARD:
        // deselect cards already in the selected card lists
        if( state.selectedCards.includes( action.cardId ) ){
            state.selectedCards.splice(state.selectedCards.indexOf( action.cardId ), 1);
        }
        return {
            ...state
        }
    case SELECT_MODULE:
        state.selectedModules.push(action.module);
        console.log("SELECT_MODULE_", action.module);
        return {
            ...state,

        }
    case DESELECT_MODULE:
        // deselect cards already in the selected card lists
        if( state.selectedModules.includes( action.module ) ){
            state.selectedModules.splice(state.selectedModules.indexOf( action.module ), 1);
            console.log("DESELECT_MODULE_", action.module);

        }
        console.log(state.selectedModules);
        return {
            ...state
        }

    default:
        return state;
  }
}
