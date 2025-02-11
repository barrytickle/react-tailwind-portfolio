export const getCategoryFromPage = (page) => page.attributes.category.data.attributes;

export const isLinkExternal = (url) => {
  return url.includes("http") || url.includes("www");
};

export const linkClicked = (e) => {
  if (isLinkExternal(e.target.href)) return;
  if (window.innerWidth < 768) {
    document.querySelector("header nav")?.querySelector("input:checked").click();
    document.querySelector("header nav")?.querySelector("label")?.classList.remove("active");
    document.querySelector("body")?.classList.remove("no-move");
  }

  window.scrollTo({
    top: 0,
    scrollBehavior: "smooth",
  });
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
