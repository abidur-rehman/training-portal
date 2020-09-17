const express = require('express');
const path = require('path');
const fs = require('fs');
const bodyParser = require('body-parser');
const envConfig = require('./config/config');

const usersRoutes = require('./routes/users-routes');
const sectionRoutes = require('./routes/section-routes');
const quizRoutes = require('./routes/quiz-routes');
const HttpError = require('./models/http-error');

envConfig();
const server = express();
server.use(bodyParser.json());
server.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept, Authorization'
  );
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PATCH, DELETE');

  next();
});

// server.use('/api/users', usersRoutes);
// server.use('/api/sectiondata', sectionRoutes);
// server.use('/api/quizdata', quizRoutes);

server.use(express.static(path.join(__dirname, '../../build')));

server.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname, '../../build', 'index.html'));
});

server.use((req, res, next) => {
  const error = new HttpError('Could not find this route.', 404);
  throw error;
});

server.use((error, req, res, next) => {
  if (req.file) {
    fs.unlink(req.file.path, err => {
      console.log(err);
    });
  }
  if (res.headerSent) {
    return next(error);
  }
  res.status(error.code || 500);
  res.json({ message: error.message || 'An unknown error occurred!' });
});

const PORT = global.gConfig.PORT || 5000
const HOST = global.gConfig.HOST || '127.0.0.1'
const ENV = global.gConfig.ENV || 'development'

server.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT} in ${ENV}`);
});

// mongoose.connect(`mongodb://user1:example@k8s-master:27017/admin`) //prod
// mongoose.connect(`mongodb://user1:example@localhost:27017/admin`) //local
// mongoose.connect(`mongodb+srv://user1:example@cluster0-tbqr7.mongodb.net/mydb?retryWrites=true&w=majority`)
//   .then(() => {
//     server.listen(PORT, () => {
//       console.log(`Server listening on http://localhost:${PORT} in ${ENV}`)
//     });
//   })
//   .catch(err => {
//     console.log(err);
//   });