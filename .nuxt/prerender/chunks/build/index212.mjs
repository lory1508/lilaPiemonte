import { s as script$2 } from './index11.mjs';
import { style } from 'file:///Users/lgalassi/workspace/lilaPiemonte/node_modules/@primeuix/styles/iconfield/index.mjs';
import { B as BaseStyle } from './server.mjs';
import { createElementBlock, openBlock, mergeProps, renderSlot } from 'file:///Users/lgalassi/workspace/lilaPiemonte/node_modules/vue/index.mjs';
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
import 'file:///Users/lgalassi/workspace/lilaPiemonte/node_modules/@primeuix/utils/index.mjs';
import 'file:///Users/lgalassi/workspace/lilaPiemonte/node_modules/@primeuix/styles/base/index.mjs';
import 'file:///Users/lgalassi/workspace/lilaPiemonte/node_modules/vue/server-renderer/index.mjs';

var classes = {
  root: "p-iconfield"
};
var IconFieldStyle = BaseStyle.extend({
  name: "iconfield",
  style,
  classes
});

var script$1 = {
  name: "BaseIconField",
  "extends": script$2,
  style: IconFieldStyle,
  provide: function provide() {
    return {
      $pcIconField: this,
      $parentInstance: this
    };
  }
};
var script = {
  name: "IconField",
  "extends": script$1,
  inheritAttrs: false
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", mergeProps({
    "class": _ctx.cx("root")
  }, _ctx.ptmi("root")), [renderSlot(_ctx.$slots, "default")], 16);
}
script.render = render;

export { script as default };
//# sourceMappingURL=index212.mjs.map
