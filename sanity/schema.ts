import { type SchemaTypeDefinition } from "sanity";

import blockContent from "./schemas/blockContent";
import feature from "./schemas/feature";
import element from "./schemas/element";
import tech from "./schemas/tech";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [feature, element, tech, blockContent],
};
