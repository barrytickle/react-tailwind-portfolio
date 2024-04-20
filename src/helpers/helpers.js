export const getCategoryFromPage = (page) => page.attributes.category.data.attributes;

export const linkClicked = (e) => {
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
