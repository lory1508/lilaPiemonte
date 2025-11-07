<template>
  <!-- Desktop -->
  <div
    class="fixed flex-row justify-between hidden w-full h-16 p-2 text-white bg-black lg:flex backdrop-blur-md bg-opacity-15"
  >
    <div class="flex flex-row items-center gap-6 montserrat">
      <div
        v-for="(ll, index) in leftLinks"
        :key="`ll_${index}`"
        :class="ll.href == activeLink.href ? 'underline font-semibold' : ''"
      >
        <NuxtLink :to="ll.href">{{ ll.title }}</NuxtLink>
      </div>
    </div>
    <img :src="logo" class="cursor-pointer"  @click="goToLink('/')" />
    <div class="flex flex-row items-center gap-6 montserrat">
      <div
        v-for="(rl, index) in rightLinks"
        :key="`rl_${index}`"
        :class="rl.href == activeLink.href ? 'underline font-semibold' : ''"
      >
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

  <!-- Mobile -->
  <div class="fixed z-50 flex right-4 top-4 lg:hidden">
    <div class="flex justify-center card">
      <Icon
        icon="solar:hamburger-menu-line-duotone"
        width="64"
        class="text-black border-2 border-black backdrop-blur-sm sharp-shadow-sm shadow-black"
        @click="visible = true"
      />
      <Dialog v-model:visible="visible" modal :style="{ width: '25rem' }">
        <div class="flex flex-col gap-6">
          <div class="flex flex-col items-center gap-6 montserrat">
            <div
              v-for="(ll, index) in leftLinks"
              :key="`ll_${index}`"
              :class="ll.active ? 'underline font-semibold' : ''"
            >
              <div @click="goToLink(ll.href)">{{ ll.title }}</div>
            </div>
          </div>
          <div class="flex flex-col items-center gap-6 montserrat">
            <div
              v-for="(rl, index) in rightLinks"
              :key="`rl_${index}`"
              :class="rl.active ? 'underline font-semibold' : ''"
            >
              <div
                v-if="index == rightLinks.length - 1"
                class="flex flex-row items-center gap-3 px-2 py-1 font-semibold text-red-600 transition-all duration-300 bg-white border-2 border-red-600 hover:scale-105 sharp-shadow-sm shadow-red-600"
                @click="goToLink(rl.href)"
              >
                <Icon icon="noto-v1:growing-heart" />
                {{ rl.title }}
              </div>
              <div v-else @click="goToLink(rl.href)">{{ rl.title }}</div>
            </div>
          </div>
        </div>
      </Dialog>
    </div>
  </div>
</template>

<script setup>
  import { Icon } from '@iconify/vue'
  import { goto } from '~/utils'

  import data from '~/utils/data.json'
  import Dialog from 'primevue/dialog'

  const route = useRoute()

  const leftLinks = ref([])
  const rightLinks = ref([])
  const logo = ref('')
  const visible = ref(false)

  const goToLink = async (href) => {
    await goto(href)
    visible.value = false
  }

  const activeLink = computed(() => {
    const links = [...leftLinks.value, ...rightLinks.value]
    return links.find((l) => l.href === route.path)
  })

  onMounted(() => {
    leftLinks.value = data.menu.linksLeft
    rightLinks.value = data.menu.linksRight
    logo.value = data.generalSettings.logo
  })
</script>
