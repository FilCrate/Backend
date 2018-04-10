const express = require('express');
const models = require('../models');


const ProductsController = {
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
        msg: "Successful GET to '/products' route"
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
