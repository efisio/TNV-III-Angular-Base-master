const express = require('express');
const router = express.Router();
const EnabledCountryEntry = require('../models/index').enabledCountryEntry;

router.get('/', function (req, res, next) {
    EnabledCountryEntry.findAll({})
        .then(fromDbEntry => res.json(fromDbEntry))
        .catch(err => res.json(err))
    ;
});