const { handler } = require('../dist/serverless');

exports.handler = async function (event, context) {
  return handler(event, context);
};
