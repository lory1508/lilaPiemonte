<template>
  <iframe
    width="100%"
    height="800px"
    :src="`https://www.youtube.com/embed/${videoId}`"
    title="YouTube video player"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    referrerpolicy="strict-origin-when-cross-origin"
    allowfullscreen
  ></iframe>
</template>

<script setup>
  const props = defineProps({
    videoId: {
      type: String,
      default: '',
    },
  })
</script>
