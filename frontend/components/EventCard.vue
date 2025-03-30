<template>
  <div class="flex flex-row text-black bg-white border border-black sharp-shadow-lg">
    <img :src="cover.url" :alt="cover.alt" />
    <div class="flex flex-col gap-4 p-2 text-crimson">
      <div class="text-2xl font-bold uppercase">{{ title }}</div>
      <div class="flex flex-row items-center gap-2 text-lg">
        <Icon icon="solar:calendar-bold-duotone" width="32" />
        <span>{{ date }}</span>
        <span>{{ startTime }} - {{ endTime }}</span>
      </div>
      <div class="flex flex-row items-center gap-2 text-lg">
        <Icon icon="solar:map-point-bold-duotone" width="32" />
        <span>{{ location }}</span>
      </div>
      <ButtonComponent :label="btnLabel" :color="{ text: 'white', bg: 'crimson', shadow: 'black' }" class="ml-2" />
    </div>
  </div>
</template>

<script setup>
  import { Icon } from '@iconify/vue'
  const props = defineProps({
    cover: {
      type: Object,
      default: () => {
        return {
          url: '',
          alt: '',
        }
      },
    },
    title: {
      type: String,
      default: '',
    },
    date: {
      type: String,
      default: '',
    },
    startTime: {
      type: String,
      default: '',
    },
    endTime: {
      type: String,
      default: '',
    },
    location: {
      type: String,
      default: '',
    },
    btnLabel: {
      type: String,
      default: '',
    },
  })
</script>
