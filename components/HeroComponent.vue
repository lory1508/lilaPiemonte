<template>
  <div>
    <div
      class="flex flex-col items-start justify-center w-screen min-h-screen h-fit lg:px-12"
      :class="backgroundColor"
      :style="`background-position: 80% 0%; background-repeat: no-repeat; background-size: 50%; background-image: url('${backgroundImg}');`"
    >
      <div
        class="flex flex-col items-center justify-center w-full min-h-screen gap-16 px-4 py-10 text-white bg-black bg-opacity-50 lg:bg-opacity-0 lg:backdrop-blur-none backdrop-blur-md lg:w-1/3"
      >
        <h1 class="text-6xl font-bold uppercase">{{ title }}</h1>
        <div class="flex flex-col gap-4">
          <div v-for="(item, index) in content" :key="`hero_content_${index}`" v-html="item.children[0].text" />
          <!-- <pre>{{ content }}</pre> -->
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
