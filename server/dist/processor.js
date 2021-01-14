"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.processInput = void 0;
const js_quantities_1 = __importDefault(require("js-quantities"));
const main_1 = require("./main");
function processInput(input) {
    let parsed;
    try {
        parsed = new js_quantities_1.default(input);
    }
    catch (error) {
        return {
            success: false,
            error,
            input: input,
            references: []
        };
    }
    if (Math.abs(parsed.scalar) <= Number.EPSILON) {
        return {
            success: false,
            input: parsed.format(),
            references: [],
            error: {
                message: 'Input is zero'
            }
        };
    }
    const relevantReferences = main_1.referenceData.filter(r => {
        return (r.measurement.toBase().units() === parsed.toBase().units());
    });
    const sortFunction = (r) => {
        return Math.abs(Math.floor(Math.log10(r.multiplier)));
    };
    let references = relevantReferences.map(r => {
        return {
            description: r.description,
            referenceValue: r.measurement.format(),
            multiplier: parsed.baseScalar / r.measurement.baseScalar,
            sourceUrl: r.source
        };
    }).sort((a, b) => {
        return sortFunction(a) - sortFunction(b);
    });
    return {
        success: true,
        input: parsed.format(),
        references
    };
}
exports.processInput = processInput;
