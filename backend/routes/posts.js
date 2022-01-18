var express = require('express');
var router = express.Router();

var PostsController = require('../controllers/postsController')

// List all posts
router.get('/list', function(req, res, next) {
    new PostsController().list(req, res);
});

// Create a new post
router.post('/create', function(req, res, next) {
    new PostsController().create(req, res);
});

// Update a post, must give id of post to update
router.post('/update', function(req, res, next) {
    new PostsController().update(req, res);
});

// deletes a post, must give id of post to delete
router.post('/delete', function(req, res, next) {
    new PostsController().remove(req, res);
});

module.exports = router;
