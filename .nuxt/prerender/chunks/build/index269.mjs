import { cn } from 'file:///Users/lgalassi/workspace/lilaPiemonte/node_modules/@primeuix/utils/index.mjs';
import { find, findSingle } from 'file:///Users/lgalassi/workspace/lilaPiemonte/node_modules/@primeuix/utils/dom/index.mjs';
import { findIndexInList } from 'file:///Users/lgalassi/workspace/lilaPiemonte/node_modules/@primeuix/utils/object/index.mjs';
import { s as script$3 } from './index11.mjs';
import { createElementBlock, openBlock, mergeProps, resolveComponent, createBlock, renderSlot, resolveDynamicComponent, withCtx, createElementVNode, createCommentVNode, toDisplayString, normalizeClass } from 'file:///Users/lgalassi/workspace/lilaPiemonte/node_modules/vue/index.mjs';
import { B as BaseStyle } from './server.mjs';
import 'file:///Users/lgalassi/workspace/lilaPiemonte/node_modules/@primeuix/styled/index.mjs';
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
    return ["p-step", {
      "p-step-active": instance.active,
      "p-disabled": instance.isStepDisabled
    }];
  },
  header: "p-step-header",
  number: "p-step-number",
  title: "p-step-title"
};
var StepStyle = BaseStyle.extend({
  name: "step",
  classes
});

