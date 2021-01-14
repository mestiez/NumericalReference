import { Path, GET, QueryParam } from "typescript-rest";
import { referenceData } from "./main";
import { ReferenceValue } from "./models";
import { processInput } from "./processor";

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
