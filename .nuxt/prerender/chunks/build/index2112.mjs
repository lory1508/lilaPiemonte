import { cn } from 'file:///Users/lgalassi/workspace/lilaPiemonte/node_modules/@primeuix/utils/index.mjs';
import { s as script$3 } from './index11.mjs';
import { style } from 'file:///Users/lgalassi/workspace/lilaPiemonte/node_modules/@primeuix/styles/metergroup/index.mjs';
import { B as BaseStyle } from './server.mjs';
import { createElementBlock, openBlock, mergeProps, Fragment, renderList, renderSlot, createElementVNode, normalizeClass, toDisplayString, resolveComponent, createCommentVNode, createVNode } from 'file:///Users/lgalassi/workspace/lilaPiemonte/node_modules/vue/index.mjs';
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
    var props = _ref.props;
    return ["p-metergroup p-component", {
      "p-metergroup-horizontal": props.orientation === "horizontal",
      "p-metergroup-vertical": props.orientation === "vertical"
    }];
  },
  meters: "p-metergroup-meters",
  meter: "p-metergroup-meter",
  labelList: function labelList(_ref2) {
    var props = _ref2.props;
    return ["p-metergroup-label-list", {
      "p-metergroup-label-list-vertical": props.labelOrientation === "vertical",
      "p-metergroup-label-list-horizontal": props.labelOrientation === "horizontal"
    }];
  },
  label: "p-metergroup-label",
  labelIcon: "p-metergroup-label-icon",
  labelMarker: "p-metergroup-label-marker",
  labelText: "p-metergroup-label-text"
};
var MeterGroupStyle = BaseStyle.extend({
  name: "metergroup",
  style,
  classes
});

var script$2 = {
  name: "MeterGroup",
  "extends": script$3,
  props: {
    value: {
      type: Array,
      "default": null
    },
    min: {
      type: Number,
      "default": 0
    },
    max: {
      type: Number,
      "default": 100
    },
    orientation: {
      type: String,
      "default": "horizontal"
    },
    labelPosition: {
      type: String,
      "default": "end"
    },
    labelOrientation: {
      type: String,
      "default": "horizontal"
    }
  },
  style: MeterGroupStyle,
  provide: function provide() {
    return {
      $pcMeterGroup: this,
      $parentInstance: this
    };
  }
};
function _typeof$1(o) {
  "@babel/helpers - typeof";
  return _typeof$1 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o2) {
    return typeof o2;
  } : function(o2) {
    return o2 && "function" == typeof Symbol && o2.constructor === Symbol && o2 !== Symbol.prototype ? "symbol" : typeof o2;
  }, _typeof$1(o);
}
function _defineProperty$1(e, r, t) {
  return (r = _toPropertyKey$1(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: true, configurable: true, writable: true }) : e[r] = t, e;
}
function _toPropertyKey$1(t) {
  var i = _toPrimitive$1(t, "string");
  return "symbol" == _typeof$1(i) ? i : i + "";
}
function _toPrimitive$1(t, r) {
  if ("object" != _typeof$1(t) || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r);
    if ("object" != _typeof$1(i)) return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}
