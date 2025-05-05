import __nuxt_component_0 from "../node_modules/nuxt/dist/app/components/nuxt-link.mjs";
import { ref, computed, unref, withCtx, createTextVNode, toDisplayString, createVNode, isRef, createBlock, openBlock, Fragment, renderList, useSSRContext } from "vue";
import { ssrRenderList, ssrRenderClass, ssrRenderComponent, ssrInterpolate, ssrRenderAttr } from "vue/server-renderer";
import { Icon } from "@iconify/vue";
import { goto } from "../utils/index.mjs";
import script from "../node_modules/primevue/dialog/index2.mjs";
import { useRoute } from "../node_modules/nuxt/dist/app/composables/router.mjs";
const _sfc_main = {
  __name: "HeaderComponent",
  __ssrInlineRender: true,
  setup(__props) {
    const route = useRoute();
    const leftLinks = ref([]);
    const rightLinks = ref([]);
    const logo = ref("");
    const visible = ref(false);
    const goToLink = async (href) => {
      await goto(href);
      visible.value = false;
    };
    const activeLink = computed(() => {
      const links = [...leftLinks.value, ...rightLinks.value];
      return links.find((l) => l.href === route.path);
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<!--[--><div class="fixed flex-row justify-between hidden w-full h-16 p-2 text-white bg-black lg:flex backdrop-blur-md bg-opacity-15"><div class="flex flex-row items-center gap-6 montserrat"><!--[-->`);
      ssrRenderList(unref(leftLinks), (ll, index) => {
        _push(`<div class="${ssrRenderClass(ll.href == unref(activeLink).href ? "underline font-semibold" : "")}">`);
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
        _push(`<div class="${ssrRenderClass(rl.href == unref(activeLink).href ? "underline font-semibold" : "")}">`);
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
      _push(`<!--]--></div></div><div class="fixed z-50 flex right-8 top-8 lg:hidden"><div class="flex justify-center card">`);
      _push(ssrRenderComponent(unref(Icon), {
        icon: "solar:hamburger-menu-line-duotone",
        width: "64",
        class: "text-black border-2 border-black backdrop-blur-sm sharp-shadow-sm shadow-black",
        onClick: ($event) => visible.value = true
      }, null, _parent));
      _push(ssrRenderComponent(unref(script), {
        visible: unref(visible),
        "onUpdate:visible": ($event) => isRef(visible) ? visible.value = $event : null,
        modal: "",
        style: { width: "25rem" }
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex flex-col gap-6"${_scopeId}><div class="flex flex-col items-center gap-6 montserrat"${_scopeId}><!--[-->`);
            ssrRenderList(unref(leftLinks), (ll, index) => {
              _push2(`<div class="${ssrRenderClass(ll.active ? "underline font-semibold" : "")}"${_scopeId}><div${_scopeId}>${ssrInterpolate(ll.title)}</div></div>`);
            });
            _push2(`<!--]--></div><div class="flex flex-col items-center gap-6 montserrat"${_scopeId}><!--[-->`);
            ssrRenderList(unref(rightLinks), (rl, index) => {
              _push2(`<div class="${ssrRenderClass(rl.active ? "underline font-semibold" : "")}"${_scopeId}>`);
              if (index == unref(rightLinks).length - 1) {
                _push2(`<div class="flex flex-row items-center gap-3 px-2 py-1 font-semibold text-red-600 transition-all duration-300 bg-white border-2 border-red-600 hover:scale-105 sharp-shadow-sm shadow-red-600"${_scopeId}>`);
                _push2(ssrRenderComponent(unref(Icon), { icon: "noto-v1:growing-heart" }, null, _parent2, _scopeId));
                _push2(` ${ssrInterpolate(rl.title)}</div>`);
              } else {
                _push2(`<div${_scopeId}>${ssrInterpolate(rl.title)}</div>`);
              }
              _push2(`</div>`);
            });
            _push2(`<!--]--></div></div>`);
          } else {
            return [
              createVNode("div", { class: "flex flex-col gap-6" }, [
                createVNode("div", { class: "flex flex-col items-center gap-6 montserrat" }, [
                  (openBlock(true), createBlock(Fragment, null, renderList(unref(leftLinks), (ll, index) => {
                    return openBlock(), createBlock("div", {
                      key: `ll_${index}`,
                      class: ll.active ? "underline font-semibold" : ""
                    }, [
                      createVNode("div", {
                        onClick: ($event) => goToLink(ll.href)
                      }, toDisplayString(ll.title), 9, ["onClick"])
                    ], 2);
                  }), 128))
                ]),
                createVNode("div", { class: "flex flex-col items-center gap-6 montserrat" }, [
                  (openBlock(true), createBlock(Fragment, null, renderList(unref(rightLinks), (rl, index) => {
                    return openBlock(), createBlock("div", {
                      key: `rl_${index}`,
                      class: rl.active ? "underline font-semibold" : ""
                    }, [
                      index == unref(rightLinks).length - 1 ? (openBlock(), createBlock("div", {
                        key: 0,
                        class: "flex flex-row items-center gap-3 px-2 py-1 font-semibold text-red-600 transition-all duration-300 bg-white border-2 border-red-600 hover:scale-105 sharp-shadow-sm shadow-red-600",
                        onClick: ($event) => goToLink(rl.href)
                      }, [
                        createVNode(unref(Icon), { icon: "noto-v1:growing-heart" }),
                        createTextVNode(" " + toDisplayString(rl.title), 1)
                      ], 8, ["onClick"])) : (openBlock(), createBlock("div", {
                        key: 1,
                        onClick: ($event) => goToLink(rl.href)
                      }, toDisplayString(rl.title), 9, ["onClick"]))
                    ], 2);
                  }), 128))
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div><!--]-->`);
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
