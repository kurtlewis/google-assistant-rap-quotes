'use strict';

process.env.DEBUG = 'actions-on-google:*';
const App = require('actions-on-google').DialogflowApp;
const functions = require('firebase-functions');
const quotes = require('./quotes.js');

// a. the action name from the request_quote Dialogflow intent
const QUOTE_ACTION = 'request_quote';
// b. the parameters that are parsed from the request_quote intent
const RAPPER_ARGUMENT = 'music-artist';

exports.rapQuotes = functions.https.onRequest((request, response) => {
    const app = new App({request, response});
    console.log('Request headers: ' + JSON.stringify(request.headers));
    console.log('Request body: ' + JSON.stringify(request.body));

// c. The function that generates the rap quote
    function requestQuote (app) {
        //let artist = app.getArgument(RAPPER_ARGUMENT);
        app.ask(`<speak>`
                + quotes.getRandomQuote()
                + `<break time="1s"/>
                Ask for another or say exit.
                </speak>`);
    }
    // d. build an action map, which maps intent names to functions
    let actionMap = new Map();
    actionMap.set(QUOTE_ACTION, requestQuote);

app.handleRequest(actionMap);
});

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });
