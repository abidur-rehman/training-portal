const express = require('express');
const path = require('path');
const server = express();
server.use(express.static(path.join(__dirname, '../../build')));
server.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname, '../../build', 'index.html'));
});

const PORT = process.env.PORT || 3000
const ENV = process.env.NODE_ENV || 'development'
server.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT} in ${ENV}`)
})