import { ssrRenderAttrs, ssrRenderClass, ssrRenderStyle, ssrInterpolate, ssrRenderList, ssrRenderSlot, ssrRenderAttr, ssrRenderComponent } from 'file:///Users/lgalassi/workspace/lilaPiemonte/node_modules/vue/server-renderer/index.mjs';
import { useSSRContext, mergeProps, unref, ref } from 'file:///Users/lgalassi/workspace/lilaPiemonte/node_modules/vue/index.mjs';
import { Icon } from 'file:///Users/lgalassi/workspace/lilaPiemonte/node_modules/@iconify/vue/dist/iconify.mjs';
import { n as navigateTo } from './server.mjs';
import 'file:///Users/lgalassi/workspace/lilaPiemonte/node_modules/hookable/dist/index.mjs';
import 'file:///Users/lgalassi/workspace/lilaPiemonte/node_modules/unctx/dist/index.mjs';
import 'file:///Users/lgalassi/workspace/lilaPiemonte/node_modules/h3/dist/index.mjs';
import 'file:///Users/lgalassi/workspace/lilaPiemonte/node_modules/vue-router/dist/vue-router.node.mjs';
import 'file:///Users/lgalassi/workspace/lilaPiemonte/node_modules/radix3/dist/index.mjs';
import 'file:///Users/lgalassi/workspace/lilaPiemonte/node_modules/defu/dist/defu.mjs';
import 'file:///Users/lgalassi/workspace/lilaPiemonte/node_modules/ufo/dist/index.mjs';

const _sfc_main$7 = {
  __name: "HeroComponent",
  __ssrInlineRender: true,
  props: {
    backgroundImg: {
      type: String,
      default: ""
    },
    backgroundColor: {
      type: String,
      default: "bg-white"
    },
    title: {
      type: String,
      default: ""
    },
    content: {
      type: Array,
      default: () => []
    }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)}><div class="${ssrRenderClass([__props.backgroundColor, "flex flex-col items-start justify-center w-screen h-screen lg:px-12"])}" style="${ssrRenderStyle(`background-position: 125% 0%; background-repeat: no-repeat; background-size: 70%; background-image: url('${__props.backgroundImg}');`)}"><div class="flex flex-col items-center justify-center w-full h-full gap-16 px-4 text-white bg-black bg-opacity-50 lg:bg-opacity-0 lg:backdrop-blur-none backdrop-blur-md lg:w-1/3"><h1 class="text-6xl font-bold uppercase">${ssrInterpolate(__props.title)}</h1><div class="flex flex-col gap-4"><!--[-->`);
      ssrRenderList(__props.content, (item, index) => {
        _push(`<div>${item ?? ""}</div>`);
      });
      _push(`<!--]--></div></div></div></div>`);
    };
  }
};
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/HeroComponent.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};

const _sfc_main$6 = {
  __name: "ButtonComponent",
  __ssrInlineRender: true,
  props: {
    label: {
      type: String,
      default: ""
    },
    color: {
      type: Object,
      default: () => {
        return {
          bg: "bg-white",
          text: "text-black",
          shadow: "shadow-black"
        };
      }
    }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: ["px-2 py-1 transition-all duration-300 border cursor-pointer sharp-shadow-sm hover:scale-105 w-fit", `bg-${__props.color.bg} text-${__props.color.shadow} border-${__props.color.shadow}`]
      }, _attrs))}>`);
      ssrRenderSlot(_ctx.$slots, "left-slot", {}, null, _push, _parent);
      _push(`<div class="${ssrRenderClass(`text-${__props.color.text}`)}">${ssrInterpolate(__props.label)}</div>`);
      ssrRenderSlot(_ctx.$slots, "right-slot", {}, null, _push, _parent);
      _push(`</div>`);
    };
  }
};
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ButtonComponent.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};

