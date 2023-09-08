import { type SchemaTypeDefinition } from "sanity";

import blockContent from "./schemas/blockContent";
import feature from "./schemas/feature";
import element from "./schemas/element";
import tech from "./schemas/tech";
import tag from "./schemas/tag";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [feature, element, tech, tag, blockContent],
};
