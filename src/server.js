const http = require('http');
const htmlHandler = require('./htmlResponse');
const mediaHandler = require('./mediaResponse');

const port = process.env.port || process.env.NODE_PORT || 3000;

const onRequest = (request, response) => {
  console.log(request.url);

  switch(request.url){
    case '/':
      htmlHandler.getIndex(response, request);  
      break;
    case '/party.mp4':
      mediaHandler.getParty(request, response);
      break;
    default:
      htmlHandler.getIndex(response, request);
  }
};

http.createServer(onRequest).listen(port, () => {
  console.log(`Listening on 127.0.0.1:${port}`);
});

