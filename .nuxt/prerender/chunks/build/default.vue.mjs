import { _ as __nuxt_component_0 } from './nuxt-link.mjs';
import { ref, unref, withCtx, createTextVNode, toDisplayString, createVNode, useSSRContext } from 'file:///Users/lgalassi/workspace/lilaPiemonte/node_modules/vue/index.mjs';
import { ssrRenderList, ssrRenderClass, ssrRenderComponent, ssrInterpolate, ssrRenderAttr, ssrRenderAttrs, ssrRenderSlot } from 'file:///Users/lgalassi/workspace/lilaPiemonte/node_modules/vue/server-renderer/index.mjs';
import { Icon } from 'file:///Users/lgalassi/workspace/lilaPiemonte/node_modules/@iconify/vue/dist/iconify.mjs';
import { _ as _export_sfc } from './server.mjs';
import 'file:///Users/lgalassi/workspace/lilaPiemonte/node_modules/ufo/dist/index.mjs';
import 'file:///Users/lgalassi/workspace/lilaPiemonte/node_modules/hookable/dist/index.mjs';
import 'file:///Users/lgalassi/workspace/lilaPiemonte/node_modules/unctx/dist/index.mjs';
import 'file:///Users/lgalassi/workspace/lilaPiemonte/node_modules/h3/dist/index.mjs';
import 'file:///Users/lgalassi/workspace/lilaPiemonte/node_modules/vue-router/dist/vue-router.node.mjs';
import 'file:///Users/lgalassi/workspace/lilaPiemonte/node_modules/radix3/dist/index.mjs';
import 'file:///Users/lgalassi/workspace/lilaPiemonte/node_modules/defu/dist/defu.mjs';

const _sfc_main$1 = {
  __name: "HeaderComponent",
  __ssrInlineRender: true,
  setup(__props) {
    const leftLinks = ref([]);
    const rightLinks = ref([]);
    const logo = ref("");
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<!--[--><div class="fixed flex-row justify-between hidden w-full h-16 p-2 text-white bg-black lg:flex backdrop-blur-md bg-opacity-15"><div class="flex flex-row items-center gap-6 montserrat"><!--[-->`);
      ssrRenderList(unref(leftLinks), (ll, index) => {
        _push(`<div class="${ssrRenderClass(ll.active ? "underline font-semibold" : "")}">`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: ll.href
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(ll.title)}`);
            } else {
              return [
                createTextVNode(toDisplayString(ll.title), 1)
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`</div>`);
      });
      _push(`<!--]--></div><img${ssrRenderAttr("src", unref(logo))} alt=""><div class="flex flex-row items-center gap-6 montserrat"><!--[-->`);
      ssrRenderList(unref(rightLinks), (rl, index) => {
        _push(`<div class="${ssrRenderClass(rl.active ? "underline font-semibold" : "")}">`);
        if (index == unref(rightLinks).length - 1) {
          _push(ssrRenderComponent(_component_NuxtLink, {
            to: rl.href,
            class: "flex flex-row items-center gap-3 px-2 py-1 font-semibold text-red-600 transition-all duration-300 bg-white border-2 border-red-600 hover:scale-105 sharp-shadow-sm shadow-red-600"
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(ssrRenderComponent(unref(Icon), { icon: "noto-v1:growing-heart" }, null, _parent2, _scopeId));
                _push2(` ${ssrInterpolate(rl.title)}`);
              } else {
                return [
                  createVNode(unref(Icon), { icon: "noto-v1:growing-heart" }),
                  createTextVNode(" " + toDisplayString(rl.title), 1)
                ];
              }
            }),
            _: 2
          }, _parent));
        } else {
          _push(ssrRenderComponent(_component_NuxtLink, {
            to: rl.href
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`${ssrInterpolate(rl.title)}`);
              } else {
                return [
                  createTextVNode(toDisplayString(rl.title), 1)
                ];
              }
            }),
            _: 2
          }, _parent));
        }
        _push(`</div>`);
      });
      _push(`<!--]--></div></div><div class="fixed z-50 flex right-8 top-8 lg:hidden">`);
      _push(ssrRenderComponent(unref(Icon), {
        icon: "solar:hamburger-menu-line-duotone",
        width: "64",
        class: "text-black border-2 border-black backdrop-blur-sm sharp-shadow-sm shadow-black"
      }, null, _parent));
      _push(`</div><!--]-->`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/HeaderComponent.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};

const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_HeaderComponent = _sfc_main$1;
  _push(`<div${ssrRenderAttrs(_attrs)}>`);
  _push(ssrRenderComponent(_component_HeaderComponent, null, null, _parent));
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/default.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _default = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { _default as default };
//# sourceMappingURL=default.vue.mjs.map
