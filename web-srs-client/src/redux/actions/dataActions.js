import {
  SELECT_FLUSHCARD,
  DESELECT_FLUSHCARD,
  SELECT_MODULE,
  DESELECT_MODULE
} from '../types';

// Select a flushcard
export const selectCard = (cardId) => (dispatch) => {

  dispatch({
    type: SELECT_FLUSHCARD,
    cardId: cardId
});
};

// Deselect a flushcard
export const deselectCard = (cardId) => (dispatch) => {
    dispatch({
      type: DESELECT_FLUSHCARD,
      cardId: cardId
  });
};

export const selectModule = (module) => (dispatch) => {
  
  dispatch({
    type: SELECT_MODULE,
    module: module
});
};

// Deselect a MODULE
export const deselectModule = (module) => (dispatch) => {
    dispatch({
      type: DESELECT_MODULE,
      module: module
  });
};
