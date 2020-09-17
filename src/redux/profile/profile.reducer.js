import { ProfileActionTypes } from './profile.types';

const INITIAL_STATE = {
  loginError: null,
  error: { text: null },
  message: { text: null },
  isLoading: false,
};

const profileReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ProfileActionTypes.UPDATE_PROFILE_SUCCESS:
      return {
        ...state,
        message: {
          ...state.message,
          text: action.payload
        },
        isLoading: false
      }
    case ProfileActionTypes.UPDATE_PASSWORD_SUCCESS:
      return {
        ...state,
        message: {
          ...state.message,
          text: action.payload
        },
        isLoading: false
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
        },
        isLoading: false
      };
    case ProfileActionTypes.UPDATE_PASSWORD_FAILURE:
      return {
        ...state,
        error: {
          ...state.error,
          text: action.payload
        },
        isLoading: false
      };
    case ProfileActionTypes.UPDATE_LOADER:
      return {
        ...state,
        isLoading: true
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

export default profileReducer;
