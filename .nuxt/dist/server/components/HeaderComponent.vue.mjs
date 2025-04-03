import __nuxt_component_0 from "../node_modules/nuxt/dist/app/components/nuxt-link.mjs";
import { ref, unref, withCtx, createTextVNode, toDisplayString, createVNode, useSSRContext } from "vue";
import { ssrRenderList, ssrRenderClass, ssrRenderComponent, ssrInterpolate, ssrRenderAttr } from "vue/server-renderer";
import { Icon } from "@iconify/vue";
const _sfc_main = {
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
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/HeaderComponent.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=HeaderComponent.vue.mjs.map
