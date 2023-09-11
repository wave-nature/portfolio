// fields

const allElementFields = `_id,
name,
"slug": slug.current,
price,
mainImage,
timestamp
`;

const elementBySlugFields = `_id,
name,
price,
"slug": slug.current,
previewURL,
features[] -> {name, desc},
techStack[] -> {shortName},
tags[] -> {name},
images,
mainImage,
longDesc,
shortDesc,
`;

// queries

export const allElementsQuery = `*[_type == "element"] {
  ${allElementFields}
}`;

export const elementBySlugQuery = `*[_type == "element" && slug.current == $slug] {
    ${elementBySlugFields}
}`;
