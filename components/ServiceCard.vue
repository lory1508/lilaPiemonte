<template>
  <div
    class="flex flex-col items-center justify-center max-w-lg text-black bg-white border border-black min-w-80 sharp-shadow-lg"
  >
    <div class="flex flex-col items-center justify-center p-2 text-center lg:text-start lg:flex-row">
      <img v-if="img" :src="img.url" :alt="img.alt" class="h-40" />
      <div class="flex flex-col">
        <span class="text-2xl font-semibold uppercase" :class="`text-${color}`">{{ title }}</span>
        <span class="text-lg" :class="`text-${color}`">{{ subtitle }}</span>
      </div>
    </div>
    <div class="flex flex-col items-center justify-center w-full gap-4 p-4 text-white" :class="`bg-${color}`">
      <div v-if="content" class="flex flex-col gap-4 text-sm">
        <div v-for="(item, i) in content" :key="`content_${slug}_${i}`" v-html="item" />
      </div>
      <div v-if="specialContent" class="flex items-center justify-center text-3xl font-semibold">
        {{ specialContent }}
      </div>
      <ButtonComponent
        v-if="link"
        :label="link.text"
        :color="{ text: 'black', bg: 'white', shadow: 'black' }"
        class="ml-2"
        @click="goto(link.href)"
      />
    </div>
  </div>
</template>

<script setup>
  import { goto } from '~/utils'
  const props = defineProps({
    title: {
      type: String,
      default: '',
    },
    subtitle: {
      type: String,
      default: '',
    },
    content: {
      type: Array,
      default: () => [],
    },
    link: {
      type: Object,
      default: () => {},
    },
    img: {
      type: Object,
      default: () => {},
    },
    color: {
      type: String,
      default: 'crimson',
    },
    specialContent: {
      type: String,
      default: '',
    },
  })

  const slug = ref('')

  const slugify = (str) => {
    return str
      .toLowerCase()
      .trim()
      .replace(/[^\w\s-]/g, '') // remove non-word, non-space, non-hyphen characters
      .replace(/[\s_-]+/g, '-') // replace space, underscore and hyphen characters with a single hyphen
      .replace(/^-+/, '') // trim leading hyphens
      .replace(/-+$/, '')
  }

  onMounted(() => {
    slug.value = slugify(props.title)
  })
</script>

<style>
  ul {
    list-style: circle !important;
    margin-left: 2rem !important;
  }
</style>
