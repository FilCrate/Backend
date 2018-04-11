const express = require('express');
const models = require('../models');


const ProductsController = {
    registerRouter() {
        const router = express.Router();

        router.get('/', this.index);
        router.get('/:id', this.indexId)
        router.post('/', this.create);
        router.put('/:id', this.update);
        router.delete('/:id', this.delete);

        return router;
    },
    index(req, res) {
        models.Products.findAll()
        .then(result => {
            res.json(result);
        });
    },
    indexId(req, res) {
        let id = parseInt(req.params.id)
        models.Products.findById(id)
        .then(result => {
            res.json(result);
        });
    },
    create(req, res) {
        res.json({
        msg: "Successful POST to '/products' route"
        });
    },
    update(req, res) {
        res.json({
        msg: "Successful PUT to '/products' route",
        id: req.params.id
        });
    },
    delete(req, res) {
        res.json({
        msg: "Successful DELETE to '/products' route",
        id: req.params.id
        });
    },
};


module.exports = ProductsController.registerRouter();
