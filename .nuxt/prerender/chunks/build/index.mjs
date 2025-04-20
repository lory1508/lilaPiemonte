import { n as navigateTo } from './server.mjs';

const goto = async (href, target = "_self") => {
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
    await navigateTo(href, {});
  }
};

export { goto as g };
//# sourceMappingURL=index.mjs.map
