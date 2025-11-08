<template>
  <div class="flex flex-col bg-red-700">
    <LoaderComponent v-if="loading" />
    <div v-else class="flex flex-col">
      <!-- HERO -->
      <HeroComponent
        :background-img="hero.imgBackground"
        background-color="bg-red-700"
        :title="hero.title"
        :content="hero.content"
      />

      <!-- NEXT EVENT -->
      <div
        class="flex flex-col items-center justify-center w-full gap-4 px-4 py-8 bg-paleRed"
      >
        <h2 class="text-5xl font-bold text-center uppercase text-crimson">
          {{ nextEvent.title }}
        </h2>
        <EventCard
          v-if="nextEvent.event"
          :cover="nextEvent.event.cover"
          :title="nextEvent.event.title"
          :date="nextEvent.event.date"
          :start-time="nextEvent.event.startTime"
          :end-time="nextEvent.event.endTime"
          :btn-label="nextEvent.event.button"
          :location="nextEvent.event.location.address"
        />
      </div>

      <!-- CARDS -->
      <div
        class="grid items-center justify-center w-full grid-cols-1 gap-4 px-4 py-8 mx-auto border-black border-dashed lg:grid-cols-4 border-y-4 bg-lightRed"
      >
        <div
          v-for="(card, index) in cards"
          :key="`card_${index}`"
          class="flex items-center justify-center h-full"
        >
          <CardComponent
            :title="card?.title"
            :content="card?.content"
            :img="card?.img"
            :link="card?.link"
            :color="card?.color"
            :special-content="card?.specialContent"
          />
        </div>
      </div>

      <!-- SERVICES -->
      <div
        class="flex flex-col items-center justify-center gap-4 py-8 bg-red-50"
      >
        <div class="flex flex-col gap-2">
          <h2 class="text-5xl font-bold text-center uppercase text-deepMaroon">
            {{ services.title }}
          </h2>
          <div class="flex items-center justify-center text-deepMaroon">
            {{ services.subtitle }}
          </div>
          <div
            class="grid items-start justify-center grid-cols-1 gap-8 px-8 py-4 lg:grid-cols-3"
          >
            <div
              v-for="(service, index) in services.cards"
              :key="`service_${index}`"
              class="h-full"
            >
              <ServiceCard
                :title="service?.title"
                :subtitle="service?.subtitle"
                :content="service?.content"
                :img="service?.img"
                :link="service?.link"
                :color="service?.color"
                :special-content="service?.specialContent"
              />
            </div>
          </div>
        </div>
      </div>

      <!-- SOCIALS -->
      <div
        class="flex flex-col items-center justify-center w-full gap-4 px-4 py-8 text-center bg-crimson"
      >
        <div class="text-4xl font-bold text-white uppercase">
          {{ socials.title }}
        </div>
        <div
          class="flex flex-col items-center justify-center gap-8 lg:flex-row"
        >
          <SocialLink
            v-for="(link, index) in socials.links"
            :key="`socialLink_${index}`"
            :href="link.href"
            :text="link.text"
            :icon="link.icon"
            :type="link.type"
          />
        </div>
      </div>

      <!-- VIDEO -->
      <EmbeddedVideo :video-id="video" />
    </div>
  </div>
</template>

<script setup>
  import data from "~/utils/data.json";
  import { callBE } from "#imports";

  useHead({
  title: "LILA Piemonte - Associazione per la Lotta contro l'AIDS",
  meta: [
    { name: 'description', content: "Con LILA Piemonte trovi informazione, test HIV gratuito e supporto per vivere bene con l'HIV. Insieme contro l'AIDS, per una comunità più consapevole in tutto il Piemonte" },
  ],
  bodyAttrs: {
    class: 'test',
  },
  script: [{ innerHTML: 'console.log(\'Hello world\')' }],
})


  const loading = ref(false);
  const hero = ref("");
  const nextEvent = ref("");
  const cards = ref("");
  const services = ref("");
  const socials = ref(data.home.socials);
  const video = ref("");

  onMounted(async () => {
    try {
      loading.value = true;
      const params = {
        "populate[heroSection][populate]": "*",
        "populate[cards][populate]": "*",
        "populate[nextEvent][populate][event][populate]": "*",
        "populate[services][populate][services][populate]": "*",
      };

      const resStrapi = await callBE("homepage", params);

      hero.value = {
        title: resStrapi.data.heroSection.title,
        content: resStrapi.data.heroSection.content,
        imgBackground: resStrapi.data.heroSection.background.url,
      };

      nextEvent.value = {
        title: resStrapi.data.nextEvent.title,
        event: {
          cover: resStrapi.data.nextEvent.event.cover?.url || "",
          title: resStrapi.data.nextEvent.event.title,
          date: new Date(
            resStrapi.data.nextEvent.event.start
          ).toLocaleDateString("it-IT"),
          startTime: new Date(
            resStrapi.data.nextEvent.event.start
          ).toLocaleTimeString("it-IT", {
            hour: "2-digit",
            minute: "2-digit",
          }),
          endTime: new Date(
            resStrapi.data.nextEvent.event.end
          ).toLocaleTimeString("it-IT", {
            hour: "2-digit",
            minute: "2-digit",
          }),
          button: resStrapi.data.nextEvent.event.button,
          location: resStrapi.data.nextEvent.event.location,
        },
      };

      cards.value = resStrapi.data.cards.map((card) => ({
        title: card.title,
        content: card.content,
        img: card.image?.url || "",
        link: card.link,
        color: card.color,
        specialContent: card.specialContent,
        position: card.position,
      })).sort((a, b) => a.position - b.position);

      services.value = {
        title: "Cosa facciamo",
        subtitle: "Quali servizi offriamo",
        cards: resStrapi.data.services.services.map((service) => ({
          title: service.title,
          subtitle: service.subtitle,
          content: service.content,
          img: service.cover?.url || "",
          link: service.link,
          color: service.color,
          specialContent: service.specialContent,
        })),
      };

      video.value = resStrapi.data.video;
    } catch (error) {
      console.error("Error during loading:", error);
    } finally {
      loading.value = false;
    }
  });
</script>
