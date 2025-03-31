function handleHotUpdate(_router, _generateRoutes) {
}
const _routes = [
  {
    name: "index",
    path: "/",
    component: () => import("../pages/index.vue.mjs")
  },
  {
    name: "eventi",
    path: "/eventi",
    component: () => import("../pages/eventi.vue.mjs")
  },
  {
    name: "chi-siamo",
    path: "/chi-siamo",
    component: () => import("../pages/chi-siamo.vue.mjs")
  },
  {
    name: "contattaci",
    path: "/contattaci",
    component: () => import("../pages/contattaci.vue.mjs")
  },
  {
    name: "sostienici",
    path: "/sostienici",
    component: () => import("../pages/sostienici.vue.mjs")
  },
  {
    name: "volontariato",
    path: "/volontariato",
    component: () => import("../pages/volontariato.vue.mjs")
  }
];
export {
  _routes as default,
  handleHotUpdate
};
//# sourceMappingURL=virtual_nuxt__Users_lgalassi_workspace_lilaPiemonte_.nuxt_routes.mjs.map
