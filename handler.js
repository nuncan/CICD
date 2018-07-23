'use strict';

const helloNike = require('./lib/hello-Nike');

module.exports.HelloNike = (event, context, callback) => {

  var hello = new helloNike();

  const response = {
    statusCode: 200,
    headers: {
      'Access-Control-Allow-Origin': '*', // Required for CORS support to work
    },
    body: JSON.stringify(hello.greetings(event)),
  };

  callback(null, response);
};