const path = require('path');
const express = require('express');
const cookieParser = require('cookie-parser');

const app = express();
const PORT = 3000;
const https = require('https');

/**
 * require routers
 */

/**
 * handle parsing request body
 */
app.use(express.json()); // recognize the incoming Request Object as a JSON Object.
app.use(express.urlencoded()); //recognize the incoming Request Object as strings or arrays.

/**
 * Parse Cookie header and populate req.cookies with an object keyed by the cookie names. Optionally you may enable signed cookie support by passing a secret string, which assigns req.secret so it may be used by other middleware.
 *
 */
app.use(cookieParser());

//express server  is serving all static assets found in your client folder & sending the images to the front end when it needs to find the images
/**
 * handle requests for static files
 */

app.use(express.static(path.join(__dirname, '../src')));

/**
 * define route handlers
 */
// ********** This is just for testing only! Please change **********
app.use('/api', (req, res) => {
  return res.status(200).send(req.body);
});

// catch-all route handler for any requests to an unknown route
app.use('*', (req, res) => {
  return res.sendStatus(404);
});

/**
 * configure express global error handler
 */

app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 400,
    message: { err: 'An error occurred' },
  };

  const errorObj = Object.assign(defaultErr, err);
  console.log(errorObj.message);
  return res.status(errorObj.status).json(errorObj.status);
});

/**
 * start server
 */
app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
});

const appId = '5d31df20';
const appKey = '0ef1989e11f3eccf8ebb9f20590cdb28';
const language = 'en-us';
const wordId = 'banana';
const fields = 'definitions';
const strictMatch = 'false';

const options = {
  host: 'od-api.oxforddictionaries.com',
  port: '443',
  path: `/api/v2/entries/${language}/${wordId.toLowerCase()}?fields=${fields}&strictMatch=${strictMatch}`,
  method: 'GET',
  headers: {
    app_id: appId,
    app_key: appKey,
  },
};

https.get(options, (resp) => {
  let body = '';
  resp.on('data', (d) => {
    body += d;
  });
  resp.on('end', () => {
    const definition = JSON.parse(body);
    console.log(definition.results[0].lexicalEntries[0].entries[0].senses[0].definitions[0]);
  });
});

module.exports = app;
