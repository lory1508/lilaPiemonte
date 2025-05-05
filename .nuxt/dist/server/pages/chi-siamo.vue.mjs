import { ref, mergeProps, unref, withCtx, createVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrInterpolate, ssrRenderList, ssrRenderComponent, ssrRenderAttr } from "vue/server-renderer";
import _sfc_main$1 from "../components/ButtonComponent.vue.mjs";
import { goto } from "../utils/index.mjs";
import { Icon } from "@iconify/vue";
import data from "../utils/data.json.mjs";
import _export_sfc from "../_virtual/_plugin-vue_export-helper.mjs";
const _sfc_main = {
  __name: "chi-siamo",
  __ssrInlineRender: true,
  setup(__props) {
    const chiSiamo2 = ref(data.chiSiamo);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex flex-col" }, _attrs))} data-v-8945a68b><div class="flex justify-center pt-24 pb-8 bg-softWarmRed" data-v-8945a68b><h2 class="text-5xl font-bold text-center text-white uppercase" data-v-8945a68b>${ssrInterpolate(unref(chiSiamo2).title)}</h2></div><div class="flex flex-col gap-4 px-6 py-8 text-black bg-white" data-v-8945a68b><!--[-->`);
      ssrRenderList(unref(chiSiamo2).content, (item, index) => {
        _push(`<span data-v-8945a68b>${item ?? ""}</span>`);
      });
      _push(`<!--]--><div class="flex flex-col items-center gap-6" data-v-8945a68b>`);
      _push(ssrRenderComponent(_sfc_main$1, {
        label: unref(chiSiamo2).btnStatuto.title,
        color: { text: "softWarmRed", bg: "white", shadow: "softWarmRed" },
        class: "!p-4 text-xl",
        onClick: ($event) => unref(goto)(unref(chiSiamo2).btnStatuto.href, "_blank")
      }, {
        "left-slot": withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(Icon), {
              icon: "solar:download-minimalistic-bold-duotone",
              height: "32"
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(Icon), {
                icon: "solar:download-minimalistic-bold-duotone",
                height: "32"
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="flex flex-col gap-12 lg:flex-row" data-v-8945a68b><!--[-->`);
      ssrRenderList(unref(chiSiamo2).rendiconto, (item) => {
        _push(`<div class="flex flex-row border-2 border-softWarmRed" data-v-8945a68b><div class="flex items-center p-4 text-4xl font-bold text-softWarmRed" data-v-8945a68b>${ssrInterpolate(item.year)}</div><div class="flex flex-col gap-4 p-4 bg-softWarmRed" data-v-8945a68b>`);
        _push(ssrRenderComponent(_sfc_main$1, {
          label: item.nota.title,
          color: { text: "softWarmRed", bg: "white", shadow: "black" },
          class: "ml-2",
          onClick: ($event) => unref(goto)(item.nota.href, "_blank")
        }, null, _parent));
        _push(ssrRenderComponent(_sfc_main$1, {
          label: item.rendiconto.title,
          color: { text: "softWarmRed", bg: "white", shadow: "black" },
          class: "ml-2",
          onClick: ($event) => unref(goto)(item.rendiconto.href, "_blank")
        }, null, _parent));
        _push(`</div></div>`);
      });
      _push(`<!--]--></div></div></div><img${ssrRenderAttr("src", unref(chiSiamo2).imgFooter.url)}${ssrRenderAttr("alt", unref(chiSiamo2).imgFooter.alt)} data-v-8945a68b></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/chi-siamo.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const chiSiamo = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-8945a68b"]]);
export {
  chiSiamo as default
};
//# sourceMappingURL=chi-siamo.vue.mjs.map
