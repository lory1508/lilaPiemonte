import{P as i,a2 as e,O as c,L as n,v as r,A as o,a6 as s,N as d,a3 as l,x as p,ah as u,a4 as m,K as A}from"./SVjsvECN.js";import{s as h}from"./CaFeJcKF.js";var v={root:"p-accordioncontent",content:"p-accordioncontent-content"},f=i.extend({name:"accordioncontent",classes:v}),y={name:"BaseAccordionContent",extends:h,props:{as:{type:[String,Object],default:"DIV"},asChild:{type:Boolean,default:!1}},style:f,provide:function(){return{$pcAccordionContent:this,$parentInstance:this}}},P={name:"AccordionContent",extends:y,inheritAttrs:!1,inject:["$pcAccordion","$pcAccordionPanel"],computed:{id:function(){return"".concat(this.$pcAccordion.id,"_accordioncontent_").concat(this.$pcAccordionPanel.value)},ariaLabelledby:function(){return"".concat(this.$pcAccordion.id,"_accordionheader_").concat(this.$pcAccordionPanel.value)},attrs:function(){return e(this.a11yAttrs,this.ptmi("root",this.ptParams))},a11yAttrs:function(){return{id:this.id,role:"region","aria-labelledby":this.ariaLabelledby,"data-pc-name":"accordioncontent","data-p-active":this.$pcAccordionPanel.active}},ptParams:function(){return{context:{active:this.$pcAccordionPanel.active}}}}};function $(t,b,C,B,g,a){return t.asChild?n(t.$slots,"default",{key:1,class:A(t.cx("root")),active:a.$pcAccordionPanel.active,a11yAttrs:a.a11yAttrs}):(r(),c(m,e({key:0,name:"p-toggleable-content"},t.ptm("transition",a.ptParams)),{default:o(function(){return[!a.$pcAccordion.lazy||a.$pcAccordionPanel.active?s((r(),c(l(t.as),e({key:0,class:t.cx("root")},a.attrs),{default:o(function(){return[p("div",e({class:t.cx("content")},t.ptm("content",a.ptParams)),[n(t.$slots,"default")],16)]}),_:3},16,["class"])),[[u,a.$pcAccordion.lazy?!0:a.$pcAccordionPanel.active]]):d("",!0)]}),_:3},16))}P.render=$;export{P as default};
