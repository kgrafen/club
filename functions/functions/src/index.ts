import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';
admin.initializeApp();

const APP_NAME = "SingleNetværket";

export const sendContactMail = functions.https.onRequest(async (request, response) => {
    response.setHeader("Access-Control-Allow-Origin", "*");
    response.setHeader("Access-Control-Allow-Credentials", "true");
    response.setHeader("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
    response.setHeader("Access-Control-Allow-Headers", "Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers");

    /* Nodemailer */
    var nodemailer = require("nodemailer");
    // create reusable transport method (opens pool of SMTP connections)
    var smtpTransport = nodemailer.createTransport(
        "smtps://singlenetworkdatabase%40gmail.com:"+encodeURIComponent('sn1337DK') + "@smtp.gmail.com:465"
        );

    // setup e-mail data with unicode symbols
    var mailOptions = {
        from: request.body.name + " " + request.body.from, // sender address
        to: "info@singlen.dk", // list of receivers
        subject: request.body.subject, // Subject line
        text: request.body.mailText, // plaintext body
        //html: "<b>Hello world ✔</b>" // html body
    }

    smtpTransport.sendMail(mailOptions).then( (res) => {
        response.status(200).send("Message was sent");
    }).catch( (error) => {
        response.status(442).send("An error has occured on the server side");
    });

});

export const sendWelcomeEmail = functions.auth.user().onCreate((user) => {
    // [END onCreateTrigger]
      // [START eventAttributes]
    const email = user.email; // The email of the user.
    const displayName = user.displayName; // The display name of the user.
      // [END eventAttributes]
    
      /* Nodemailer */
    var nodemailer = require("nodemailer");
    // create reusable transport method (opens pool of SMTP connections)
    var smtpTransport = nodemailer.createTransport(
        "smtps://singlenetworkdatabase%40gmail.com:"+encodeURIComponent('sn1337DK') + "@smtp.gmail.com:465"
        );

    const mailOptions = {
        from: `${APP_NAME} <noreply@firebase.com>`,
        to: email,
        subject: `Welcome to ${APP_NAME}`,
        text: `Tak for din oprettelse ${displayName || ''}! Tak for din oprettelse, du har nu adgang til sitet ${APP_NAME}. ` 
    };

    smtpTransport.sendMail(mailOptions).then( (res) => {
        return;
    }).catch( (error) => {
        return;
    });

});

export const sendGoodbyeEmail = functions.auth.user().onDelete((user) => {
   
    const email = user.email; // The email of the user.
    const displayName = user.displayName; // The display name of the user.
    
    /* Nodemailer */
    var nodemailer = require("nodemailer");
    var smtpTransport = nodemailer.createTransport(
        "smtps://singlenetworkdatabase%40gmail.com:"+encodeURIComponent('sn1337DK') + "@smtp.gmail.com:465"
        );

    const mailOptions = {
        from: `${APP_NAME} <noreply@firebase.com>`,
        to: email,
        subject: `Welcome to ${APP_NAME}`,
        text: `Tak for denne gang.... ${displayName || ''} vi har nu slettet din profil fra ${APP_NAME}. ` 
    };

    smtpTransport.sendMail(mailOptions).then( (res) => {
        return;
    }).catch( (error) => {
        return;
    });

});

export const sendNewsletter = functions.https.onRequest(async (request, response) => {

    /* Nodemailer */
    var nodemailer = require("nodemailer");
    // create reusable transport method (opens pool of SMTP connections)
    var smtpTransport = nodemailer.createTransport(
        "smtps://singlenetworkdatabase%40gmail.com:"+encodeURIComponent('sn1337DK') + "@smtp.gmail.com:465"
        );

    admin.auth().listUsers().then( function(listUsersResult) {
        listUsersResult.users.forEach( function (userRecord) {
            const mailOptions = {
                from: `${APP_NAME} <noreply@firebase.com>`,
                to: userRecord.email,
                subject: request.body.subject,
                text: request.body.message 
            };

            smtpTransport.sendMail(mailOptions).then( (res) => {
                
            }).catch( (error) => {
                //throw away for now. Maybe consider reporting it
            }); 

        });
        response.status(200).send("All mails has been sent");
        return;
    }).catch( function(error) {
        console.log(error);
    });

    response.status(200).send("A-OK");
    return;

});

