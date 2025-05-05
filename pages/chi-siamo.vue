<template>
  <div class="flex flex-col">
    <div class="flex justify-center pt-24 pb-8 bg-softWarmRed">
      <h2 class="text-5xl font-bold text-center text-white uppercase">{{ chiSiamo.title }}</h2>
    </div>
    <div class="flex flex-col gap-4 px-6 py-8 text-black bg-white">
      <span v-for="(item, index) in chiSiamo.content" :key="`content_${index}`" v-html="item" />

      <div class="flex flex-col items-center gap-6">
        <ButtonComponent
          :label="chiSiamo.btnStatuto.title"
          :color="{ text: 'softWarmRed', bg: 'white', shadow: 'softWarmRed' }"
          class="!p-4 text-xl"
          @click="goto(chiSiamo.btnStatuto.href, '_blank')"
        >
          <template #left-slot>
            <Icon icon="solar:download-minimalistic-bold-duotone" height="32" />
          </template>
        </ButtonComponent>
        <div class="flex flex-col gap-12 lg:flex-row">
          <div v-for="item in chiSiamo.rendiconto" :key="item.year" class="flex flex-row border-2 border-softWarmRed">
            <div class="flex items-center p-4 text-4xl font-bold text-softWarmRed">{{ item.year }}</div>
            <div class="flex flex-col gap-4 p-4 bg-softWarmRed">
              <ButtonComponent
                :label="item.nota.title"
                :color="{ text: 'softWarmRed', bg: 'white', shadow: 'black' }"
                class="ml-2"
                @click="goto(item.nota.href, '_blank')"
              />
              <ButtonComponent
                :label="item.rendiconto.title"
                :color="{ text: 'softWarmRed', bg: 'white', shadow: 'black' }"
                class="ml-2"
                @click="goto(item.rendiconto.href, '_blank')"
              />
            </div>
          </div>
        </div>
      </div>
    </div>

    <img :src="chiSiamo.imgFooter.url" :alt="chiSiamo.imgFooter.alt" />
  </div>
</template>

<script setup>
  import ButtonComponent from '~/components/ButtonComponent.vue'
  import { goto } from '~/utils'
  import { Icon } from '@iconify/vue'
  import data from '~/utils/data.json'

  const chiSiamo = ref(data.chiSiamo)
</script>

<style scoped>
  * :deep(strong) {
    @apply text-softWarmRed;
  }
</style>
