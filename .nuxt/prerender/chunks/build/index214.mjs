import script$2 from './index2110.mjs';
import { s as script$3 } from './index11.mjs';
import { style } from 'file:///Users/lgalassi/workspace/lilaPiemonte/node_modules/@primeuix/styles/inputchips/index.mjs';
import { B as BaseStyle } from './server.mjs';
import { resolveComponent, createElementBlock, openBlock, mergeProps, createElementVNode, Fragment, renderList, renderSlot, normalizeClass, createVNode, withCtx } from 'file:///Users/lgalassi/workspace/lilaPiemonte/node_modules/vue/index.mjs';
import 'file:///Users/lgalassi/workspace/lilaPiemonte/node_modules/@primeuix/utils/index.mjs';
import './index12.mjs';
import './index10.mjs';
import 'file:///Users/lgalassi/workspace/lilaPiemonte/node_modules/@primeuix/utils/object/index.mjs';
import 'file:///Users/lgalassi/workspace/lilaPiemonte/node_modules/@primeuix/styles/chip/index.mjs';
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
import 'file:///Users/lgalassi/workspace/lilaPiemonte/node_modules/@primeuix/styles/base/index.mjs';
import 'file:///Users/lgalassi/workspace/lilaPiemonte/node_modules/vue/server-renderer/index.mjs';

var classes = {
  root: function root(_ref) {
    var instance = _ref.instance, props = _ref.props;
    return ["p-inputchips p-component p-inputwrapper", {
      "p-disabled": props.disabled,
      "p-invalid": props.invalid,
      "p-focus": instance.focused,
      "p-inputwrapper-filled": props.modelValue && props.modelValue.length || instance.inputValue && instance.inputValue.length,
      "p-inputwrapper-focus": instance.focused
    }];
  },
  input: function input(_ref2) {
    var props = _ref2.props, instance = _ref2.instance;
    return ["p-inputchips-input", {
      "p-variant-filled": props.variant ? props.variant === "filled" : instance.$primevue.config.inputStyle === "filled" || instance.$primevue.config.inputVariant === "filled"
    }];
  },
  chipItem: function chipItem(_ref3) {
    var state = _ref3.state, index = _ref3.index;
    return ["p-inputchips-chip-item", {
      "p-focus": state.focusedIndex === index
    }];
  },
  pcChip: "p-inputchips-chip",
  chipIcon: "p-inputchips-chip-icon",
  inputItem: "p-inputchips-input-item"
};
var InputChipsStyle = BaseStyle.extend({
  name: "inputchips",
  style,
  classes
});

