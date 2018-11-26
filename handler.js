'use strict';

const testRunner = require('./lib/testRunner');

module.exports.Index = (event, context, callback) => {

  var hello = new testRunner().greetings(event);

  const response = {
    statusCode: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
    body: event,
  };

  callback(null, response);
};