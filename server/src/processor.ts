import Qty from 'js-quantities';
import { referenceData } from './main';
import { ProcessResult, ReferenceComparison } from './models';

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
