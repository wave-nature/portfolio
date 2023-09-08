import { client } from "./client";
import { allElementsQuery, elementBySlugQuery } from "./queries";

export async function getElements() {
  return client.fetch(allElementsQuery);
}

export async function getElementBySlug(slug: string) {
  return client.fetch(elementBySlugQuery, { slug });
}
