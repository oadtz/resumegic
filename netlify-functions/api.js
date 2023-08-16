const { handler } = require('../serverless');

exports.handler = async function (event, context) {
  return handler(event, context);
};
