// fields

const elementFields = `_id,
name,
slug,
price,
previewURL,
features,
techStack,
images,
mainImage,
longDesc,
shortDesc,
timestamp
`;

// queries

export const allElementsQuery = `*[_type == "element"] {
  ${elementFields}
}`;
