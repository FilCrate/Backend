const express = require('express');
const models = require('../models');


const ReviewsController = {
    registerRouter() {
        const router = express.Router();

        router.get('/:id', this.index);
        router.post('/:id', this.create);
        router.put('/:id', this.update);
        router.delete('/:id', this.delete);

        return router;
    },
    // Get all reviews for specific product
    index(req, res) {
        let id = parseInt(req.params.id);
        models.Reviews.findAll({
            where: {
                product_id: { id }
            }
        }).then(result => {
            res.json(result);
        }).catch(error => {
            console.error("Error!");
            console.error(error);
            res.status(500).end();
        });
    },
    // Create a review for a product
    create(req, res) {
        let { review } = req.body;
        res.json({
            msg: "Successful POST to '/reviews' route",
            id: req.params.id
        })
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
