import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import userReducer from './user/user.reducer';
import directoryReducer from './directory/directory.reducer';
import sectionReducer from './section/section.reducer';
import quizDirectoryReducer from './quiz-directory/quiz-directory.reducer';
import quizReducer from './quiz/quiz.reducer';
import menuReducer from './menu/menu.reducer';
import profileReducer from './profile/profile.reducer';
import startReducer from './start/start.reducer';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['user', 'directory', 'section', 'profile']
};

const rootReducer = combineReducers({
  user: userReducer,
  directory: directoryReducer,
  quizDirectory: quizDirectoryReducer,
  section: sectionReducer,
  quiz: quizReducer,
  menu: menuReducer,
  profile: profileReducer,
  start: startReducer
});

export default persistReducer(persistConfig, rootReducer);