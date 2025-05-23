import { _ as __nuxt_component_0 } from './nuxt-link.mjs';
import { ref, computed, unref, withCtx, createTextVNode, toDisplayString, createVNode, isRef, createBlock, openBlock, Fragment, renderList, useSSRContext, mergeProps } from 'file:///Users/lgalassi/workspace/lilaPiemonte/node_modules/vue/index.mjs';
import { ssrRenderList, ssrRenderClass, ssrRenderComponent, ssrInterpolate, ssrRenderAttr, ssrRenderAttrs, ssrRenderSlot } from 'file:///Users/lgalassi/workspace/lilaPiemonte/node_modules/vue/server-renderer/index.mjs';
import { Icon } from 'file:///Users/lgalassi/workspace/lilaPiemonte/node_modules/@iconify/vue/dist/iconify.mjs';
import { g as goto } from './index.mjs';
import script from './index282.mjs';
import { f as useRoute, _ as _export_sfc } from './server.mjs';
import { d as data } from './data.json.mjs';
import 'file:///Users/lgalassi/workspace/lilaPiemonte/node_modules/ufo/dist/index.mjs';
import 'file:///Users/lgalassi/workspace/lilaPiemonte/node_modules/@primeuix/utils/index.mjs';
import 'file:///Users/lgalassi/workspace/lilaPiemonte/node_modules/@primeuix/utils/dom/index.mjs';
import 'file:///Users/lgalassi/workspace/lilaPiemonte/node_modules/@primeuix/utils/zindex/index.mjs';
import './index19.mjs';
import './index10.mjs';
import 'file:///Users/lgalassi/workspace/lilaPiemonte/node_modules/@primeuix/utils/object/index.mjs';
import './index11.mjs';
import 'file:///Users/lgalassi/workspace/lilaPiemonte/node_modules/@primeuix/styled/index.mjs';
import './index237.mjs';
import './index5.mjs';
import './index2108.mjs';
import 'file:///Users/lgalassi/workspace/lilaPiemonte/node_modules/@primeuix/styles/badge/index.mjs';
import 'file:///Users/lgalassi/workspace/lilaPiemonte/node_modules/hookable/dist/index.mjs';
import 'file:///Users/lgalassi/workspace/lilaPiemonte/node_modules/unctx/dist/index.mjs';
import 'file:///Users/lgalassi/workspace/lilaPiemonte/node_modules/h3/dist/index.mjs';
import 'file:///Users/lgalassi/workspace/lilaPiemonte/node_modules/vue-router/dist/vue-router.node.mjs';
import 'file:///Users/lgalassi/workspace/lilaPiemonte/node_modules/radix3/dist/index.mjs';
import 'file:///Users/lgalassi/workspace/lilaPiemonte/node_modules/defu/dist/defu.mjs';
import 'file:///Users/lgalassi/workspace/lilaPiemonte/node_modules/@primeuix/utils/eventbus/index.mjs';
import 'file:///Users/lgalassi/workspace/lilaPiemonte/node_modules/@primeuix/styles/base/index.mjs';
import './index8.mjs';
import './index13.mjs';
import 'file:///Users/lgalassi/workspace/lilaPiemonte/node_modules/@primeuix/utils/uuid/index.mjs';
import 'file:///Users/lgalassi/workspace/lilaPiemonte/node_modules/@primeuix/styles/ripple/index.mjs';
import 'file:///Users/lgalassi/workspace/lilaPiemonte/node_modules/@primeuix/styles/button/index.mjs';
import './index38.mjs';
import './index7.mjs';
import './index42.mjs';
import 'file:///Users/lgalassi/workspace/lilaPiemonte/node_modules/@primeuix/styles/dialog/index.mjs';

const _sfc_main$2 = {
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
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/HeaderComponent.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};

const _sfc_main$1 = {
  __name: "FooterComponent",
  __ssrInlineRender: true,
  setup(__props) {
    const footer = ref(data.footer);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex flex-col items-center justify-center gap-4 py-12 uppercase lg:flex-row bg-crimson" }, _attrs))}><span>${ssrInterpolate(unref(footer).name)}</span><span>© ${ssrInterpolate((/* @__PURE__ */ new Date()).getFullYear())} ${ssrInterpolate(unref(footer).copyright)}</span><span>${unref(footer).referral ?? ""}</span></div>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/FooterComponent.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};

const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_HeaderComponent = _sfc_main$2;
  const _component_FooterComponent = _sfc_main$1;
  _push(`<div${ssrRenderAttrs(_attrs)}>`);
  _push(ssrRenderComponent(_component_HeaderComponent, null, null, _parent));
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(ssrRenderComponent(_component_FooterComponent, null, null, _parent));
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
