const EnabledCountryEntry = require('../models/index').EnabledCountryEntry;

const getEntry = (req, res) => {

    EnabledCountryEntry.findAll({})
      .then(entry => {
        // console.log('then ciao');
        return res.status(200).send(entry)
      })
      .catch(err => {
        console.log(err)
        return res.status(500).send({ error: 'Database error!' })
      });
  };

  module.exports = {
    getEntry
  };