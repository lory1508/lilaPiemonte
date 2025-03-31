import{c as s,o as l,a as n,t as i,F as y,r as k,n as T,g as f,j as $,b as m,k as o,l as L,m as d,p as C,q as h,s as B}from"./B8EtgkAp.js";import{I as w,d as u}from"./U0jTlssG.js";const H={class:"flex flex-col w-1/3 gap-16 text-white"},E={class:"text-6xl font-bold uppercase"},I={class:"flex flex-col gap-4"},M=["innerHTML"],O={__name:"HeroComponent",props:{backgroundImg:{type:String,default:""},backgroundColor:{type:String,default:"bg-white"},title:{type:String,default:""},content:{type:Array,default:()=>[]}},setup(e){return(a,r)=>(l(),s("div",null,[n("div",{class:f(["flex flex-col items-start justify-center w-screen h-screen px-16",e.backgroundColor]),style:T(`background-position: 125% 0%; background-repeat: no-repeat; background-size: 70%; background-image: url('${e.backgroundImg}');`)},[n("div",H,[n("h1",E,i(e.title),1),n("div",I,[(l(!0),s(y,null,k(e.content,(c,g)=>(l(),s("div",{key:`hero_content_${g}`,innerHTML:c},null,8,M))),128))])])],6)]))}},S={__name:"ButtonComponent",props:{label:{type:String,default:""},color:{type:Object,default:()=>({bg:"bg-white",text:"text-black",shadow:"shadow-black"})}},setup(e){return(a,r)=>(l(),s("div",{class:f(["px-2 py-1 transition-all duration-300 border cursor-pointer sharp-shadow-sm hover:scale-105 w-fit",`bg-${e.color.bg} text-${e.color.shadow} border-${e.color.shadow}`])},[$(a.$slots,"left-slot"),n("div",{class:f(`text-${e.color.text}`)},i(e.label),3),$(a.$slots,"right-slot")],2))}},N={class:"flex flex-row text-black bg-white border border-black sharp-shadow-lg"},z=["src","alt"],A={class:"flex flex-col gap-4 p-2 text-crimson"},R={class:"text-2xl font-bold uppercase"},V={class:"flex flex-row items-center gap-2 text-lg"},D={class:"flex flex-row items-center gap-2 text-lg"},F={__name:"EventCard",props:{cover:{type:Object,default:()=>({url:"",alt:""})},title:{type:String,default:""},date:{type:String,default:""},startTime:{type:String,default:""},endTime:{type:String,default:""},location:{type:String,default:""},btnLabel:{type:String,default:""}},setup(e){return(a,r)=>{const c=S;return l(),s("div",N,[n("img",{src:e.cover.url,alt:e.cover.alt},null,8,z),n("div",A,[n("div",R,i(e.title),1),n("div",V,[m(o(w),{icon:"solar:calendar-bold-duotone",width:"32"}),n("span",null,i(e.date),1),n("span",null,i(e.startTime)+" - "+i(e.endTime),1)]),n("div",D,[m(o(w),{icon:"solar:map-point-bold-duotone",width:"32"}),n("span",null,i(e.location),1)]),m(c,{label:e.btnLabel,color:{text:"white",bg:"crimson",shadow:"black"},class:"ml-2"},null,8,["label"])])])}}},q={class:"flex flex-col items-center justify-center max-w-lg text-black bg-white border border-black sharp-shadow-lg"},G={key:0,class:"flex flex-col gap-4 text-sm"},J=["innerHTML"],K={key:1,class:"flex items-center justify-center text-3xl font-semibold"},P=["src","alt"],Q={__name:"ServiceCard",props:{title:{type:String,default:""},content:{type:Array,default:()=>[]},link:{type:Object,default:()=>{}},img:{type:Object,default:()=>{}},color:{type:String,default:"crimson"},specialContent:{type:String,default:""}},setup(e){const a=e,r=L(),c=d(""),g=x=>x.toLowerCase().trim().replace(/[^\w\s-]/g,"").replace(/[\s_-]+/g,"-").replace(/^-+/,"").replace(/-+$/,""),b=()=>{r.push(a.link.href)};return C(()=>{c.value=g(a.title)}),(x,_)=>{const p=S;return l(),s("div",q,[n("span",{class:f(["py-12 text-4xl font-semibold uppercase",`text-${e.color}`])},i(e.title),3),n("div",{class:f(["flex flex-col items-center justify-center w-full gap-4 p-4 text-white",`bg-${e.color}`])},[e.content?(l(),s("div",G,[(l(!0),s(y,null,k(e.content,(v,t)=>(l(),s("div",{key:`content_${o(c)}_${t}`,innerHTML:v},null,8,J))),128))])):h("",!0),e.specialContent?(l(),s("div",K,i(e.specialContent),1)):h("",!0),e.img?(l(),s("img",{key:2,src:e.img.url,alt:e.img.alt,width:"300"},null,8,P)):h("",!0),e.link?(l(),B(p,{key:3,label:e.link.label,color:{text:"black",bg:"white",shadow:"black"},class:"ml-2",onClick:b},null,8,["label"])):h("",!0)],2)])}}},U={class:"flex flex-col"},W={key:0},X={key:1,class:"flex flex-col"},Y={class:"flex flex-col items-center justify-center gap-4 py-8 bg-paleRed"},Z={class:"text-5xl font-bold uppercase text-crimson"},ee={class:"grid items-center justify-center w-full grid-cols-3 gap-4 px-4 py-8 border-black border-dashed border-y-4 bg-lightRed"},le={__name:"index",setup(e){const a=d(!1),r=d(u.home.hero),c=d(u.home.nextEvent),g=d(u.home.cards);return d(u.home.services),d(u.home.socials),d(u.home.video),C(async()=>{try{a.value=!0}catch(b){console.error(b)}finally{a.value=!1}}),(b,x)=>{const _=O,p=F,v=Q;return l(),s("div",U,[o(a)?(l(),s("div",W,"LOADING!")):(l(),s("div",X,[m(_,{"background-img":o(r).imgBackground,"background-color":"bg-red-700",title:o(r).title,content:o(r).content},null,8,["background-img","title","content"]),n("div",Y,[n("h2",Z,i(o(c).title),1),m(p,{cover:o(c).event.cover,title:o(c).event.title,date:o(c).event.date,"start-time":o(c).event.startTime,"end-time":o(c).event.endTime,"btn-label":o(c).event.button,location:o(c).event.location},null,8,["cover","title","date","start-time","end-time","btn-label","location"])]),n("div",ee,[(l(!0),s(y,null,k(o(g),(t,j)=>(l(),s("div",{key:`card_${j}`},[m(v,{title:t==null?void 0:t.title,content:t==null?void 0:t.content,img:t==null?void 0:t.img,link:t==null?void 0:t.link,color:t==null?void 0:t.color,"special-content":t==null?void 0:t.specialContent},null,8,["title","content","img","link","color","special-content"])]))),128))])]))])}}};export{le as default};
