import{B as b,V as v,I as f,b5 as k,J as P,c as u,o as i,m as d,p as w,a as $,L as g,q as n,N as y,w as l,g as h,F as C,d as S,t as T}from"./Dn9hp4nn.js";import R from"./NjVmejk_.js";import{s as L}from"./Bg_spw3R.js";import"./C3p1ylh7.js";import"./C7b4gZUD.js";import"./zqw0Hnuf.js";import"./CLAbTC34.js";import"./DmfvTtO6.js";import"./D7kdc1Yd.js";import"./Be1fzYNM.js";import"./DGEOgZpe.js";import"./Bcu36EdM.js";import"./5RgOFJuq.js";import"./BU7O15au.js";import"./BkpTANRt.js";import"./BZ-OFTnf.js";import"./DGU16joC.js";import"./7AMeeRd3.js";import"./B_Yf2iad.js";import"./C_BWObW_.js";import"./BO9xyH1D.js";import"./DVG4wQ4v.js";import"./DstX-Fs2.js";import"./DH9hRRKd.js";import"./7AY02swn.js";import"./Cycfuz7U.js";import"./tz6l0N4O.js";import"./BbZCYMOq.js";import"./BqGCBGAB.js";import"./0S0VPAon.js";var A=({dt:e})=>`
.p-dataview {
    border-color: ${e("dataview.border.color")};
    border-width: ${e("dataview.border.width")};
    border-style: solid;
    border-radius: ${e("dataview.border.radius")};
    padding: ${e("dataview.padding")};
}

.p-dataview-header {
    background: ${e("dataview.header.background")};
    color: ${e("dataview.header.color")};
    border-color: ${e("dataview.header.border.color")};
    border-width: ${e("dataview.header.border.width")};
    border-style: solid;
    padding: ${e("dataview.header.padding")};
    border-radius: ${e("dataview.header.border.radius")};
}

.p-dataview-content {
    background: ${e("dataview.content.background")};
    border-color: ${e("dataview.content.border.color")};
    border-width: ${e("dataview.content.border.width")};
    border-style: solid;
    color: ${e("dataview.content.color")};
    padding: ${e("dataview.content.padding")};
    border-radius: ${e("dataview.content.border.radius")};
}

.p-dataview-footer {
    background: ${e("dataview.footer.background")};
    color: ${e("dataview.footer.color")};
    border-color: ${e("dataview.footer.border.color")};
    border-width: ${e("dataview.footer.border.width")};
    border-style: solid;
    padding: ${e("dataview.footer.padding")};
    border-radius: ${e("dataview.footer.border.radius")};
}

.p-dataview-paginator-top {
    border-width: ${e("dataview.paginator.top.border.width")};
    border-color: ${e("dataview.paginator.top.border.color")};
    border-style: solid;
}

.p-dataview-paginator-bottom {
    border-width: ${e("dataview.paginator.bottom.border.width")};
    border-color: ${e("dataview.paginator.bottom.border.color")};
    border-style: solid;
}
`,B={root:function(t){var r=t.props;return["p-dataview p-component",{"p-dataview-list":r.layout==="list","p-dataview-grid":r.layout==="grid"}]},header:"p-dataview-header",pcPaginator:function(t){var r=t.position;return"p-dataview-paginator-"+r},content:"p-dataview-content",emptyMessage:"p-dataview-empty-message",footer:"p-dataview-footer"},O=b.extend({name:"dataview",style:A,classes:B}),F={name:"BaseDataView",extends:L,props:{value:{type:Array,default:null},layout:{type:String,default:"list"},rows:{type:Number,default:0},first:{type:Number,default:0},totalRecords:{type:Number,default:0},paginator:{type:Boolean,default:!1},paginatorPosition:{type:String,default:"bottom"},alwaysShowPaginator:{type:Boolean,default:!0},paginatorTemplate:{type:String,default:"FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink RowsPerPageDropdown"},pageLinkSize:{type:Number,default:5},rowsPerPageOptions:{type:Array,default:null},currentPageReportTemplate:{type:String,default:"({currentPage} of {totalPages})"},sortField:{type:[String,Function],default:null},sortOrder:{type:Number,default:null},lazy:{type:Boolean,default:!1},dataKey:{type:String,default:null}},style:O,provide:function(){return{$pcDataView:this,$parentInstance:this}}};function V(e){return M(e)||N(e)||D(e)||z()}function z(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function D(e,t){if(e){if(typeof e=="string")return m(e,t);var r={}.toString.call(e).slice(8,-1);return r==="Object"&&e.constructor&&(r=e.constructor.name),r==="Map"||r==="Set"?Array.from(e):r==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?m(e,t):void 0}}function N(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function M(e){if(Array.isArray(e))return m(e)}function m(e,t){(t==null||t>e.length)&&(t=e.length);for(var r=0,p=Array(t);r<t;r++)p[r]=e[r];return p}var I={name:"DataView",extends:F,inheritAttrs:!1,emits:["update:first","update:rows","page"],data:function(){return{d_first:this.first,d_rows:this.rows}},watch:{first:function(t){this.d_first=t},rows:function(t){this.d_rows=t},sortField:function(){this.resetPage()},sortOrder:function(){this.resetPage()}},methods:{getKey:function(t,r){return this.dataKey?f(t,this.dataKey):r},onPage:function(t){this.d_first=t.first,this.d_rows=t.rows,this.$emit("update:first",this.d_first),this.$emit("update:rows",this.d_rows),this.$emit("page",t)},sort:function(){var t=this;if(this.value){var r=V(this.value),p=v();return r.sort(function(s,o){var c=f(s,t.sortField),a=f(o,t.sortField);return k(c,a,t.sortOrder,p)}),r}else return null},resetPage:function(){this.d_first=0,this.$emit("update:first",this.d_first)}},computed:{getTotalRecords:function(){return this.totalRecords?this.totalRecords:this.value?this.value.length:0},empty:function(){return!this.value||this.value.length===0},emptyMessageText:function(){var t;return((t=this.$primevue.config)===null||t===void 0||(t=t.locale)===null||t===void 0?void 0:t.emptyMessage)||""},paginatorTop:function(){return this.paginator&&(this.paginatorPosition!=="bottom"||this.paginatorPosition==="both")},paginatorBottom:function(){return this.paginator&&(this.paginatorPosition!=="top"||this.paginatorPosition==="both")},items:function(){if(this.value&&this.value.length){var t=this.value;if(t&&t.length&&this.sortField&&(t=this.sort()),this.paginator){var r=this.lazy?0:this.d_first;return t.slice(r,r+this.d_rows)}else return t}else return null}},components:{DVPaginator:R}};function K(e,t,r,p,s,o){var c=P("DVPaginator");return i(),u("div",g({class:e.cx("root")},e.ptmi("root")),[e.$slots.header?(i(),u("div",g({key:0,class:e.cx("header")},e.ptm("header")),[n(e.$slots,"header")],16)):d("",!0),o.paginatorTop?(i(),w(c,{key:1,rows:s.d_rows,first:s.d_first,totalRecords:o.getTotalRecords,pageLinkSize:e.pageLinkSize,template:e.paginatorTemplate,rowsPerPageOptions:e.rowsPerPageOptions,currentPageReportTemplate:e.currentPageReportTemplate,class:h(e.cx("pcPaginator",{position:"top"})),alwaysShow:e.alwaysShowPaginator,onPage:t[0]||(t[0]=function(a){return o.onPage(a)}),unstyled:e.unstyled,pt:e.ptm("pcPaginator")},y({_:2},[e.$slots.paginatorcontainer?{name:"container",fn:l(function(a){return[n(e.$slots,"paginatorcontainer",{first:a.first,last:a.last,rows:a.rows,page:a.page,pageCount:a.pageCount,pageLinks:a.pageLinks,totalRecords:a.totalRecords,firstPageCallback:a.firstPageCallback,lastPageCallback:a.lastPageCallback,prevPageCallback:a.prevPageCallback,nextPageCallback:a.nextPageCallback,rowChangeCallback:a.rowChangeCallback,changePageCallback:a.changePageCallback})]}),key:"0"}:void 0,e.$slots.paginatorstart?{name:"start",fn:l(function(){return[n(e.$slots,"paginatorstart")]}),key:"1"}:void 0,e.$slots.paginatorend?{name:"end",fn:l(function(){return[n(e.$slots,"paginatorend")]}),key:"2"}:void 0]),1032,["rows","first","totalRecords","pageLinkSize","template","rowsPerPageOptions","currentPageReportTemplate","class","alwaysShow","unstyled","pt"])):d("",!0),$("div",g({class:e.cx("content")},e.ptm("content")),[o.empty?(i(),u("div",g({key:1,class:e.cx("emptyMessage")},e.ptm("emptyMessage")),[n(e.$slots,"empty",{layout:e.layout},function(){return[S(T(o.emptyMessageText),1)]})],16)):(i(),u(C,{key:0},[e.$slots.list&&e.layout==="list"?n(e.$slots,"list",{key:0,items:o.items}):d("",!0),e.$slots.grid&&e.layout==="grid"?n(e.$slots,"grid",{key:1,items:o.items}):d("",!0)],64))],16),o.paginatorBottom?(i(),w(c,{key:2,rows:s.d_rows,first:s.d_first,totalRecords:o.getTotalRecords,pageLinkSize:e.pageLinkSize,template:e.paginatorTemplate,rowsPerPageOptions:e.rowsPerPageOptions,currentPageReportTemplate:e.currentPageReportTemplate,class:h(e.cx("pcPaginator",{position:"bottom"})),alwaysShow:e.alwaysShowPaginator,onPage:t[1]||(t[1]=function(a){return o.onPage(a)}),unstyled:e.unstyled,pt:e.ptm("pcPaginator")},y({_:2},[e.$slots.paginatorcontainer?{name:"container",fn:l(function(a){return[n(e.$slots,"paginatorcontainer",{first:a.first,last:a.last,rows:a.rows,page:a.page,pageCount:a.pageCount,pageLinks:a.pageLinks,totalRecords:a.totalRecords,firstPageCallback:a.firstPageCallback,lastPageCallback:a.lastPageCallback,prevPageCallback:a.prevPageCallback,nextPageCallback:a.nextPageCallback,rowChangeCallback:a.rowChangeCallback,changePageCallback:a.changePageCallback})]}),key:"0"}:void 0,e.$slots.paginatorstart?{name:"start",fn:l(function(){return[n(e.$slots,"paginatorstart")]}),key:"1"}:void 0,e.$slots.paginatorend?{name:"end",fn:l(function(){return[n(e.$slots,"paginatorend")]}),key:"2"}:void 0]),1032,["rows","first","totalRecords","pageLinkSize","template","rowsPerPageOptions","currentPageReportTemplate","class","alwaysShow","unstyled","pt"])):d("",!0),e.$slots.footer?(i(),u("div",g({key:3,class:e.cx("footer")},e.ptm("footer")),[n(e.$slots,"footer")],16)):d("",!0)],16)}I.render=K;export{I as default};
