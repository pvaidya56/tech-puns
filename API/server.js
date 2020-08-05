const express = require("express"); //use express in order to create routes
const helmet = require("helmet"); // secures HTTP headers
const cors = require("cors"); // provides a middleware that enables CORS 

//init an express server
const server = express()

server.use(helmet());
// built in middleware in express that parses reqs to JSON
server.use(express.json());
server.use(cors());

//ROUTERS
const userRouter = require('../routers/userRouter')
const authRouter = require('../routers/authRouter')
const punsRouter = require('../routers/punsRouter')
const likedRouter = require('../routers/likedRouter')


server.get("/", (req, res) => {
    res.status(200).json({ api: "up" });
  });

server.use('/api/users', userRouter)
server.use('/api/auth', authRouter)
server.use('/api/jokes', punsRouter)
server.use('/api/liked', likedRouter)

  
module.exports = server;