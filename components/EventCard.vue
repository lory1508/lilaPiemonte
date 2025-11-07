<template>
  <div
    class="flex flex-col text-black bg-white border border-black lg:flex-row sharp-shadow-lg"
  >
    <img :src="cover" class="h-60" />
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
      <ButtonComponent
        label="Aggiungi al calendario"
        :color="{ text: 'white', bg: 'crimson', shadow: 'black' }"
        class="ml-2"
        @click="googleCalendarLink"
      />
    </div>
  </div>
</template>

<script setup>
  import { Icon } from "@iconify/vue";
  const props = defineProps({
    cover: {
      type: String,
      default: "",
    },
    title: {
      type: String,
      default: "",
    },
    date: {
      type: String,
      default: "",
    },
    startTime: {
      type: String,
      default: "",
    },
    endTime: {
      type: String,
      default: "",
    },
    location: {
      type: String,
      default: "",
    },
    btnLabel: {
      type: String,
      default: "",
    },
    event: {
      type: Object,
      default: () => ({}),
    },
  });

  const googleCalendarLink = async () => {
    const start = new Date(props.event.calendarStart)
      .toISOString()
      .replace(/-|:|\.\d\d\d/g, "");
    const end = new Date(props.event.calendarEnd)
      .toISOString()
      .replace(/-|:|\.\d\d\d/g, "");

    const params = new URLSearchParams({
      action: "TEMPLATE",
      text: props.event.title,
      dates: `${start}/${end}`,
      // details: props.event.description || "",
      location: props.event?.location?.address || "",
    });

    await navigateTo(
      `https://calendar.google.com/calendar/render?${params.toString()}`,
      {
        open: {
          target: "_blank",
        },
      }
    );
  };
</script>
