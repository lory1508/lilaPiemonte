<template>
  <div class="flex flex-col">
    <div class="flex justify-center pt-24 pb-8 bg-softWarmRed">
      <h2 class="text-5xl font-bold text-center text-white uppercase">
        I nostri eventi
      </h2>
    </div>
    <div class="flex flex-wrap justify-center gap-8 p-6 bg-amber-50">
      <EventCard
        v-for="event in events"
        :key="event.id"
        :cover="event.cover"
        :title="event.title"
        :date="event.date"
        :start-time="event.startTime"
        :end-time="event.endTime"
        :btn-label="event.button"
        :location="event.location.address"
      />
    </div>
  </div>
</template>

<script setup>
  import { callBE } from "#imports";

  const events = ref([]);
  const loading = ref(false);

  const params = {
    populate: "*",
  };

  const googleCalendarLink = (event) => {
    const start = new Date(event.calendarStart)
      .toISOString()
      .replace(/-|:|\.\d\d\d/g, "");
    const end = new Date(event.calendarEnd).toISOString().replace(/-|:|\.\d\d\d/g, "");

    const params = new URLSearchParams({
      action: "TEMPLATE",
      text: event.title,
      dates: `${start}/${end}`,
      details: event.description || "",
      location: event.location || "",
    });

    return `https://calendar.google.com/calendar/render?${params.toString()}`;
  };

  onMounted(async () => {
    try {
      loading.value = true;
      const resStrapi = await callBE("events", params);
      resStrapi.data.forEach((e) => {
        events.value.push({
          cover: e.cover?.url || "",
          id: e.documentId,
          title: e.title,
          date: new Date(e.start).toLocaleDateString("it-IT"),
          calendarStart: new Date(e.start),
          calendarEnd: new Date(e.end),
          startTime: new Date(e.start).toLocaleTimeString("it-IT", {
            hour: "2-digit",
            minute: "2-digit",
          }),
          endTime: new Date(e.end).toLocaleTimeString("it-IT", {
            hour: "2-digit",
            minute: "2-digit",
          }),
          button: e.button,
          location: e.location,
        });
      });
    } catch (error) {
      console.error("Error during loading:", error);
    } finally {
      loading.value = false;
    }
  });
</script>

<style></style>
