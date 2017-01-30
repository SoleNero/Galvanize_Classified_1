'use strict';

const express = require('express');
const knex = require('../knex');
const router = express.Router();

router.get('/', (req, res, next) => {
    knex('classifieds')
        .select('id', 'title', 'description', 'price', 'item_image')
        .then((data) => {
            res.send(data);
        })
        .catch((err) => {
            res.send(err);
        });
});

router.get('/:id', (req, res, next) => {
    const id = req.params.id;
    knex('classifieds')
        .select('id', 'title', 'description', 'price', 'item_image')
        .where('id', id)
        .then((data) => {
            res.send(data[0]);
        })
        .catch((err) => {
            res.send(err);
        });
});

router.post('/', (req, res, next) => {
    const { id, title, description, price, item_image } = req.body;
    knex('classifieds')
        .insert({ id, title, description, price, item_image }, ["id", "title", "description", "price", "item_image"])
        .then((data) => {
            res.send(data[0]);
        })
        .catch((err) => {
            res.send(err);
        });
});





module.exports = router;