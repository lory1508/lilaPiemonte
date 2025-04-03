import { mergeProps, unref, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderClass, ssrInterpolate } from "vue/server-renderer";
import "/Users/lgalassi/workspace/lilaPiemonte/node_modules/hookable/dist/index.mjs";
import { Icon } from "@iconify/vue";
const _sfc_main = {
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
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/SocialLink.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=SocialLink.vue.mjs.map
