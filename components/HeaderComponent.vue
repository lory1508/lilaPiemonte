<template>
  <div class="fixed flex flex-row justify-between w-full h-16 p-2 text-white bg-black backdrop-blur-md bg-opacity-15">
    <div class="flex flex-row items-center gap-6 montserrat">
      <div v-for="(ll, index) in leftLinks" :key="`ll_${index}`" :class="ll.active ? 'underline font-semibold' : ''">
        <NuxtLink :to="ll.href">{{ ll.title }}</NuxtLink>
      </div>
    </div>
    <img :src="logo" alt="" />
    <div class="flex flex-row items-center gap-6 montserrat">
      <div v-for="(rl, index) in rightLinks" :key="`rl_${index}`" :class="rl.active ? 'underline font-semibold' : ''">
        <NuxtLink
          v-if="index == rightLinks.length - 1"
          :to="rl.href"
          class="flex flex-row items-center gap-3 px-2 py-1 font-semibold text-red-600 transition-all duration-300 bg-white border-2 border-red-600 hover:scale-105 sharp-shadow-sm shadow-red-600"
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
