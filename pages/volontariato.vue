<template>
  <div class="flex flex-col">
    <div class="flex justify-center pt-24 pb-8 bg-softWarmRed">
      <h1 class="text-5xl font-bold text-center text-white uppercase">{{ volontariato.title }}</h1>
    </div>
    <div class="flex flex-col lg:flex-row">
      <div class="flex flex-col gap-4 px-6 py-8 text-black bg-white">
        <span v-for="(item, index) in volontariato.content" :key="`content_${index}`" v-html="item" />
      </div>
      <img :src="volontariato.img.url" :alt="volontariato.img.alt" />
    </div>

    <img :src="volontariato.footer.img.url" :alt="volontariato.footer.img.alt" />
  </div>
</template>

<script setup>
  import data from '~/utils/data.json'

  useHead({
    title: "Diventa Volontario LILA Piemonte | Volontariato HIV Torino",
    meta: [
      {
        name: "description",
        content:
          "Unisciti ai volontari LILA Piemonte a Torino! Collabora per la prevenzione dell'HIV, la salute e la solidarietà in Piemonte. Scopri come diventare volontario.",
      },
    ],
  });

  const volontariato = ref(data.volontariato)
</script>

<style scoped>
  * :deep(strong) {
    @apply text-softWarmRed;
  }
</style>
