<template>
  <div class="flex flex-col">
    <div v-if="loading">LOADING!</div>
    <div v-else class="flex flex-col">
      <!-- HERO -->
      <HeroComponent
        :background-img="hero.imgBackground"
        background-color="bg-red-700"
        :title="hero.title"
        :content="hero.content"
      />

      <!-- NEXT EVENT -->
      <div class="flex flex-col items-center justify-center w-full gap-4 px-4 py-8 bg-paleRed">
        <h2 class="text-5xl font-bold text-center uppercase text-crimson">{{ nextEvent.title }}</h2>
        <EventCard
          :cover="nextEvent.event.cover"
          :title="nextEvent.event.title"
          :date="nextEvent.event.date"
          :start-time="nextEvent.event.startTime"
          :end-time="nextEvent.event.endTime"
          :btn-label="nextEvent.event.button"
          :location="nextEvent.event.location"
        />
      </div>

      <!-- CARDS -->
      <div
        class="grid items-center justify-center w-full grid-cols-1 gap-4 px-4 py-8 border-black border-dashed lg:grid-cols-4 border-y-4 bg-lightRed"
      >
        <div v-for="(card, index) in cards" :key="`card_${index}`" class="h-full" >
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
      <div class="flex flex-col items-center justify-center gap-4 py-8 bg-red-50">
        <div class="flex flex-col gap-2">
          <h2 class="text-5xl font-bold text-center uppercase text-deepMaroon">{{ services.title }}</h2>
          <div class="flex items-center justify-center text-deepMaroon">{{ services.subtitle }}</div>
          <div class="grid items-start justify-center grid-cols-1 gap-8 px-8 py-4 lg:grid-cols-3">
            <div v-for="(service, index) in services.cards" :key="`service_${index}`" class="h-full">
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
      <div class="flex flex-col items-center justify-center w-full gap-4 px-4 py-8 text-center bg-crimson">
        <div class="text-4xl font-bold text-white uppercase">
          {{ socials.title }}
        </div>
        <div class="flex flex-col items-center justify-center gap-8 lg:flex-row">
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
      <EmbeddedVideo :video-id="video.id" />
    </div>
  </div>
</template>

<script setup>
  import data from '~/utils/data.json'

  const loading = ref(false)
  const hero = ref(data.home.hero)
  const nextEvent = ref(data.home.nextEvent)
  const cards = ref(data.home.cards)
  const services = ref(data.home.services)
  const socials = ref(data.home.socials)
  const video = ref(data.home.video)
</script>
