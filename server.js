require('dotenv').config()
const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3001;

const app = express();
const server = require('http').Server(app);
const io = require('socket.io') (server);
module.exports = io;
const routes = require('./routes/index.js')
require('./database');
require('./socket');

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Send every request to the React app
// app.get("*", function(req, res) {
//   res.sendFile(path.join(__dirname, "./client/build/index.html"));
// });

// API and view routes
app.use(routes);

server.listen(PORT, function() {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});