var script$1 = {
  name: "MeterGroupLabel",
  hostName: "MeterGroup",
  "extends": script$3,
  inheritAttrs: false,
  inject: ["$pcMeterGroup"],
  props: {
    value: {
      type: Array,
      "default": null
    },
    labelPosition: {
      type: String,
      "default": "end"
    },
    labelOrientation: {
      type: String,
      "default": "horizontal"
    }
  },
  computed: {
    dataP: function dataP() {
      return cn(_defineProperty$1({}, this.$pcMeterGroup.labelOrientation, this.$pcMeterGroup.labelOrientation));
    }
  }
};
var _hoisted_1$1 = ["data-p"];
function render$1(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("ol", mergeProps({
    "class": _ctx.cx("labelList"),
    "data-p": $options.dataP
  }, _ctx.ptm("labelList")), [(openBlock(true), createElementBlock(Fragment, null, renderList($props.value, function(val, index) {
    return openBlock(), createElementBlock("li", mergeProps({
      key: index + "_label",
      "class": _ctx.cx("label"),
      ref_for: true
    }, _ctx.ptm("label")), [renderSlot(_ctx.$slots, "icon", {
      value: val,
      "class": normalizeClass(_ctx.cx("labelIcon"))
    }, function() {
      return [val.icon ? (openBlock(), createElementBlock("i", mergeProps({
        key: 0,
        "class": [val.icon, _ctx.cx("labelIcon")],
        style: {
          color: val.color
        },
        ref_for: true
      }, _ctx.ptm("labelIcon")), null, 16)) : (openBlock(), createElementBlock("span", mergeProps({
        key: 1,
        "class": _ctx.cx("labelMarker"),
        style: {
          backgroundColor: val.color
        },
        ref_for: true
      }, _ctx.ptm("labelMarker")), null, 16))];
    }), createElementVNode("span", mergeProps({
      "class": _ctx.cx("labelText"),
      ref_for: true
    }, _ctx.ptm("labelText")), toDisplayString(val.label) + " (" + toDisplayString(_ctx.$parentInstance.percentValue(val.value)) + ")", 17)], 16);
  }), 128))], 16, _hoisted_1$1);
}
script$1.render = render$1;
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
  name: "MeterGroup",
  "extends": script$2,
  inheritAttrs: false,
  methods: {
    getPTOptions: function getPTOptions(key, value, index) {
      return this.ptm(key, {
        context: {
          value,
          index
        }
      });
    },
    percent: function percent() {
      var meter = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0;
      var percentOfItem = (meter - this.min) / (this.max - this.min) * 100;
      return Math.round(Math.max(0, Math.min(100, percentOfItem)));
    },
    percentValue: function percentValue(meter) {
      return this.percent(meter) + "%";
    },
    meterCalculatedStyles: function meterCalculatedStyles(val) {
      return {
        backgroundColor: val.color,
        width: this.orientation === "horizontal" && this.percentValue(val.value),
        height: this.orientation === "vertical" && this.percentValue(val.value)
      };
    }
  },
  computed: {
    totalPercent: function totalPercent() {
      return this.percent(this.value.reduce(function(total, val) {
        return total + val.value;
      }, 0));
    },
    percentages: function percentages() {
      var sum = 0;
      var sumsArray = [];
      this.value.forEach(function(item) {
        sum += item.value;
        sumsArray.push(sum);
      });
      return sumsArray;
    },
    dataP: function dataP2() {
      return cn(_defineProperty({}, this.orientation, this.orientation));
    }
  },
  components: {
    MeterGroupLabel: script$1
  }
};
var _hoisted_1 = ["aria-valuemin", "aria-valuemax", "aria-valuenow", "data-p"];
var _hoisted_2 = ["data-p"];
var _hoisted_3 = ["data-p"];
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_MeterGroupLabel = resolveComponent("MeterGroupLabel");
  return openBlock(), createElementBlock("div", mergeProps({
    "class": _ctx.cx("root"),
    role: "meter",
    "aria-valuemin": _ctx.min,
    "aria-valuemax": _ctx.max,
    "aria-valuenow": $options.totalPercent,
    "data-p": $options.dataP
  }, _ctx.ptmi("root")), [_ctx.labelPosition === "start" ? renderSlot(_ctx.$slots, "label", {
    key: 0,
    value: _ctx.value,
    totalPercent: $options.totalPercent,
    percentages: $options.percentages
  }, function() {
    return [createVNode(_component_MeterGroupLabel, {
      value: _ctx.value,
      labelPosition: _ctx.labelPosition,
      labelOrientation: _ctx.labelOrientation,
      unstyled: _ctx.unstyled,
      pt: _ctx.pt
    }, null, 8, ["value", "labelPosition", "labelOrientation", "unstyled", "pt"])];
  }) : createCommentVNode("", true), renderSlot(_ctx.$slots, "start", {
    value: _ctx.value,
    totalPercent: $options.totalPercent,
    percentages: $options.percentages
  }), createElementVNode("div", mergeProps({
    "class": _ctx.cx("meters"),
    "data-p": $options.dataP
  }, _ctx.ptm("meters")), [(openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.value, function(val, index) {
    return renderSlot(_ctx.$slots, "meter", {
      key: index,
      value: val,
      index,
      "class": normalizeClass(_ctx.cx("meter")),
      orientation: _ctx.orientation,
      size: $options.percentValue(val.value),
      totalPercent: $options.totalPercent
    }, function() {
      return [$options.percent(val.value) ? (openBlock(), createElementBlock("span", mergeProps({
        key: 0,
        "class": _ctx.cx("meter"),
        style: $options.meterCalculatedStyles(val),
        "data-p": $options.dataP,
        ref_for: true
      }, $options.getPTOptions("meter", val, index)), null, 16, _hoisted_3)) : createCommentVNode("", true)];
    });
  }), 128))], 16, _hoisted_2), renderSlot(_ctx.$slots, "end", {
    value: _ctx.value,
    totalPercent: $options.totalPercent,
    percentages: $options.percentages
  }), _ctx.labelPosition === "end" ? renderSlot(_ctx.$slots, "label", {
    key: 1,
    value: _ctx.value,
    totalPercent: $options.totalPercent,
    percentages: $options.percentages
  }, function() {
    return [createVNode(_component_MeterGroupLabel, {
      value: _ctx.value,
      labelPosition: _ctx.labelPosition,
      labelOrientation: _ctx.labelOrientation,
      unstyled: _ctx.unstyled,
      pt: _ctx.pt
    }, null, 8, ["value", "labelPosition", "labelOrientation", "unstyled", "pt"])];
  }) : createCommentVNode("", true)], 16, _hoisted_1);
}
script.render = render;

export { script as default };
//# sourceMappingURL=index2112.mjs.map
