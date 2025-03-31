<template>
  <div>
    <div
      class="flex flex-col items-start justify-center w-screen h-screen px-16"
      :class="backgroundColor"
      :style="`background-position: 125% 0%; background-repeat: no-repeat; background-size: 70%; background-image: url('${backgroundImg}');`"
    >
      <div class="flex flex-col w-1/3 gap-16 text-white">
        <h1 class="text-6xl font-bold uppercase">{{ title }}</h1>
        <div class="flex flex-col gap-4">
          <div v-for="(item, index) in content" :key="`hero_content_${index}`" v-html="item" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
  const props = defineProps({
    backgroundImg: {
      type: String,
      default: '',
    },
    backgroundColor: {
      type: String,
      default: 'bg-white',
    },
    title: {
      type: String,
      default: '',
    },
    content: {
      type: Array,
      default: () => [],
    },
  })
</script>
