<template>
  <div class="flex flex-col">
    <div
      v-if="!loading"
      class="w-screen h-screen"
      :style="`background-position: 50% 98%; background-size: auto; background-image: url('${hero.imgBackground}'); background-attachment: fixed;`"
    >
      test
    </div>
    <div v-else>LOADING!</div>
  </div>
</template>

<script setup>
  import data from '~/utils/data.json'

  const loading = ref(false)
  const hero = ref()
  const nextEvent = ref()
  const cards = ref()
  const services = ref()
  const socials = ref()
  const video = ref()

  const timeout = (milliseconds) => {
    return new Promise((resolve) => setTimeout(resolve, milliseconds))
  }
  onMounted(async () => {
    try {
      loading.value = true
      await timeout(20000)
      hero.value = data.home.hero
      nextEvent.value = data.home.nextEvent
      cards.value = data.home.cards
      services.value = data.home.services
      socials.value = data.home.socials
      video.value = data.home.video

      console.log(hero.value)
    } catch (error) {
      console.error(error)
    } finally {
      loading.value = false
    }
  })
</script>
