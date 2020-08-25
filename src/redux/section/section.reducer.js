import SectionActionTypes from './section.types';

const initialState = {
  loading: true,
  collections: {
    java: {
      items: [
        {
          id: "1",
          imageUrl: "../images/java1.jpeg",
          name: "Java Basics",
          price: 25,
          type: "video",
          videoUrl: "videos/video1.mp4"
        },
        {
          id: "2",
          imageUrl: "../images/java2.jpeg",
          name: "Beginning Programming with Java",
          price: 18,
          type: "video",
          videoUrl: "videos/video2.mp4"
        },
        {
          id: "3",
          imageUrl: "../images/java3.png",
          name: "The Elements of Java Styles",
          price: 35,
          type: "video",
          videoUrl: "videos/video3.mp4"
        }
      ]
    }
  }
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
