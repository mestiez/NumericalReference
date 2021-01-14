import Qty from 'js-quantities';
import { referenceData } from './main';

interface ReturningError{
    message: string;
}

export function processInput(input: string): ProcessResult {
    let parsed: Qty;
    try {
        parsed = new Qty(input);
    } catch (error) {
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

    const relevantReferences = referenceData.filter(r => {
        return (r.measurement.toBase().units() === parsed.toBase().units())
    });

    const sortFunction = (r: ReferenceComparison): number => {
        return Math.abs(Math.floor(Math.log10(r.multiplier)));
        // return Math.abs(1 - r.multiplier);
    }

    let references: ReferenceComparison[] = relevantReferences.map(r => {
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

interface ProcessResult {
    success: boolean;
    error?: ReturningError;
    input: string;
    references: ReferenceComparison[];
}

interface ReferenceComparison {
    description: string;
    referenceValue: string;
    multiplier: number;
    sourceUrl: string;
}