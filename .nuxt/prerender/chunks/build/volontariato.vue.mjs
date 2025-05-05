import { ref, mergeProps, unref, useSSRContext } from 'file:///Users/lgalassi/workspace/lilaPiemonte/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderList, ssrRenderAttr } from 'file:///Users/lgalassi/workspace/lilaPiemonte/node_modules/vue/server-renderer/index.mjs';
import { d as data } from './data.json.mjs';
import { _ as _export_sfc } from './server.mjs';
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
  __name: "volontariato",
  __ssrInlineRender: true,
  setup(__props) {
    const volontariato2 = ref(data.volontariato);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex flex-col" }, _attrs))} data-v-a6a03934><div class="flex justify-center pt-24 pb-8 bg-softWarmRed" data-v-a6a03934><h2 class="text-5xl font-bold text-center text-white uppercase" data-v-a6a03934>${ssrInterpolate(unref(volontariato2).title)}</h2></div><div class="flex flex-col lg:flex-row" data-v-a6a03934><div class="flex flex-col gap-4 px-6 py-8 text-black bg-white" data-v-a6a03934><!--[-->`);
      ssrRenderList(unref(volontariato2).content, (item, index) => {
        _push(`<span data-v-a6a03934>${item ?? ""}</span>`);
      });
      _push(`<!--]--></div><img${ssrRenderAttr("src", unref(volontariato2).img.url)}${ssrRenderAttr("alt", unref(volontariato2).img.alt)} data-v-a6a03934></div><img${ssrRenderAttr("src", unref(volontariato2).footer.img.url)}${ssrRenderAttr("alt", unref(volontariato2).footer.img.alt)} data-v-a6a03934></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/volontariato.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const volontariato = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-a6a03934"]]);

export { volontariato as default };
//# sourceMappingURL=volontariato.vue.mjs.map
