import { type SchemaTypeDefinition } from "sanity";
import { blogType } from "./blogType";
import { reviewType } from "./reviewType";
import { aboutMeType } from "./aboutMeType";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [blogType, reviewType, aboutMeType],
};
