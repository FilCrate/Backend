const express = require('express');
const models = require('../models');


const ReviewsController = {
    registerRouter() {
        const router = express.Router();

        router.get('/', this.index);
        router.get('/:id', this.indexId);
        router.post('/:id', this.create);
        router.put('/:id', this.update);
        router.delete('/:id', this.delete);

        return router;
    },
    // Get all reviews from the database (testing)
    index(req, res) {
        return models.Reviews.findAll()
        .then(result => {
            res.json(result);
        })
        .catch(error => {
            console.error("Error!");
            console.error(error);
            res.status(500).end();
        });
    },
    // Get all reviews for specific product
    indexId(req, res) {
        let id = parseInt(req.params.id);
        return models.Reviews.findAll({
            where: {
                product_id: id
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
        let { product_id, user_id, comment, rating } = req.body;
        return models.Reviews.create({
            product_id, user_id, comment, rating
        })
        .then(() => {
            res.json({
                msg: "Review created",
                product_id: req.body.product_id
            })
        })
        .catch(error => {
            console.error("Error!");
            console.error(error);
            res.status(500).end();
        })
    },
    // Update a review for a product. Use `:id` of a product
    update(req, res) {
        let { comment, rating } = req.body;
        return models.Reviews.update({
            comment, rating
        }, {
            where: {
                id: req.params.id
            }
        })
        .then(() => {
            res.json({
                msg: "Review updated",
                id: req.params.id
            })
        })
        .catch(error => {
            console.error("Error!");
            console.error(error);
            res.status(500).end();
        })
    },
    // Delete a review for a product. Use `:id` of a product
    delete(req, res) {
        let id = parseInt(req.params.id);
        return models.Reviews.destroy({
            where: { id }
        }).then(() => {
            res.json({
                msg: "Review deleted",
                id: req.params.id
            })
            res.status(204).end()
        })
        .catch(error => {
            console.error("Error!");
            console.error(error);
            res.status(500).end();
        });
    },
};


module.exports = ReviewsController.registerRouter();
