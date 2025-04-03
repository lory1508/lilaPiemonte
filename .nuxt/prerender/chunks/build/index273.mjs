import { getWidth, getOffset, focus, findSingle, getAttribute } from 'file:///Users/lgalassi/workspace/lilaPiemonte/node_modules/@primeuix/utils/dom/index.mjs';
import { s as script$3 } from './index15.mjs';
import { s as script$2 } from './index16.mjs';
import { R as Ripple } from './index8.mjs';
import { mergeProps, resolveDirective, createElementBlock, openBlock, createElementVNode, withDirectives, createCommentVNode, renderSlot, createBlock, resolveDynamicComponent, Fragment, renderList, toDisplayString, vShow } from 'file:///Users/lgalassi/workspace/lilaPiemonte/node_modules/vue/index.mjs';
import { s as script$4 } from './index11.mjs';
import { style } from 'file:///Users/lgalassi/workspace/lilaPiemonte/node_modules/@primeuix/styles/tabview/index.mjs';
import { B as BaseStyle } from './server.mjs';
import './index10.mjs';
import 'file:///Users/lgalassi/workspace/lilaPiemonte/node_modules/@primeuix/utils/object/index.mjs';
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
import 'file:///Users/lgalassi/workspace/lilaPiemonte/node_modules/@primeuix/utils/index.mjs';
import 'file:///Users/lgalassi/workspace/lilaPiemonte/node_modules/@primeuix/styles/base/index.mjs';
import 'file:///Users/lgalassi/workspace/lilaPiemonte/node_modules/vue/server-renderer/index.mjs';

var classes = {
  root: function root(_ref) {
    var props = _ref.props;
    return ["p-tabview p-component", {
      "p-tabview-scrollable": props.scrollable
    }];
  },
  navContainer: "p-tabview-tablist-container",
  prevButton: "p-tabview-prev-button",
  navContent: "p-tabview-tablist-scroll-container",
  nav: "p-tabview-tablist",
  tab: {
    header: function header(_ref2) {
      var instance = _ref2.instance, tab = _ref2.tab, index = _ref2.index;
      return ["p-tabview-tablist-item", instance.getTabProp(tab, "headerClass"), {
        "p-tabview-tablist-item-active": instance.d_activeIndex === index,
        "p-disabled": instance.getTabProp(tab, "disabled")
      }];
    },
    headerAction: "p-tabview-tab-header",
    headerTitle: "p-tabview-tab-title",
    content: function content(_ref3) {
      var instance = _ref3.instance, tab = _ref3.tab;
      return ["p-tabview-panel", instance.getTabProp(tab, "contentClass")];
    }
  },
  inkbar: "p-tabview-ink-bar",
  nextButton: "p-tabview-next-button",
  panelContainer: "p-tabview-panels"
};
var TabViewStyle = BaseStyle.extend({
  name: "tabview",
  style,
  classes
});

