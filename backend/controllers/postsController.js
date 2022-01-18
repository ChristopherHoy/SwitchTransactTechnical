var Post = require('../models/post');

class PostsController {
    constructor() {
        super();
    }


    // Fetch all posts
    list(req , response) {
        Post.findAll().then((post) => {
            response.json(post)
        }).catch((err) => {
            response.json(err);
        });
    }

    // Create a new post
    create(req, response) {
        Post.create({
            title: req.body.title,
            description: req.body.description,
            date: req.body.date,
            status: req.body.status
        }).then((res) => {
            response.json({message: "Success"});
        }).catch((err) => {
            response.json(err);
        });
    }

    // Update the post with the matching id
    update(req, response) {
        Post.update({
            title: req.body.title,
            description: req.body.description,
            date: req.body.date,
            status: req.body.status
        }, {
            where: {
                id: req.body.id
            }
        }).then((res) => {
            response.json({message: "Success"});
        }).catch((err) => {
            response.json(err);
        });
    }

    // delete the post with the matching id
    remove(req, response) {
        Post.destroy({
            where: {
                id: req.body.id
            }
        }).then((res) => {
            response.json({message: "Success"});
        }).catch((err) => {
            response.json(err);
        });
    }
}

module.exports = PostsController;
