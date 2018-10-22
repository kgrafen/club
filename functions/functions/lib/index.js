"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const functions = require("firebase-functions");
const admin = require("firebase-admin");
admin.initializeApp();
const APP_NAME = "SingleNetværket";
exports.sendContactMail = functions.https.onRequest((request, response) => __awaiter(this, void 0, void 0, function* () {
    response.setHeader("Access-Control-Allow-Origin", "*");
    response.setHeader("Access-Control-Allow-Credentials", "true");
    response.setHeader("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
    response.setHeader("Access-Control-Allow-Headers", "Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers");
    /* Nodemailer */
    var nodemailer = require("nodemailer");
    // create reusable transport method (opens pool of SMTP connections)
    var smtpTransport = nodemailer.createTransport("smtps://singlenetworkdatabase%40gmail.com:" + encodeURIComponent('sn1337DK') + "@smtp.gmail.com:465");
    // setup e-mail data with unicode symbols
    var mailOptions = {
        from: request.body.name + " " + request.body.from,
        to: "info@singlen.dk",
        subject: request.body.subject,
        text: request.body.mailText,
    };
    smtpTransport.sendMail(mailOptions).then((res) => {
        response.status(200).send("Message was sent");
    }).catch((error) => {
        response.status(442).send("An error has occured on the server side");
    });
}));
exports.sendWelcomeEmail = functions.auth.user().onCreate((user) => {
    // [END onCreateTrigger]
    // [START eventAttributes]
    const email = user.email; // The email of the user.
    const displayName = user.displayName; // The display name of the user.
    // [END eventAttributes]
    /* Nodemailer */
    var nodemailer = require("nodemailer");
    // create reusable transport method (opens pool of SMTP connections)
    var smtpTransport = nodemailer.createTransport("smtps://singlenetworkdatabase%40gmail.com:" + encodeURIComponent('sn1337DK') + "@smtp.gmail.com:465");
    const mailOptions = {
        from: `${APP_NAME} <noreply@firebase.com>`,
        to: email,
        subject: `Welcome to ${APP_NAME}`,
        text: `Tak for din oprettelse ${displayName || ''}! Tak for din oprettelse, du har nu adgang til sitet ${APP_NAME}. `
    };
    smtpTransport.sendMail(mailOptions).then((res) => {
        return;
    }).catch((error) => {
        return;
    });
});
exports.sendGoodbyeEmail = functions.auth.user().onDelete((user) => {
    // [END onCreateTrigger]
    // [START eventAttributes]
    const email = user.email; // The email of the user.
    const displayName = user.displayName; // The display name of the user.
    // [END eventAttributes]
    /* Nodemailer */
    var nodemailer = require("nodemailer");
    // create reusable transport method (opens pool of SMTP connections)
    var smtpTransport = nodemailer.createTransport("smtps://singlenetworkdatabase%40gmail.com:" + encodeURIComponent('sn1337DK') + "@smtp.gmail.com:465");
    const mailOptions = {
        from: `${APP_NAME} <noreply@firebase.com>`,
        to: email,
        subject: `Welcome to ${APP_NAME}`,
        text: `Tak for denne gang.... ${displayName || ''} vi har nu slettet din profil fra ${APP_NAME}. `
    };
    smtpTransport.sendMail(mailOptions).then((res) => {
        return;
    }).catch((error) => {
        return;
    });
});
exports.sendNewsletter = functions.https.onRequest((request, response) => __awaiter(this, void 0, void 0, function* () {
    //const users = [];
    let usersToStr = "";
    Object.keys(request.body.users).forEach(function (k) {
        usersToStr += k + ", ";
    });
    response.status(200).send("A-OK |" + usersToStr);
    return;
}));
//# sourceMappingURL=index.js.map