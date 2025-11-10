<template>
  <LoaderComponent v-if="loading" />
  <div v-else class="flex flex-col h-full bg-amber-100">
    <div class="flex justify-center pt-24 pb-8 bg-softWarmRed">
      <h1 class="text-5xl font-bold text-center text-white uppercase">
        I nostri eventi
      </h1>
    </div>
    <div class="flex flex-wrap justify-center gap-8 p-6 ">
      <EventCard
        v-for="event in events"
        :key="event.id"
        :event="event"
        :cover="event.cover"
        :title="event.title"
        :date="event.date"
        :start-time="event.startTime"
        :end-time="event.endTime"
        :btn-label="event.button"
        :location="event.location.address"
      />
    </div>
    <PaginationComponent 
      :total="total"
      :perPage="perPage"
      :currentPage="currentPage"
      :perPageOptions="[2, 10, 20, 30]"
      @pageChange="handlePageChange"
    />
      <!-- :rowsPerPageOptions="rowsPerPageOptions" -->
  </div>
</template>

<script setup>
  import { callBE } from "#imports";

  useHead({
    title: "Eventi LILA Piemonte | Prevenzione HIV a Torino e Provincia",
    meta: [
      {
        name: "description",
        content:
          "Partecipa agli eventi di LILA Piemonte a Torino e provincia: campagne HIV, test rapidi, incontri e iniziative per la salute e la prevenzione.",
      },
    ],
  });

  const events = ref([]);
  const loading = ref(false);
  const currentPage = ref(1);
  const perPage = ref(10);
  const total = ref(0);

  const params = ref({
    populate: "*",
  });

  const getEvents = async () => {
    try {
      loading.value = true;
      const pagination = `pagination[page]=${currentPage.value}&pagination[pageSize]=${perPage.value}`
      const resStrapi = await callBE(`events?${pagination}`, params.value);
      total.value = resStrapi.meta.pagination.total
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
  }

  onMounted(async () => {
    await getEvents();
  });

  const handlePageChange = async (page, itemsPerPage) => {
    currentPage.value = page;
    perPage.value = itemsPerPage;
    events.value = [];
    await getEvents();
  };
</script>

<style></style>
