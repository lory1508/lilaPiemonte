import { ssrRenderAttrs, ssrRenderClass, ssrRenderStyle, ssrInterpolate, ssrRenderList } from "vue/server-renderer";
import { useSSRContext } from "vue";
const _sfc_main = {
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
      _push(`<div${ssrRenderAttrs(_attrs)}><div class="${ssrRenderClass([__props.backgroundColor, "flex flex-col items-start justify-center w-screen h-screen px-16"])}" style="${ssrRenderStyle(`background-position: 125% 0%; background-repeat: no-repeat; background-size: 70%; background-image: url('${__props.backgroundImg}');`)}"><div class="flex flex-col w-1/3 gap-16 text-white"><h1 class="text-6xl font-bold uppercase">${ssrInterpolate(__props.title)}</h1><div class="flex flex-col gap-4"><!--[-->`);
      ssrRenderList(__props.content, (item, index) => {
        _push(`<div>${item ?? ""}</div>`);
      });
      _push(`<!--]--></div></div></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/HeroComponent.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=HeroComponent.vue.mjs.map
