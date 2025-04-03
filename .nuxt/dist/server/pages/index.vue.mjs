import _sfc_main$1 from "../components/HeroComponent.vue.mjs";
import _sfc_main$2 from "../components/EventCard.vue.mjs";
import _sfc_main$3 from "../components/CardComponent.vue.mjs";
import _sfc_main$4 from "../components/ServiceCard.vue.mjs";
import _sfc_main$5 from "../components/SocialLink.vue.mjs";
import _sfc_main$6 from "../components/EmbeddedVideo.vue.mjs";
import { ref, mergeProps, unref, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderList } from "vue/server-renderer";
import data from "../utils/data.json.mjs";
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
      const _component_HeroComponent = _sfc_main$1;
      const _component_EventCard = _sfc_main$2;
      const _component_CardComponent = _sfc_main$3;
      const _component_ServiceCard = _sfc_main$4;
      const _component_SocialLink = _sfc_main$5;
      const _component_EmbeddedVideo = _sfc_main$6;
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
        _push(`<div class="flex flex-col items-center justify-center w-full gap-4 px-4 py-8 bg-paleRed"><h2 class="text-5xl font-bold text-center uppercase text-crimson">${ssrInterpolate(unref(nextEvent).title)}</h2>`);
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
            type: link.type
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
export {
  _sfc_main as default
};
//# sourceMappingURL=index.vue.mjs.map
