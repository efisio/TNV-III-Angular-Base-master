const EnabledCountryEntry = require('../models/index').EnabledCountryEntry;

const getEntry = (req, res) => {

    EnabledCountryEntry.findAll({})
      .then(entry => {
        console.log('then ciao');
        return res.status(200).send(entry)
      })
      .catch(err => {
        return res.status(500).send(err)
      });
  };

  module.exports = {
    getEntry
  };