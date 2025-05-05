<template>
  <div class="flex flex-col">
    <div class="flex justify-center pt-24 pb-8 bg-softWarmRed">
      <h2 class="text-5xl font-bold text-center text-white uppercase">{{ sostienici.title }}</h2>
    </div>
    <div class="flex flex-col gap-4 px-6 py-8 text-black bg-white">
      <span v-for="(item, index) in sostienici.contentUp" :key="`content_up_${index}`" v-html="item" />

      <!-- SATISPAY -->
      <div class="w-full lg:w-[950px] mx-auto flex justify-center my-4">
        <div class="grid items-stretch justify-center grid-cols-1 gap-12 lg:grid-cols-2">
          <div class="flex flex-col items-center justify-center border border-black sharp-shadow-md w-80 lg:w-[460px]">
            <div class="px-6 py-8 text-4xl font-bold uppercase text-softWarmRed">{{ satispay.title }}</div>
            <div class="items-center justify-center w-full h-full px-6 py-2 mx-auto bg-softWarmRed">
              <img :src="satispay.img.url" :alt="satispay.img.alt" width="300" class="w-full" />
            </div>
          </div>

          <!-- CINQUE PER MILLE -->
          <div class="flex flex-col items-center justify-center border border-black lg:w-[460px] w-80 sharp-shadow-md">
            <div class="px-6 py-8 text-4xl font-bold text-brightCoral">{{ cinquePerMille.title }}</div>
            <div class="flex flex-col w-full h-full gap-4 px-6 py-2 mx-auto bg-brightCoral">
              <div v-for="(item, index) in cinquePerMille.content" :key="`content_${index}`">
                <div v-html="item" class="text-sm text-white" />
              </div>
              <div class="w-full text-3xl font-bold text-center text-white">{{ codiceFiscale }}</div>
            </div>
          </div>

          <!-- PAYPAL -->
          <div class="flex flex-col items-center justify-center border border-black lg:w-[460px] w-80 sharp-shadow-md">
            <div class="px-6 py-8 text-4xl font-bold text-[#14378A]">{{ paypal.title }}</div>
            <div class="items-center justify-center w-full h-full px-6 py-2 flex mx-auto bg-[#14378A]">
              <ButtonComponent
                :label="paypal.link.label"
                :color="{ text: 'black', bg: 'white', shadow: 'black' }"
                class="ml-2"
                @click="goto(paypal.link.href, '_blank')"
              >
                <template #right-slot>
                  <Icon icon="solar:arrow-right-up-linear" height="24" />
                </template>
              </ButtonComponent>
            </div>
          </div>

          <!-- BONIFICO -->
          <div class="flex flex-col items-center justify-center border border-black lg:w-[460px] w-80 sharp-shadow-md">
            <div class="px-6 py-8 text-4xl font-bold uppercase text-crimson">{{ bonifico.title }}</div>
            <div class="flex flex-col items-center justify-center w-full h-full gap-4 px-6 py-2 mx-auto bg-crimson">
              <div v-for="(item, index) in bonifico.content" :key="`content_5x1000${index}`">
                <div v-html="item" class="font-mono text-white" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <span v-for="(item, index) in sostienici.contentDown" :key="`content_down_${index}`" v-html="item" />
    </div>
  </div>
</template>

<script setup>
  import ButtonComponent from '~/components/ButtonComponent.vue'
  import { goto } from '~/utils'
  import { Icon } from '@iconify/vue'
  import data from '~/utils/data.json'

  const sostienici = ref(data.sostienici)

  const satispay = ref(data.sostienici.cards.satispay)
  const bonifico = ref(data.sostienici.cards.bonifico)
  const cinquePerMille = ref(data.sostienici.cards['5x1000'])
  const paypal = ref(data.sostienici.cards.paypal)

  const codiceFiscale = ref(data.generalSettings.codiceFiscale)
</script>
