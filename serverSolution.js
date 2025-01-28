const http = require('http');

const requestListener = async (request, response) => {
  response.setHeader('Content-Type', 'application/json');
  try {
    // Simulate an asynchronous operation that might reject
    const result = await someAsyncOperation();
    response.writeHead(200);
    response.end(JSON.stringify({ message: 'Hello from Node.js', result }));
  } catch (error) {
    console.error('Error handling request:', error);
    response.writeHead(500);
    response.end(JSON.stringify({ error: 'Internal Server Error' }));
  }
};

const server = http.createServer(requestListener);

server.listen(8080, () => {
  console.log('Server is running on port 8080');
});

//Simulate an asynchronous operation
function someAsyncOperation() {
  return new Promise((resolve, reject) => {
    // Simulate a condition that might lead to rejection
    const success = Math.random() < 0.5;
    setTimeout(() => {
      if (success) {
        resolve({ message: 'Success!' });
      } else {
        reject(new Error('Simulated error'));
      }
    }, 100);
  });
} 