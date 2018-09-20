"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const functions = require("firebase-functions");
const sendgrid = require("@sendgrid/mail");
// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//
exports.helloWorld = functions.https.onRequest((request, response) => {
    //response.send("Hello from Firebase!");
});
exports.sendContactMail = functions.https.onRequest((req, res) => {
    console.log("Request: " + req.param('email', 9999) + ", response: " + res);
    // using SendGrid's v3 Node.js Library
    // https://github.com/sendgrid/sendgrid-nodejs
    sendgrid.setApiKey(process.env.SENDGRID_API_KEY);
    //sendgrid.setApiKey(process.env.SENDGRID_API_KEY);
    console.log("Key: " + process.env.SENDGRID_API_KEY);
    const msg = {
        to: 'test@example.com',
        from: 'test@example.com',
        subject: 'Sending with SendGrid is Fun',
        text: 'and easy to do anywhere, even with Node.js',
        html: '<strong>and easy to do anywhere, even with Node.js</strong>',
    };
    return sendgrid.send(msg).then(() => {
        //celebrate
        console.log("I think we did it...");
    }).catch(error => {
        //cry everytiem
        console.log(error);
    });
});
//# sourceMappingURL=index.js.map