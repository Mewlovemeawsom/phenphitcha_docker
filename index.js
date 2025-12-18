const http = require('http');
const server = http.createServer((req, res) => {
  res.end('Hello! This is phenphitcha48 app working via CI/CD');
});
server.listen(3000);
