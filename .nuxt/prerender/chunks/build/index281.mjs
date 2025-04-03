import { $dt } from 'file:///Users/lgalassi/workspace/lilaPiemonte/node_modules/@primeuix/styled/index.mjs';
import { focus, isTouchDevice, absolutePosition, getOffset, addClass } from 'file:///Users/lgalassi/workspace/lilaPiemonte/node_modules/@primeuix/utils/dom/index.mjs';
import { ZIndex } from 'file:///Users/lgalassi/workspace/lilaPiemonte/node_modules/@primeuix/utils/zindex/index.mjs';
import { C as ConnectedOverlayScrollHandler } from './index3.mjs';
import script$3 from './index237.mjs';
import { B as BaseStyle, C as ConfirmationEventBus } from './server.mjs';
import { F as FocusTrap } from './index38.mjs';
import { O as OverlayEventBus } from './index6.mjs';
import { s as script$2 } from './index7.mjs';
import { s as script$4 } from './index11.mjs';
import { style } from 'file:///Users/lgalassi/workspace/lilaPiemonte/node_modules/@primeuix/styles/confirmpopup/index.mjs';
import { resolveComponent, resolveDirective, createBlock, openBlock, withCtx, createVNode, Transition, mergeProps, withDirectives, createCommentVNode, createElementBlock, renderSlot, Fragment, createElementVNode, resolveDynamicComponent, normalizeClass, toDisplayString, createSlots } from 'file:///Users/lgalassi/workspace/lilaPiemonte/node_modules/vue/index.mjs';
import 'file:///Users/lgalassi/workspace/lilaPiemonte/node_modules/@primeuix/utils/object/index.mjs';
import 'file:///Users/lgalassi/workspace/lilaPiemonte/node_modules/@primeuix/utils/index.mjs';
import './index5.mjs';
import './index10.mjs';
import './index2108.mjs';
import 'file:///Users/lgalassi/workspace/lilaPiemonte/node_modules/@primeuix/styles/badge/index.mjs';
import 'file:///Users/lgalassi/workspace/lilaPiemonte/node_modules/hookable/dist/index.mjs';
import 'file:///Users/lgalassi/workspace/lilaPiemonte/node_modules/unctx/dist/index.mjs';
import 'file:///Users/lgalassi/workspace/lilaPiemonte/node_modules/h3/dist/index.mjs';
import 'file:///Users/lgalassi/workspace/lilaPiemonte/node_modules/vue-router/dist/vue-router.node.mjs';
import 'file:///Users/lgalassi/workspace/lilaPiemonte/node_modules/radix3/dist/index.mjs';
import 'file:///Users/lgalassi/workspace/lilaPiemonte/node_modules/defu/dist/defu.mjs';
import 'file:///Users/lgalassi/workspace/lilaPiemonte/node_modules/ufo/dist/index.mjs';
import 'file:///Users/lgalassi/workspace/lilaPiemonte/node_modules/@primeuix/utils/eventbus/index.mjs';
import 'file:///Users/lgalassi/workspace/lilaPiemonte/node_modules/@primeuix/styles/base/index.mjs';
import 'file:///Users/lgalassi/workspace/lilaPiemonte/node_modules/vue/server-renderer/index.mjs';
import './index8.mjs';
import './index13.mjs';
import 'file:///Users/lgalassi/workspace/lilaPiemonte/node_modules/@primeuix/utils/uuid/index.mjs';
import 'file:///Users/lgalassi/workspace/lilaPiemonte/node_modules/@primeuix/styles/ripple/index.mjs';
import 'file:///Users/lgalassi/workspace/lilaPiemonte/node_modules/@primeuix/styles/button/index.mjs';

var classes = {
  root: "p-confirmpopup p-component",
  content: "p-confirmpopup-content",
  icon: "p-confirmpopup-icon",
  message: "p-confirmpopup-message",
  footer: "p-confirmpopup-footer",
  pcRejectButton: "p-confirmpopup-reject-button",
  pcAcceptButton: "p-confirmpopup-accept-button"
};
var ConfirmPopupStyle = BaseStyle.extend({
  name: "confirmpopup",
  style,
  classes
});

