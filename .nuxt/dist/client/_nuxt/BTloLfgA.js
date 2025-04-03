import{c as s,o as n,a as l,t as i,F as y,r as k,n as V,g as m,j as L,b as g,k as o,l as $,m as f,p as T,q as x,s as C}from"./Cbd1I6BV.js";import{I as v,d as h}from"./DSN_b3QB.js";const A={class:"flex flex-col items-center justify-center w-full h-screen gap-16 px-4 text-white bg-black bg-opacity-50 lg:bg-opacity-0 lg:backdrop-blur-none backdrop-blur-md lg:w-1/3"},N={class:"text-6xl font-bold uppercase"},R={class:"flex flex-col gap-4"},z=["innerHTML"],D={__name:"HeroComponent",props:{backgroundImg:{type:String,default:""},backgroundColor:{type:String,default:"bg-white"},title:{type:String,default:""},content:{type:Array,default:()=>[]}},setup(t){return(r,a)=>(n(),s("div",null,[l("div",{class:m(["flex flex-col items-start justify-center w-screen min-h-screen lg:px-12",t.backgroundColor]),style:V(`background-position: 125% 0%; background-repeat: no-repeat; background-size: 70%; background-image: url('${t.backgroundImg}');`)},[l("div",A,[l("h1",N,i(t.title),1),l("div",R,[(n(!0),s(y,null,k(t.content,(c,d)=>(n(),s("div",{key:`hero_content_${d}`,innerHTML:c},null,8,z))),128))])])],6)]))}},S={__name:"ButtonComponent",props:{label:{type:String,default:""},color:{type:Object,default:()=>({bg:"bg-white",text:"text-black",shadow:"shadow-black"})}},setup(t){return(r,a)=>(n(),s("div",{class:m(["px-2 py-1 transition-all duration-300 border cursor-pointer sharp-shadow-sm hover:scale-105 w-fit",`bg-${t.color.bg} text-${t.color.shadow} border-${t.color.shadow}`])},[L(r.$slots,"left-slot"),l("div",{class:m(`text-${t.color.text}`)},i(t.label),3),L(r.$slots,"right-slot")],2))}},F={class:"flex flex-col text-black bg-white border border-black lg:flex-row sharp-shadow-lg"},q=["src","alt"],G={class:"flex flex-col gap-4 p-2 text-crimson"},Y={class:"text-2xl font-bold uppercase"},J={class:"flex flex-row items-center gap-2 text-lg"},K={class:"flex flex-row items-center gap-2 text-lg"},P={__name:"EventCard",props:{cover:{type:Object,default:()=>({url:"",alt:""})},title:{type:String,default:""},date:{type:String,default:""},startTime:{type:String,default:""},endTime:{type:String,default:""},location:{type:String,default:""},btnLabel:{type:String,default:""}},setup(t){return(r,a)=>{const c=S;return n(),s("div",F,[l("img",{src:t.cover.url,alt:t.cover.alt},null,8,q),l("div",G,[l("div",Y,i(t.title),1),l("div",J,[g(o(v),{icon:"solar:calendar-bold-duotone",width:"32"}),l("span",null,i(t.date),1),l("span",null,i(t.startTime)+" - "+i(t.endTime),1)]),l("div",K,[g(o(v),{icon:"solar:map-point-bold-duotone",width:"32"}),l("span",null,i(t.location),1)]),g(c,{label:t.btnLabel,color:{text:"white",bg:"crimson",shadow:"black"},class:"ml-2"},null,8,["label"])])])}}},j=async t=>{console.log(t.split("/")[0]),t.includes("http")?await $(t,{external:!0,open:{target:"_blank"}}):t.includes("mailto")?await $(t,{external:!0}):await $(t)},Q={class:"flex flex-col items-center justify-center max-w-lg text-black bg-white border border-black sharp-shadow-lg"},U={key:0,class:"flex flex-col gap-4 text-sm"},W=["innerHTML"],X={key:1,class:"flex items-center justify-center text-3xl font-semibold"},Z=["src","alt"],tt={__name:"CardComponent",props:{title:{type:String,default:""},content:{type:Array,default:()=>[]},link:{type:Object,default:()=>{}},img:{type:Object,default:()=>{}},color:{type:String,default:"crimson"},specialContent:{type:String,default:""}},setup(t){const r=t,a=f(""),c=d=>d.toLowerCase().trim().replace(/[^\w\s-]/g,"").replace(/[\s_-]+/g,"-").replace(/^-+/,"").replace(/-+$/,"");return T(()=>{a.value=c(r.title)}),(d,u)=>{const p=S;return n(),s("div",Q,[l("span",{class:m(["py-12 text-4xl font-semibold uppercase",`text-${t.color}`])},i(t.title),3),l("div",{class:m(["flex flex-col items-center justify-center w-full gap-4 p-4 text-white",`bg-${t.color}`])},[t.content?(n(),s("div",U,[(n(!0),s(y,null,k(t.content,(b,_)=>(n(),s("div",{key:`content_${o(a)}_${_}`,innerHTML:b},null,8,W))),128))])):x("",!0),t.specialContent?(n(),s("div",X,i(t.specialContent),1)):x("",!0),t.img?(n(),s("img",{key:2,src:t.img.url,alt:t.img.alt,width:"300"},null,8,Z)):x("",!0),t.link?(n(),C(p,{key:3,label:t.link.label,color:{text:"black",bg:"white",shadow:"black"},class:"ml-2",onClick:u[0]||(u[0]=b=>o(j)(t.link.href))},null,8,["label"])):x("",!0)],2)])}}},et={class:"flex flex-col items-center justify-center max-w-lg text-black bg-white border border-black min-w-80 sharp-shadow-lg"},lt={class:"flex flex-col items-center justify-center p-2 text-center lg:text-start lg:flex-row"},nt=["src","alt"],ot={class:"flex flex-col"},st={key:0,class:"flex flex-col gap-4 text-sm"},ct=["innerHTML"],it={key:1,class:"flex items-center justify-center text-3xl font-semibold"},at={__name:"ServiceCard",props:{title:{type:String,default:""},subtitle:{type:String,default:""},content:{type:Array,default:()=>[]},link:{type:Object,default:()=>{}},img:{type:Object,default:()=>{}},color:{type:String,default:"crimson"},specialContent:{type:String,default:""}},setup(t){const r=t,a=f(""),c=d=>d.toLowerCase().trim().replace(/[^\w\s-]/g,"").replace(/[\s_-]+/g,"-").replace(/^-+/,"").replace(/-+$/,"");return T(()=>{a.value=c(r.title)}),(d,u)=>{const p=S;return n(),s("div",et,[l("div",lt,[t.img?(n(),s("img",{key:0,src:t.img.url,alt:t.img.alt,class:"h-40"},null,8,nt)):x("",!0),l("div",ot,[l("span",{class:m(["text-2xl font-semibold uppercase",`text-${t.color}`])},i(t.title),3),l("span",{class:m(["text-lg",`text-${t.color}`])},i(t.subtitle),3)])]),l("div",{class:m(["flex flex-col items-center justify-center w-full gap-4 p-4 text-white",`bg-${t.color}`])},[t.content?(n(),s("div",st,[(n(!0),s(y,null,k(t.content,(b,_)=>(n(),s("div",{key:`content_${o(a)}_${_}`,innerHTML:b},null,8,ct))),128))])):x("",!0),t.specialContent?(n(),s("div",it,i(t.specialContent),1)):x("",!0),t.link?(n(),C(p,{key:2,label:t.link.text,color:{text:"black",bg:"white",shadow:"black"},class:"ml-2",onClick:u[0]||(u[0]=b=>o(j)(t.link.href))},null,8,["label"])):x("",!0)],2)])}}},rt={class:"flex flex-row gap-4"},dt={__name:"SocialLink",props:{href:{type:String,default:""},text:{type:String,default:""},icon:{type:String,default:""},type:{type:String,default:""}},setup(t){const r={facebook:"text-[#1877f2]",instagram:"text-[#ea4968]",gmail:"text-[#c5221f]"};return(a,c)=>(n(),s("div",{class:"flex items-center h-12 transition-all duration-300 bg-white rounded-full cursor-pointer hover:scale-105 w-fit",onClick:c[0]||(c[0]=d=>o(j)(t.href))},[l("div",rt,[g(o(v),{icon:t.icon,width:"64",class:"rounded-full shadow-lg"},null,8,["icon"]),l("div",{class:m(`flex items-center pr-4 text-md lg:text-2xl font-bold ${r[t.type]} uppercase`)},i(t.text),3)])]))}},ut=["src"],ft={__name:"EmbeddedVideo",props:{videoId:{type:String,default:""}},setup(t){return(r,a)=>(n(),s("iframe",{width:"100%",height:"800px",src:`https://www.youtube.com/embed/${t.videoId}`,title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",referrerpolicy:"strict-origin-when-cross-origin",allowfullscreen:""},null,8,ut))}},gt={class:"flex flex-col"},mt={key:0},xt={key:1,class:"flex flex-col"},bt={class:"flex flex-col items-center justify-center w-full gap-4 px-4 py-8 bg-paleRed"},pt={class:"text-5xl font-bold text-center uppercase text-crimson"},ht={class:"grid items-center justify-center w-full grid-cols-1 gap-4 px-4 py-8 border-black border-dashed lg:grid-cols-3 border-y-4 bg-lightRed"},yt={class:"flex flex-col items-center justify-center gap-4 py-8 bg-white"},kt={class:"flex flex-col gap-2"},wt={class:"text-5xl font-bold text-center uppercase text-customRed"},_t={class:"flex items-center justify-center text-customRed"},$t={class:"flex flex-wrap items-start justify-center gap-8 px-8 py-4"},vt={class:"flex flex-col items-center justify-center w-full gap-4 px-4 py-8 text-center bg-crimson"},Ct={class:"text-4xl font-bold text-white uppercase"},St={class:"flex flex-col items-center justify-center gap-8 lg:flex-row"},Bt={__name:"index",setup(t){const r=f(!1),a=f(h.home.hero),c=f(h.home.nextEvent),d=f(h.home.cards),u=f(h.home.services),p=f(h.home.socials),b=f(h.home.video);return(_,jt)=>{const B=D,H=P,E=tt,I=at,M=dt,O=ft;return n(),s("div",gt,[o(r)?(n(),s("div",mt,"LOADING!")):(n(),s("div",xt,[g(B,{"background-img":o(a).imgBackground,"background-color":"bg-red-700",title:o(a).title,content:o(a).content},null,8,["background-img","title","content"]),l("div",bt,[l("h2",pt,i(o(c).title),1),g(H,{cover:o(c).event.cover,title:o(c).event.title,date:o(c).event.date,"start-time":o(c).event.startTime,"end-time":o(c).event.endTime,"btn-label":o(c).event.button,location:o(c).event.location},null,8,["cover","title","date","start-time","end-time","btn-label","location"])]),l("div",ht,[(n(!0),s(y,null,k(o(d),(e,w)=>(n(),s("div",{key:`card_${w}`},[g(E,{title:e==null?void 0:e.title,content:e==null?void 0:e.content,img:e==null?void 0:e.img,link:e==null?void 0:e.link,color:e==null?void 0:e.color,"special-content":e==null?void 0:e.specialContent},null,8,["title","content","img","link","color","special-content"])]))),128))]),l("div",yt,[l("div",kt,[l("h2",wt,i(o(u).title),1),l("div",_t,i(o(u).subtitle),1),l("div",$t,[(n(!0),s(y,null,k(o(u).cards,(e,w)=>(n(),s("div",{key:`service_${w}`},[g(I,{title:e==null?void 0:e.title,subtitle:e==null?void 0:e.subtitle,content:e==null?void 0:e.content,img:e==null?void 0:e.img,link:e==null?void 0:e.link,color:e==null?void 0:e.color,"special-content":e==null?void 0:e.specialContent},null,8,["title","subtitle","content","img","link","color","special-content"])]))),128))])])]),l("div",vt,[l("div",Ct,i(o(p).title),1),l("div",St,[(n(!0),s(y,null,k(o(p).links,(e,w)=>(n(),C(M,{key:`socialLink_${w}`,href:e.href,text:e.text,icon:e.icon,type:e.type},null,8,["href","text","icon","type"]))),128))])]),g(O,{"video-id":o(b).id},null,8,["video-id"])]))])}}};export{Bt as default};
