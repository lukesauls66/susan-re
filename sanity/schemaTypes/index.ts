import { type SchemaTypeDefinition } from "sanity";
import { blogType } from "./blogType";
import { reviewType } from "./reviewType";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [blogType, reviewType],
};
