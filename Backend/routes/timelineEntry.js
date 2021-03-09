const express = require('express');
const router = express.Router();
const TimelineEntry = require('../models/index').timelineEntry;


router.post('/', function (req, res, next) {

    const countryCode = req.params.countryCode;

    const { active, confirmed, date, deaths, new_confirmed, new_deaths, new_recovered, recovered, updated_at } = req.body;

    TimelineEntry.create({

        countryCode: countryCode,
        updatedAt: updated_at,
        death: deaths,
        confirmed: confirmed,
        recovered: recovered,
        new_confirmed: new_confirmed,
        new_recovered: new_recovered,
        new_deaths: new_deaths,
        active: active
    })
        .then(timelineEntry => res.status(201).json({
            timelineEntry
        }))
        .catch(error => res.status(500).json({
            error
        }));
});