import{P as U,Q as k,ab as T,S as j,ae as C,ba as S,b1 as b,g as d,t as E,v as $,x as V,z as s,L as c,A as m,a2 as l,a5 as H}from"./SVjsvECN.js";import{s as K,a as M}from"./B78CZkDY.js";import{s as F}from"./B95-6ejK.js";import{s as R}from"./CcX6n7PC.js";import N from"./BqShl0Dq.js";import I from"./DJTH_C3s.js";import{R as z}from"./DwpNgmLb.js";import{s as Q}from"./CaFeJcKF.js";import"./00LYa84b.js";import"./Be1fzYNM.js";import"./CNR4bYqy.js";import"./CgnqNT3i.js";import"./D1_Zf12H.js";import"./DmfvTtO6.js";import"./x_quj64y.js";import"./DKXxHM3b.js";import"./BLPI530B.js";import"./BncpRjp9.js";import"./B8VrhYjg.js";import"./Bh1AVWuW.js";import"./XYeZQkeW.js";import"./CEf7nrSB.js";import"./1FdSNK3T.js";var W=({dt:e})=>`
.p-orderlist {
    display: flex;
    gap: ${e("orderlist.gap")};
}

.p-orderlist-controls {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: ${e("orderlist.controls.gap")};
}
`,q={root:"p-orderlist p-component",controls:"p-orderlist-controls"},G=U.extend({name:"orderlist",style:W,classes:q}),J={name:"BaseOrderList",extends:Q,props:{modelValue:{type:Array,default:null},selection:{type:Array,default:null},dataKey:{type:String,default:null},listStyle:{type:null,default:null},metaKeySelection:{type:Boolean,default:!1},autoOptionFocus:{type:Boolean,default:!0},focusOnHover:{type:Boolean,default:!0},responsive:{type:Boolean,default:!0},breakpoint:{type:String,default:"960px"},striped:{type:Boolean,default:!1},scrollHeight:{type:String,default:"14rem"},buttonProps:{type:Object,default:function(){return{severity:"secondary"}}},moveUpButtonProps:{type:null,default:null},moveTopButtonProps:{type:null,default:null},moveDownButtonProps:{type:null,default:null},moveBottomButtonProps:{type:null,default:null},tabindex:{type:Number,default:0},disabled:{type:Boolean,default:!1},ariaLabelledby:{type:String,default:null},ariaLabel:{type:String,default:null}},style:G,provide:function(){return{$pcOrderList:this,$parentInstance:this}}};function y(e){return _(e)||Z(e)||Y(e)||X()}function X(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Y(e,t){if(e){if(typeof e=="string")return v(e,t);var o={}.toString.call(e).slice(8,-1);return o==="Object"&&e.constructor&&(o=e.constructor.name),o==="Map"||o==="Set"?Array.from(e):o==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o)?v(e,t):void 0}}function Z(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function _(e){if(Array.isArray(e))return v(e)}function v(e,t){(t==null||t>e.length)&&(t=e.length);for(var o=0,r=Array(t);o<t;o++)r[o]=e[o];return r}var x={name:"OrderList",extends:J,inheritAttrs:!1,emits:["update:modelValue","reorder","update:selection","selection-change","focus","blur"],itemTouched:!1,reorderDirection:null,styleElement:null,list:null,data:function(){return{d_selection:this.selection}},beforeUnmount:function(){this.destroyStyle()},updated:function(){this.reorderDirection&&(this.updateListScroll(),this.reorderDirection=null)},mounted:function(){this.responsive&&this.createStyle()},methods:{updateSelection:function(t){this.$emit("update:selection",this.d_selection),this.$emit("selection-change",{originalEvent:t,value:this.d_selection})},onChangeSelection:function(t){this.d_selection=t.value,this.updateSelection(t.event)},onListFocus:function(t){this.$emit("focus",t)},onListBlur:function(t){this.$emit("blur",t)},onReorderUpdate:function(t,o){this.$emit("update:modelValue",o),this.$emit("reorder",{originalEvent:t,value:o,direction:this.reorderDirection})},moveUp:function(t){if(this.d_selection){for(var o=y(this.modelValue),r=0;r<this.d_selection.length;r++){var i=this.d_selection[r],n=b(i,o);if(n!==0){var a=o[n],u=o[n-1];o[n-1]=a,o[n]=u}else break}this.reorderDirection="up",this.onReorderUpdate(t,o)}},moveTop:function(t){if(this.d_selection){for(var o=y(this.modelValue),r=0;r<this.d_selection.length;r++){var i=this.d_selection[r],n=b(i,o);if(n!==0){var a=o.splice(n,1)[0];o.unshift(a)}else break}this.reorderDirection="top",this.onReorderUpdate(t,o)}},moveDown:function(t){if(this.d_selection){for(var o=y(this.modelValue),r=this.d_selection.length-1;r>=0;r--){var i=this.d_selection[r],n=b(i,o);if(n!==o.length-1){var a=o[n],u=o[n+1];o[n+1]=a,o[n]=u}else break}this.reorderDirection="down",this.onReorderUpdate(t,o)}},moveBottom:function(t){if(this.d_selection){for(var o=y(this.modelValue),r=this.d_selection.length-1;r>=0;r--){var i=this.d_selection[r],n=b(i,o);if(n!==o.length-1){var a=o.splice(n,1)[0];o.push(a)}else break}this.reorderDirection="bottom",this.onReorderUpdate(t,o)}},updateListScroll:function(){this.list=j(this.$refs.listbox.$el,'[data-pc-section="list"]');var t=C(this.list,'[data-pc-section="item"][data-p-selected="true"]');if(t&&t.length)switch(this.reorderDirection){case"up":S(this.list,t[0]);break;case"top":this.list.scrollTop=0;break;case"down":S(this.list,t[t.length-1]);break;case"bottom":this.list.scrollTop=this.list.scrollHeight;break}},createStyle:function(){if(!this.styleElement&&!this.isUnstyled){var t;this.styleElement=document.createElement("style"),this.styleElement.type="text/css",T(this.styleElement,"nonce",(t=this.$primevue)===null||t===void 0||(t=t.config)===null||t===void 0||(t=t.csp)===null||t===void 0?void 0:t.nonce),document.head.appendChild(this.styleElement);var o=`
@media screen and (max-width: `.concat(this.breakpoint,`) {
    .p-orderlist[`).concat(this.$attrSelector,`] {
        flex-direction: column;
    }

    .p-orderlist[`).concat(this.$attrSelector,`] .p-orderlist-controls {
        flex-direction: row;
    }
}
`);this.styleElement.innerHTML=o}},destroyStyle:function(){this.styleElement&&(document.head.removeChild(this.styleElement),this.styleElement=null)},moveDisabled:function(){return this.disabled?!0:!this.d_selection||!this.d_selection.length}},computed:{moveUpAriaLabel:function(){return this.$primevue.config.locale.aria?this.$primevue.config.locale.aria.moveUp:void 0},moveTopAriaLabel:function(){return this.$primevue.config.locale.aria?this.$primevue.config.locale.aria.moveTop:void 0},moveDownAriaLabel:function(){return this.$primevue.config.locale.aria?this.$primevue.config.locale.aria.moveDown:void 0},moveBottomAriaLabel:function(){return this.$primevue.config.locale.aria?this.$primevue.config.locale.aria.moveBottom:void 0},hasSelectedOption:function(){return k(this.d_selection)}},components:{Listbox:I,Button:N,AngleUpIcon:R,AngleDownIcon:F,AngleDoubleUpIcon:M,AngleDoubleDownIcon:K},directives:{ripple:z}};function f(e){"@babel/helpers - typeof";return f=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},f(e)}function B(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),o.push.apply(o,r)}return o}function p(e){for(var t=1;t<arguments.length;t++){var o=arguments[t]!=null?arguments[t]:{};t%2?B(Object(o),!0).forEach(function(r){ee(e,r,o[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):B(Object(o)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(o,r))})}return e}function ee(e,t,o){return(t=te(t))in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function te(e){var t=oe(e,"string");return f(t)=="symbol"?t:t+""}function oe(e,t){if(f(e)!="object"||!e)return e;var o=e[Symbol.toPrimitive];if(o!==void 0){var r=o.call(e,t);if(f(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function ne(e,t,o,r,i,n){var a=d("AngleUpIcon"),u=d("Button"),D=d("AngleDoubleUpIcon"),L=d("AngleDownIcon"),A=d("AngleDoubleDownIcon"),w=d("Listbox");return $(),E("div",l({class:e.cx("root")},e.ptmi("root")),[V("div",l({class:e.cx("controls")},e.ptm("controls")),[c(e.$slots,"controlsstart"),s(u,l({onClick:n.moveUp,"aria-label":n.moveUpAriaLabel,disabled:n.moveDisabled()},p(p({},e.buttonProps),e.moveUpButtonProps),{pt:e.ptm("pcMoveUpButton"),unstyled:e.unstyled}),{icon:m(function(){return[c(e.$slots,"moveupicon",{},function(){return[s(a,l(e.ptm("pcMoveUpButton").icon,{"data-pc-section":"moveupicon"}),null,16)]})]}),_:3},16,["onClick","aria-label","disabled","pt","unstyled"]),s(u,l({onClick:n.moveTop,"aria-label":n.moveTopAriaLabel,disabled:n.moveDisabled()},p(p({},e.buttonProps),e.moveTopButtonProps),{pt:e.ptm("pcMoveTopButton"),unstyled:e.unstyled}),{icon:m(function(){return[c(e.$slots,"movetopicon",{},function(){return[s(D,l(e.ptm("pcMoveTopButton").icon,{"data-pc-section":"movetopicon"}),null,16)]})]}),_:3},16,["onClick","aria-label","disabled","pt","unstyled"]),s(u,l({onClick:n.moveDown,"aria-label":n.moveDownAriaLabel,disabled:n.moveDisabled()},p(p({},e.buttonProps),e.moveDownButtonProps),{pt:e.ptm("pcMoveDownButton"),unstyled:e.unstyled}),{icon:m(function(){return[c(e.$slots,"movedownicon",{},function(){return[s(L,l(e.ptm("pcMoveDownButton").icon,{"data-pc-section":"movedownicon"}),null,16)]})]}),_:3},16,["onClick","aria-label","disabled","pt","unstyled"]),s(u,l({onClick:n.moveBottom,"aria-label":n.moveBottomAriaLabel,disabled:n.moveDisabled()},p(p({},e.buttonProps),e.moveBottomButtonProps),{pt:e.ptm("pcMoveBottomButton"),unstyled:e.unstyled}),{icon:m(function(){return[c(e.$slots,"movebottomicon",{},function(){return[s(A,l(e.ptm("pcMoveBottomButton").icon,{"data-pc-section":"movebottomicon"}),null,16)]})]}),_:3},16,["onClick","aria-label","disabled","pt","unstyled"]),c(e.$slots,"controlsend")],16),s(w,{ref:"listbox",id:e.$id,modelValue:i.d_selection,options:e.modelValue,multiple:"",metaKeySelection:e.metaKeySelection,listStyle:e.listStyle,scrollHeight:e.scrollHeight,tabindex:e.tabindex,dataKey:e.dataKey,autoOptionFocus:e.autoOptionFocus,focusOnHover:e.focusOnHover,striped:e.striped,disabled:e.disabled,ariaLabel:e.ariaLabel,ariaLabelledby:e.ariaLabelledby,pt:e.ptm("pcListbox"),unstyled:e.unstyled,onFocus:n.onListFocus,onBlur:n.onListBlur,onChange:n.onChangeSelection},H({option:m(function(h){var g=h.option,O=h.selected,P=h.index;return[c(e.$slots,e.$slots.option?"option":"item",{item:g,option:g,selected:O,index:P})]}),_:2},[e.$slots.header?{name:"header",fn:m(function(){return[c(e.$slots,"header")]}),key:"0"}:void 0]),1032,["id","modelValue","options","metaKeySelection","listStyle","scrollHeight","tabindex","dataKey","autoOptionFocus","focusOnHover","striped","disabled","ariaLabel","ariaLabelledby","pt","unstyled","onFocus","onBlur","onChange"])],16)}x.render=ne;export{x as default};
