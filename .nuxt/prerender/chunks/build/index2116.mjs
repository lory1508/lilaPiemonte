import { cn } from 'file:///Users/lgalassi/workspace/lilaPiemonte/node_modules/@primeuix/utils/index.mjs';
import { s as script$2 } from './index11.mjs';
import { style } from 'file:///Users/lgalassi/workspace/lilaPiemonte/node_modules/@primeuix/styles/progressbar/index.mjs';
import { B as BaseStyle } from './server.mjs';
import { createElementBlock, openBlock, mergeProps, createCommentVNode, renderSlot, createTextVNode, toDisplayString } from 'file:///Users/lgalassi/workspace/lilaPiemonte/node_modules/vue/index.mjs';
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
    var instance = _ref.instance;
    return ["p-progressbar p-component", {
      "p-progressbar-determinate": instance.determinate,
      "p-progressbar-indeterminate": instance.indeterminate
    }];
  },
  value: "p-progressbar-value",
  label: "p-progressbar-label"
};
var ProgressBarStyle = BaseStyle.extend({
  name: "progressbar",
  style,
  classes
});

var script$1 = {
  name: "BaseProgressBar",
  "extends": script$2,
  props: {
    value: {
      type: Number,
      "default": null
    },
    mode: {
      type: String,
      "default": "determinate"
    },
    showValue: {
      type: Boolean,
      "default": true
    }
  },
  style: ProgressBarStyle,
  provide: function provide() {
    return {
      $pcProgressBar: this,
      $parentInstance: this
    };
  }
};
var script = {
  name: "ProgressBar",
  "extends": script$1,
  inheritAttrs: false,
  computed: {
    progressStyle: function progressStyle() {
      return {
        width: this.value + "%",
        display: "flex"
      };
    },
    indeterminate: function indeterminate() {
      return this.mode === "indeterminate";
    },
    determinate: function determinate() {
      return this.mode === "determinate";
    },
    dataP: function dataP() {
      return cn({
        determinate: this.determinate,
        indeterminate: this.indeterminate
      });
    }
  }
};
var _hoisted_1 = ["aria-valuenow", "data-p"];
var _hoisted_2 = ["data-p"];
var _hoisted_3 = ["data-p"];
var _hoisted_4 = ["data-p"];
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", mergeProps({
    role: "progressbar",
    "class": _ctx.cx("root"),
    "aria-valuemin": "0",
    "aria-valuenow": _ctx.value,
    "aria-valuemax": "100",
    "data-p": $options.dataP
  }, _ctx.ptmi("root")), [$options.determinate ? (openBlock(), createElementBlock("div", mergeProps({
    key: 0,
    "class": _ctx.cx("value"),
    style: $options.progressStyle,
    "data-p": $options.dataP
  }, _ctx.ptm("value")), [_ctx.value != null && _ctx.value !== 0 && _ctx.showValue ? (openBlock(), createElementBlock("div", mergeProps({
    key: 0,
    "class": _ctx.cx("label"),
    "data-p": $options.dataP
  }, _ctx.ptm("label")), [renderSlot(_ctx.$slots, "default", {}, function() {
    return [createTextVNode(toDisplayString(_ctx.value + "%"), 1)];
  })], 16, _hoisted_3)) : createCommentVNode("", true)], 16, _hoisted_2)) : $options.indeterminate ? (openBlock(), createElementBlock("div", mergeProps({
    key: 1,
    "class": _ctx.cx("value"),
    "data-p": $options.dataP
  }, _ctx.ptm("value")), null, 16, _hoisted_4)) : createCommentVNode("", true)], 16, _hoisted_1);
}
script.render = render;

export { script as default };
//# sourceMappingURL=index2116.mjs.map
