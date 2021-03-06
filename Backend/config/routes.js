const DataEngine = require('../engine/entry');
const TimelineEngine = require('../engine/timelineEntry');
const EnabledCountryEngine = require('../engine/enabledCountry');
const ErrorsEngine  = require('../engine/errors');

module.exports = (app) => {

  const dataPath = '/data';
  const timelineCountryPath = '/timelineCountry';
  const enabledCountryPath = '/enabledCountry';

  /********** DATA REST APIs **********/
  app.get(dataPath, DataEngine.getEntry);
  app.post(dataPath, DataEngine.createEntry);
  app.get(`${dataPath}/:id`, DataEngine.getEntryById);
  app.put(`${dataPath}/:id`, DataEngine.editEntry);
  app.delete(`${dataPath}/:id`, DataEngine.deleteEntry);


  /********** COUNTRY REST APIs **********/
  //Endpoints per le timeline
  app.post(`${timelineCountryPath}/:countryCode`, TimelineEngine.postTimelineData);
  app.get(`${timelineCountryPath}/:countryCode`, TimelineEngine.getTimelineData);

  /********** ENABLED COUNTRY REST APIs **********/

  app.get(enabledCountryPath, EnabledCountryEngine.getEntry);


  /********** ERROR HANDLER **********/
  app.use(ErrorsEngine.page404);
  app.use(ErrorsEngine.pageError);

};