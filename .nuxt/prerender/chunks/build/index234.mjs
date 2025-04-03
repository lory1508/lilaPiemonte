import { cn } from 'file:///Users/lgalassi/workspace/lilaPiemonte/node_modules/@primeuix/utils/index.mjs';
import { isNotEmpty } from 'file:///Users/lgalassi/workspace/lilaPiemonte/node_modules/@primeuix/utils/object/index.mjs';
import { R as Ripple } from './index8.mjs';
import { s as script$2 } from './index14.mjs';
import { style } from 'file:///Users/lgalassi/workspace/lilaPiemonte/node_modules/@primeuix/styles/togglebutton/index.mjs';
import { B as BaseStyle } from './server.mjs';
import { resolveDirective, withDirectives, createElementBlock, openBlock, mergeProps, createElementVNode, renderSlot, normalizeClass, createCommentVNode, toDisplayString } from 'file:///Users/lgalassi/workspace/lilaPiemonte/node_modules/vue/index.mjs';
import 'file:///Users/lgalassi/workspace/lilaPiemonte/node_modules/@primeuix/utils/dom/index.mjs';
import './index13.mjs';
import 'file:///Users/lgalassi/workspace/lilaPiemonte/node_modules/@primeuix/styled/index.mjs';
import 'file:///Users/lgalassi/workspace/lilaPiemonte/node_modules/@primeuix/utils/uuid/index.mjs';
import './index11.mjs';
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
    var instance = _ref.instance, props = _ref.props;
    return ["p-togglebutton p-component", {
      "p-togglebutton-checked": instance.active,
      "p-invalid": instance.$invalid,
      "p-togglebutton-sm p-inputfield-sm": props.size === "small",
      "p-togglebutton-lg p-inputfield-lg": props.size === "large"
    }];
  },
  content: "p-togglebutton-content",
  icon: "p-togglebutton-icon",
  label: "p-togglebutton-label"
};
var ToggleButtonStyle = BaseStyle.extend({
  name: "togglebutton",
  style,
  classes
});

var script$1 = {
  name: "BaseToggleButton",
  "extends": script$2,
  props: {
    onIcon: String,
    offIcon: String,
    onLabel: {
      type: String,
      "default": "Yes"
    },
    offLabel: {
      type: String,
      "default": "No"
    },
    iconPos: {
      type: String,
      "default": "left"
    },
    readonly: {
      type: Boolean,
      "default": false
    },
    tabindex: {
      type: Number,
      "default": null
    },
    ariaLabelledby: {
      type: String,
      "default": null
    },
    ariaLabel: {
      type: String,
      "default": null
    },
    size: {
      type: String,
      "default": null
    }
  },
  style: ToggleButtonStyle,
  provide: function provide() {
    return {
      $pcToggleButton: this,
      $parentInstance: this
    };
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
var script = {
  name: "ToggleButton",
  "extends": script$1,
  inheritAttrs: false,
  emits: ["change"],
  methods: {
    getPTOptions: function getPTOptions(key) {
      var _ptm = key === "root" ? this.ptmi : this.ptm;
      return _ptm(key, {
        context: {
          active: this.active,
          disabled: this.disabled
        }
      });
    },
    onChange: function onChange(event) {
      if (!this.disabled && !this.readonly) {
        this.writeValue(!this.d_value, event);
        this.$emit("change", event);
      }
    },
    onBlur: function onBlur(event) {
      var _this$formField$onBlu, _this$formField;
      (_this$formField$onBlu = (_this$formField = this.formField).onBlur) === null || _this$formField$onBlu === void 0 || _this$formField$onBlu.call(_this$formField, event);
    }
  },
  computed: {
    active: function active() {
      return this.d_value === true;
    },
    hasLabel: function hasLabel() {
      return isNotEmpty(this.onLabel) && isNotEmpty(this.offLabel);
    },
    label: function label() {
      return this.hasLabel ? this.d_value ? this.onLabel : this.offLabel : " ";
    },
    dataP: function dataP() {
      return cn(_defineProperty({
        checked: this.active,
        invalid: this.$invalid
      }, this.size, this.size));
    }
  },
  directives: {
    ripple: Ripple
  }
};
var _hoisted_1 = ["tabindex", "disabled", "aria-pressed", "aria-label", "aria-labelledby", "data-p-checked", "data-p-disabled", "data-p"];
var _hoisted_2 = ["data-p"];
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _directive_ripple = resolveDirective("ripple");
  return withDirectives((openBlock(), createElementBlock("button", mergeProps({
    type: "button",
    "class": _ctx.cx("root"),
    tabindex: _ctx.tabindex,
    disabled: _ctx.disabled,
    "aria-pressed": _ctx.d_value,
    onClick: _cache[0] || (_cache[0] = function() {
      return $options.onChange && $options.onChange.apply($options, arguments);
    }),
    onBlur: _cache[1] || (_cache[1] = function() {
      return $options.onBlur && $options.onBlur.apply($options, arguments);
    })
  }, $options.getPTOptions("root"), {
    "aria-label": _ctx.ariaLabel,
    "aria-labelledby": _ctx.ariaLabelledby,
    "data-p-checked": $options.active,
    "data-p-disabled": _ctx.disabled,
    "data-p": $options.dataP
  }), [createElementVNode("span", mergeProps({
    "class": _ctx.cx("content")
  }, $options.getPTOptions("content"), {
    "data-p": $options.dataP
  }), [renderSlot(_ctx.$slots, "default", {}, function() {
    return [renderSlot(_ctx.$slots, "icon", {
      value: _ctx.d_value,
      "class": normalizeClass(_ctx.cx("icon"))
    }, function() {
      return [_ctx.onIcon || _ctx.offIcon ? (openBlock(), createElementBlock("span", mergeProps({
        key: 0,
        "class": [_ctx.cx("icon"), _ctx.d_value ? _ctx.onIcon : _ctx.offIcon]
      }, $options.getPTOptions("icon")), null, 16)) : createCommentVNode("", true)];
    }), createElementVNode("span", mergeProps({
      "class": _ctx.cx("label")
    }, $options.getPTOptions("label")), toDisplayString($options.label), 17)];
  })], 16, _hoisted_2)], 16, _hoisted_1)), [[_directive_ripple]]);
}
script.render = render;

export { script as default };
//# sourceMappingURL=index234.mjs.map
