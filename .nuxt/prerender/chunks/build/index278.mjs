import { equals } from 'file:///Users/lgalassi/workspace/lilaPiemonte/node_modules/@primeuix/utils/object/index.mjs';
import { mergeProps, renderSlot, createElementBlock, openBlock, Fragment, createCommentVNode, withDirectives, createBlock, resolveDynamicComponent, withCtx, vShow, normalizeClass } from 'file:///Users/lgalassi/workspace/lilaPiemonte/node_modules/vue/index.mjs';
import { s as script$2 } from './index11.mjs';
import { B as BaseStyle } from './server.mjs';
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
  root: function root(_ref) {
    var instance = _ref.instance;
    return ["p-tabpanel", {
      "p-tabpanel-active": instance.active
    }];
  }
};
var TabPanelStyle = BaseStyle.extend({
  name: "tabpanel",
  classes
});

var script$1 = {
  name: "BaseTabPanel",
  "extends": script$2,
  props: {
    // in Tabs
    value: {
      type: [String, Number],
      "default": void 0
    },
    as: {
      type: [String, Object],
      "default": "DIV"
    },
    asChild: {
      type: Boolean,
      "default": false
    },
    // in TabView
    header: null,
    headerStyle: null,
    headerClass: null,
    headerProps: null,
    headerActionProps: null,
    contentStyle: null,
    contentClass: null,
    contentProps: null,
    disabled: Boolean
  },
  style: TabPanelStyle,
  provide: function provide() {
    return {
      $pcTabPanel: this,
      $parentInstance: this
    };
  }
};
var script = {
  name: "TabPanel",
  "extends": script$1,
  inheritAttrs: false,
  inject: ["$pcTabs"],
  computed: {
    active: function active() {
      var _this$$pcTabs;
      return equals((_this$$pcTabs = this.$pcTabs) === null || _this$$pcTabs === void 0 ? void 0 : _this$$pcTabs.d_value, this.value);
    },
    id: function id() {
      var _this$$pcTabs2;
      return "".concat((_this$$pcTabs2 = this.$pcTabs) === null || _this$$pcTabs2 === void 0 ? void 0 : _this$$pcTabs2.$id, "_tabpanel_").concat(this.value);
    },
    ariaLabelledby: function ariaLabelledby() {
      var _this$$pcTabs3;
      return "".concat((_this$$pcTabs3 = this.$pcTabs) === null || _this$$pcTabs3 === void 0 ? void 0 : _this$$pcTabs3.$id, "_tab_").concat(this.value);
    },
    attrs: function attrs() {
      return mergeProps(this.a11yAttrs, this.ptmi("root", this.ptParams));
    },
    a11yAttrs: function a11yAttrs() {
      var _this$$pcTabs4;
      return {
        id: this.id,
        tabindex: (_this$$pcTabs4 = this.$pcTabs) === null || _this$$pcTabs4 === void 0 ? void 0 : _this$$pcTabs4.tabindex,
        role: "tabpanel",
        "aria-labelledby": this.ariaLabelledby,
        "data-pc-name": "tabpanel",
        "data-p-active": this.active
      };
    },
    ptParams: function ptParams() {
      return {
        context: {
          active: this.active
        }
      };
    }
  }
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _$options$$pcTabs, _$options$$pcTabs2;
  return !$options.$pcTabs ? renderSlot(_ctx.$slots, "default", {
    key: 0
  }) : (openBlock(), createElementBlock(Fragment, {
    key: 1
  }, [!_ctx.asChild ? (openBlock(), createElementBlock(Fragment, {
    key: 0
  }, [((_$options$$pcTabs = $options.$pcTabs) !== null && _$options$$pcTabs !== void 0 && _$options$$pcTabs.lazy ? $options.active : true) ? withDirectives((openBlock(), createBlock(resolveDynamicComponent(_ctx.as), mergeProps({
    key: 0,
    "class": _ctx.cx("root")
  }, $options.attrs), {
    "default": withCtx(function() {
      return [renderSlot(_ctx.$slots, "default")];
    }),
    _: 3
  }, 16, ["class"])), [[vShow, (_$options$$pcTabs2 = $options.$pcTabs) !== null && _$options$$pcTabs2 !== void 0 && _$options$$pcTabs2.lazy ? true : $options.active]]) : createCommentVNode("", true)], 64)) : renderSlot(_ctx.$slots, "default", {
    key: 1,
    "class": normalizeClass(_ctx.cx("root")),
    active: $options.active,
    a11yAttrs: $options.a11yAttrs
  })], 64));
}
script.render = render;

export { script as default };
//# sourceMappingURL=index278.mjs.map
