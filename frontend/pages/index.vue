<template>
  <div class="flex flex-col">
    <div v-if="loading">LOADING!</div>
    <div v-else class="flex flex-col">
      <HeroComponent
        :background-img="hero.imgBackground"
        background-color="bg-red-700"
        :title="hero.title"
        :content="hero.content"
      />
      <div class="flex flex-col items-center justify-center gap-4 py-8 bg-paleRed">
        <h2 class="text-5xl font-bold uppercase text-crimson">{{ nextEvent.title }}</h2>
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

  // const timeout = (milliseconds) => {
  //   return new Promise((resolve) => setTimeout(resolve, milliseconds))
  // }
  onMounted(async () => {
    try {
      loading.value = true
      // await timeout(2000)
      // console.log(data)
      // hero.value = data.home.hero
      // nextEvent.value = data.home.nextEvent
      // cards.value = data.home.cards
      // services.value = data.home.services
      // socials.value = data.home.socials
      // video.value = data.home.video

      // console.log(hero.value)
    } catch (error) {
      console.error(error)
    } finally {
      loading.value = false
    }
  })
</script>
