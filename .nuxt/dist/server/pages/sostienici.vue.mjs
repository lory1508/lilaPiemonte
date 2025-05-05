import { ref, mergeProps, unref, withCtx, createVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrInterpolate, ssrRenderList, ssrRenderAttr, ssrRenderComponent } from "vue/server-renderer";
import _sfc_main$1 from "../components/ButtonComponent.vue.mjs";
import { goto } from "../utils/index.mjs";
import { Icon } from "@iconify/vue";
import data from "../utils/data.json.mjs";
const _sfc_main = {
  __name: "sostienici",
  __ssrInlineRender: true,
  setup(__props) {
    const sostienici = ref(data.sostienici);
    const satispay = ref(data.sostienici.cards.satispay);
    const bonifico = ref(data.sostienici.cards.bonifico);
    const cinquePerMille = ref(data.sostienici.cards["5x1000"]);
    const paypal = ref(data.sostienici.cards.paypal);
    const codiceFiscale = ref(data.generalSettings.codiceFiscale);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex flex-col" }, _attrs))}><div class="flex justify-center pt-24 pb-8 bg-softWarmRed"><h2 class="text-5xl font-bold text-center text-white uppercase">${ssrInterpolate(unref(sostienici).title)}</h2></div><div class="flex flex-col gap-4 px-6 py-8 text-black bg-white"><!--[-->`);
      ssrRenderList(unref(sostienici).contentUp, (item, index) => {
        _push(`<span>${item ?? ""}</span>`);
      });
      _push(`<!--]--><div class="w-full lg:w-[950px] mx-auto flex justify-center my-4"><div class="grid items-stretch justify-center grid-cols-1 gap-12 lg:grid-cols-2"><div class="flex flex-col items-center justify-center border border-black sharp-shadow-md w-80 lg:w-[460px]"><div class="px-6 py-8 text-4xl font-bold uppercase text-softWarmRed">${ssrInterpolate(unref(satispay).title)}</div><div class="items-center justify-center w-full h-full px-6 py-2 mx-auto bg-softWarmRed"><img${ssrRenderAttr("src", unref(satispay).img.url)}${ssrRenderAttr("alt", unref(satispay).img.alt)} width="300" class="w-full"></div></div><div class="flex flex-col items-center justify-center border border-black lg:w-[460px] w-80 sharp-shadow-md"><div class="px-6 py-8 text-4xl font-bold text-brightCoral">${ssrInterpolate(unref(cinquePerMille).title)}</div><div class="flex flex-col w-full h-full gap-4 px-6 py-2 mx-auto bg-brightCoral"><!--[-->`);
      ssrRenderList(unref(cinquePerMille).content, (item, index) => {
        _push(`<div><div class="text-sm text-white">${item ?? ""}</div></div>`);
      });
      _push(`<!--]--><div class="w-full text-3xl font-bold text-center text-white">${ssrInterpolate(unref(codiceFiscale))}</div></div></div><div class="flex flex-col items-center justify-center border border-black lg:w-[460px] w-80 sharp-shadow-md"><div class="px-6 py-8 text-4xl font-bold text-[#14378A]">${ssrInterpolate(unref(paypal).title)}</div><div class="items-center justify-center w-full h-full px-6 py-2 flex mx-auto bg-[#14378A]">`);
      _push(ssrRenderComponent(_sfc_main$1, {
        label: unref(paypal).link.label,
        color: { text: "black", bg: "white", shadow: "black" },
        class: "ml-2",
        onClick: ($event) => unref(goto)(unref(paypal).link.href, "_blank")
      }, {
        "right-slot": withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(Icon), {
              icon: "solar:arrow-right-up-linear",
              height: "24"
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(Icon), {
                icon: "solar:arrow-right-up-linear",
                height: "24"
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div><div class="flex flex-col items-center justify-center border border-black lg:w-[460px] w-80 sharp-shadow-md"><div class="px-6 py-8 text-4xl font-bold uppercase text-crimson">${ssrInterpolate(unref(bonifico).title)}</div><div class="flex flex-col items-center justify-center w-full h-full gap-4 px-6 py-2 mx-auto bg-crimson"><!--[-->`);
      ssrRenderList(unref(bonifico).content, (item, index) => {
        _push(`<div><div class="font-mono text-white">${item ?? ""}</div></div>`);
      });
      _push(`<!--]--></div></div></div></div><!--[-->`);
      ssrRenderList(unref(sostienici).contentDown, (item, index) => {
        _push(`<span>${item ?? ""}</span>`);
      });
      _push(`<!--]--></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/sostienici.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=sostienici.vue.mjs.map
