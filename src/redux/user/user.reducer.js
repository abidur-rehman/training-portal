import { UserActionTypes } from './user.types';

const INITIAL_STATE = {
  currentUser: null,
  loginError: null,
  signUpError: null,
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UserActionTypes.SET_CURRENT_USER:
      return {
        ...state,
        currentUser: action.payload,
        loginError: '',
        signUpError: '',
        updateProfileError: ''
      };
    case UserActionTypes.AUTH_USER_FAILURE:
      return {
        ...state,
        loginError: action.payload
      };
    case UserActionTypes.SIGN_USER_FAILURE:
      return {
        ...state,
        signUpError: action.payload
      };
    case UserActionTypes.USER_UPDATE_PROFILE_SUCCESS:
      return {
        ...state,
        currentUser: {
          ...state.currentUser,
          firstname: action.payload.firstname,
          lastname: action.payload.lastname,
          email: action.payload.email
        },
      }
    case UserActionTypes.USER_RESET_MESSAGE:
      return {
        ...state,
        loginError: ''
      };
    default:
      return state;
  }
};

export default userReducer;
