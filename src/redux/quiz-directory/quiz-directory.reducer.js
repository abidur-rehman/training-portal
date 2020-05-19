const INITIAL_STATE = {
  quizes: [
    {
      title: 'scrum quizes',
      imageUrl: '../images/scrum.jpg',
      size: 'large',
      id: 1,
      linkUrl: 'quiz/scrum'
    },
    {
      title: 'mentoring quizes',
      imageUrl: '../images/mentoring.png',
      size: 'large',
      id: 2,
      linkUrl: 'quiz/mentor'
    }
  ]
};

const quizDirectoryReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default quizDirectoryReducer;
