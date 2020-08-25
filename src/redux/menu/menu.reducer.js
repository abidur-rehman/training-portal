import { MenuActionTypes } from './menu.types';

const INITIAL_STATE = {
  open: false
};

const menuReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case MenuActionTypes.TOGGLE_MENU:
      return {
        ...state,
        open: action.payload
      };
    default:
      return state;
  }
};

export default menuReducer;
