import express from "express";
import { Server } from "typescript-rest";
import { Reference } from "./references";
import http from "http"
import https from "https"
import * as fs from "fs"
//@ts-ignore
import parseXlsx from 'excel';

import { ReferenceService } from "./referenceService";
import Qty from "js-quantities";

export const httpPort = parseInt(process.argv[2]) || 8080;
export const httpsPort = parseInt(process.argv[3]) || 8443;
export const referenceData: Reference[] = [];

var privateKey: string = fs.readFileSync('ssl/generated/server.key', 'utf8');
var certificate: string = fs.readFileSync('ssl/generated/cert.crt', 'utf8');

const addReference = (array: string[]) => {
    if (array && array.length == 3) {

        if (!array[0] || !array[1] || !array[2])
            return;

        referenceData.push({
            description: array[0],
            measurement: new Qty(array[1]),
            source: array[2],
        });
    }
}

let app: express.Application = express();
app.use(express.static('../front'))

Server.buildServices(app, ReferenceService);

const httpServer = http.createServer(app);
const httpsServer = https.createServer(
    {
        cert: certificate,
        key: privateKey,
        ca: [
            fs.readFileSync('ssl/generated/bundle.crt'),
        ]
    },
    app);

const startServer = () => {
    httpServer.listen(httpPort, () => {
        console.log('http server listening on ' + httpPort);
    });

    httpsServer.listen(httpsPort, () => {
        console.log('https listening on ' + httpsPort);
    });
};

parseXlsx('dist/data/output.xlsx').then((d: string[][]) => {
    d.forEach(addReference);
    console.log(referenceData.length + ' references added from ' + d.length + ' spreadsheet entries');
    startServer();
});