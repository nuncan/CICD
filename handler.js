'use strict';

const helloNike = require('./lib/hello-Nike');

module.exports.HelloNike = (event, context, callback) => {

  var hello = new helloNike().greetings(event);

  const response = {
    statusCode: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
    body: event,
  };

  callback(null, response);
};