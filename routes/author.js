const express = require("express");
const router = express.Router();
const Author = require("../models/author");

// ALL AUTHORS ROUTE
router.get("/", (req, res) => {
    res.render("authors/index");
});

// NEW AUTHOR ROUTE
router.get("/new", (req, res) => {
    res.render("authors/new", { author: new Author() });
});

// CREATE AUTHOR ROUTE
router.post("/", (req, res) => {
    res.send("create");
});

module.exports = router;