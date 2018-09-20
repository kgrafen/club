import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';
import * as sendgrid from '@sendgrid/mail';

// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//
export const helloWorld = functions.https.onRequest((request, response) => {
  //response.send("Hello from Firebase!");
 });

export const sendContactMail = functions.https.onRequest( (req, res) => {

    console.log("Request: " + req.body.email + ", response: " + res);
    // using SendGrid's v3 Node.js Library
    // https://github.com/sendgrid/sendgrid-nodejs
    sendgrid.setApiKey(process.env.SENDGRID_API_KEY);
    //sendgrid.setApiKey(process.env.SENDGRID_API_KEY);
    console.log("Key: " + process.env.SENDGRID_API_KEY);
    const msg = {
        to: req.body.to,
        from: req.body.from,
        subject: req.body.subject,
        content: req.body.content,
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
