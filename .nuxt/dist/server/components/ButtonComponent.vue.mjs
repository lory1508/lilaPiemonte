import { mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderSlot, ssrRenderClass, ssrInterpolate } from "vue/server-renderer";
const _sfc_main = {
  __name: "ButtonComponent",
  __ssrInlineRender: true,
  props: {
    label: {
      type: String,
      default: ""
    },
    color: {
      type: Object,
      default: () => {
        return {
          bg: "bg-white",
          text: "text-black",
          shadow: "shadow-black"
        };
      }
    }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: ["flex flex-row items-center gap-2 px-2 py-1 transition-all duration-300 border cursor-pointer sharp-shadow-sm hover:scale-105 w-fit", `bg-${__props.color.bg} text-${__props.color.shadow} border-${__props.color.shadow}`]
      }, _attrs))}>`);
      ssrRenderSlot(_ctx.$slots, "left-slot", {}, null, _push, _parent);
      _push(`<div class="${ssrRenderClass(`text-${__props.color.text}`)}">${ssrInterpolate(__props.label)}</div>`);
      ssrRenderSlot(_ctx.$slots, "right-slot", {}, null, _push, _parent);
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ButtonComponent.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=ButtonComponent.vue.mjs.map