const _sfc_main$5 = {
  __name: "EventCard",
  __ssrInlineRender: true,
  props: {
    cover: {
      type: Object,
      default: () => {
        return {
          url: "",
          alt: ""
        };
      }
    },
    title: {
      type: String,
      default: ""
    },
    date: {
      type: String,
      default: ""
    },
    startTime: {
      type: String,
      default: ""
    },
    endTime: {
      type: String,
      default: ""
    },
    location: {
      type: String,
      default: ""
    },
    btnLabel: {
      type: String,
      default: ""
    }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ButtonComponent = _sfc_main$6;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex flex-col text-black bg-white border border-black lg:flex-row sharp-shadow-lg" }, _attrs))}><img${ssrRenderAttr("src", __props.cover.url)}${ssrRenderAttr("alt", __props.cover.alt)}><div class="flex flex-col gap-4 p-2 text-crimson"><div class="text-2xl font-bold uppercase">${ssrInterpolate(__props.title)}</div><div class="flex flex-row items-center gap-2 text-lg">`);
      _push(ssrRenderComponent(unref(Icon), {
        icon: "solar:calendar-bold-duotone",
        width: "32"
      }, null, _parent));
      _push(`<span>${ssrInterpolate(__props.date)}</span><span>${ssrInterpolate(__props.startTime)} - ${ssrInterpolate(__props.endTime)}</span></div><div class="flex flex-row items-center gap-2 text-lg">`);
      _push(ssrRenderComponent(unref(Icon), {
        icon: "solar:map-point-bold-duotone",
        width: "32"
      }, null, _parent));
      _push(`<span>${ssrInterpolate(__props.location)}</span></div>`);
      _push(ssrRenderComponent(_component_ButtonComponent, {
        label: __props.btnLabel,
        color: { text: "white", bg: "crimson", shadow: "black" },
        class: "ml-2"
      }, null, _parent));
      _push(`</div></div>`);
    };
  }
};
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/EventCard.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};

const goto = async (href) => {
  console.log(href.split("/")[0]);
  if (href.includes("http")) {
    await navigateTo(href, {
      external: true
    });
  } else if (href.includes("mailto")) {
    await navigateTo(href, {
      external: true
    });
  } else {
    await navigateTo(href);
  }
};

