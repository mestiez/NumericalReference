"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReferenceService = void 0;
const typescript_rest_1 = require("typescript-rest");
const main_1 = require("./main");
const processor_1 = require("./processor");
let ReferenceService = class ReferenceService {
    getReferencePoints(input) {
        return processor_1.processInput(input);
    }
    getAll() {
        return main_1.referenceData.map(r => {
            return {
                description: r.description,
                source: r.source,
                value: r.measurement.format()
            };
        });
    }
};
__decorate([
    typescript_rest_1.GET,
    __param(0, typescript_rest_1.QueryParam('input')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Object)
], ReferenceService.prototype, "getReferencePoints", null);
__decorate([
    typescript_rest_1.GET,
    typescript_rest_1.Path('/all'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Array)
], ReferenceService.prototype, "getAll", null);
ReferenceService = __decorate([
    typescript_rest_1.Path("/api")
], ReferenceService);
exports.ReferenceService = ReferenceService;
