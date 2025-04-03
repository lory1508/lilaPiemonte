import _sfc_main$1 from "./ButtonComponent.vue.mjs";
import { ref, mergeProps, unref, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderClass, ssrInterpolate, ssrRenderList, ssrRenderComponent } from "vue/server-renderer";
import { goto } from "../utils/index.mjs";
/* empty css                  */
const _sfc_main = {
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
      const _component_ButtonComponent = _sfc_main$1;
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
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ServiceCard.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=ServiceCard.vue.mjs.map
