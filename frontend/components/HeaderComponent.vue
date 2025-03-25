<template>
  <div class="h-16 flex flex-row justify-between bg-black bg-opacity-15 fixed w-full p-2 text-white">
    <div class="flex flex-row gap-6 items-center montserrat">
      <div v-for="(ll, index) in leftLinks" :key="`ll_${index}`" :class="ll.active ? 'underline font-semibold' : ''">
        <NuxtLink :to="ll.href">{{ ll.title }}</NuxtLink>
      </div>
    </div>
    <img :src="logo" alt="" />
    <div class="flex flex-row gap-6 items-center montserrat">
      <div v-for="(rl, index) in rightLinks" :key="`rl_${index}`" :class="rl.active ? 'underline font-semibold' : ''">
        <NuxtLink
          v-if="index == rightLinks.length - 1"
          :to="rl.href"
          class="bg-white flex flex-row items-center gap-3 border-2 hover:scale-105 transition-all duration-300 sharp-shadow shadow-red-600 border-red-600 px-2 py-1 text-red-600 font-semibold"
        >
          <Icon icon="noto-v1:growing-heart" />
          {{ rl.title }}
        </NuxtLink>
        <NuxtLink v-else :to="rl.href">{{ rl.title }}</NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup>
  import data from '~/utils/data.json'
  import { Icon } from '@iconify/vue'

  const leftLinks = ref([])
  const rightLinks = ref([])
  const logo = ref('')

  onMounted(() => {
    leftLinks.value = data.menu.linksLeft
    rightLinks.value = data.menu.linksRight
    logo.value = data.generalSettings.logo
  })
</script>
