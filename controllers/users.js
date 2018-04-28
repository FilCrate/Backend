const express = require('express');
const models = require('../models');


const UsersController = {
    registerRouter() {
        const router = express.Router();

        router.get('/', this.index);
        router.get('/:username', this.getUser);
        router.post('/', this.create);
        router.put('/:id', this.update);
        router.delete('/:id', this.delete);

        return router;
    },
    index(req, res) {
        return models.Users.findAll();
    },
    getUser(req, res) {
        let username = (req.params.username);
        models.Users.findAll({
            where: {
                username: {
                    $or: [
                        {$like: '%' (username) + '%'},
                        {$like: (username) + '%'},
                        {$like: '%' + (title)}
                    ]
                }
            }
        }).then(result => {
            res.json(result);
        }).catch(error => {
            console.error("Error!");
            console.error(error);
            res.status(500).end();
        });
    },
    create(req, res) {
        let { user } = req.query;
        let { email } = req.query;
        models.Users.findAll({
            where: {
                $or: [
                    {
                        username: {$like: (user)}
                    },
                    {
                        email: {$like: (email)}
                    }
                ]
            }
        }).then(result => {
            res.json(result);
        }).catch(error => {
            console.error("Error!");
            console.error(error);
            res.status(500).end();
        })
    },
    update(req, res) {
        res.json({
        msg: "Successful PUT to '/users' route",
        id: req.params.id
        });
    },
    delete(req, res) {
        let id = parseInt(req.params.id);
        return models.Users.destroy({
            where: { id }
        })
    },
};


module.exports = UsersController.registerRouter();
