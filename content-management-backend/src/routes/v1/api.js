const express = require("express");
const router = new express.Router();
const articlesController = require("../../controller/articlesController");
const authMiddleware = require("../../middleware/authMiddleware");
const loggerMiddleware = require("../../middleware/loggerMiddleware");

// RESTful api
// REST architectural style:
// Uniform interface
// Statelessness
// Layered system
// Cacheability
// Code on demand

// CRUD operations - create, read, update, delete

router.get(
    "/articles", 
    authMiddleware.auth, 
    loggerMiddleware.logFile, 
    articlesController.index
    );

router.get("/articles/:id", articlesController.show);

router.post("/articles", articlesController.store);

router.put("/articles", articlesController.update);

router.patch("/articles", articlesController.updates);

router.delete("/articles", articlesController.destroy);

module.exports = router;