var script$1 = {
  name: "BaseConfirmPopup",
  "extends": script$4,
  props: {
    group: String
  },
  style: ConfirmPopupStyle,
  provide: function provide() {
    return {
      $pcConfirmPopup: this,
      $parentInstance: this
    };
  }
};
var script = {
  name: "ConfirmPopup",
  "extends": script$1,
  inheritAttrs: false,
  data: function data() {
    return {
      visible: false,
      confirmation: null,
      autoFocusAccept: null,
      autoFocusReject: null,
      target: null
    };
  },
  target: null,
  outsideClickListener: null,
  scrollHandler: null,
  resizeListener: null,
  container: null,
  confirmListener: null,
  closeListener: null,
  mounted: function mounted() {
    var _this = this;
    this.confirmListener = function(options) {
      if (!options) {
        return;
      }
      if (options.group === _this.group) {
        _this.confirmation = options;
        _this.target = options.target;
        if (_this.confirmation.onShow) {
          _this.confirmation.onShow();
        }
        _this.visible = true;
      }
    };
    this.closeListener = function() {
      _this.visible = false;
      _this.confirmation = null;
    };
    ConfirmationEventBus.on("confirm", this.confirmListener);
    ConfirmationEventBus.on("close", this.closeListener);
  },
  beforeUnmount: function beforeUnmount() {
    ConfirmationEventBus.off("confirm", this.confirmListener);
    ConfirmationEventBus.off("close", this.closeListener);
    this.unbindOutsideClickListener();
    if (this.scrollHandler) {
      this.scrollHandler.destroy();
      this.scrollHandler = null;
    }
    this.unbindResizeListener();
    if (this.container) {
      ZIndex.clear(this.container);
      this.container = null;
    }
    this.target = null;
    this.confirmation = null;
  },
  methods: {
    accept: function accept() {
      if (this.confirmation.accept) {
        this.confirmation.accept();
      }
      this.visible = false;
    },
    reject: function reject() {
      if (this.confirmation.reject) {
        this.confirmation.reject();
      }
      this.visible = false;
    },
    onHide: function onHide() {
      if (this.confirmation.onHide) {
        this.confirmation.onHide();
      }
      this.visible = false;
    },
    onAcceptKeydown: function onAcceptKeydown(event) {
      if (event.code === "Space" || event.code === "Enter" || event.code === "NumpadEnter") {
        this.accept();
        focus(this.target);
        event.preventDefault();
      }
    },
    onRejectKeydown: function onRejectKeydown(event) {
      if (event.code === "Space" || event.code === "Enter" || event.code === "NumpadEnter") {
        this.reject();
        focus(this.target);
        event.preventDefault();
      }
    },
    onEnter: function onEnter(el) {
      this.autoFocusAccept = this.confirmation.defaultFocus === void 0 || this.confirmation.defaultFocus === "accept" ? true : false;
      this.autoFocusReject = this.confirmation.defaultFocus === "reject" ? true : false;
      this.target = this.target || (void 0).activeElement;
      this.bindOutsideClickListener();
      this.bindScrollListener();
      this.bindResizeListener();
      ZIndex.set("overlay", el, this.$primevue.config.zIndex.overlay);
    },
    onAfterEnter: function onAfterEnter() {
      this.focus();
    },
    onLeave: function onLeave() {
      this.autoFocusAccept = null;
      this.autoFocusReject = null;
      focus(this.target);
      this.target = null;
      this.unbindOutsideClickListener();
      this.unbindScrollListener();
      this.unbindResizeListener();
    },
    onAfterLeave: function onAfterLeave(el) {
      ZIndex.clear(el);
    },
    alignOverlay: function alignOverlay() {
      absolutePosition(this.container, this.target, false);
      var containerOffset = getOffset(this.container);
      var targetOffset = getOffset(this.target);
      var arrowLeft = 0;
      if (containerOffset.left < targetOffset.left) {
        arrowLeft = targetOffset.left - containerOffset.left;
      }
      this.container.style.setProperty($dt("confirmpopup.arrow.left").name, "".concat(arrowLeft, "px"));
      if (containerOffset.top < targetOffset.top) {
        this.container.setAttribute("data-p-confirmpopup-flipped", "true");
        !this.isUnstyled && addClass(this.container, "p-confirmpopup-flipped");
      }
    },
    bindOutsideClickListener: function bindOutsideClickListener() {
      var _this2 = this;
      if (!this.outsideClickListener) {
        this.outsideClickListener = function(event) {
          if (_this2.visible && _this2.container && !_this2.container.contains(event.target) && !_this2.isTargetClicked(event)) {
            if (_this2.confirmation.onHide) {
              _this2.confirmation.onHide();
            }
            _this2.visible = false;
          } else {
            _this2.alignOverlay();
          }
        };
        (void 0).addEventListener("click", this.outsideClickListener);
      }
    },
    unbindOutsideClickListener: function unbindOutsideClickListener() {
      if (this.outsideClickListener) {
        (void 0).removeEventListener("click", this.outsideClickListener);
        this.outsideClickListener = null;
      }
    },
    bindScrollListener: function bindScrollListener() {
      var _this3 = this;
      if (!this.scrollHandler) {
        this.scrollHandler = new ConnectedOverlayScrollHandler(this.target, function() {
          if (_this3.visible) {
            _this3.visible = false;
          }
        });
      }
      this.scrollHandler.bindScrollListener();
    },
    unbindScrollListener: function unbindScrollListener() {
      if (this.scrollHandler) {
        this.scrollHandler.unbindScrollListener();
      }
    },
    bindResizeListener: function bindResizeListener() {
      var _this4 = this;
      if (!this.resizeListener) {
        this.resizeListener = function() {
          if (_this4.visible && !isTouchDevice()) {
            _this4.visible = false;
          }
        };
        (void 0).addEventListener("resize", this.resizeListener);
      }
    },
    unbindResizeListener: function unbindResizeListener() {
      if (this.resizeListener) {
        (void 0).removeEventListener("resize", this.resizeListener);
        this.resizeListener = null;
      }
    },
    focus: function focus2() {
      var focusTarget = this.container.querySelector("[autofocus]");
      if (focusTarget) {
        focusTarget.focus({
          preventScroll: true
        });
      }
    },
    isTargetClicked: function isTargetClicked(event) {
      return this.target && (this.target === event.target || this.target.contains(event.target));
    },
    containerRef: function containerRef(el) {
      this.container = el;
    },
    onOverlayClick: function onOverlayClick(event) {
      OverlayEventBus.emit("overlay-click", {
        originalEvent: event,
        target: this.target
      });
    },
    onOverlayKeydown: function onOverlayKeydown(event) {
      if (event.code === "Escape") {
        ConfirmationEventBus.emit("close", this.closeListener);
        focus(this.target);
      }
    }
  },
  computed: {
    message: function message() {
      return this.confirmation ? this.confirmation.message : null;
    },
    acceptLabel: function acceptLabel() {
      if (this.confirmation) {
        var _confirmation$acceptP;
        var confirmation = this.confirmation;
        return confirmation.acceptLabel || ((_confirmation$acceptP = confirmation.acceptProps) === null || _confirmation$acceptP === void 0 ? void 0 : _confirmation$acceptP.label) || this.$primevue.config.locale.accept;
      }
      return this.$primevue.config.locale.accept;
    },
    rejectLabel: function rejectLabel() {
      if (this.confirmation) {
        var _confirmation$rejectP;
        var confirmation = this.confirmation;
        return confirmation.rejectLabel || ((_confirmation$rejectP = confirmation.rejectProps) === null || _confirmation$rejectP === void 0 ? void 0 : _confirmation$rejectP.label) || this.$primevue.config.locale.reject;
      }
      return this.$primevue.config.locale.reject;
    },
    acceptIcon: function acceptIcon() {
      var _this$confirmation;
      return this.confirmation ? this.confirmation.acceptIcon : (_this$confirmation = this.confirmation) !== null && _this$confirmation !== void 0 && _this$confirmation.acceptProps ? this.confirmation.acceptProps.icon : null;
    },
    rejectIcon: function rejectIcon() {
      var _this$confirmation2;
      return this.confirmation ? this.confirmation.rejectIcon : (_this$confirmation2 = this.confirmation) !== null && _this$confirmation2 !== void 0 && _this$confirmation2.rejectProps ? this.confirmation.rejectProps.icon : null;
    }
  },
  components: {
    Button: script$3,
    Portal: script$2
  },
  directives: {
    focustrap: FocusTrap
  }
};
var _hoisted_1 = ["aria-modal"];
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_Button = resolveComponent("Button");
  var _component_Portal = resolveComponent("Portal");
  var _directive_focustrap = resolveDirective("focustrap");
  return openBlock(), createBlock(_component_Portal, null, {
    "default": withCtx(function() {
      return [createVNode(Transition, mergeProps({
        name: "p-confirmpopup",
        onEnter: $options.onEnter,
        onAfterEnter: $options.onAfterEnter,
        onLeave: $options.onLeave,
        onAfterLeave: $options.onAfterLeave
      }, _ctx.ptm("transition")), {
        "default": withCtx(function() {
          var _$data$confirmation$r, _$data$confirmation$r2, _$data$confirmation$a;
          return [$data.visible ? withDirectives((openBlock(), createElementBlock("div", mergeProps({
            key: 0,
            ref: $options.containerRef,
            role: "alertdialog",
            "class": _ctx.cx("root"),
            "aria-modal": $data.visible,
            onClick: _cache[2] || (_cache[2] = function() {
              return $options.onOverlayClick && $options.onOverlayClick.apply($options, arguments);
            }),
            onKeydown: _cache[3] || (_cache[3] = function() {
              return $options.onOverlayKeydown && $options.onOverlayKeydown.apply($options, arguments);
            })
          }, _ctx.ptmi("root")), [_ctx.$slots.container ? renderSlot(_ctx.$slots, "container", {
            key: 0,
            message: $data.confirmation,
            acceptCallback: $options.accept,
            rejectCallback: $options.reject
          }) : (openBlock(), createElementBlock(Fragment, {
            key: 1
          }, [!_ctx.$slots.message ? (openBlock(), createElementBlock("div", mergeProps({
            key: 0,
            "class": _ctx.cx("content")
          }, _ctx.ptm("content")), [renderSlot(_ctx.$slots, "icon", {}, function() {
            return [_ctx.$slots.icon ? (openBlock(), createBlock(resolveDynamicComponent(_ctx.$slots.icon), {
              key: 0,
              "class": normalizeClass(_ctx.cx("icon"))
            }, null, 8, ["class"])) : $data.confirmation.icon ? (openBlock(), createElementBlock("span", mergeProps({
              key: 1,
              "class": [$data.confirmation.icon, _ctx.cx("icon")]
            }, _ctx.ptm("icon")), null, 16)) : createCommentVNode("", true)];
          }), createElementVNode("span", mergeProps({
            "class": _ctx.cx("message")
          }, _ctx.ptm("message")), toDisplayString($data.confirmation.message), 17)], 16)) : (openBlock(), createBlock(resolveDynamicComponent(_ctx.$slots.message), {
            key: 1,
            message: $data.confirmation
          }, null, 8, ["message"])), createElementVNode("div", mergeProps({
            "class": _ctx.cx("footer")
          }, _ctx.ptm("footer")), [createVNode(_component_Button, mergeProps({
            "class": [_ctx.cx("pcRejectButton"), $data.confirmation.rejectClass],
            autofocus: $data.autoFocusReject,
            unstyled: _ctx.unstyled,
            size: ((_$data$confirmation$r = $data.confirmation.rejectProps) === null || _$data$confirmation$r === void 0 ? void 0 : _$data$confirmation$r.size) || "small",
            text: ((_$data$confirmation$r2 = $data.confirmation.rejectProps) === null || _$data$confirmation$r2 === void 0 ? void 0 : _$data$confirmation$r2.text) || false,
            onClick: _cache[0] || (_cache[0] = function($event) {
              return $options.reject();
            }),
            onKeydown: $options.onRejectKeydown
          }, $data.confirmation.rejectProps, {
            label: $options.rejectLabel,
            pt: _ctx.ptm("pcRejectButton")
          }), createSlots({
            _: 2
          }, [$options.rejectIcon || _ctx.$slots.rejecticon ? {
            name: "icon",
            fn: withCtx(function(iconProps) {
              return [renderSlot(_ctx.$slots, "rejecticon", {}, function() {
                return [createElementVNode("span", mergeProps({
                  "class": [$options.rejectIcon, iconProps["class"]]
                }, _ctx.ptm("pcRejectButton")["icon"], {
                  "data-pc-section": "rejectbuttonicon"
                }), null, 16)];
              })];
            }),
            key: "0"
          } : void 0]), 1040, ["class", "autofocus", "unstyled", "size", "text", "onKeydown", "label", "pt"]), createVNode(_component_Button, mergeProps({
            "class": [_ctx.cx("pcAcceptButton"), $data.confirmation.acceptClass],
            autofocus: $data.autoFocusAccept,
            unstyled: _ctx.unstyled,
            size: ((_$data$confirmation$a = $data.confirmation.acceptProps) === null || _$data$confirmation$a === void 0 ? void 0 : _$data$confirmation$a.size) || "small",
            onClick: _cache[1] || (_cache[1] = function($event) {
              return $options.accept();
            }),
            onKeydown: $options.onAcceptKeydown
          }, $data.confirmation.acceptProps, {
            label: $options.acceptLabel,
            pt: _ctx.ptm("pcAcceptButton")
          }), createSlots({
            _: 2
          }, [$options.acceptIcon || _ctx.$slots.accepticon ? {
            name: "icon",
            fn: withCtx(function(iconProps) {
              return [renderSlot(_ctx.$slots, "accepticon", {}, function() {
                return [createElementVNode("span", mergeProps({
                  "class": [$options.acceptIcon, iconProps["class"]]
                }, _ctx.ptm("pcAcceptButton")["icon"], {
                  "data-pc-section": "acceptbuttonicon"
                }), null, 16)];
              })];
            }),
            key: "0"
          } : void 0]), 1040, ["class", "autofocus", "unstyled", "size", "onKeydown", "label", "pt"])], 16)], 64))], 16, _hoisted_1)), [[_directive_focustrap]]) : createCommentVNode("", true)];
        }),
        _: 3
      }, 16, ["onEnter", "onAfterEnter", "onLeave", "onAfterLeave"])];
    }),
    _: 3
  });
}
script.render = render;

export { script as default };
//# sourceMappingURL=index281.mjs.map
