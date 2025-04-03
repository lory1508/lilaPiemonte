import { cn } from 'file:///Users/lgalassi/workspace/lilaPiemonte/node_modules/@primeuix/utils/index.mjs';
import { s as script$2 } from './index31.mjs';
import { s as script$3 } from './index35.mjs';
import { R as Ripple } from './index8.mjs';
import { s as script$4 } from './index11.mjs';
import { style } from 'file:///Users/lgalassi/workspace/lilaPiemonte/node_modules/@primeuix/styles/fieldset/index.mjs';
import { B as BaseStyle } from './server.mjs';
import { resolveDirective, createElementBlock, openBlock, mergeProps, createElementVNode, createVNode, renderSlot, createCommentVNode, withDirectives, toDisplayString, normalizeClass, createBlock, resolveDynamicComponent, Transition, withCtx, vShow } from 'file:///Users/lgalassi/workspace/lilaPiemonte/node_modules/vue/index.mjs';
import './index10.mjs';
import 'file:///Users/lgalassi/workspace/lilaPiemonte/node_modules/@primeuix/utils/object/index.mjs';
import 'file:///Users/lgalassi/workspace/lilaPiemonte/node_modules/@primeuix/utils/dom/index.mjs';
import './index13.mjs';
import 'file:///Users/lgalassi/workspace/lilaPiemonte/node_modules/@primeuix/styled/index.mjs';
import 'file:///Users/lgalassi/workspace/lilaPiemonte/node_modules/@primeuix/utils/uuid/index.mjs';
import 'file:///Users/lgalassi/workspace/lilaPiemonte/node_modules/@primeuix/styles/ripple/index.mjs';
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

var classes = {
  root: function root(_ref) {
    var props = _ref.props;
    return ["p-fieldset p-component", {
      "p-fieldset-toggleable": props.toggleable
    }];
  },
  legend: "p-fieldset-legend",
  legendLabel: "p-fieldset-legend-label",
  toggleButton: "p-fieldset-toggle-button",
  toggleIcon: "p-fieldset-toggle-icon",
  contentContainer: "p-fieldset-content-container",
  content: "p-fieldset-content"
};
var FieldsetStyle = BaseStyle.extend({
  name: "fieldset",
  style,
  classes
});

