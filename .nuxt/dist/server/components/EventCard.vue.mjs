import _sfc_main$1 from "./ButtonComponent.vue.mjs";
import { mergeProps, unref, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderAttr, ssrInterpolate, ssrRenderComponent } from "vue/server-renderer";
import { Icon } from "@iconify/vue";
const _sfc_main = {
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
      const _component_ButtonComponent = _sfc_main$1;
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
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/EventCard.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=EventCard.vue.mjs.map
