import { s as script$3 } from './index16.mjs';
import { s as script$4 } from './index11.mjs';
import { style } from 'file:///Users/lgalassi/workspace/lilaPiemonte/node_modules/@primeuix/styles/breadcrumb/index.mjs';
import { B as BaseStyle } from './server.mjs';
import { mergeProps, createElementBlock, createCommentVNode, openBlock, createBlock, resolveDynamicComponent, normalizeClass, toDisplayString, resolveComponent, createElementVNode, Fragment, renderList, createVNode, renderSlot } from 'file:///Users/lgalassi/workspace/lilaPiemonte/node_modules/vue/index.mjs';
import './index10.mjs';
import 'file:///Users/lgalassi/workspace/lilaPiemonte/node_modules/@primeuix/utils/object/index.mjs';
import 'file:///Users/lgalassi/workspace/lilaPiemonte/node_modules/@primeuix/styled/index.mjs';
import 'file:///Users/lgalassi/workspace/lilaPiemonte/node_modules/@primeuix/utils/dom/index.mjs';
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
  root: "p-breadcrumb p-component",
  list: "p-breadcrumb-list",
  homeItem: "p-breadcrumb-home-item",
  separator: "p-breadcrumb-separator",
  separatorIcon: "p-breadcrumb-separator-icon",
  item: function item(_ref) {
    var instance = _ref.instance;
    return ["p-breadcrumb-item", {
      "p-disabled": instance.disabled()
    }];
  },
  itemLink: "p-breadcrumb-item-link",
  itemIcon: "p-breadcrumb-item-icon",
  itemLabel: "p-breadcrumb-item-label"
};
var BreadcrumbStyle = BaseStyle.extend({
  name: "breadcrumb",
  style,
  classes
});

