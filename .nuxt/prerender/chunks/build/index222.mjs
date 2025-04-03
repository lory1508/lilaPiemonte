import { cn } from 'file:///Users/lgalassi/workspace/lilaPiemonte/node_modules/@primeuix/utils/index.mjs';
import { mergeProps, createElementBlock, openBlock } from 'file:///Users/lgalassi/workspace/lilaPiemonte/node_modules/vue/index.mjs';
import { s as script$2 } from './index9.mjs';
import { style } from 'file:///Users/lgalassi/workspace/lilaPiemonte/node_modules/@primeuix/styles/inputtext/index.mjs';
import { B as BaseStyle } from './server.mjs';
import './index14.mjs';
import './index11.mjs';
import 'file:///Users/lgalassi/workspace/lilaPiemonte/node_modules/@primeuix/styled/index.mjs';
import 'file:///Users/lgalassi/workspace/lilaPiemonte/node_modules/@primeuix/utils/dom/index.mjs';
import 'file:///Users/lgalassi/workspace/lilaPiemonte/node_modules/@primeuix/utils/object/index.mjs';
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
    return ["p-inputtext p-component", {
      "p-filled": instance.$filled,
      "p-inputtext-sm p-inputfield-sm": props.size === "small",
      "p-inputtext-lg p-inputfield-lg": props.size === "large",
      "p-invalid": instance.$invalid,
      "p-variant-filled": instance.$variant === "filled",
      "p-inputtext-fluid": instance.$fluid
    }];
  }
};
var InputTextStyle = BaseStyle.extend({
  name: "inputtext",
  style,
  classes
});

var script$1 = {
  name: "BaseInputText",
  "extends": script$2,
  style: InputTextStyle,
  provide: function provide() {
    return {
      $pcInputText: this,
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
  name: "InputText",
  "extends": script$1,
  inheritAttrs: false,
  methods: {
    onInput: function onInput(event) {
      this.writeValue(event.target.value, event);
    }
  },
  computed: {
    attrs: function attrs() {
      return mergeProps(this.ptmi("root", {
        context: {
          filled: this.$filled,
          disabled: this.disabled
        }
      }), this.formField);
    },
    dataP: function dataP() {
      return cn(_defineProperty({
        invalid: this.$invalid,
        fluid: this.$fluid,
        filled: this.$variant === "filled"
      }, this.size, this.size));
    }
  }
};
var _hoisted_1 = ["value", "name", "disabled", "aria-invalid", "data-p"];
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("input", mergeProps({
    type: "text",
    "class": _ctx.cx("root"),
    value: _ctx.d_value,
    name: _ctx.name,
    disabled: _ctx.disabled,
    "aria-invalid": _ctx.$invalid || void 0,
    "data-p": $options.dataP,
    onInput: _cache[0] || (_cache[0] = function() {
      return $options.onInput && $options.onInput.apply($options, arguments);
    })
  }, $options.attrs), null, 16, _hoisted_1);
}
script.render = render;

export { script as default };
//# sourceMappingURL=index222.mjs.map
