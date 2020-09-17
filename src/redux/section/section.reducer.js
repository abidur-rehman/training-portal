import SectionActionTypes from './section.types';

const initialState = {
  loading: true,
  collections: {
    samples: {
      items: [
        {
          id: "1",
          imageUrl: "../images/ba_framework.svg",
          name: "Business Analysis Core Concept",
          price: 25,
          type: "video",
          videoUrl: "data/videos/ba_core_concept.mp4"
        },
        {
          id: "2",
          imageUrl: "../images/stakeholder_manage.svg",
          name: "Managing Stakeholder",
          price: 18,
          type: "video",
          videoUrl: "data/videos/stakeholders.mp4"
        },
        {
          id: "3",
          imageUrl: "../images/risk_manage.svg",
          name: "Risk Management",
          price: 35,
          type: "pdf",
          location: "data/pdfs/risk_manage.pdf"
        },
        {
          id: "4",
          imageUrl: "../images/quiz.svg",
          name: "Sample Quiz",
          price: 35,
          type: "quiz",
          location: "data/quizes/sample_quiz_1/index.html"
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
