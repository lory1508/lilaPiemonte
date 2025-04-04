import { cn } from 'file:///Users/lgalassi/workspace/lilaPiemonte/node_modules/@primeuix/utils/index.mjs';
import { focus, findSingle, getAttribute } from 'file:///Users/lgalassi/workspace/lilaPiemonte/node_modules/@primeuix/utils/dom/index.mjs';
import { equals } from 'file:///Users/lgalassi/workspace/lilaPiemonte/node_modules/@primeuix/utils/object/index.mjs';
import { R as Ripple } from './index8.mjs';
import { mergeProps, resolveDirective, withDirectives, renderSlot, createBlock, openBlock, resolveDynamicComponent, withCtx, normalizeClass } from 'file:///Users/lgalassi/workspace/lilaPiemonte/node_modules/vue/index.mjs';
import { s as script$2 } from './index11.mjs';
import { B as BaseStyle } from './server.mjs';
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
    var instance = _ref.instance, props = _ref.props;
    return ["p-tab", {
      "p-tab-active": instance.active,
      "p-disabled": props.disabled
    }];
  }
};
var TabStyle = BaseStyle.extend({
  name: "tab",
  classes
});

var script$1 = {
  name: "BaseTab",
  "extends": script$2,
  props: {
    value: {
      type: [String, Number],
      "default": void 0
    },
    disabled: {
      type: Boolean,
      "default": false
    },
    as: {
      type: [String, Object],
      "default": "BUTTON"
    },
    asChild: {
      type: Boolean,
      "default": false
    }
  },
  style: TabStyle,
  provide: function provide() {
    return {
      $pcTab: this,
      $parentInstance: this
    };
  }
};
var script = {
  name: "Tab",
  "extends": script$1,
  inheritAttrs: false,
  inject: ["$pcTabs", "$pcTabList"],
  methods: {
    onFocus: function onFocus() {
      this.$pcTabs.selectOnFocus && this.changeActiveValue();
    },
    onClick: function onClick() {
      this.changeActiveValue();
    },
    onKeydown: function onKeydown(event) {
      switch (event.code) {
        case "ArrowRight":
          this.onArrowRightKey(event);
          break;
        case "ArrowLeft":
          this.onArrowLeftKey(event);
          break;
        case "Home":
          this.onHomeKey(event);
          break;
        case "End":
          this.onEndKey(event);
          break;
        case "PageDown":
          this.onPageDownKey(event);
          break;
        case "PageUp":
          this.onPageUpKey(event);
          break;
        case "Enter":
        case "NumpadEnter":
        case "Space":
          this.onEnterKey(event);
          break;
      }
    },
    onArrowRightKey: function onArrowRightKey(event) {
      var nextTab = this.findNextTab(event.currentTarget);
      nextTab ? this.changeFocusedTab(event, nextTab) : this.onHomeKey(event);
      event.preventDefault();
    },
    onArrowLeftKey: function onArrowLeftKey(event) {
      var prevTab = this.findPrevTab(event.currentTarget);
      prevTab ? this.changeFocusedTab(event, prevTab) : this.onEndKey(event);
      event.preventDefault();
    },
    onHomeKey: function onHomeKey(event) {
      var firstTab = this.findFirstTab();
      this.changeFocusedTab(event, firstTab);
      event.preventDefault();
    },
    onEndKey: function onEndKey(event) {
      var lastTab = this.findLastTab();
      this.changeFocusedTab(event, lastTab);
      event.preventDefault();
    },
    onPageDownKey: function onPageDownKey(event) {
      this.scrollInView(this.findLastTab());
      event.preventDefault();
    },
    onPageUpKey: function onPageUpKey(event) {
      this.scrollInView(this.findFirstTab());
      event.preventDefault();
    },
    onEnterKey: function onEnterKey(event) {
      this.changeActiveValue();
      event.preventDefault();
    },
    findNextTab: function findNextTab(tabElement) {
      var selfCheck = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
      var element = selfCheck ? tabElement : tabElement.nextElementSibling;
      return element ? getAttribute(element, "data-p-disabled") || getAttribute(element, "data-pc-section") === "activebar" ? this.findNextTab(element) : findSingle(element, '[data-pc-name="tab"]') : null;
    },
    findPrevTab: function findPrevTab(tabElement) {
      var selfCheck = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
      var element = selfCheck ? tabElement : tabElement.previousElementSibling;
      return element ? getAttribute(element, "data-p-disabled") || getAttribute(element, "data-pc-section") === "activebar" ? this.findPrevTab(element) : findSingle(element, '[data-pc-name="tab"]') : null;
    },
    findFirstTab: function findFirstTab() {
      return this.findNextTab(this.$pcTabList.$refs.tabs.firstElementChild, true);
    },
    findLastTab: function findLastTab() {
      return this.findPrevTab(this.$pcTabList.$refs.tabs.lastElementChild, true);
    },
    changeActiveValue: function changeActiveValue() {
      this.$pcTabs.updateValue(this.value);
    },
    changeFocusedTab: function changeFocusedTab(event, element) {
      focus(element);
      this.scrollInView(element);
    },
    scrollInView: function scrollInView(element) {
      var _element$scrollIntoVi;
      element === null || element === void 0 || (_element$scrollIntoVi = element.scrollIntoView) === null || _element$scrollIntoVi === void 0 || _element$scrollIntoVi.call(element, {
        block: "nearest"
      });
    }
  },
  computed: {
    active: function active() {
      var _this$$pcTabs;
      return equals((_this$$pcTabs = this.$pcTabs) === null || _this$$pcTabs === void 0 ? void 0 : _this$$pcTabs.d_value, this.value);
    },
    id: function id() {
      var _this$$pcTabs2;
      return "".concat((_this$$pcTabs2 = this.$pcTabs) === null || _this$$pcTabs2 === void 0 ? void 0 : _this$$pcTabs2.$id, "_tab_").concat(this.value);
    },
    ariaControls: function ariaControls() {
      var _this$$pcTabs3;
      return "".concat((_this$$pcTabs3 = this.$pcTabs) === null || _this$$pcTabs3 === void 0 ? void 0 : _this$$pcTabs3.$id, "_tabpanel_").concat(this.value);
    },
    attrs: function attrs() {
      return mergeProps(this.asAttrs, this.a11yAttrs, this.ptmi("root", this.ptParams));
    },
    asAttrs: function asAttrs() {
      return this.as === "BUTTON" ? {
        type: "button",
        disabled: this.disabled
      } : void 0;
    },
    a11yAttrs: function a11yAttrs() {
      return {
        id: this.id,
        tabindex: this.active ? this.$pcTabs.tabindex : -1,
        role: "tab",
        "aria-selected": this.active,
        "aria-controls": this.ariaControls,
        "data-pc-name": "tab",
        "data-p-disabled": this.disabled,
        "data-p-active": this.active,
        onFocus: this.onFocus,
        onKeydown: this.onKeydown
      };
    },
    ptParams: function ptParams() {
      return {
        context: {
          active: this.active
        }
      };
    },
    dataP: function dataP() {
      return cn({
        active: this.active
      });
    }
  },
  directives: {
    ripple: Ripple
  }
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _directive_ripple = resolveDirective("ripple");
  return !_ctx.asChild ? withDirectives((openBlock(), createBlock(resolveDynamicComponent(_ctx.as), mergeProps({
    key: 0,
    "class": _ctx.cx("root"),
    "data-p": $options.dataP,
    onClick: $options.onClick
  }, $options.attrs), {
    "default": withCtx(function() {
      return [renderSlot(_ctx.$slots, "default")];
    }),
    _: 3
  }, 16, ["class", "data-p", "onClick"])), [[_directive_ripple]]) : renderSlot(_ctx.$slots, "default", {
    key: 1,
    dataP: $options.dataP,
    "class": normalizeClass(_ctx.cx("root")),
    active: $options.active,
    a11yAttrs: $options.a11yAttrs,
    onClick: $options.onClick
  });
}
script.render = render;

export { script as default };
//# sourceMappingURL=index276.mjs.map
