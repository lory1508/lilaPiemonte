<template>
  <div
    class="flex flex-col items-center justify-center max-w-lg text-black bg-white border border-black sharp-shadow-lg"
  >
    <div class="flex flex-row">
      <img v-if="img" :src="img.url" :alt="img.alt" width="300" />
      <div class="flex flex-col">
        <span class="py-12 text-4xl font-semibold uppercase" :class="`text-${color}`">{{ title }}</span>
        <span class="py-12 text-4xl font-semibold uppercase" :class="`text-${color}`">{{ subtitle }}</span>
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
        :label="link.label"
        :color="{ text: 'black', bg: 'white', shadow: 'black' }"
        class="ml-2"
        @click="goto"
      />
    </div>
  </div>
</template>

<script setup>
  const props = defineProps({
    title: {
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

  const router = useRouter()
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

  const goto = () => {
    router.push(props.link.href)
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
