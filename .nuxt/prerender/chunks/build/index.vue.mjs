import { ssrRenderAttrs, ssrRenderClass, ssrRenderStyle, ssrInterpolate, ssrRenderList, ssrRenderAttr, ssrRenderComponent } from 'file:///Users/lgalassi/workspace/lilaPiemonte/node_modules/vue/server-renderer/index.mjs';
import { useSSRContext, mergeProps, unref, ref } from 'file:///Users/lgalassi/workspace/lilaPiemonte/node_modules/vue/index.mjs';
import { _ as _sfc_main$7, d as data } from './data.json.mjs';
import { Icon } from 'file:///Users/lgalassi/workspace/lilaPiemonte/node_modules/@iconify/vue/dist/iconify.mjs';
import { g as goto } from './index.mjs';
import './server.mjs';
import 'file:///Users/lgalassi/workspace/lilaPiemonte/node_modules/hookable/dist/index.mjs';
import 'file:///Users/lgalassi/workspace/lilaPiemonte/node_modules/unctx/dist/index.mjs';
import 'file:///Users/lgalassi/workspace/lilaPiemonte/node_modules/h3/dist/index.mjs';
import 'file:///Users/lgalassi/workspace/lilaPiemonte/node_modules/vue-router/dist/vue-router.node.mjs';
import 'file:///Users/lgalassi/workspace/lilaPiemonte/node_modules/radix3/dist/index.mjs';
import 'file:///Users/lgalassi/workspace/lilaPiemonte/node_modules/defu/dist/defu.mjs';
import 'file:///Users/lgalassi/workspace/lilaPiemonte/node_modules/ufo/dist/index.mjs';
import 'file:///Users/lgalassi/workspace/lilaPiemonte/node_modules/@primeuix/utils/eventbus/index.mjs';
import 'file:///Users/lgalassi/workspace/lilaPiemonte/node_modules/@primeuix/styled/index.mjs';
import 'file:///Users/lgalassi/workspace/lilaPiemonte/node_modules/@primeuix/utils/index.mjs';
import 'file:///Users/lgalassi/workspace/lilaPiemonte/node_modules/@primeuix/utils/object/index.mjs';
import 'file:///Users/lgalassi/workspace/lilaPiemonte/node_modules/@primeuix/styles/base/index.mjs';
import 'file:///Users/lgalassi/workspace/lilaPiemonte/node_modules/@primeuix/utils/dom/index.mjs';

const _sfc_main$6 = {
  __name: "HeroComponent",
  __ssrInlineRender: true,
  props: {
    backgroundImg: {
      type: String,
      default: ""
    },
    backgroundColor: {
      type: String,
      default: "bg-white"
    },
    title: {
      type: String,
      default: ""
    },
    content: {
      type: Array,
      default: () => []
    }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)}><div class="${ssrRenderClass([__props.backgroundColor, "flex flex-col items-start justify-center w-screen min-h-screen lg:px-12"])}" style="${ssrRenderStyle(`background-position: 125% 0%; background-repeat: no-repeat; background-size: 70%; background-image: url('${__props.backgroundImg}');`)}"><div class="flex flex-col items-center justify-center w-full h-screen gap-16 px-4 text-white bg-black bg-opacity-50 lg:bg-opacity-0 lg:backdrop-blur-none backdrop-blur-md lg:w-1/3"><h1 class="text-6xl font-bold uppercase">${ssrInterpolate(__props.title)}</h1><div class="flex flex-col gap-4"><!--[-->`);
      ssrRenderList(__props.content, (item, index) => {
        _push(`<div>${item ?? ""}</div>`);
      });
      _push(`<!--]--></div></div></div></div>`);
    };
  }
};
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/HeroComponent.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};

const _sfc_main$5 = {
  __name: "EventCard",
  __ssrInlineRender: true,
  props: {
    cover: {
      type: Object,
      default: () => {
        return {
          url: "",
          alt: ""
        };
      }
    },
    title: {
      type: String,
      default: ""
    },
    date: {
      type: String,
      default: ""
    },
    startTime: {
      type: String,
      default: ""
    },
    endTime: {
      type: String,
      default: ""
    },
    location: {
      type: String,
      default: ""
    },
    btnLabel: {
      type: String,
      default: ""
    }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ButtonComponent = _sfc_main$7;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex flex-col text-black bg-white border border-black lg:flex-row sharp-shadow-lg" }, _attrs))}><img${ssrRenderAttr("src", __props.cover.url)}${ssrRenderAttr("alt", __props.cover.alt)}><div class="flex flex-col gap-4 p-2 text-crimson"><div class="text-2xl font-bold uppercase">${ssrInterpolate(__props.title)}</div><div class="flex flex-row items-center gap-2 text-lg">`);
      _push(ssrRenderComponent(unref(Icon), {
        icon: "solar:calendar-bold-duotone",
        width: "32"
      }, null, _parent));
      _push(`<span>${ssrInterpolate(__props.date)}</span><span>${ssrInterpolate(__props.startTime)} - ${ssrInterpolate(__props.endTime)}</span></div><div class="flex flex-row items-center gap-2 text-lg">`);
      _push(ssrRenderComponent(unref(Icon), {
        icon: "solar:map-point-bold-duotone",
        width: "32"
      }, null, _parent));
      _push(`<span>${ssrInterpolate(__props.location)}</span></div>`);
      _push(ssrRenderComponent(_component_ButtonComponent, {
        label: __props.btnLabel,
        color: { text: "white", bg: "crimson", shadow: "black" },
        class: "ml-2"
      }, null, _parent));
      _push(`</div></div>`);
    };
  }
};
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/EventCard.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};

