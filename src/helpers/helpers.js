export const getCategoryFromPage = (page) => page.attributes.category.data.attributes;

export const isLinkExternal = (url) => {
  return url.includes("http") || url.includes("www");
};

export const toReactComponentName = (fileName) => {
  return fileName
    .replace(/[-_/](.)/g, (_, char) => char.toUpperCase()) // Convert kebab-case or snake_case to camelCase
    .replace(/^(.)/, (_, char) => char.toUpperCase()); // Capitalize the first letter
};

export const generateUrl = (field) => {
  const category = field?.attributes?.category?.data?.attributes?.slug;
  const { slug } = field.attributes;

  if (!category) {
    console.warn("generateUrl: No category found for", field);
    return field;
  }

  if (!slug) {
    console.warn("generateUrl: No slug found for", field);
    return field;
  }

  return category ? `/${category}/${slug}` : slug;
};
