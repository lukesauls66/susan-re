import { type SchemaTypeDefinition } from "sanity";
import { blogType } from "./blogType";
import { reviewType } from "./reviewType";
import { aboutMeType } from "./aboutMeType";
import { landingPageType } from "./landingPageType";
import { eventType } from "./eventType";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [blogType, reviewType, aboutMeType, landingPageType, eventType],
};
