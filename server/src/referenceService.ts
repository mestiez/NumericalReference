import { Path, GET, QueryParam } from "typescript-rest";
import { referenceData } from "./main";
import "./processor";
import { processInput } from "./processor";

interface ReferenceValue {
    description: string;
    source: string;
    value: string;
}

@Path("/api")
export class ReferenceService {
    @GET
    getReferencePoints(@QueryParam('input') input: string): any {
        return processInput(input);
    }

    @GET
    @Path('/all')
    getAll(): ReferenceValue[] {
        return referenceData.map(r => {
            return {
                description: r.description,
                source: r.source,
                value: r.measurement.format()
            }
        });
    }
}
