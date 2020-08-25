import { MenuActionTypes } from './menu.types';


export const setMenuOpen = open => ({
  type: MenuActionTypes.TOGGLE_MENU,
  payload: open
});
