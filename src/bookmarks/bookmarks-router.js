const express = require("express");
const logger = require("../logger");

const bookmarkRouter = express.Router();
const bodyParser = express.json();

bookmarkRouter
  .route("/bookmarks")
  .get((req, res) => {
    //Write a route handler for the endpoint GET /bookmarks that
    //returns a list of bookmarks
  })
  .post(bodyParser, (req, res) => {
    //Write a route handler for POST /bookmarks that accepts a 
    //JSON object representing a bookmark and adds it to the list 
    //of bookmarks after validation
  });

bookmarkRouter.route("/bookmarks/:id").get((req, res) => {
    //Write a route handler for the endpoint GET /bookmarks/:id 
    //that returns a single bookmark with the given ID, return 
    //404 Not Found if the ID is not valid
}).delete((req, res) => {
    //Write a route handler for the endpoint DELETE /bookmarks/:id
    //that deletes the bookmark with the given ID
})

module.exports = bookmarkRouter