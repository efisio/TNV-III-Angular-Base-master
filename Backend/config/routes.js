const DataEngine = require('../engine/entry');
const ErrorsEngine  = require('../engine/errors');

module.exports = (app) => {

  const dataPath = '/data';

  /********** DATA REST APIs **********/
  app.get(dataPath, DataEngine.getEntry);
  app.post(dataPath, DataEngine.createEntry);
  app.get(`${dataPath}/:id`, DataEngine.getEntryById);
  app.put(`${dataPath}/:id`, DataEngine.editEntry);
  app.delete(`${dataPath}/:id`, DataEngine.deleteEntry);


  //`${dataPath}/:countryCode`
  app.get('/timeline/IT', function (req, res) {

    // console.log(req.params.countryCode);
    res.send('ciao'); //Print the response to the screen

    //Setup your client http://corona-api.com/countries/IT
    var client = http.createClient(80, 'http://corona-api.com');
    //Setup the request by passing the parameters in the URL (REST API)
    var request = client.request('GET', '/countries/IT', { "host": "http://corona-api.com" });

    console.log('prova');

    request.addListener("response", function (response) { //Add listener to watch for the response
      var body = "";
      response.addListener("data", function (data) { //Add listener for the actual data
        body += data; //Append all data coming from api to the body variable
      });

      response.addListener("end", function () { //When the response ends, do what you will with the data
        var response = JSON.parse(body); //In this example, I am parsing a JSON response
      });
    });
    request.end();
    res.send(response); //Print the response to the screen
  });

  /********** ERROR HANDLER **********/
  app.use(ErrorsEngine.page404);
  app.use(ErrorsEngine.pageError);

};