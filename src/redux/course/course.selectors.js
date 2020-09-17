import { createSelector } from 'reselect';

const selectCourse = state => state.course;

export const selectData = createSelector(
  [selectCourse],
  course => course.data
);

export const selectInProgressData = createSelector(
  [selectCourse],
  course => course.dataInProgress
);

export const selectComplData = createSelector(
  [selectCourse],
  course => course.dataCompl
);

export const selectCollectionsForPreview = createSelector(
  [selectData],
  collections => collections ? Object.keys(collections).map(key => collections[key]) : []
);

export const selectCollection = collectionUrlParam => {
  console.log(`selectCollection ${collectionUrlParam}`);
  createSelector(
    [selectData],
    collections => collections ? collections[collectionUrlParam] : null
  );
}

export const loadingSelector = createSelector(
  [selectCourse],
  course => course.loading
);

export const selectIsDataLoaded = createSelector(
  [selectCourse],
  course => !!course.data
);