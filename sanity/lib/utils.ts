import { client } from "./client";
import { allElementsQuery } from "./queries";

export async function getElements() {
  return client.fetch(allElementsQuery);
}
