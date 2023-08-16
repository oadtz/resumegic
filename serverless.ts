const { NestFactory } = require('@nestjs/core');
const { ExpressAdapter } = require('@nestjs/platform-express');
const { AppModule } = require('./src/app.module');
const serverlessHttp = require('serverless-http');
const express = require('express');

const expressApp = express();

let app;

async function createNestApp() {
  app = await NestFactory.create(AppModule, new ExpressAdapter(expressApp));
  return app.init();
}

createNestApp();

const handler = serverlessHttp(expressApp);

exports.handler = async (event, context) => {
  if (!app) {
    await createNestApp();
  }
  return handler(event, context);
};
