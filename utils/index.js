const goto = async (href, target = "_self") => {
  if (href.includes("http")) {
    await navigateTo(href, {
      external: true,
      open: {
        target: "_blank",
      },
    });
  } else if (href.includes("mailto")) {
    await navigateTo(href, {
      external: true,
      open: {
        target,
      },
    });
  } else {
    await navigateTo(href, {
      open: {
        target,
      },
    });
  }
};

const callBE = async (endpoint, params={}) => {
  try {
    if (!endpoint) throw new Error("Endpoint is required");

    const config = useRuntimeConfig();
    const token = config.public.strapi.token;

    const resStrapi = await $fetch(`${config.public.strapi.url}/api/${endpoint}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      params
    });
    return resStrapi;
  } catch (error) {
    console.error("Error during API call:", error);
  }
};
export { goto, callBE };
