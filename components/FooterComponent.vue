<template>
  <div class="flex flex-col items-center justify-center gap-4 py-12 uppercase lg:flex-row bg-crimson">
    <span>{{ footer.name }}</span>
    <span>© {{ new Date().getFullYear() }} {{ footer.copyright }}</span>
    <span v-html="footer.referral" />
  </div>
</template>

<script setup>
  import data from '~/utils/data.json'

  const footer = ref(data.footer)
</script>
