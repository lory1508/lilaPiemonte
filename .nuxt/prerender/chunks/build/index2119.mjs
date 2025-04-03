import { EventBus } from 'file:///Users/lgalassi/workspace/lilaPiemonte/node_modules/@primeuix/utils/eventbus/index.mjs';
import { s as script$2 } from './index11.mjs';
import { style } from 'file:///Users/lgalassi/workspace/lilaPiemonte/node_modules/@primeuix/styles/terminal/index.mjs';
import { B as BaseStyle } from './server.mjs';
import { createElementBlock, openBlock, mergeProps, createCommentVNode, createElementVNode, toDisplayString, Fragment, renderList, withDirectives, vModelText } from 'file:///Users/lgalassi/workspace/lilaPiemonte/node_modules/vue/index.mjs';
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
import 'file:///Users/lgalassi/workspace/lilaPiemonte/node_modules/@primeuix/utils/index.mjs';
import 'file:///Users/lgalassi/workspace/lilaPiemonte/node_modules/@primeuix/styles/base/index.mjs';
import 'file:///Users/lgalassi/workspace/lilaPiemonte/node_modules/vue/server-renderer/index.mjs';

var TerminalService = EventBus();

var classes = {
  root: "p-terminal p-component",
  welcomeMessage: "p-terminal-welcome-message",
  commandList: "p-terminal-command-list",
  command: "p-terminal-command",
  commandValue: "p-terminal-command-value",
  commandResponse: "p-terminal-command-response",
  prompt: "p-terminal-prompt",
  promptLabel: "p-terminal-prompt-label",
  promptValue: "p-terminal-prompt-value"
};
var TerminalStyle = BaseStyle.extend({
  name: "terminal",
  style,
  classes
});

var script$1 = {
  name: "BaseTerminal",
  "extends": script$2,
  props: {
    welcomeMessage: {
      type: String,
      "default": null
    },
    prompt: {
      type: String,
      "default": null
    }
  },
  style: TerminalStyle,
  provide: function provide() {
    return {
      $pcTerminal: this,
      $parentInstance: this
    };
  }
};
var script = {
  name: "Terminal",
  "extends": script$1,
  inheritAttrs: false,
  data: function data() {
    return {
      commandText: null,
      commands: []
    };
  },
  mounted: function mounted() {
    TerminalService.on("response", this.responseListener);
    this.$refs.input.focus();
  },
  updated: function updated() {
    this.$el.scrollTop = this.$el.scrollHeight;
  },
  beforeUnmount: function beforeUnmount() {
    TerminalService.off("response", this.responseListener);
  },
  methods: {
    onClick: function onClick() {
      this.$refs.input.focus();
    },
    onKeydown: function onKeydown(event) {
      if (event.key === "Enter" && this.commandText) {
        this.commands.push({
          text: this.commandText
        });
        TerminalService.emit("command", this.commandText);
        this.commandText = "";
      }
    },
    responseListener: function responseListener(response) {
      this.commands[this.commands.length - 1].response = response;
    }
  }
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", mergeProps({
    "class": _ctx.cx("root"),
    onClick: _cache[2] || (_cache[2] = function() {
      return $options.onClick && $options.onClick.apply($options, arguments);
    })
  }, _ctx.ptmi("root")), [_ctx.welcomeMessage ? (openBlock(), createElementBlock("div", mergeProps({
    key: 0,
    "class": _ctx.cx("welcomeMessage")
  }, _ctx.ptm("welcomeMessage")), toDisplayString(_ctx.welcomeMessage), 17)) : createCommentVNode("", true), createElementVNode("div", mergeProps({
    "class": _ctx.cx("commandList")
  }, _ctx.ptm("content")), [(openBlock(true), createElementBlock(Fragment, null, renderList($data.commands, function(command, i) {
    return openBlock(), createElementBlock("div", mergeProps({
      key: command.text + i.toString(),
      "class": _ctx.cx("command"),
      ref_for: true
    }, _ctx.ptm("commands")), [createElementVNode("span", mergeProps({
      "class": _ctx.cx("promptLabel"),
      ref_for: true
    }, _ctx.ptm("prompt")), toDisplayString(_ctx.prompt), 17), createElementVNode("span", mergeProps({
      "class": _ctx.cx("commandValue"),
      ref_for: true
    }, _ctx.ptm("command")), toDisplayString(command.text), 17), createElementVNode("div", mergeProps({
      "class": _ctx.cx("commandResponse"),
      "aria-live": "polite",
      ref_for: true
    }, _ctx.ptm("response")), toDisplayString(command.response), 17)], 16);
  }), 128))], 16), createElementVNode("div", mergeProps({
    "class": _ctx.cx("prompt")
  }, _ctx.ptm("container")), [createElementVNode("span", mergeProps({
    "class": _ctx.cx("promptLabel")
  }, _ctx.ptm("prompt")), toDisplayString(_ctx.prompt), 17), withDirectives(createElementVNode("input", mergeProps({
    ref: "input",
    "onUpdate:modelValue": _cache[0] || (_cache[0] = function($event) {
      return $data.commandText = $event;
    }),
    "class": _ctx.cx("promptValue"),
    type: "text",
    autocomplete: "off",
    onKeydown: _cache[1] || (_cache[1] = function() {
      return $options.onKeydown && $options.onKeydown.apply($options, arguments);
    })
  }, _ctx.ptm("commandText")), null, 16), [[vModelText, $data.commandText]])], 16)], 16);
}
script.render = render;

export { script as default };
//# sourceMappingURL=index2119.mjs.map
