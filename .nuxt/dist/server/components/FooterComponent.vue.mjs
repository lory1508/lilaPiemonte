import { ref, unref, mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrInterpolate } from "vue/server-renderer";
import data from "../utils/data.json.mjs";
const _sfc_main = {
  __name: "FooterComponent",
  __ssrInlineRender: true,
  setup(__props) {
    const footer = ref(data.footer);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex flex-col items-center justify-center gap-4 py-12 uppercase lg:flex-row bg-crimson" }, _attrs))}><span>${ssrInterpolate(unref(footer).name)}</span><span>© ${ssrInterpolate((/* @__PURE__ */ new Date()).getFullYear())} ${ssrInterpolate(unref(footer).copyright)}</span><span>${unref(footer).referral ?? ""}</span></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/FooterComponent.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=FooterComponent.vue.mjs.map
