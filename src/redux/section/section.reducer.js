import SectionActionTypes from './section.types';

const initialState = {
  loading: true
}

const normalize = (sections) => {
  const result = sections.reduce(function(result, item) {
    let key = item.routeName;
    result[key] = item;
    return result;
  }, {});
  return result;
}

const sectionReducer = (state = initialState, action) => {
  switch (action.type) {
    case SectionActionTypes.FETCH_SECTION_DATA_SUCCESS:
      return {
        ...state,
        loading: false,
        collections: normalize(action.payload)
      };
    default:
      return state;
  }
};

export default sectionReducer;
