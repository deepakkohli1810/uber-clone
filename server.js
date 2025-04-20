const http = require('http');
const app = require('./app');
const port = process.env.PORT || 3000;      // Set the port to 3000 or the port specified in the environment variables
const server = http.createServer(app);

server.listen(port ,() =>{
    console.log(`Server is running on port ${port}`);
});

// We installing more packages to make our server more robust and secure. which are dotenv and cors. 