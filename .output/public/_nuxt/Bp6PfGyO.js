import{s as f}from"./CaFeJcKF.js";import{P as p,O as c,L as s,v as m,A as y,a2 as a,a3 as v}from"./SVjsvECN.js";var b={root:"p-formfield p-component"},h=p.extend({name:"formfield",classes:b}),O={name:"BaseFormField",extends:f,style:h,props:{name:{type:String,default:void 0},resolver:{type:Function,default:void 0},initialValue:{type:null,default:void 0},validateOnValueUpdate:{type:Boolean,default:void 0},validateOnBlur:{type:Boolean,default:void 0},validateOnMount:{type:Boolean,default:void 0},validateOnSubmit:{type:Boolean,default:void 0},as:{type:[String,Object],default:"DIV"},asChild:{type:Boolean,default:!1}},provide:function(){return{$pcFormField:this,$parentInstance:this}}};function i(e){"@babel/helpers - typeof";return i=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},i(e)}function u(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(l){return Object.getOwnPropertyDescriptor(e,l).enumerable})),r.push.apply(r,n)}return r}function d(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};t%2?u(Object(r),!0).forEach(function(n){g(e,n,r[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):u(Object(r)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))})}return e}function g(e,t,r){return(t=S(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function S(e){var t=j(e,"string");return i(t)=="symbol"?t:t+""}function j(e,t){if(i(e)!="object"||!e)return e;var r=e[Symbol.toPrimitive];if(r!==void 0){var n=r.call(e,t);if(i(n)!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}var P={name:"FormField",extends:O,inheritAttrs:!1,inject:{$pcForm:{default:void 0}},watch:{formControl:{immediate:!0,handler:function(t){var r,n;(r=this.$pcForm)===null||r===void 0||(n=r.register)===null||n===void 0||n.call(r,this.name,t)}}},computed:{formControl:function(){return{name:this.name,resolver:this.resolver,initialValue:this.initialValue,validateOnValueUpdate:this.validateOnValueUpdate,validateOnBlur:this.validateOnBlur,validateOnMount:this.validateOnMount,validateOnSubmit:this.validateOnSubmit}},field:function(){var t;return((t=this.$pcForm)===null||t===void 0||(t=t.fields)===null||t===void 0?void 0:t[this.name])||{}},fieldAttrs:function(){return d(d({},this.field.props),this.field.states)}}};function $(e,t,r,n,l,o){return e.asChild?s(e.$slots,"default",a({key:1,class:e.cx("root"),props:o.field.props},o.fieldAttrs)):(m(),c(v(e.as),a({key:0,class:e.cx("root")},e.ptmi("root")),{default:y(function(){return[s(e.$slots,"default",a({props:o.field.props},o.fieldAttrs))]}),_:3},16,["class"]))}P.render=$;export{P as default};