var script$1 = {
  name: "BaseTabView",
  "extends": script$4,
  props: {
    activeIndex: {
      type: Number,
      "default": 0
    },
    lazy: {
      type: Boolean,
      "default": false
    },
    scrollable: {
      type: Boolean,
      "default": false
    },
    tabindex: {
      type: Number,
      "default": 0
    },
    selectOnFocus: {
      type: Boolean,
      "default": false
    },
    prevButtonProps: {
      type: null,
      "default": null
    },
    nextButtonProps: {
      type: null,
      "default": null
    },
    prevIcon: {
      type: String,
      "default": void 0
    },
    nextIcon: {
      type: String,
      "default": void 0
    }
  },
  style: TabViewStyle,
  provide: function provide() {
    return {
      $pcTabs: void 0,
      // Backwards compatible to prevent <TabPanel> component from breaking
      $pcTabView: this,
      $parentInstance: this
    };
  }
};
var script = {
  name: "TabView",
  "extends": script$1,
  inheritAttrs: false,
  emits: ["update:activeIndex", "tab-change", "tab-click"],
  data: function data() {
    return {
      d_activeIndex: this.activeIndex,
      isPrevButtonDisabled: true,
      isNextButtonDisabled: false
    };
  },
  watch: {
    activeIndex: function activeIndex(newValue) {
      this.d_activeIndex = newValue;
      this.scrollInView({
        index: newValue
      });
    }
  },
  mounted: function mounted() {
    console.warn("Deprecated since v4. Use Tabs component instead.");
    this.updateInkBar();
    this.scrollable && this.updateButtonState();
  },
  updated: function updated() {
    this.updateInkBar();
    this.scrollable && this.updateButtonState();
  },
  methods: {
    isTabPanel: function isTabPanel(child) {
      return child.type.name === "TabPanel";
    },
    isTabActive: function isTabActive(index) {
      return this.d_activeIndex === index;
    },
    getTabProp: function getTabProp(tab, name) {
      return tab.props ? tab.props[name] : void 0;
    },
    getKey: function getKey(tab, index) {
      return this.getTabProp(tab, "header") || index;
    },
    getTabHeaderActionId: function getTabHeaderActionId(index) {
      return "".concat(this.$id, "_").concat(index, "_header_action");
    },
    getTabContentId: function getTabContentId(index) {
      return "".concat(this.$id, "_").concat(index, "_content");
    },
    getTabPT: function getTabPT(tab, key, index) {
      var count = this.tabs.length;
      var tabMetaData = {
        props: tab.props,
        parent: {
          instance: this,
          props: this.$props,
          state: this.$data
        },
        context: {
          index,
          count,
          first: index === 0,
          last: index === count - 1,
          active: this.isTabActive(index)
        }
      };
      return mergeProps(this.ptm("tabpanel.".concat(key), {
        tabpanel: tabMetaData
      }), this.ptm("tabpanel.".concat(key), tabMetaData), this.ptmo(this.getTabProp(tab, "pt"), key, tabMetaData));
    },
    onScroll: function onScroll(event) {
      this.scrollable && this.updateButtonState();
      event.preventDefault();
    },
    onPrevButtonClick: function onPrevButtonClick() {
      var content = this.$refs.content;
      var width = getWidth(content);
      var pos = content.scrollLeft - width;
      content.scrollLeft = pos <= 0 ? 0 : pos;
    },
    onNextButtonClick: function onNextButtonClick() {
      var content = this.$refs.content;
      var width = getWidth(content) - this.getVisibleButtonWidths();
      var pos = content.scrollLeft + width;
      var lastPos = content.scrollWidth - width;
      content.scrollLeft = pos >= lastPos ? lastPos : pos;
    },
    onTabClick: function onTabClick(event, tab, index) {
      this.changeActiveIndex(event, tab, index);
      this.$emit("tab-click", {
        originalEvent: event,
        index
      });
    },
    onTabKeyDown: function onTabKeyDown(event, tab, index) {
      switch (event.code) {
        case "ArrowLeft":
          this.onTabArrowLeftKey(event);
          break;
        case "ArrowRight":
          this.onTabArrowRightKey(event);
          break;
        case "Home":
          this.onTabHomeKey(event);
          break;
        case "End":
          this.onTabEndKey(event);
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
          this.onTabEnterKey(event, tab, index);
          break;
      }
    },
    onTabArrowRightKey: function onTabArrowRightKey(event) {
      var nextHeaderAction = this.findNextHeaderAction(event.target.parentElement);
      nextHeaderAction ? this.changeFocusedTab(event, nextHeaderAction) : this.onTabHomeKey(event);
      event.preventDefault();
    },
    onTabArrowLeftKey: function onTabArrowLeftKey(event) {
      var prevHeaderAction = this.findPrevHeaderAction(event.target.parentElement);
      prevHeaderAction ? this.changeFocusedTab(event, prevHeaderAction) : this.onTabEndKey(event);
      event.preventDefault();
    },
    onTabHomeKey: function onTabHomeKey(event) {
      var firstHeaderAction = this.findFirstHeaderAction();
      this.changeFocusedTab(event, firstHeaderAction);
      event.preventDefault();
    },
    onTabEndKey: function onTabEndKey(event) {
      var lastHeaderAction = this.findLastHeaderAction();
      this.changeFocusedTab(event, lastHeaderAction);
      event.preventDefault();
    },
    onPageDownKey: function onPageDownKey(event) {
      this.scrollInView({
        index: this.$refs.nav.children.length - 2
      });
      event.preventDefault();
    },
    onPageUpKey: function onPageUpKey(event) {
      this.scrollInView({
        index: 0
      });
      event.preventDefault();
    },
    onTabEnterKey: function onTabEnterKey(event, tab, index) {
      this.changeActiveIndex(event, tab, index);
      event.preventDefault();
    },
    findNextHeaderAction: function findNextHeaderAction(tabElement) {
      var selfCheck = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
      var headerElement = selfCheck ? tabElement : tabElement.nextElementSibling;
      return headerElement ? getAttribute(headerElement, "data-p-disabled") || getAttribute(headerElement, "data-pc-section") === "inkbar" ? this.findNextHeaderAction(headerElement) : findSingle(headerElement, '[data-pc-section="headeraction"]') : null;
    },
    findPrevHeaderAction: function findPrevHeaderAction(tabElement) {
      var selfCheck = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
      var headerElement = selfCheck ? tabElement : tabElement.previousElementSibling;
      return headerElement ? getAttribute(headerElement, "data-p-disabled") || getAttribute(headerElement, "data-pc-section") === "inkbar" ? this.findPrevHeaderAction(headerElement) : findSingle(headerElement, '[data-pc-section="headeraction"]') : null;
    },
    findFirstHeaderAction: function findFirstHeaderAction() {
      return this.findNextHeaderAction(this.$refs.nav.firstElementChild, true);
    },
    findLastHeaderAction: function findLastHeaderAction() {
      return this.findPrevHeaderAction(this.$refs.nav.lastElementChild, true);
    },
    changeActiveIndex: function changeActiveIndex(event, tab, index) {
      if (!this.getTabProp(tab, "disabled") && this.d_activeIndex !== index) {
        this.d_activeIndex = index;
        this.$emit("update:activeIndex", index);
        this.$emit("tab-change", {
          originalEvent: event,
          index
        });
        this.scrollInView({
          index
        });
      }
    },
    changeFocusedTab: function changeFocusedTab(event, element) {
      if (element) {
        focus(element);
        this.scrollInView({
          element
        });
        if (this.selectOnFocus) {
          var index = parseInt(element.parentElement.dataset.pcIndex, 10);
          var tab = this.tabs[index];
          this.changeActiveIndex(event, tab, index);
        }
      }
    },
    scrollInView: function scrollInView(_ref) {
      var element = _ref.element, _ref$index = _ref.index, index = _ref$index === void 0 ? -1 : _ref$index;
      var currentElement = element || this.$refs.nav.children[index];
      if (currentElement) {
        currentElement.scrollIntoView && currentElement.scrollIntoView({
          block: "nearest"
        });
      }
    },
    updateInkBar: function updateInkBar() {
      var tabHeader = this.$refs.nav.children[this.d_activeIndex];
      this.$refs.inkbar.style.width = getWidth(tabHeader) + "px";
      this.$refs.inkbar.style.left = getOffset(tabHeader).left - getOffset(this.$refs.nav).left + "px";
    },
    updateButtonState: function updateButtonState() {
      var content = this.$refs.content;
      var scrollLeft = content.scrollLeft, scrollWidth = content.scrollWidth;
      var width = getWidth(content);
      this.isPrevButtonDisabled = scrollLeft === 0;
      this.isNextButtonDisabled = parseInt(scrollLeft) === scrollWidth - width;
    },
    getVisibleButtonWidths: function getVisibleButtonWidths() {
      var _this$$refs = this.$refs, prevBtn = _this$$refs.prevBtn, nextBtn = _this$$refs.nextBtn;
      return [prevBtn, nextBtn].reduce(function(acc, el) {
        return el ? acc + getWidth(el) : acc;
      }, 0);
    }
  },
  computed: {
    tabs: function tabs() {
      var _this = this;
      return this.$slots["default"]().reduce(function(tabs2, child) {
        if (_this.isTabPanel(child)) {
          tabs2.push(child);
        } else if (child.children && child.children instanceof Array) {
          child.children.forEach(function(nestedChild) {
            if (_this.isTabPanel(nestedChild)) {
              tabs2.push(nestedChild);
            }
          });
        }
        return tabs2;
      }, []);
    },
    prevButtonAriaLabel: function prevButtonAriaLabel() {
      return this.$primevue.config.locale.aria ? this.$primevue.config.locale.aria.previous : void 0;
    },
    nextButtonAriaLabel: function nextButtonAriaLabel() {
      return this.$primevue.config.locale.aria ? this.$primevue.config.locale.aria.next : void 0;
    }
  },
  directives: {
    ripple: Ripple
  },
  components: {
    ChevronLeftIcon: script$3,
    ChevronRightIcon: script$2
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
var _hoisted_1 = ["tabindex", "aria-label"];
var _hoisted_2 = ["data-p-active", "data-p-disabled", "data-pc-index"];
var _hoisted_3 = ["id", "tabindex", "aria-disabled", "aria-selected", "aria-controls", "onClick", "onKeydown"];
var _hoisted_4 = ["tabindex", "aria-label"];
var _hoisted_5 = ["id", "aria-labelledby", "data-pc-index", "data-p-active"];
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _directive_ripple = resolveDirective("ripple");
  return openBlock(), createElementBlock("div", mergeProps({
    "class": _ctx.cx("root"),
    role: "tablist"
  }, _ctx.ptmi("root")), [createElementVNode("div", mergeProps({
    "class": _ctx.cx("navContainer")
  }, _ctx.ptm("navContainer")), [_ctx.scrollable && !$data.isPrevButtonDisabled ? withDirectives((openBlock(), createElementBlock("button", mergeProps({
    key: 0,
    ref: "prevBtn",
    type: "button",
    "class": _ctx.cx("prevButton"),
    tabindex: _ctx.tabindex,
    "aria-label": $options.prevButtonAriaLabel,
    onClick: _cache[0] || (_cache[0] = function() {
      return $options.onPrevButtonClick && $options.onPrevButtonClick.apply($options, arguments);
    })
  }, _objectSpread(_objectSpread({}, _ctx.prevButtonProps), _ctx.ptm("prevButton")), {
    "data-pc-group-section": "navbutton"
  }), [renderSlot(_ctx.$slots, "previcon", {}, function() {
    return [(openBlock(), createBlock(resolveDynamicComponent(_ctx.prevIcon ? "span" : "ChevronLeftIcon"), mergeProps({
      "aria-hidden": "true",
      "class": _ctx.prevIcon
    }, _ctx.ptm("prevIcon")), null, 16, ["class"]))];
  })], 16, _hoisted_1)), [[_directive_ripple]]) : createCommentVNode("", true), createElementVNode("div", mergeProps({
    ref: "content",
    "class": _ctx.cx("navContent"),
    onScroll: _cache[1] || (_cache[1] = function() {
      return $options.onScroll && $options.onScroll.apply($options, arguments);
    })
  }, _ctx.ptm("navContent")), [createElementVNode("ul", mergeProps({
    ref: "nav",
    "class": _ctx.cx("nav")
  }, _ctx.ptm("nav")), [(openBlock(true), createElementBlock(Fragment, null, renderList($options.tabs, function(tab, index) {
    return openBlock(), createElementBlock("li", mergeProps({
      key: $options.getKey(tab, index),
      style: $options.getTabProp(tab, "headerStyle"),
      "class": _ctx.cx("tab.header", {
        tab,
        index
      }),
      role: "presentation",
      ref_for: true
    }, _objectSpread(_objectSpread(_objectSpread({}, $options.getTabProp(tab, "headerProps")), $options.getTabPT(tab, "root", index)), $options.getTabPT(tab, "header", index)), {
      "data-pc-name": "tabpanel",
      "data-p-active": $data.d_activeIndex === index,
      "data-p-disabled": $options.getTabProp(tab, "disabled"),
      "data-pc-index": index
    }), [withDirectives((openBlock(), createElementBlock("a", mergeProps({
      id: $options.getTabHeaderActionId(index),
      "class": _ctx.cx("tab.headerAction"),
      tabindex: $options.getTabProp(tab, "disabled") || !$options.isTabActive(index) ? -1 : _ctx.tabindex,
      role: "tab",
      "aria-disabled": $options.getTabProp(tab, "disabled"),
      "aria-selected": $options.isTabActive(index),
      "aria-controls": $options.getTabContentId(index),
      onClick: function onClick($event) {
        return $options.onTabClick($event, tab, index);
      },
      onKeydown: function onKeydown($event) {
        return $options.onTabKeyDown($event, tab, index);
      },
      ref_for: true
    }, _objectSpread(_objectSpread({}, $options.getTabProp(tab, "headerActionProps")), $options.getTabPT(tab, "headerAction", index))), [tab.props && tab.props.header ? (openBlock(), createElementBlock("span", mergeProps({
      key: 0,
      "class": _ctx.cx("tab.headerTitle"),
      ref_for: true
    }, $options.getTabPT(tab, "headerTitle", index)), toDisplayString(tab.props.header), 17)) : createCommentVNode("", true), tab.children && tab.children.header ? (openBlock(), createBlock(resolveDynamicComponent(tab.children.header), {
      key: 1
    })) : createCommentVNode("", true)], 16, _hoisted_3)), [[_directive_ripple]])], 16, _hoisted_2);
  }), 128)), createElementVNode("li", mergeProps({
    ref: "inkbar",
    "class": _ctx.cx("inkbar"),
    role: "presentation",
    "aria-hidden": "true"
  }, _ctx.ptm("inkbar")), null, 16)], 16)], 16), _ctx.scrollable && !$data.isNextButtonDisabled ? withDirectives((openBlock(), createElementBlock("button", mergeProps({
    key: 1,
    ref: "nextBtn",
    type: "button",
    "class": _ctx.cx("nextButton"),
    tabindex: _ctx.tabindex,
    "aria-label": $options.nextButtonAriaLabel,
    onClick: _cache[2] || (_cache[2] = function() {
      return $options.onNextButtonClick && $options.onNextButtonClick.apply($options, arguments);
    })
  }, _objectSpread(_objectSpread({}, _ctx.nextButtonProps), _ctx.ptm("nextButton")), {
    "data-pc-group-section": "navbutton"
  }), [renderSlot(_ctx.$slots, "nexticon", {}, function() {
    return [(openBlock(), createBlock(resolveDynamicComponent(_ctx.nextIcon ? "span" : "ChevronRightIcon"), mergeProps({
      "aria-hidden": "true",
      "class": _ctx.nextIcon
    }, _ctx.ptm("nextIcon")), null, 16, ["class"]))];
  })], 16, _hoisted_4)), [[_directive_ripple]]) : createCommentVNode("", true)], 16), createElementVNode("div", mergeProps({
    "class": _ctx.cx("panelContainer")
  }, _ctx.ptm("panelContainer")), [(openBlock(true), createElementBlock(Fragment, null, renderList($options.tabs, function(tab, index) {
    return openBlock(), createElementBlock(Fragment, {
      key: $options.getKey(tab, index)
    }, [(_ctx.lazy ? $options.isTabActive(index) : true) ? withDirectives((openBlock(), createElementBlock("div", mergeProps({
      key: 0,
      id: $options.getTabContentId(index),
      style: $options.getTabProp(tab, "contentStyle"),
      "class": _ctx.cx("tab.content", {
        tab
      }),
      role: "tabpanel",
      "aria-labelledby": $options.getTabHeaderActionId(index),
      ref_for: true
    }, _objectSpread(_objectSpread(_objectSpread({}, $options.getTabProp(tab, "contentProps")), $options.getTabPT(tab, "root", index)), $options.getTabPT(tab, "content", index)), {
      "data-pc-name": "tabpanel",
      "data-pc-index": index,
      "data-p-active": $data.d_activeIndex === index
    }), [(openBlock(), createBlock(resolveDynamicComponent(tab)))], 16, _hoisted_5)), [[vShow, _ctx.lazy ? true : $options.isTabActive(index)]]) : createCommentVNode("", true)], 64);
  }), 128))], 16)], 16);
}
script.render = render;

export { script as default };
//# sourceMappingURL=index273.mjs.map
