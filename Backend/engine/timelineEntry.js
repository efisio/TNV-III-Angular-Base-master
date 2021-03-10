const TimelineEntry = require('../models/index').TimelineEntry;

/**
 * Salvataggio dello storico di una country by countryCode
 */
const postTimelineData = (req, res) => {

    const body = req.body;
    const countryCode = req.params.countryCode;

    if (!body || !countryCode) {
        return res.status(500).send('Empty request');
    }

    body.forEach(timelineEntry => {

        const { active, confirmed, date, deaths, new_confirmed, new_deaths, new_recovered, recovered, updated_at } = timelineEntry;

        TimelineEntry.create({

            countryCode: countryCode,
            date: date,
            updatedAt: updated_at,
            death: deaths,
            confirmed: confirmed,
            recovered: recovered,
            new_confirmed: new_confirmed,
            new_recovered: new_recovered,
            new_deaths: new_deaths,
            active: active
        })

    })
    .then(entry => {
        return res.status(201).send(entry);
    })
    .catch(error => {
        return res.status(500).send(error);
    });
};

const getTimelineData = (req, res) => {
    const timelineCountyCode = req.params.countryCode;

    TimelineEntry.findAll({
        where: {
            countryCode: timelineCountyCode
        }
    })
      .then(entry => {
        return res.status(200).send(entry)
      })
      .catch(err => {
        return res.status(500).send(err)
      });
  };

module.exports = {
    postTimelineData,
    getTimelineData
};