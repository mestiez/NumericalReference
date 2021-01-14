"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.referenceData = exports.httpsPort = exports.httpPort = void 0;
const express_1 = __importDefault(require("express"));
const typescript_rest_1 = require("typescript-rest");
const http_1 = __importDefault(require("http"));
const https_1 = __importDefault(require("https"));
const fs = __importStar(require("fs"));
//@ts-ignore
const excel_1 = __importDefault(require("excel"));
const referenceService_1 = require("./referenceService");
const js_quantities_1 = __importDefault(require("js-quantities"));
exports.httpPort = parseInt(process.argv[2]) || 8080;
exports.httpsPort = parseInt(process.argv[3]) || 8443;
exports.referenceData = [];
var privateKey = fs.readFileSync('ssl/generated/server.key', 'utf8');
var certificate = fs.readFileSync('ssl/generated/cert.crt', 'utf8');
const addReference = (array) => {
    if (array && array.length == 3) {
        if (!array[0] || !array[1] || !array[2])
            return;
        exports.referenceData.push({
            description: array[0],
            measurement: new js_quantities_1.default(array[1]),
            source: array[2],
        });
    }
};
let app = express_1.default();
app.use(express_1.default.static('../front'));
typescript_rest_1.Server.buildServices(app, referenceService_1.ReferenceService);
const httpServer = http_1.default.createServer(app);
const httpsServer = https_1.default.createServer({
    cert: certificate,
    key: privateKey,
    ca: [
        fs.readFileSync('ssl/generated/bundle.crt'),
    ]
}, app);
const startServer = () => {
    httpServer.listen(exports.httpPort, () => {
        console.log('http server listening on ' + exports.httpPort);
    });
    httpsServer.listen(exports.httpsPort, () => {
        console.log('https listening on ' + exports.httpsPort);
    });
};
excel_1.default('dist/data/output.xlsx').then((d) => {
    d.forEach(addReference);
    console.log(exports.referenceData.length + ' references added from ' + d.length + ' spreadsheet entries');
    startServer();
});
