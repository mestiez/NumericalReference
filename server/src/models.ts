import Qty from "js-quantities";

export interface Reference {
    description: string;
    measurement: Qty;
    source: string;
}

export interface ReturningError {
    message: string;
}

export interface ProcessResult {
    success: boolean;
    error?: ReturningError;
    input: string;
    references: ReferenceComparison[];
}

export interface ReferenceComparison {
    description: string;
    referenceValue: string;
    multiplier: number;
    sourceUrl: string;
}

export interface ReferenceValue {
    description: string;
    source: string;
    value: string;
}