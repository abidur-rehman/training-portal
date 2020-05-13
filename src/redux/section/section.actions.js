import SectionActionTypes from './section.types';

export const fetchSectionData = () => ({
  type: SectionActionTypes.FETCH_SECTION_DATA
});

export const fetchSectionDataError = error => ({
  type: SectionActionTypes.FETCH_SECTION_DATA_ERROR,
  payload: error
});