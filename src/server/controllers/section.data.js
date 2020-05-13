const SECTION_DATA = {
  hats: {
    "_id": ObjectID(),
    title: 'Java',
    routeName: 'java',
    items: [
      {
        "_id": ObjectID(),
        name: 'Java Basics',
        imageUrl: '../images/java1.jpeg',
        videoUrl: 'videos/video1.mp4',
        price: 25
      },
      {
        "_id": ObjectID(),
        name: 'Beginning Programming with Java',
        imageUrl: '../images/java2.jpeg',
        videoUrl: 'videos/video2.mp4',
        price: 18
      },
      {
        "_id": ObjectID(),
        name: 'The Elements of Java Styles',
        imageUrl: '../images/java3.png',
        videoUrl: 'videos/video3.mp4',
        price: 35
      },
      {
        "_id": ObjectID(),
        name: 'Java Programming',
        imageUrl: '../images/java4.jpg',
        videoUrl: 'videos/video1.mp4',
        price: 25
      },
      {
        "_id": ObjectID(),
        name: 'Java Programming 5th Edition',
        imageUrl: '../images/java5.jpeg',
        videoUrl: 'videos/video2.mp4',
        price: 18
      },
      {
        "_id": ObjectID(),
        name: 'Learn Java12 Programming',
        imageUrl: '../images/java6.jpg',
        videoUrl: 'videos/video3.mp4',
        price: 14
      }
    ]
  },
  javascript: {
    "_id": ObjectID(),
    title: 'Java Script',
    routeName: 'javascript',
    items: []
  }
};

export default SECTION_DATA;
