const express = require('express');
const models = require('../models');


const ProductsController = {
    registerRouter() {
        const router = express.Router();

        router.get('/', this.index);
        router.get('/:id', this.indexId);
        router.get('/category/:category', this.category);
        router.get('/search/:query', this.search);
        router.post('/', this.create);
        router.put('/:id', this.update);
        router.delete('/:id', this.delete);

        return router;
    },
    // Display all products
    index(req, res) {
        return models.Products.findAll()
        .then(result => {
            res.json(result);
        });
    },
    // Display specific product by id
    indexId(req, res) {
        let id = parseInt(req.params.id)
        return models.Products.findById(id)
        .then(result => {
            res.json(result);
        });
    },
    // Display products by category
    category(req, res) {
        let category = req.params.category;
        console.log(category);
        return models.Products.findAll({
            where: {
                category: {
                    $or: [
                        {$like: '%' + (category) + '%'},
                        {$like: (category) + '%'},
                        {$like: '%' + (category)}
                    ]
                }
            }
        }).then(result => {
            res.json(result);
        }).catch(error => {
            console.error("Error!");
            console.error(error);
            res.status(500).end()
        });
    },
    // Search product by string or category
    // Example: localhost:8000/products/search/q?title=Elephant&category=Rice
    search(req, res) {
        let { title, category } = req.query;
        if (category) {
            return models.Products.findAll({
                where: {
                    $and: [
                        {
                            name: {
                                $or: [
                                    {$like: '%' + (title) + '%'},
                                    {$like: (title) + '%'},
                                    {$like: '%' + (title)}
                                ]
                            },
                        },
                        {
                            category: {
                                $like: category,
                            }
                        }
                    ]
                }
            }).then(result => {
                res.json(result);
            }).catch(error => {
                console.error("Error!");
                console.error(error);
                res.status(500).end();
            });
        } else {
            return models.Products.findAll({
                where: {
                    name: {
                        $or: [
                            {$like: '%' + (title) + '%'},
                            {$like: (title) + '%'},
                            {$like: '%' + (title)}
                        ]
                    },
                }
            }).then(result => {
                res.json(result);
            }).catch(error => {
                console.error("Error!");
                console.error(error);
                res.status(500).end();
            });
        }
        
    },
    // Create product entry
    create(req, res) {
        let {name, image, price, stock, category, weight, sku} = req.body;
        let rating = 0;
        price = price ? parseInt(price) : price;
        return models.Products.create({
            name, image, price, rating, stock, category, weight, sku
        })
        .then(() => {
            res.json({
                msg: "Entry created"
            })
        })
        .catch(error => {
            console.log("Error!");
            console.error(error);
            res.status(500).end();
        })
    },
    // Update product entry
    update(req, res) {
        let id = parseInt(req.params.id);
        let {name, image, price, stock, category, weight, sku} = req.body;
        return models.Products.update({
            name, image, price, stock, category, weight, sku
        }, {
            where: {id}
        })
        .then(() => {
            res.json({
                msg: "Entry updated",
                id: req.params.id
            })
        })
        .catch(error => {
            console.log("Error!");
            console.error(error);
            res.status(500).end();
        })
    },
    // Delete product entry
    delete(req, res) {
        let id = parseInt(req.params.id);
        return models.Products.destroy({
            where: {id}
        })
        .then(() => {
            res.json({
                msg: "Entry deleted",
                id: req.params.id
            });
            res.status(204).end()
        })
        .catch(error => {
            console.log("Error!");
            console.error(error);
            res.status(500).end();
        });
    },
};


module.exports = ProductsController.registerRouter();
