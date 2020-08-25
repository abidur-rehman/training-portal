import { ProfileActionTypes } from './profile.types';

const INITIAL_STATE = {
  currentProfile: null,
  loginError: null,
  error: { text: null },
  message: { text: null }
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ProfileActionTypes.UPDATE_PROFILE_SUCCESS:
      return {
        ...state,
        message: {
          ...state.message,
          text: action.payload.message
        }
      }
    case ProfileActionTypes.FORM_ERROR:
      return {
        ...state,
        error: {
          ...state.error,
          text: action.payload
        }
      }
    case ProfileActionTypes.UPDATE_PROFILE_FAILURE:
      return {
        ...state,
        error: {
          ...state.error,
          text: action.payload
        }
      };
    case ProfileActionTypes.UPDATE_PASSWORD_FAILURE:
      return {
        ...state,
        error: {
          ...state.error,
          text: action.payload.message
        }
      };
    case ProfileActionTypes.RESET_MESSAGE:
      return {
        ...state,
        message: {
          ...state.message,
          text: null
        },
        error: {
          ...state.error,
          text: null
        }
      };
    default:
      return state;
  }
};

export default userReducer;
