const CONSTANTS = {
  FACEBOOK_COLOR: "#1877f2",
  FACEBOOK_LOGO: "logos:facebook",
  GMAIL_COLOR: "#c5221f",
  GMAIL_LOGO: "skill-icons:gmail-light",
  LINKEDIN_COLOR: "#0077b5",
  LINKEDIN_LOGO: "logos:linkedin-icon",
  INSTAGRAM_COLOR: "#ea4968",
  INSTAGRAM_LOGO: "skill-icons:instagram",
};

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
export { goto, callBE, CONSTANTS };
