import { navigateTo } from "../node_modules/nuxt/dist/app/composables/router.mjs";
const goto = async (href) => {
  console.log(href.split("/")[0]);
  if (href.includes("http")) {
    await navigateTo(href, {
      external: true
    });
  } else if (href.includes("mailto")) {
    await navigateTo(href, {
      external: true
    });
  } else {
    await navigateTo(href);
  }
};
export {
  goto
};
//# sourceMappingURL=index.mjs.map
