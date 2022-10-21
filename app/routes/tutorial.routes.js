module.exports = (app) => {
  const tutorials = require("../controllers/tutorial.controller.js");
  var router = require("express").Router();
  // Create a new Tutorial
  router.post("/createTutorial", tutorials.create);
  // Retrieve all Tutorials
  router.get("/fetchAllTutorials", tutorials.findAll);
  // Retrieve all published Tutorials
  router.get("/fetchAllpublishedTutorials", tutorials.findAllPublished);
  // Retrieve a single Tutorial with id
  router.get("/fetchTutorial/:id", tutorials.findOne);
  // Update a Tutorial with id
  router.put("/updateTutorial/:id", tutorials.update);
  // Delete a Tutorial with id
  router.delete("/deleteTutorial/:id", tutorials.delete);
  // Delete all Tutorials
  router.delete("/deleteAllTutorials", tutorials.deleteAll);
  app.use("/api/tutorials", router);
};
