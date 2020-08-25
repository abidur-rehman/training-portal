const INITIAL_STATE = {
  sections: [
    {
      title: 'javascript',
      imageUrl: '../images/js.jpeg',
      id: 1,
      linkUrl: 'section/java'
    },
    {
      title: 'java',
      imageUrl: '../images/java.png',
      id: 2,
      linkUrl: 'section/java'
    },
    {
      title: 'docker',
      imageUrl: '../images/docker.png',
      id: 3,
      linkUrl: 'section/java'
    }
  ]
};

const directoryReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default directoryReducer;
