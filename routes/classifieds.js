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





module.exports = router;