<template>
  <div
    class="flex items-center h-12 transition-all duration-300 bg-white rounded-full cursor-pointer hover:scale-105 w-fit"
    @click="goto(href)"
  >
    <div class="flex flex-row gap-4">
      <Icon :icon="icon" width="64" class="rounded-full shadow-lg" />
      <div :class="`flex items-center pr-4 text-md lg:text-2xl font-bold ${colorVariants[type]} uppercase`">
        {{ text }}
      </div>
    </div>
  </div>
</template>

<script setup>
  import { goto } from '~/utils'
  import { Icon } from '@iconify/vue'

  const props = defineProps({
    href: {
      type: String,
      default: '',
    },
    text: {
      type: String,
      default: '',
    },
    icon: {
      type: String,
      default: '',
    },
    type: {
      type: String,
      default: '',
    },
  })

  const colorVariants = {
    facebook: 'text-[#1877f2]',
    instagram: 'text-[#ea4968]',
    gmail: 'text-[#c5221f]',
  }
</script>
