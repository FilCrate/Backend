const express = require('express');
const models = require('../models');


const ReviewsController = {
    registerRouter() {
        const router = express.Router();

        router.get('/', this.index);
        router.post('/', this.create);
        router.put('/:id', this.update);
        router.delete('/:id', this.delete);

        return router;
    },
    index(req, res) {
        res.json({
        msg: "Successful GET to '/reviews' route"
        });
    },
    create(req, res) {
        res.json({
        msg: "Successful POST to '/reviews' route"
        });
    },
    update(req, res) {
        res.json({
        msg: "Successful PUT to '/reviews' route",
        id: req.params.id
        });
    },
    delete(req, res) {
        res.json({
        msg: "Successful DELETE to '/reviews' route",
        id: req.params.id
        });
    },
};


module.exports = ReviewsController.registerRouter();
