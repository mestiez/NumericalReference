import express from "express";
import { Server } from "typescript-rest";
import { Reference } from "./models";
import http from "http"
import https from "https"
import * as fs from "fs"
//@ts-ignore
import parseXlsx from 'excel';
import yargs from 'yargs';
//@ts-ignore
import { hideBin } from 'yargs/helpers';

import { ReferenceService } from "./referenceService";
import Qty from "js-quantities";
import { certificateChainPath, certificatePath, dataPath, privateKeyPath, staticSitePath } from "./paths";

const argv = yargs(hideBin(process.argv)).argv;

export const httpPort: number = parseInt(argv.port as string) || 8080;
export const httpsPort: number = parseInt(argv.httpsPort as string) || 8443;
export const doHttps: boolean = argv.https === undefined ? true : (argv.https === 'true');

export const referenceData: Reference[] = [];

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
app.use(express.static(staticSitePath))

Server.buildServices(app, ReferenceService);

const httpServer = http.createServer(app);
const httpsServer = doHttps ? https.createServer(
    {
        cert: fs.readFileSync(certificatePath, 'utf8'),
        key: fs.readFileSync(privateKeyPath, 'utf8'),
        ca: [
            fs.readFileSync(certificateChainPath),
        ]
    },
    app) : undefined;

const startServer = () => {
    httpServer.listen(httpPort, () => {
        console.log('http listening on ' + httpPort);
    });

    if (doHttps && httpsServer) {
        httpsServer.listen(httpsPort, () => {
            console.log('https listening on ' + httpsPort);
        });
    }
};

parseXlsx(dataPath).then((d: string[][]) => {
    d.forEach(addReference);
    console.log(referenceData.length + ' references added from ' + d.length + ' spreadsheet entries');
    startServer();
});