var script$2 = {
  name: "BaseBreadcrumb",
  "extends": script$4,
  props: {
    model: {
      type: Array,
      "default": null
    },
    home: {
      type: null,
      "default": null
    }
  },
  style: BreadcrumbStyle,
  provide: function provide() {
    return {
      $pcBreadcrumb: this,
      $parentInstance: this
    };
  }
};
var script$1 = {
  name: "BreadcrumbItem",
  hostName: "Breadcrumb",
  "extends": script$4,
  props: {
    item: null,
    templates: null,
    index: null
  },
  methods: {
    onClick: function onClick(event) {
      if (this.item.command) {
        this.item.command({
          originalEvent: event,
          item: this.item
        });
      }
    },
    visible: function visible() {
      return typeof this.item.visible === "function" ? this.item.visible() : this.item.visible !== false;
    },
    disabled: function disabled() {
      return typeof this.item.disabled === "function" ? this.item.disabled() : this.item.disabled;
    },
    label: function label() {
      return typeof this.item.label === "function" ? this.item.label() : this.item.label;
    },
    isCurrentUrl: function isCurrentUrl() {
      var _this$item = this.item, to = _this$item.to, url = _this$item.url;
      var lastPath = "";
      return to === lastPath || url === lastPath ? "page" : void 0;
    }
  },
  computed: {
    ptmOptions: function ptmOptions() {
      return {
        context: {
          item: this.item,
          index: this.index
        }
      };
    },
    getMenuItemProps: function getMenuItemProps() {
      var _this = this;
      return {
        action: mergeProps({
          "class": this.cx("itemLink"),
          "aria-current": this.isCurrentUrl(),
          onClick: function onClick2($event) {
            return _this.onClick($event);
          }
        }, this.ptm("itemLink", this.ptmOptions)),
        icon: mergeProps({
          "class": [this.cx("icon"), this.item.icon]
        }, this.ptm("icon", this.ptmOptions)),
        label: mergeProps({
          "class": this.cx("label")
        }, this.ptm("label", this.ptmOptions))
      };
    }
  }
};
var _hoisted_1 = ["href", "target", "aria-current"];
function render$1(_ctx, _cache, $props, $setup, $data, $options) {
  return $options.visible() ? (openBlock(), createElementBlock("li", mergeProps({
    key: 0,
    "class": [_ctx.cx("item"), $props.item["class"]]
  }, _ctx.ptm("item", $options.ptmOptions)), [!$props.templates.item ? (openBlock(), createElementBlock("a", mergeProps({
    key: 0,
    href: $props.item.url || "#",
    "class": _ctx.cx("itemLink"),
    target: $props.item.target,
    "aria-current": $options.isCurrentUrl(),
    onClick: _cache[0] || (_cache[0] = function() {
      return $options.onClick && $options.onClick.apply($options, arguments);
    })
  }, _ctx.ptm("itemLink", $options.ptmOptions)), [$props.templates && $props.templates.itemicon ? (openBlock(), createBlock(resolveDynamicComponent($props.templates.itemicon), {
    key: 0,
    item: $props.item,
    "class": normalizeClass(_ctx.cx("itemIcon", $options.ptmOptions))
  }, null, 8, ["item", "class"])) : $props.item.icon ? (openBlock(), createElementBlock("span", mergeProps({
    key: 1,
    "class": [_ctx.cx("itemIcon"), $props.item.icon]
  }, _ctx.ptm("itemIcon", $options.ptmOptions)), null, 16)) : createCommentVNode("", true), $props.item.label ? (openBlock(), createElementBlock("span", mergeProps({
    key: 2,
    "class": _ctx.cx("itemLabel")
  }, _ctx.ptm("itemLabel", $options.ptmOptions)), toDisplayString($options.label()), 17)) : createCommentVNode("", true)], 16, _hoisted_1)) : (openBlock(), createBlock(resolveDynamicComponent($props.templates.item), {
    key: 1,
    item: $props.item,
    label: $options.label(),
    props: $options.getMenuItemProps
  }, null, 8, ["item", "label", "props"]))], 16)) : createCommentVNode("", true);
}
script$1.render = render$1;
var script = {
  name: "Breadcrumb",
  "extends": script$2,
  inheritAttrs: false,
  components: {
    BreadcrumbItem: script$1,
    ChevronRightIcon: script$3
  }
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_BreadcrumbItem = resolveComponent("BreadcrumbItem");
  var _component_ChevronRightIcon = resolveComponent("ChevronRightIcon");
  return openBlock(), createElementBlock("nav", mergeProps({
    "class": _ctx.cx("root")
  }, _ctx.ptmi("root")), [createElementVNode("ol", mergeProps({
    "class": _ctx.cx("list")
  }, _ctx.ptm("list")), [_ctx.home ? (openBlock(), createBlock(_component_BreadcrumbItem, mergeProps({
    key: 0,
    item: _ctx.home,
    "class": _ctx.cx("homeItem"),
    templates: _ctx.$slots,
    pt: _ctx.pt,
    unstyled: _ctx.unstyled
  }, _ctx.ptm("homeItem")), null, 16, ["item", "class", "templates", "pt", "unstyled"])) : createCommentVNode("", true), (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.model, function(item, i) {
    return openBlock(), createElementBlock(Fragment, {
      key: item.label + "_" + i
    }, [_ctx.home || i !== 0 ? (openBlock(), createElementBlock("li", mergeProps({
      key: 0,
      "class": _ctx.cx("separator"),
      ref_for: true
    }, _ctx.ptm("separator")), [renderSlot(_ctx.$slots, "separator", {}, function() {
      return [createVNode(_component_ChevronRightIcon, mergeProps({
        "aria-hidden": "true",
        "class": _ctx.cx("separatorIcon"),
        ref_for: true
      }, _ctx.ptm("separatorIcon")), null, 16, ["class"])];
    })], 16)) : createCommentVNode("", true), createVNode(_component_BreadcrumbItem, {
      item,
      index: i,
      templates: _ctx.$slots,
      pt: _ctx.pt,
      unstyled: _ctx.unstyled
    }, null, 8, ["item", "index", "templates", "pt", "unstyled"])], 64);
  }), 128))], 16)], 16);
}
script.render = render;

export { script as default };
//# sourceMappingURL=index289.mjs.map
