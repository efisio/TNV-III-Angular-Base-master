const EnabledCountry = require('../models/index').EnabledCountry;

const getEntry = (req, res) => {
    EnabledCountry.findAll({})
      .then(entry => {
        return res.status(200).send(entry)
      })
      .catch(err => {
        return res.status(500).send(err)
      });
  };

  module.exports = {
    getEntry
  };