var script$1 = {
  name: "BaseInputChips",
  "extends": script$3,
  props: {
    modelValue: {
      type: Array,
      "default": null
    },
    max: {
      type: Number,
      "default": null
    },
    separator: {
      type: [String, Object],
      "default": null
    },
    addOnBlur: {
      type: Boolean,
      "default": null
    },
    allowDuplicate: {
      type: Boolean,
      "default": true
    },
    placeholder: {
      type: String,
      "default": null
    },
    variant: {
      type: String,
      "default": null
    },
    invalid: {
      type: Boolean,
      "default": false
    },
    disabled: {
      type: Boolean,
      "default": false
    },
    inputId: {
      type: String,
      "default": null
    },
    inputClass: {
      type: [String, Object],
      "default": null
    },
    inputStyle: {
      type: Object,
      "default": null
    },
    inputProps: {
      type: null,
      "default": null
    },
    removeTokenIcon: {
      type: String,
      "default": void 0
    },
    chipIcon: {
      type: String,
      "default": void 0
    },
    ariaLabelledby: {
      type: String,
      "default": null
    },
    ariaLabel: {
      type: String,
      "default": null
    }
  },
  style: InputChipsStyle,
  provide: function provide() {
    return {
      $pcInputChips: this,
      $parentInstance: this
    };
  }
};
function _toConsumableArray(r) {
  return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread();
}
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray(r, a) {
  if (r) {
    if ("string" == typeof r) return _arrayLikeToArray(r, a);
    var t = {}.toString.call(r).slice(8, -1);
    return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0;
  }
}
function _iterableToArray(r) {
  if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r);
}
function _arrayWithoutHoles(r) {
  if (Array.isArray(r)) return _arrayLikeToArray(r);
}
function _arrayLikeToArray(r, a) {
  (null == a || a > r.length) && (a = r.length);
  for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e];
  return n;
}
var script = {
  name: "InputChips",
  "extends": script$1,
  inheritAttrs: false,
  emits: ["update:modelValue", "add", "remove", "focus", "blur"],
  data: function data() {
    return {
      inputValue: null,
      focused: false,
      focusedIndex: null
    };
  },
  mounted: function mounted() {
    console.warn("Deprecated since v4. Use AutoComplete component instead with its typeahead property.");
  },
  methods: {
    onWrapperClick: function onWrapperClick() {
      this.$refs.input.focus();
    },
    onInput: function onInput(event) {
      this.inputValue = event.target.value;
      this.focusedIndex = null;
    },
    onFocus: function onFocus(event) {
      this.focused = true;
      this.focusedIndex = null;
      this.$emit("focus", event);
    },
    onBlur: function onBlur(event) {
      this.focused = false;
      this.focusedIndex = null;
      if (this.addOnBlur) {
        this.addItem(event, event.target.value, false);
      }
      this.$emit("blur", event);
    },
    onKeyDown: function onKeyDown(event) {
      var inputValue = event.target.value;
      switch (event.code) {
        case "Backspace":
          if (inputValue.length === 0 && this.modelValue && this.modelValue.length > 0) {
            if (this.focusedIndex !== null) {
              this.removeItem(event, this.focusedIndex);
            } else this.removeItem(event, this.modelValue.length - 1);
          }
          break;
        case "Enter":
        case "NumpadEnter":
          if (inputValue && inputValue.trim().length && !this.maxedOut) {
            this.addItem(event, inputValue, true);
          }
          break;
        case "ArrowLeft":
          if (inputValue.length === 0 && this.modelValue && this.modelValue.length > 0) {
            this.$refs.container.focus();
          }
          break;
        case "ArrowRight":
          event.stopPropagation();
          break;
        default:
          if (this.separator) {
            if (this.separator === event.key || event.key.match(this.separator)) {
              this.addItem(event, inputValue, true);
            }
          }
          break;
      }
    },
    onPaste: function onPaste(event) {
      var _this = this;
      if (this.separator) {
        var separator = this.separator.replace("\\n", "\n").replace("\\r", "\r").replace("\\t", "	");
        var pastedData = (event.clipboardData || (void 0)["clipboardData"]).getData("Text");
        if (pastedData) {
          var value = this.modelValue || [];
          var pastedValues = pastedData.split(separator);
          pastedValues = pastedValues.filter(function(val) {
            return _this.allowDuplicate || value.indexOf(val) === -1;
          });
          value = [].concat(_toConsumableArray(value), _toConsumableArray(pastedValues));
          this.updateModel(event, value, true);
        }
      }
    },
    onContainerFocus: function onContainerFocus() {
      this.focused = true;
    },
    onContainerBlur: function onContainerBlur() {
      this.focusedIndex = -1;
      this.focused = false;
    },
    onContainerKeyDown: function onContainerKeyDown(event) {
      switch (event.code) {
        case "ArrowLeft":
          this.onArrowLeftKeyOn(event);
          break;
        case "ArrowRight":
          this.onArrowRightKeyOn(event);
          break;
        case "Backspace":
          this.onBackspaceKeyOn(event);
          break;
      }
    },
    onArrowLeftKeyOn: function onArrowLeftKeyOn() {
      if (this.inputValue.length === 0 && this.modelValue && this.modelValue.length > 0) {
        this.focusedIndex = this.focusedIndex === null ? this.modelValue.length - 1 : this.focusedIndex - 1;
        if (this.focusedIndex < 0) this.focusedIndex = 0;
      }
    },
    onArrowRightKeyOn: function onArrowRightKeyOn() {
      if (this.inputValue.length === 0 && this.modelValue && this.modelValue.length > 0) {
        if (this.focusedIndex === this.modelValue.length - 1) {
          this.focusedIndex = null;
          this.$refs.input.focus();
        } else {
          this.focusedIndex++;
        }
      }
    },
    onBackspaceKeyOn: function onBackspaceKeyOn(event) {
      if (this.focusedIndex !== null) {
        this.removeItem(event, this.focusedIndex);
      }
    },
    updateModel: function updateModel(event, value, preventDefault) {
      var _this2 = this;
      this.$emit("update:modelValue", value);
      this.$emit("add", {
        originalEvent: event,
        value
      });
      this.$refs.input.value = "";
      this.inputValue = "";
      setTimeout(function() {
        _this2.maxedOut && (_this2.focused = false);
      }, 0);
      if (preventDefault) {
        event.preventDefault();
      }
    },
    addItem: function addItem(event, item, preventDefault) {
      if (item && item.trim().length) {
        var value = this.modelValue ? _toConsumableArray(this.modelValue) : [];
        if (this.allowDuplicate || value.indexOf(item) === -1) {
          value.push(item);
          this.updateModel(event, value, preventDefault);
        }
      }
    },
    removeItem: function removeItem(event, index) {
      if (this.disabled) {
        return;
      }
      var values = _toConsumableArray(this.modelValue);
      var removedItem = values.splice(index, 1);
      this.focusedIndex = null;
      this.$refs.input.focus();
      this.$emit("update:modelValue", values);
      this.$emit("remove", {
        originalEvent: event,
        value: removedItem
      });
    }
  },
  computed: {
    maxedOut: function maxedOut() {
      return this.max && this.modelValue && this.max === this.modelValue.length;
    },
    focusedOptionId: function focusedOptionId() {
      return this.focusedIndex !== null ? "".concat(this.$id, "_inputchips_item_").concat(this.focusedIndex) : null;
    }
  },
  components: {
    Chip: script$2
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
var _hoisted_1 = ["aria-labelledby", "aria-label", "aria-activedescendant"];
var _hoisted_2 = ["id", "aria-label", "aria-setsize", "aria-posinset", "data-p-focused"];
var _hoisted_3 = ["id", "disabled", "placeholder", "aria-invalid"];
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_Chip = resolveComponent("Chip");
  return openBlock(), createElementBlock("div", mergeProps({
    "class": _ctx.cx("root")
  }, _ctx.ptmi("root")), [createElementVNode("ul", mergeProps({
    ref: "container",
    "class": _ctx.cx("input"),
    tabindex: "-1",
    role: "listbox",
    "aria-orientation": "horizontal",
    "aria-labelledby": _ctx.ariaLabelledby,
    "aria-label": _ctx.ariaLabel,
    "aria-activedescendant": $data.focused ? $options.focusedOptionId : void 0,
    onClick: _cache[5] || (_cache[5] = function($event) {
      return $options.onWrapperClick();
    }),
    onFocus: _cache[6] || (_cache[6] = function() {
      return $options.onContainerFocus && $options.onContainerFocus.apply($options, arguments);
    }),
    onBlur: _cache[7] || (_cache[7] = function() {
      return $options.onContainerBlur && $options.onContainerBlur.apply($options, arguments);
    }),
    onKeydown: _cache[8] || (_cache[8] = function() {
      return $options.onContainerKeyDown && $options.onContainerKeyDown.apply($options, arguments);
    })
  }, _ctx.ptm("input")), [(openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.modelValue, function(val, i) {
    return openBlock(), createElementBlock("li", mergeProps({
      key: "".concat(i, "_").concat(val),
      id: _ctx.$id + "_inputchips_item_" + i,
      role: "option",
      "class": _ctx.cx("chipItem", {
        index: i
      }),
      "aria-label": val,
      "aria-selected": true,
      "aria-setsize": _ctx.modelValue.length,
      "aria-posinset": i + 1,
      ref_for: true
    }, _ctx.ptm("chipItem"), {
      "data-p-focused": $data.focusedIndex === i
    }), [renderSlot(_ctx.$slots, "chip", {
      "class": normalizeClass(_ctx.cx("pcChip")),
      index: i,
      value: val,
      removeCallback: function removeCallback(event) {
        return _ctx.removeOption(event, i);
      }
    }, function() {
      return [createVNode(_component_Chip, {
        "class": normalizeClass(_ctx.cx("pcChip")),
        label: val,
        removeIcon: _ctx.chipIcon || _ctx.removeTokenIcon,
        removable: "",
        unstyled: _ctx.unstyled,
        onRemove: function onRemove($event) {
          return $options.removeItem($event, i);
        },
        pt: _ctx.ptm("pcChip")
      }, {
        removeicon: withCtx(function() {
          return [renderSlot(_ctx.$slots, _ctx.$slots.chipicon ? "chipicon" : "removetokenicon", {
            "class": normalizeClass(_ctx.cx("chipIcon")),
            index: i,
            removeCallback: function removeCallback(event) {
              return $options.removeItem(event, i);
            }
          })];
        }),
        _: 2
      }, 1032, ["class", "label", "removeIcon", "unstyled", "onRemove", "pt"])];
    })], 16, _hoisted_2);
  }), 128)), createElementVNode("li", mergeProps({
    "class": _ctx.cx("inputItem"),
    role: "option"
  }, _ctx.ptm("inputItem")), [createElementVNode("input", mergeProps({
    ref: "input",
    id: _ctx.inputId,
    type: "text",
    "class": _ctx.inputClass,
    style: _ctx.inputStyle,
    disabled: _ctx.disabled || $options.maxedOut,
    placeholder: _ctx.placeholder,
    "aria-invalid": _ctx.invalid || void 0,
    onFocus: _cache[0] || (_cache[0] = function($event) {
      return $options.onFocus($event);
    }),
    onBlur: _cache[1] || (_cache[1] = function($event) {
      return $options.onBlur($event);
    }),
    onInput: _cache[2] || (_cache[2] = function() {
      return $options.onInput && $options.onInput.apply($options, arguments);
    }),
    onKeydown: _cache[3] || (_cache[3] = function($event) {
      return $options.onKeyDown($event);
    }),
    onPaste: _cache[4] || (_cache[4] = function($event) {
      return $options.onPaste($event);
    })
  }, _objectSpread(_objectSpread({}, _ctx.inputProps), _ctx.ptm("inputItemField"))), null, 16, _hoisted_3)], 16)], 16, _hoisted_1)], 16);
}
script.render = render;

export { script as default };
//# sourceMappingURL=index214.mjs.map