var script$2 = {
  name: "StepperSeparator",
  hostName: "Stepper",
  "extends": script$3,
  inject: {
    $pcStepper: {
      "default": null
    }
  }
};
function render$1(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("span", mergeProps({
    "class": _ctx.cx("separator")
  }, _ctx.ptmo($options.$pcStepper.pt, "separator")), null, 16);
}
script$2.render = render$1;
var script$1 = {
  name: "BaseStep",
  "extends": script$3,
  props: {
    value: {
      type: [String, Number],
      "default": void 0
    },
    disabled: {
      type: Boolean,
      "default": false
    },
    asChild: {
      type: Boolean,
      "default": false
    },
    as: {
      type: [String, Object],
      "default": "DIV"
    }
  },
  style: StepStyle,
  provide: function provide() {
    return {
      $pcStep: this,
      $parentInstance: this
    };
  }
};
var script = {
  name: "Step",
  "extends": script$1,
  inheritAttrs: false,
  inject: {
    $pcStepper: {
      "default": null
    },
    $pcStepList: {
      "default": null
    },
    $pcStepItem: {
      "default": null
    }
  },
  data: function data() {
    return {
      isSeparatorVisible: false,
      isCompleted: false
    };
  },
  mounted: function mounted() {
    if (this.$el && this.$pcStepList) {
      var index = findIndexInList(this.$el, find(this.$pcStepper.$el, '[data-pc-name="step"]'));
      var activeIndex = findIndexInList(findSingle(this.$pcStepper.$el, '[data-pc-name="step"][data-p-active="true"]'), find(this.$pcStepper.$el, '[data-pc-name="step"]'));
      var stepLen = find(this.$pcStepper.$el, '[data-pc-name="step"]').length;
      this.isSeparatorVisible = index !== stepLen - 1;
      this.isCompleted = index < activeIndex;
    }
  },
  updated: function updated() {
    var index = findIndexInList(this.$el, find(this.$pcStepper.$el, '[data-pc-name="step"]'));
    var activeIndex = findIndexInList(findSingle(this.$pcStepper.$el, '[data-pc-name="step"][data-p-active="true"]'), find(this.$pcStepper.$el, '[data-pc-name="step"]'));
    this.isCompleted = index < activeIndex;
  },
  methods: {
    getPTOptions: function getPTOptions(key) {
      var _ptm = key === "root" ? this.ptmi : this.ptm;
      return _ptm(key, {
        context: {
          active: this.active,
          disabled: this.isStepDisabled
        }
      });
    },
    onStepClick: function onStepClick() {
      this.$pcStepper.updateValue(this.activeValue);
    }
  },
  computed: {
    active: function active() {
      return this.$pcStepper.isStepActive(this.activeValue);
    },
    activeValue: function activeValue() {
      var _this$$pcStepItem;
      return !!this.$pcStepItem ? (_this$$pcStepItem = this.$pcStepItem) === null || _this$$pcStepItem === void 0 ? void 0 : _this$$pcStepItem.value : this.value;
    },
    isStepDisabled: function isStepDisabled() {
      return !this.active && (this.$pcStepper.isStepDisabled() || this.disabled);
    },
    id: function id() {
      var _this$$pcStepper;
      return "".concat((_this$$pcStepper = this.$pcStepper) === null || _this$$pcStepper === void 0 ? void 0 : _this$$pcStepper.id, "_step_").concat(this.activeValue);
    },
    ariaControls: function ariaControls() {
      var _this$$pcStepper2;
      return "".concat((_this$$pcStepper2 = this.$pcStepper) === null || _this$$pcStepper2 === void 0 ? void 0 : _this$$pcStepper2.id, "_steppanel_").concat(this.activeValue);
    },
    a11yAttrs: function a11yAttrs() {
      return {
        root: {
          role: "presentation",
          "aria-current": this.active ? "step" : void 0,
          "data-pc-name": "step",
          "data-pc-section": "root",
          "data-p-disabled": this.isStepDisabled,
          "data-p-active": this.active
        },
        header: {
          id: this.id,
          role: "tab",
          taindex: this.disabled ? -1 : void 0,
          "aria-controls": this.ariaControls,
          "data-pc-section": "header",
          disabled: this.isStepDisabled,
          onClick: this.onStepClick
        }
      };
    },
    dataP: function dataP() {
      return cn({
        disabled: this.isStepDisabled,
        readonly: this.$pcStepper.linear,
        active: this.active,
        completed: this.isCompleted,
        vertical: this.$pcStepItem != null
      });
    }
  },
  components: {
    StepperSeparator: script$2
  }
};
var _hoisted_1 = ["id", "tabindex", "aria-controls", "disabled", "data-p"];
var _hoisted_2 = ["data-p"];
var _hoisted_3 = ["data-p"];
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_StepperSeparator = resolveComponent("StepperSeparator");
  return !_ctx.asChild ? (openBlock(), createBlock(resolveDynamicComponent(_ctx.as), mergeProps({
    key: 0,
    "class": _ctx.cx("root"),
    "aria-current": $options.active ? "step" : void 0,
    role: "presentation",
    "data-p-active": $options.active,
    "data-p-disabled": $options.isStepDisabled,
    "data-p": $options.dataP
  }, $options.getPTOptions("root")), {
    "default": withCtx(function() {
      return [createElementVNode("button", mergeProps({
        id: $options.id,
        "class": _ctx.cx("header"),
        role: "tab",
        type: "button",
        tabindex: $options.isStepDisabled ? -1 : void 0,
        "aria-controls": $options.ariaControls,
        disabled: $options.isStepDisabled,
        onClick: _cache[0] || (_cache[0] = function() {
          return $options.onStepClick && $options.onStepClick.apply($options, arguments);
        }),
        "data-p": $options.dataP
      }, $options.getPTOptions("header")), [createElementVNode("span", mergeProps({
        "class": _ctx.cx("number"),
        "data-p": $options.dataP
      }, $options.getPTOptions("number")), toDisplayString($options.activeValue), 17, _hoisted_2), createElementVNode("span", mergeProps({
        "class": _ctx.cx("title"),
        "data-p": $options.dataP
      }, $options.getPTOptions("title")), [renderSlot(_ctx.$slots, "default")], 16, _hoisted_3)], 16, _hoisted_1), $data.isSeparatorVisible ? (openBlock(), createBlock(_component_StepperSeparator, {
        key: 0,
        "data-p": $options.dataP
      }, null, 8, ["data-p"])) : createCommentVNode("", true)];
    }),
    _: 3
  }, 16, ["class", "aria-current", "data-p-active", "data-p-disabled", "data-p"])) : renderSlot(_ctx.$slots, "default", {
    key: 1,
    "class": normalizeClass(_ctx.cx("root")),
    active: $options.active,
    value: _ctx.value,
    a11yAttrs: $options.a11yAttrs,
    activateCallback: $options.onStepClick
  });
}
script.render = render;

export { script as default };
//# sourceMappingURL=index269.mjs.map