/* empty css                    */
const _sfc_main$4 = {
  __name: "CardComponent",
  __ssrInlineRender: true,
  props: {
    title: {
      type: String,
      default: ""
    },
    content: {
      type: Array,
      default: () => []
    },
    link: {
      type: Object,
      default: () => {
      }
    },
    img: {
      type: Object,
      default: () => {
      }
    },
    color: {
      type: String,
      default: "crimson"
    },
    specialContent: {
      type: String,
      default: ""
    }
  },
  setup(__props) {
    ref("");
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ButtonComponent = _sfc_main$6;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex flex-col items-center justify-center max-w-lg text-black bg-white border border-black sharp-shadow-lg" }, _attrs))}><span class="${ssrRenderClass([`text-${__props.color}`, "py-12 text-4xl font-semibold uppercase"])}">${ssrInterpolate(__props.title)}</span><div class="${ssrRenderClass([`bg-${__props.color}`, "flex flex-col items-center justify-center w-full gap-4 p-4 text-white"])}">`);
      if (__props.content) {
        _push(`<div class="flex flex-col gap-4 text-sm"><!--[-->`);
        ssrRenderList(__props.content, (item, i) => {
          _push(`<div>${item ?? ""}</div>`);
        });
        _push(`<!--]--></div>`);
      } else {
        _push(`<!---->`);
      }
      if (__props.specialContent) {
        _push(`<div class="flex items-center justify-center text-3xl font-semibold">${ssrInterpolate(__props.specialContent)}</div>`);
      } else {
        _push(`<!---->`);
      }
      if (__props.img) {
        _push(`<img${ssrRenderAttr("src", __props.img.url)}${ssrRenderAttr("alt", __props.img.alt)} width="300">`);
      } else {
        _push(`<!---->`);
      }
      if (__props.link) {
        _push(ssrRenderComponent(_component_ButtonComponent, {
          label: __props.link.label,
          color: { text: "black", bg: "white", shadow: "black" },
          class: "ml-2",
          onClick: ($event) => unref(goto)(__props.link.href)
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div>`);
    };
  }
};
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/CardComponent.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};

/* empty css                  */
const _sfc_main$3 = {
  __name: "ServiceCard",
  __ssrInlineRender: true,
  props: {
    title: {
      type: String,
      default: ""
    },
    subtitle: {
      type: String,
      default: ""
    },
    content: {
      type: Array,
      default: () => []
    },
    link: {
      type: Object,
      default: () => {
      }
    },
    img: {
      type: Object,
      default: () => {
      }
    },
    color: {
      type: String,
      default: "crimson"
    },
    specialContent: {
      type: String,
      default: ""
    }
  },
  setup(__props) {
    ref("");
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ButtonComponent = _sfc_main$6;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex flex-col items-center justify-center max-w-lg text-black bg-white border border-black min-w-80 sharp-shadow-lg" }, _attrs))}><div class="flex flex-col items-center justify-center p-2 text-center lg:text-start lg:flex-row">`);
      if (__props.img) {
        _push(`<img${ssrRenderAttr("src", __props.img.url)}${ssrRenderAttr("alt", __props.img.alt)} class="h-40">`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="flex flex-col"><span class="${ssrRenderClass([`text-${__props.color}`, "text-2xl font-semibold uppercase"])}">${ssrInterpolate(__props.title)}</span><span class="${ssrRenderClass([`text-${__props.color}`, "text-lg"])}">${ssrInterpolate(__props.subtitle)}</span></div></div><div class="${ssrRenderClass([`bg-${__props.color}`, "flex flex-col items-center justify-center w-full gap-4 p-4 text-white"])}">`);
      if (__props.content) {
        _push(`<div class="flex flex-col gap-4 text-sm"><!--[-->`);
        ssrRenderList(__props.content, (item, i) => {
          _push(`<div>${item ?? ""}</div>`);
        });
        _push(`<!--]--></div>`);
      } else {
        _push(`<!---->`);
      }
      if (__props.specialContent) {
        _push(`<div class="flex items-center justify-center text-3xl font-semibold">${ssrInterpolate(__props.specialContent)}</div>`);
      } else {
        _push(`<!---->`);
      }
      if (__props.link) {
        _push(ssrRenderComponent(_component_ButtonComponent, {
          label: __props.link.text,
          color: { text: "black", bg: "white", shadow: "black" },
          class: "ml-2",
          onClick: ($event) => unref(goto)(__props.link.href)
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div>`);
    };
  }
};
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ServiceCard.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};

const _sfc_main$2 = {
  __name: "SocialLink",
  __ssrInlineRender: true,
  props: {
    href: {
      type: String,
      default: ""
    },
    text: {
      type: String,
      default: ""
    },
    icon: {
      type: String,
      default: ""
    },
    color: {
      type: String,
      default: ""
    }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex items-center h-12 transition-all duration-300 bg-white rounded-full cursor-pointer hover:scale-105 w-fit" }, _attrs))}><div class="flex flex-row gap-4">`);
      _push(ssrRenderComponent(unref(Icon), {
        icon: __props.icon,
        width: "64",
        class: "rounded-full shadow-lg"
      }, null, _parent));
      _push(`<div class="${ssrRenderClass(`flex items-center pr-4 text-md lg:text-2xl font-bold text-[${__props.color}] uppercase`)}">${ssrInterpolate(__props.text)}</div></div></div>`);
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/SocialLink.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};

const _sfc_main$1 = {
  __name: "EmbeddedVideo",
  __ssrInlineRender: true,
  props: {
    videoId: {
      type: String,
      default: ""
    }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<iframe${ssrRenderAttrs(mergeProps({
        width: "100%",
        height: "800px",
        src: `https://www.youtube.com/embed/${__props.videoId}`,
        title: "YouTube video player",
        frameborder: "0",
        allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",
        referrerpolicy: "strict-origin-when-cross-origin",
        allowfullscreen: ""
      }, _attrs))}></iframe>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/EmbeddedVideo.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};

const home = { "hero": { "imgBackground": "/LogoLilaPiemonte_bianco_BG-trasparente.png", "title": "LILA Piemonte", "content": ["Lega Italiana per la Lotta contro l'AIDS", "Il nostro obiettivo è promuovere e tutelare il diritto alla salute, affermare principi e relazioni di solidarietà, lottare contro ogni forma di violazione dei diritti umani, civili e di cittadinanza delle persone con HIV o con AIDS e delle comunità più colpite dall'infezione.", "La LILA, Lega Italiana per la Lotta contro l'AIDS, è un'associazione senza scopo di lucro, nata nel 1987, che agisce sull'intero territorio nazionale attraverso le sue sedi locali.Essa è costituita da una federazione di associazioni e gruppi di volontariato composti da persone sieropositive e non, volontari e professionisti, ed è organizzata attraverso:<br />una sede nazionale, con aree di servizio, finalizzata alla ricerca sulle terapie, sui comportamenti, sull'assistenza e sulla prevenzione. La sede nazionale opera per uno sviluppo delle politiche socio-sanitarie e per la crescita delle sedi che operano territorialmente a livello regionale, provinciale e cittadino.La LILA Piemonte è presente dal 1990 ed è attualmente costituita da 10 soci-volontari."] }, "nextEvent": { "title": "Il nostro prossimo evento", "event": { "cover": { "url": "images/events/Novembre2024.png", "alt": "European testing week 2024" }, "title": "European testing week 2024", "date": "18/11/2024", "startTime": "18:00", "endTime": "21:00", "location": "Via Mazzini 11, Torino", "button": "Aggiungi al calendario" } }, "cards": [{ "color": "softWarmRed", "title": "Dona il 5x1000", "content": ["<strong>Sostieni la LILA Piemonte ODV attraverso il 5x1000</strong>", "Chiediamo il tuo contributo per continuare a svolgere le nostre attività di informazione e prevenzione, promuovere il diritto alla salute, sviluppare campagne di sensibilizzazione, tutelare i diritti di persone con HIV o malate di AIDS e offrire un servizio di counseling telefonico, per fare tutto questo abbiamo bisogno di TE", "Per donarci il 5x1000 scrivi il codice fiscale"], "specialContent": "97536790013", "link": { "label": "Scopri di più", "href": "/dona-5-x-1000" } }, { "color": "deepMaroon", "title": "Sostienici", "content": ["Il tuo sostegno attraverso il Volontariato, la Tessera Amico LILA Piemonte, Donazioni in denaro, con il 5 per mille oppure Virtualmente, ci aiuterà a continuare le nostre attività di:", "<ul><li>servizio di centralino telefonico, per chiarire dubbi, fornire informazioni corrette;</li><li>progetti di formazione all'interno della scuola per insegnanti e studenti;</li><li>incontri con gli studenti per informare e fare prevenzione sulle tematiche dell'HIV;</li><li>progetti di prevenzione e informazione mirati alla popolazione in generale attraverso creazione e promozione di eventi sul territorio;</li><li>Tutelare i diritti delle persone sieropositive o malate di AIDS;</li></ul>"], "link": { "label": "Sostienici", "href": "/sostienici" } }, { "color": "softWarmRed", "title": "Satispay", "img": { "url": "/images/satispay.png", "alt": "Satispay" } }], "services": { "title": "Cosa facciamo", "subtitle": "Quali servizi offriamo", "cards": [{ "img": { "url": "/images/services/progetto-scuole.png", "alt": "Progetto scuole" }, "title": "Progetto scuole", "subtitle": "Vuoi organizzare un incontro nella tua scuola?", "content": ["LILA Piemonte al fine di continuare la sua costante attività di informazione e prevenzione sull'HIV/AIDS propone incontri rivolti a studenti di istituti superiori di Torino e provincia nel periodo scolastico.", "I contenuti e le modalità del nostro intervento vengono concordati con gli insegnanti e vertono sul tema della sessualità e dei comportamenti sicuri coinvolgendo gli studenti in un confronto attivo.", "Il progetto è condotto dai volontari LILA."], "color": "softWarmRed" }, { "img": { "url": "/images/services/counseling.png", "alt": "Counseling peer to peer" }, "title": "Counseling peer to peer", "subtitle": "Vuoi parlarci di persona?", "content": ["Se preferisci incontrarci di persona mandaci una mail all'indirizzo infoaids@lilapiemonte.org e concorderemo un appuntamento per farti incontrare con uno dei nostri volontari per chiarire tutti i dubbi che hai e analizzare insieme la situazione.", "LILA Piemonte, fin dalla nascita, ha attivo un centralino telefonico fin dalla nascita dell'Associazione che gestisce le richieste di informazione sull'AIDS, difesa dei diritti, orientamento ai Servizi e di sostegno psicologico attraverso una formazione continua degli operatori.", "Hai dei dubbi o delle domande sull'HIV ma non vuoi o non puoi parlarne al telefono? Puoi contattare i nostri volontari anche tramite mail scrivendo a infoaids@lilapiemonte.org"], "color": "softWarmRed" }, { "img": { "url": "/images/services/diritti.png", "alt": "Difesa dei diritti" }, "title": "Difesa dei diritti", "subtitle": "Pensi di esser statə discriminatə?", "content": ["Al progresso scientifico in ordine alla ricerca di un vaccino ed alla sempre maggiore efficacia delle terapie fin qui conseguito,  non ha fatto seguito una crescita culturale tale da poter consentire alle persone con HIV/AIDS di rendersi visibili.", "Persistono atteggiamenti di discriminazione e rifiuto dettati dalla paura e dalla scarsa conoscenza della realtà.", "LILA Piemonte , consapevole di quanto l'attivismo delle persone con HIV/AIDS sia una componente indispensabile del la lotta contro l'AIDS ed allo stigma che lo accompagna da sempre, offre la possibilità di impegnarsi in prima persona per la difesa dei propri diritti."], "color": "softWarmRed" }, { "img": { "url": "/images/services/sportello-virtuale.png", "alt": "Sportello virtuale" }, "title": "sportello virtuale", "subtitle": "Hai bisogno del supporto di un avvocato o uno psicologo?", "content": ["È attivo un nuovo servizio della LILA: lo sportello virtuale per persone con HIV/AIDS, uno spazio sicuro, cui si può accedere in collegamento video, volto a migliorare il benessere psico-fisico e la qualità della vita delle persone che convivono con il virus.", "Il servizio, completamente gratuito, offre: supporto emotivo, consulenza legale, previdenziale e lavorativa, informazioni su tutti gli aspetti del vivere con HIV, orientamento ai servizi, consulenze specialistiche."], "link": { "text": "Scopri gli orari", "href": "https://www.lila.it/it/sportello-virtuale" }, "color": "softWarmRed" }, { "img": { "url": "/images/services/test-rapidi-hiv.png", "alt": "Test rapidi HIV" }, "title": "test rapidi hiv", "subtitle": "Non hai mai fatto un test HIV?", "content": ["Se non hai mai fatto un test HIV, sono passati mesi dall'ultimo test, o hai avuto un rapporto a richio, vieni ad un nostro evento di test rapidi HIV.", "Se invece vuoi organizzare un evento di test rapidi HIV dove lavori scrivici a lilapiemonte@gmail.com"], "link": { "text": "Controlla i prossimi eventi", "href": "/eventi/test-rapidi" }, "color": "softWarmRed" }, { "img": { "url": "/images/services/call-me.png", "alt": "Call me!" }, "title": "Call me!", "subtitle": "Hai domande sull'HIV? Chiamaci", "content": ["In qualsiasi posto d'Italia vi troviate, potrete chiamare 'Call Me!', la nostra HELPLINE, allo 02 89 455 320.", "Il nuovo numero unico nazionale che renderà più facile e veloce trovare le risposte, l'accoglienza, la riservatezza di cui hai bisogno senza giudizi o pregiudizi."], "link": { "text": "Scopri gli orari", "href": "https://www.lila.it/it/helplilne" }, "color": "softWarmRed" }] }, "socials": { "title": "rimani aggiornato sui nostri canali", "links": [{ "type": "facebook", "text": "facebook", "href": "https://www.facebook.com/lilapiemonte/", "icon": "logos:facebook", "color": "#1877f2" }, { "type": "instagram", "text": "instagram", "href": "https://www.instagram.com/lilapiemonte/", "icon": "skill-icons:instagram", "color": "#ea4968" }, { "type": "gmail", "href": "mailto:infoaids@lilapiemonte.org", "text": "infoaids@lilapiemonte.org", "icon": "skill-icons:gmail-light", "color": "#c5221f" }] }, "video": { "id": "DxjtsNNFdI0" } };
const data = {
  home
};

const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const loading = ref(false);
    const hero = ref(data.home.hero);
    const nextEvent = ref(data.home.nextEvent);
    const cards = ref(data.home.cards);
    const services = ref(data.home.services);
    const socials = ref(data.home.socials);
    const video = ref(data.home.video);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_HeroComponent = _sfc_main$7;
      const _component_EventCard = _sfc_main$5;
      const _component_CardComponent = _sfc_main$4;
      const _component_ServiceCard = _sfc_main$3;
      const _component_SocialLink = _sfc_main$2;
      const _component_EmbeddedVideo = _sfc_main$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex flex-col" }, _attrs))}>`);
      if (unref(loading)) {
        _push(`<div>LOADING!</div>`);
      } else {
        _push(`<div class="flex flex-col">`);
        _push(ssrRenderComponent(_component_HeroComponent, {
          "background-img": unref(hero).imgBackground,
          "background-color": "bg-red-700",
          title: unref(hero).title,
          content: unref(hero).content
        }, null, _parent));
        _push(`<div class="flex flex-col items-center justify-center gap-4 py-8 bg-paleRed"><h2 class="text-5xl font-bold text-center uppercase text-crimson">${ssrInterpolate(unref(nextEvent).title)}</h2>`);
        _push(ssrRenderComponent(_component_EventCard, {
          cover: unref(nextEvent).event.cover,
          title: unref(nextEvent).event.title,
          date: unref(nextEvent).event.date,
          "start-time": unref(nextEvent).event.startTime,
          "end-time": unref(nextEvent).event.endTime,
          "btn-label": unref(nextEvent).event.button,
          location: unref(nextEvent).event.location
        }, null, _parent));
        _push(`</div><div class="grid items-center justify-center w-full grid-cols-1 gap-4 px-4 py-8 border-black border-dashed lg:grid-cols-3 border-y-4 bg-lightRed"><!--[-->`);
        ssrRenderList(unref(cards), (card, index) => {
          _push(`<div>`);
          _push(ssrRenderComponent(_component_CardComponent, {
            title: card == null ? void 0 : card.title,
            content: card == null ? void 0 : card.content,
            img: card == null ? void 0 : card.img,
            link: card == null ? void 0 : card.link,
            color: card == null ? void 0 : card.color,
            "special-content": card == null ? void 0 : card.specialContent
          }, null, _parent));
          _push(`</div>`);
        });
        _push(`<!--]--></div><div class="flex flex-col items-center justify-center gap-4 py-8 bg-white"><div class="flex flex-col gap-2"><h2 class="text-5xl font-bold text-center uppercase text-customRed">${ssrInterpolate(unref(services).title)}</h2><div class="flex items-center justify-center text-customRed">${ssrInterpolate(unref(services).subtitle)}</div><div class="flex flex-wrap items-start justify-center gap-8 px-8 py-4"><!--[-->`);
        ssrRenderList(unref(services).cards, (service, index) => {
          _push(`<div>`);
          _push(ssrRenderComponent(_component_ServiceCard, {
            title: service == null ? void 0 : service.title,
            subtitle: service == null ? void 0 : service.subtitle,
            content: service == null ? void 0 : service.content,
            img: service == null ? void 0 : service.img,
            link: service == null ? void 0 : service.link,
            color: service == null ? void 0 : service.color,
            "special-content": service == null ? void 0 : service.specialContent
          }, null, _parent));
          _push(`</div>`);
        });
        _push(`<!--]--></div></div></div><div class="flex flex-col items-center justify-center w-full gap-4 px-4 py-8 text-center bg-crimson"><div class="text-4xl font-bold text-white uppercase">${ssrInterpolate(unref(socials).title)}</div><div class="flex flex-col items-center justify-center gap-8 lg:flex-row"><!--[-->`);
        ssrRenderList(unref(socials).links, (link, index) => {
          _push(ssrRenderComponent(_component_SocialLink, {
            key: `socialLink_${index}`,
            href: link.href,
            text: link.text,
            icon: link.icon,
            color: link.color
          }, null, _parent));
        });
        _push(`<!--]--></div></div>`);
        _push(ssrRenderComponent(_component_EmbeddedVideo, {
          "video-id": unref(video).id
        }, null, _parent));
        _push(`</div>`);
      }
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index.vue.mjs.map
