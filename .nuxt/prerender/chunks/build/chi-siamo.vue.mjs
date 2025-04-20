import { ref, mergeProps, unref, withCtx, createVNode, useSSRContext } from 'file:///Users/lgalassi/workspace/lilaPiemonte/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderList, ssrRenderComponent, ssrRenderAttr } from 'file:///Users/lgalassi/workspace/lilaPiemonte/node_modules/vue/server-renderer/index.mjs';
import { d as data, _ as _sfc_main$1 } from './data.json.mjs';
import { g as goto } from './index.mjs';
import { Icon } from 'file:///Users/lgalassi/workspace/lilaPiemonte/node_modules/@iconify/vue/dist/iconify.mjs';
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

const _sfc_main = {
  __name: "chi-siamo",
  __ssrInlineRender: true,
  setup(__props) {
    ref(false);
    const chiSiamo = ref(data.chiSiamo);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex flex-col" }, _attrs))}><div class="flex justify-center pt-24 pb-8 bg-softWarmRed"><h2 class="text-5xl font-bold text-center text-white uppercase">${ssrInterpolate(unref(chiSiamo).title)}</h2></div><div class="flex flex-col gap-4 px-6 py-8 text-black bg-white"><!--[-->`);
      ssrRenderList(unref(chiSiamo).content, (item, index) => {
        _push(`<span>${item ?? ""}</span>`);
      });
      _push(`<!--]--><div class="flex flex-col items-center gap-6">`);
      _push(ssrRenderComponent(_sfc_main$1, {
        label: unref(chiSiamo).btnStatuto.title,
        color: { text: "softWarmRed", bg: "white", shadow: "softWarmRed" },
        class: "!p-4 text-xl",
        onClick: ($event) => unref(goto)(unref(chiSiamo).btnStatuto.href, "_blank")
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
      _push(`<div class="flex flex-col gap-12 lg:flex-row"><!--[-->`);
      ssrRenderList(unref(chiSiamo).rendiconto, (item) => {
        _push(`<div class="flex flex-row border-2 border-softWarmRed"><div class="flex items-center p-4 text-4xl font-bold text-softWarmRed">${ssrInterpolate(item.year)}</div><div class="flex flex-col gap-4 p-4 bg-softWarmRed">`);
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
      _push(`<!--]--></div></div></div><img${ssrRenderAttr("src", unref(chiSiamo).imgFooter.url)}${ssrRenderAttr("alt", unref(chiSiamo).imgFooter.alt)}></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/chi-siamo.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=chi-siamo.vue.mjs.map
