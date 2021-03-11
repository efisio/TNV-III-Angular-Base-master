const TimelineEntry = require('../models/index').TimelineEntry;

/**
 * Salvataggio dello storico di una country by countryCode
 */
const postTimelineData = (req, res) => {

    const body = req.body;
    const countryCode = req.params.countryCode;

    if (!body || !countryCode) {
        return res.status(500).send({error: 'Empty request'});
    }

    var updatedRowsNum = 0;

    Promise.all(body.map(timelineEntry => {


        const { active, confirmed, date, deaths, new_confirmed, new_deaths, new_recovered, recovered, updated_at } = timelineEntry;

        return  TimelineEntry.create({

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
        .then(function (result) {
            updatedRowsNum++;
        }).catch(function (err) {
            console.log(err);
        })
    

    })).then(function (result) {
        console.log({ updated: updatedRowsNum });
        res.status(200).send({ updated: updatedRowsNum});
    }).catch(function (err) {
        console.log(err);
        res.status(500).send({ error: 'Error importing timelines' });
    })
};

const getTimelineData = (req, res) => {
    const timelineCountyCode = req.params.countryCode;

    TimelineEntry.findAll({
        where: {
            countryCode: timelineCountyCode
        },
        // Add order conditions here....
        order: [
            ['date', 'DESC'],
        ],
    })
      .then(entry => {
        return res.status(200).send(entry)
      })
      .catch(err => {
        console.log(err);
        return res.status(500).send({error: 'Database error'})
      });
  };

module.exports = {
    postTimelineData,
    getTimelineData
};