import { createSelector } from 'reselect';

const selectQuiz = state => state.quiz;

export const selectCollections = createSelector(
  [selectQuiz],
  quiz => quiz.collections
);

export const selectCollectionsForPreview = createSelector(
  [selectCollections],
  collections => collections ? Object.keys(collections).map(key => collections[key]) : []
);

export const selectCollection = collectionUrlParam =>
  createSelector(
    [selectCollections],
    collections => collections ? collections[collectionUrlParam] : null
  );

export const loadingSelector = createSelector(
  [selectQuiz],
  quiz => quiz.loading
);

export const selectIsCollectionsLoaded = createSelector(
  [selectQuiz],
  quiz => !!quiz.collections
);