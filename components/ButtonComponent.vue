<template>
  <div
    class="flex flex-row items-center gap-2 px-2 py-1 transition-all duration-300 border cursor-pointer sharp-shadow-sm hover:scale-105 w-fit"
    :class="`bg-${color.bg} text-${color.shadow} border-${color.shadow}`"
  >
    <slot name="left-slot" />
    <div :class="`text-${color.text}`">
      {{ label }}
    </div>
    <slot name="right-slot" />
  </div>
</template>

<script setup>
  const props = defineProps({
    label: {
      type: String,
      default: '',
    },
    color: {
      type: Object,
      default: () => {
        return {
          bg: 'bg-white',
          text: 'text-black',
          shadow: 'shadow-black',
        }
      },
    },
  })
</script>
