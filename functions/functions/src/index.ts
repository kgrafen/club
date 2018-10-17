import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';
admin.initializeApp();


import * as cors from 'cors';
const corsHandler = cors({origin: true});

export const helloWorld= functions.https.onRequest(async (request, response) => {
    // This line is GOD.
    response.setHeader("Access-Control-Allow-Origin", "*");
    response.status(200).send('Hello, World!');
});

export const pingPongObj = functions.https.onRequest(async (request, response) => {
    response.setHeader("Access-Control-Allow-Origin", "*");
    response.setHeader("Access-Control-Allow-Credentials", "true");
    response.setHeader("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
    response.setHeader("Access-Control-Allow-Headers", "Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers");
    // Below might not work?
    //response.setHeader("Access-Control-Allow-Methods", "*");
    response.status(200).send(request.body);
});

