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
const cors = require("cors");
const corsHandler = cors({ origin: true });
exports.helloWorld = functions.https.onRequest((request, response) => __awaiter(this, void 0, void 0, function* () {
    // This line is GOD.
    response.setHeader("Access-Control-Allow-Origin", "*");
    response.status(200).send('Hello, World!');
}));
exports.pingPongObj = functions.https.onRequest((request, response) => __awaiter(this, void 0, void 0, function* () {
    response.setHeader("Access-Control-Allow-Origin", "*");
    response.setHeader("Access-Control-Allow-Credentials", "true");
    response.setHeader("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
    response.setHeader("Access-Control-Allow-Headers", "Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers");
    // Below might not work?
    //response.setHeader("Access-Control-Allow-Methods", "*");
    response.status(200).send(request.body);
}));
//# sourceMappingURL=index.js.map