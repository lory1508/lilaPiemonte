import r from"./N3QlzVNc.js";import{B as n,J as o,c as s,o as l,q as i,b as d,L as a}from"./Dn9hp4nn.js";import"./Be1fzYNM.js";import"./Bg_spw3R.js";var p=({dt:e})=>`
.p-overlaybadge {
    position: relative;
}

.p-overlaybadge .p-badge {
    position: absolute;
    inset-block-start: 0;
    inset-inline-end: 0;
    transform: translate(50%, -50%);
    transform-origin: 100% 0;
    margin: 0;
    outline-width: ${e("overlaybadge.outline.width")};
    outline-style: solid;
    outline-color: ${e("overlaybadge.outline.color")};
}

.p-overlaybadge .p-badge:dir(rtl) {
    transform: translate(-50%, -50%);
}
`,v={root:"p-overlaybadge"},c=n.extend({name:"overlaybadge",style:p,classes:v}),g={name:"OverlayBadge",extends:r,style:c,provide:function(){return{$pcOverlayBadge:this,$parentInstance:this}}},m={name:"OverlayBadge",extends:g,inheritAttrs:!1,components:{Badge:r}};function y(e,u,b,B,$,f){var t=o("Badge");return l(),s("div",a({class:e.cx("root")},e.ptmi("root")),[i(e.$slots,"default"),d(t,a(e.$props,{pt:e.ptm("pcBadge")}),null,16,["pt"])],16)}m.render=y;export{m as default};
