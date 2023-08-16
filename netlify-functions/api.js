const { handler } = require('../lambda');

exports.handler = async function (event, context) {
  return handler(event, context);
};
