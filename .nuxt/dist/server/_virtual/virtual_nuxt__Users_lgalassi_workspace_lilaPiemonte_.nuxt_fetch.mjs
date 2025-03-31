import { $fetch } from "ofetch";
import { baseURL } from "#internal/nuxt/paths";
if (!globalThis.$fetch) {
  globalThis.$fetch = $fetch.create({
    baseURL: baseURL()
  });
}
//# sourceMappingURL=virtual_nuxt__Users_lgalassi_workspace_lilaPiemonte_.nuxt_fetch.mjs.map