/* empty css                    */
const _sfc_main$4 = {
  __name: "CardComponent",
  __ssrInlineRender: true,
  props: {
    title: {
      type: String,
      default: ""
    },
    content: {
      type: Array,
      default: () => []
    },
    link: {
      type: Object,
      default: () => {
      }
    },
    img: {
      type: Object,
      default: () => {
      }
    },
    color: {
      type: String,
      default: "crimson"
    },
    specialContent: {
      type: String,
      default: ""
    }
  },
  setup(__props) {
    ref("");
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ButtonComponent = _sfc_main$7;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex flex-col items-center justify-center max-w-lg text-black bg-white border border-black sharp-shadow-lg" }, _attrs))}><span class="${ssrRenderClass([`text-${__props.color}`, "py-12 text-4xl font-semibold uppercase"])}">${ssrInterpolate(__props.title)}</span><div class="${ssrRenderClass([`bg-${__props.color}`, "flex flex-col items-center justify-center w-full gap-4 p-4 text-white"])}">`);
      if (__props.content) {
        _push(`<div class="flex flex-col gap-4 text-sm"><!--[-->`);
        ssrRenderList(__props.content, (item, i) => {
          _push(`<div>${item ?? ""}</div>`);
        });
        _push(`<!--]--></div>`);
      } else {
        _push(`<!---->`);
      }
      if (__props.specialContent) {
        _push(`<div class="flex items-center justify-center text-3xl font-semibold">${ssrInterpolate(__props.specialContent)}</div>`);
      } else {
        _push(`<!---->`);
      }
      if (__props.img) {
        _push(`<img${ssrRenderAttr("src", __props.img.url)}${ssrRenderAttr("alt", __props.img.alt)} width="300">`);
      } else {
        _push(`<!---->`);
      }
      if (__props.link) {
        _push(ssrRenderComponent(_component_ButtonComponent, {
          label: __props.link.label,
          color: { text: "black", bg: "white", shadow: "black" },
          class: "ml-2",
          onClick: ($event) => unref(goto)(__props.link.href)
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div>`);
    };
  }
};
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/CardComponent.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};

/* empty css                  */
const _sfc_main$3 = {
  __name: "ServiceCard",
  __ssrInlineRender: true,
  props: {
    title: {
      type: String,
      default: ""
    },
    subtitle: {
      type: String,
      default: ""
    },
    content: {
      type: Array,
      default: () => []
    },
    link: {
      type: Object,
      default: () => {
      }
    },
    img: {
      type: Object,
      default: () => {
      }
    },
    color: {
      type: String,
      default: "crimson"
    },
    specialContent: {
      type: String,
      default: ""
    }
  },
  setup(__props) {
    ref("");
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ButtonComponent = _sfc_main$7;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex flex-col items-center justify-center max-w-lg text-black bg-white border border-black min-w-80 sharp-shadow-lg" }, _attrs))}><div class="flex flex-col items-center justify-center p-2 text-center lg:text-start lg:flex-row">`);
      if (__props.img) {
        _push(`<img${ssrRenderAttr("src", __props.img.url)}${ssrRenderAttr("alt", __props.img.alt)} class="h-40">`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="flex flex-col"><span class="${ssrRenderClass([`text-${__props.color}`, "text-2xl font-semibold uppercase"])}">${ssrInterpolate(__props.title)}</span><span class="${ssrRenderClass([`text-${__props.color}`, "text-lg"])}">${ssrInterpolate(__props.subtitle)}</span></div></div><div class="${ssrRenderClass([`bg-${__props.color}`, "flex flex-col items-center justify-center w-full gap-4 p-4 text-white"])}">`);
      if (__props.content) {
        _push(`<div class="flex flex-col gap-4 text-sm"><!--[-->`);
        ssrRenderList(__props.content, (item, i) => {
          _push(`<div>${item ?? ""}</div>`);
        });
        _push(`<!--]--></div>`);
      } else {
        _push(`<!---->`);
      }
      if (__props.specialContent) {
        _push(`<div class="flex items-center justify-center text-3xl font-semibold">${ssrInterpolate(__props.specialContent)}</div>`);
      } else {
        _push(`<!---->`);
      }
      if (__props.link) {
        _push(ssrRenderComponent(_component_ButtonComponent, {
          label: __props.link.text,
          color: { text: "black", bg: "white", shadow: "black" },
          class: "ml-2",
          onClick: ($event) => unref(goto)(__props.link.href)
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div>`);
    };
  }
};
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ServiceCard.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};

const _sfc_main$2 = {
  __name: "SocialLink",
  __ssrInlineRender: true,
  props: {
    href: {
      type: String,
      default: ""
    },
    text: {
      type: String,
      default: ""
    },
    icon: {
      type: String,
      default: ""
    },
    type: {
      type: String,
      default: ""
    }
  },
  setup(__props) {
    const colorVariants = {
      facebook: "text-[#1877f2]",
      instagram: "text-[#ea4968]",
      gmail: "text-[#c5221f]"
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex items-center h-12 transition-all duration-300 bg-white rounded-full cursor-pointer hover:scale-105 w-fit" }, _attrs))}><div class="flex flex-row gap-4">`);
      _push(ssrRenderComponent(unref(Icon), {
        icon: __props.icon,
        width: "64",
        class: "rounded-full shadow-lg"
      }, null, _parent));
      _push(`<div class="${ssrRenderClass(`flex items-center pr-4 text-md lg:text-2xl font-bold ${colorVariants[__props.type]} uppercase`)}">${ssrInterpolate(__props.text)}</div></div></div>`);
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/SocialLink.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};

const _sfc_main$1 = {
  __name: "EmbeddedVideo",
  __ssrInlineRender: true,
  props: {
    videoId: {
      type: String,
      default: ""
    }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<iframe${ssrRenderAttrs(mergeProps({
        width: "100%",
        height: "800px",
        src: `https://www.youtube.com/embed/${__props.videoId}`,
        title: "YouTube video player",
        frameborder: "0",
        allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",
        referrerpolicy: "strict-origin-when-cross-origin",
        allowfullscreen: ""
      }, _attrs))}></iframe>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/EmbeddedVideo.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};

const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const loading = ref(false);
    const hero = ref(data.home.hero);
    const nextEvent = ref(data.home.nextEvent);
    const cards = ref(data.home.cards);
    const services = ref(data.home.services);
    const socials = ref(data.home.socials);
    const video = ref(data.home.video);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_HeroComponent = _sfc_main$6;
      const _component_EventCard = _sfc_main$5;
      const _component_CardComponent = _sfc_main$4;
      const _component_ServiceCard = _sfc_main$3;
      const _component_SocialLink = _sfc_main$2;
      const _component_EmbeddedVideo = _sfc_main$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex flex-col" }, _attrs))}>`);
      if (unref(loading)) {
        _push(`<div>LOADING!</div>`);
      } else {
        _push(`<div class="flex flex-col">`);
        _push(ssrRenderComponent(_component_HeroComponent, {
          "background-img": unref(hero).imgBackground,
          "background-color": "bg-red-700",
          title: unref(hero).title,
          content: unref(hero).content
        }, null, _parent));
        _push(`<div class="flex flex-col items-center justify-center w-full gap-4 px-4 py-8 bg-paleRed"><h2 class="text-5xl font-bold text-center uppercase text-crimson">${ssrInterpolate(unref(nextEvent).title)}</h2>`);
        _push(ssrRenderComponent(_component_EventCard, {
          cover: unref(nextEvent).event.cover,
          title: unref(nextEvent).event.title,
          date: unref(nextEvent).event.date,
          "start-time": unref(nextEvent).event.startTime,
          "end-time": unref(nextEvent).event.endTime,
          "btn-label": unref(nextEvent).event.button,
          location: unref(nextEvent).event.location
        }, null, _parent));
        _push(`</div><div class="grid items-center justify-center w-full grid-cols-1 gap-4 px-4 py-8 border-black border-dashed lg:grid-cols-3 border-y-4 bg-lightRed"><!--[-->`);
        ssrRenderList(unref(cards), (card, index) => {
          _push(`<div>`);
          _push(ssrRenderComponent(_component_CardComponent, {
            title: card == null ? void 0 : card.title,
            content: card == null ? void 0 : card.content,
            img: card == null ? void 0 : card.img,
            link: card == null ? void 0 : card.link,
            color: card == null ? void 0 : card.color,
            "special-content": card == null ? void 0 : card.specialContent
          }, null, _parent));
          _push(`</div>`);
        });
        _push(`<!--]--></div><div class="flex flex-col items-center justify-center gap-4 py-8 bg-white"><div class="flex flex-col gap-2"><h2 class="text-5xl font-bold text-center uppercase text-customRed">${ssrInterpolate(unref(services).title)}</h2><div class="flex items-center justify-center text-customRed">${ssrInterpolate(unref(services).subtitle)}</div><div class="flex flex-wrap items-start justify-center gap-8 px-8 py-4"><!--[-->`);
        ssrRenderList(unref(services).cards, (service, index) => {
          _push(`<div>`);
          _push(ssrRenderComponent(_component_ServiceCard, {
            title: service == null ? void 0 : service.title,
            subtitle: service == null ? void 0 : service.subtitle,
            content: service == null ? void 0 : service.content,
            img: service == null ? void 0 : service.img,
            link: service == null ? void 0 : service.link,
            color: service == null ? void 0 : service.color,
            "special-content": service == null ? void 0 : service.specialContent
          }, null, _parent));
          _push(`</div>`);
        });
        _push(`<!--]--></div></div></div><div class="flex flex-col items-center justify-center w-full gap-4 px-4 py-8 text-center bg-crimson"><div class="text-4xl font-bold text-white uppercase">${ssrInterpolate(unref(socials).title)}</div><div class="flex flex-col items-center justify-center gap-8 lg:flex-row"><!--[-->`);
        ssrRenderList(unref(socials).links, (link, index) => {
          _push(ssrRenderComponent(_component_SocialLink, {
            key: `socialLink_${index}`,
            href: link.href,
            text: link.text,
            icon: link.icon,
            type: link.type
          }, null, _parent));
        });
        _push(`<!--]--></div></div>`);
        _push(ssrRenderComponent(_component_EmbeddedVideo, {
          "video-id": unref(video).id
        }, null, _parent));
        _push(`</div>`);
      }
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index.vue.mjs.map
