const express = require('express');
const models = require('../models');
const { guard } = require('./auth');

const UsersController = {
    registerRouter() {
        const router = express.Router();

        router.get('/', this.index);
        router.get('/:username', this.getUser);
        router.post('/', this.create);
       // router.put('/:username', guard, this.ownerGuard, this.update);
       // router.delete('/:username', guard, this.ownerGuard, this.delete);

        return router;
    },

    // List All users
    index(req, res) {
        return models.Users.findAll()
        .then(users => {
            res.json(users);
        });
    },

    // Get a username
    getUser(req, res) {
        let username = (req.params.username);
        return models.Users.findAll({
            where: {
                username: {
                    $or: [
                        {$like: '%' + (username) + '%'},
                        {$like: (username) + '%'},
                        {$like: '%' + (username)}
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

    // Create a user
    create(req, res) {
        let { username, email, password } = req.body;
        let role = `c`;
        // Check for duplicates
        checkDuplicate(username, email).then(isUnique => {
            if (isUnique === 0) {
                return models.Users.create({
                    username, email, password, role
                }).then(() => {
                    res.json({
                        msg: "User Registered"
                    })
                })
            } else {
                res.json({
                    msg: "User/email already exists!"
                })
                res.status(403).end();
            }
        })
        .catch(error => {
            console.error("Error!");
            console.error(error);
            res.status(500).end();
        })
    },

    // Update a user
    update(req, res) {
        let { username, email, password } = req.body;
        let  oldUser  = req.params.username;
        // Check for duplicates
        // TODO: Need separate check duplicate user and email in update
        checkDuplicate(username, email).then(isUnique => {
            // if statement below is questionable 🤔
            if ((oldUser != username) && (isUnique === 0)) {
                return models.Users.update({
                    username, email, password
                }, {
                    where: {
                        username: {
                            $like: (oldUser)
                        }
                    }
                })
                .then(() => {
                    res.json({
                        msg: "Edited User"
                    })
                })
             } else {
                res.json({
                    msg: "User/email already exists!"
                })
                res.status(403).end();
            }
        })
        .catch(error => {
            console.error("Error!");
            console.error(error);
            res.status(500).end();
        })
    },

    // Delete a user
    delete(req, res) {
        let username = req.params.username;
        return models.Users.destroy({
            where: { 
                username: {
                    $like: (username)
                }
             }
        })
        .then(() => {
            res.json({
                msg: "Entry deleted",
                id: req.params.id
            });
            res.status(204).end()
        })
        .catch(error => {
            console.error("Error!");
            console.error(error);
            res.status(500).end();
        });
    },
};

function checkDuplicate(username, email) {
    return models.Users.count({
        where: {
            $or: [
                {
                    email: {$like: (email)}
                },
                {
                    username: {$like: (username)}
                }
            ]
        }
    })
}

module.exports = UsersController.registerRouter();
