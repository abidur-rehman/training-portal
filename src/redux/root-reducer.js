import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import userReducer from './user/user.reducer';
import directoryReducer from './directory/directory.reducer';
import sectionReducer from './section/section.reducer';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['user', 'directory', 'section']
};

const rootReducer = combineReducers({
  user: userReducer,
  directory: directoryReducer,
  section: sectionReducer
});

export default persistReducer(persistConfig, rootReducer);