var script$1 = {
  name: "BaseFieldset",
  "extends": script$4,
  props: {
    legend: String,
    toggleable: Boolean,
    collapsed: Boolean,
    toggleButtonProps: {
      type: null,
      "default": null
    }
  },
  style: FieldsetStyle,
  provide: function provide() {
    return {
      $pcFieldset: this,
      $parentInstance: this
    };
  }
};
var script = {
  name: "Fieldset",
  "extends": script$1,
  inheritAttrs: false,
  emits: ["update:collapsed", "toggle"],
  data: function data() {
    return {
      d_collapsed: this.collapsed
    };
  },
  watch: {
    collapsed: function collapsed(newValue) {
      this.d_collapsed = newValue;
    }
  },
  methods: {
    toggle: function toggle(event) {
      this.d_collapsed = !this.d_collapsed;
      this.$emit("update:collapsed", this.d_collapsed);
      this.$emit("toggle", {
        originalEvent: event,
        value: this.d_collapsed
      });
    },
    onKeyDown: function onKeyDown(event) {
      if (event.code === "Enter" || event.code === "NumpadEnter" || event.code === "Space") {
        this.toggle(event);
        event.preventDefault();
      }
    }
  },
  computed: {
    buttonAriaLabel: function buttonAriaLabel() {
      return this.toggleButtonProps && this.toggleButtonProps.ariaLabel ? this.toggleButtonProps.ariaLabel : this.legend;
    },
    dataP: function dataP() {
      return cn({
        toggleable: this.toggleable
      });
    }
  },
  directives: {
    ripple: Ripple
  },
  components: {
    PlusIcon: script$3,
    MinusIcon: script$2
  }
};
function _typeof(o) {
  "@babel/helpers - typeof";
  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o2) {
    return typeof o2;
  } : function(o2) {
    return o2 && "function" == typeof Symbol && o2.constructor === Symbol && o2 !== Symbol.prototype ? "symbol" : typeof o2;
  }, _typeof(o);
}
function ownKeys(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function(r2) {
      return Object.getOwnPropertyDescriptor(e, r2).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function _objectSpread(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2 ? ownKeys(Object(t), true).forEach(function(r2) {
      _defineProperty(e, r2, t[r2]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function(r2) {
      Object.defineProperty(e, r2, Object.getOwnPropertyDescriptor(t, r2));
    });
  }
  return e;
}
function _defineProperty(e, r, t) {
  return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: true, configurable: true, writable: true }) : e[r] = t, e;
}
function _toPropertyKey(t) {
  var i = _toPrimitive(t, "string");
  return "symbol" == _typeof(i) ? i : i + "";
}
function _toPrimitive(t, r) {
  if ("object" != _typeof(t) || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r);
    if ("object" != _typeof(i)) return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}
var _hoisted_1 = ["data-p"];
var _hoisted_2 = ["data-p"];
var _hoisted_3 = ["id"];
var _hoisted_4 = ["id", "aria-controls", "aria-expanded", "aria-label"];
var _hoisted_5 = ["id", "aria-labelledby"];
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _directive_ripple = resolveDirective("ripple");
  return openBlock(), createElementBlock("fieldset", mergeProps({
    "class": _ctx.cx("root"),
    "data-p": $options.dataP
  }, _ctx.ptmi("root")), [createElementVNode("legend", mergeProps({
    "class": _ctx.cx("legend"),
    "data-p": $options.dataP
  }, _ctx.ptm("legend")), [renderSlot(_ctx.$slots, "legend", {
    toggleCallback: $options.toggle
  }, function() {
    return [!_ctx.toggleable ? (openBlock(), createElementBlock("span", mergeProps({
      key: 0,
      id: _ctx.$id + "_header",
      "class": _ctx.cx("legendLabel")
    }, _ctx.ptm("legendLabel")), toDisplayString(_ctx.legend), 17, _hoisted_3)) : createCommentVNode("", true), _ctx.toggleable ? withDirectives((openBlock(), createElementBlock("button", mergeProps({
      key: 1,
      id: _ctx.$id + "_header",
      type: "button",
      "aria-controls": _ctx.$id + "_content",
      "aria-expanded": !$data.d_collapsed,
      "aria-label": $options.buttonAriaLabel,
      "class": _ctx.cx("toggleButton"),
      onClick: _cache[0] || (_cache[0] = function() {
        return $options.toggle && $options.toggle.apply($options, arguments);
      }),
      onKeydown: _cache[1] || (_cache[1] = function() {
        return $options.onKeyDown && $options.onKeyDown.apply($options, arguments);
      })
    }, _objectSpread(_objectSpread({}, _ctx.toggleButtonProps), _ctx.ptm("toggleButton"))), [renderSlot(_ctx.$slots, _ctx.$slots.toggleicon ? "toggleicon" : "togglericon", {
      collapsed: $data.d_collapsed,
      "class": normalizeClass(_ctx.cx("toggleIcon"))
    }, function() {
      return [(openBlock(), createBlock(resolveDynamicComponent($data.d_collapsed ? "PlusIcon" : "MinusIcon"), mergeProps({
        "class": _ctx.cx("toggleIcon")
      }, _ctx.ptm("toggleIcon")), null, 16, ["class"]))];
    }), createElementVNode("span", mergeProps({
      "class": _ctx.cx("legendLabel")
    }, _ctx.ptm("legendLabel")), toDisplayString(_ctx.legend), 17)], 16, _hoisted_4)), [[_directive_ripple]]) : createCommentVNode("", true)];
  })], 16, _hoisted_2), createVNode(Transition, mergeProps({
    name: "p-toggleable-content"
  }, _ctx.ptm("transition")), {
    "default": withCtx(function() {
      return [withDirectives(createElementVNode("div", mergeProps({
        id: _ctx.$id + "_content",
        "class": _ctx.cx("contentContainer"),
        role: "region",
        "aria-labelledby": _ctx.$id + "_header"
      }, _ctx.ptm("contentContainer")), [createElementVNode("div", mergeProps({
        "class": _ctx.cx("content")
      }, _ctx.ptm("content")), [renderSlot(_ctx.$slots, "default")], 16)], 16, _hoisted_5), [[vShow, !$data.d_collapsed]])];
    }),
    _: 3
  }, 16)], 16, _hoisted_1);
}
script.render = render;

export { script as default };
//# sourceMappingURL=index262.mjs.map
