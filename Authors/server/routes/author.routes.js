const express = require('express');
const router = express.Router();

const authorController = require('../controller/author.controller');

// CRUD Routes
router.get("/api/authors", authorController.getAllAuthors);

router.post("/api/authors", authorController.createAuthor);

router.patch("/api/authors/:id", authorController.updateAuthor);

router.delete("/api/authors/:id", authorController.deleteAuthor);

module.exports = router;