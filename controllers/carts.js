const express = require('express');
const models = require('../models');


const CartsController = {
    registerRouter() {
        const router = express.Router();

        router.get('/', this.index);
        router.get('/:username', this.indexId);
        router.post('/', this.create);  // Create and update cart entries
        router.delete('/:id', this.delete);

        return router;
    },
    // Display all carts. (testing purposes)
    index(req, res) {
        return models.Carts.findAll()
        .then(result => {
            res.json(result);
        });
    },
    // Display a cart from a user
    indexId(req, res) {
        return models.Carts.findAll({
            where: {
                username: {
                    $like: req.params.username
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
    // Generate a cart entry when user clicks 'add to cart' button
    // If the entry is already in the cart, then update it instead of creating.
    create(req, res) {
        let {username, product_id, quantity} = req.body;
        if (typeof req.body.quantity === 'undefined') {
            quantity = 1
        }
        checkEntry(username, product_id).then(isUnique => {
            if (isUnique === 0) {
                return models.Carts.create({
                    username, product_id, quantity
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
            } else {
                return models.Carts.update({
                    quantity
                }, {
                    where: {
                        $and: [
                            {
                                username: {$like: (username)}
                            },
                            {
                                product_id: product_id
                            }
                        ]
                    }
                })
                .then(() => {
                    res.json({
                        msg: "Entry updated",
                        id: req.params.id
                    })
                })
                .catch(error => {
                    console.error("Error!");
                    console.error(error);
                    res.status(500).end();
                })
            }
        })
    },
    // Delete item in the cart. Get ID of the item from cart database itself
    delete(req, res) {
        let id = parseInt(req.params.id);
        return models.Carts.destroy({
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

function checkEntry(username, product_id) {
    return models.Carts.count({
        where: {
            $and: [
                {
                    username: {$like: (username)}
                },
                {
                    product_id: product_id
                }
            ]
        }
    })
}


module.exports = CartsController.registerRouter();
