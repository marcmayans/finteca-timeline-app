<template>
  <h1>Finteca Timeline</h1>
  <TimelineForm @item-submitted="addTimelineItem" />
  <Loader v-if="isLoading" />
  <Timeline :timelineItems="timelineItems" />
  <notifications position="bottom right" />
</template>

<script>
import Loader from "./components/Loader.vue";
import TimelineForm from "./components/TimelineForm.vue";
import Timeline from "./components/Timeline.vue";

import { mapState } from "vuex";
import timelineService from "./services/timeline";

export default {
  name: "App",
  components: {
    Loader,
    TimelineForm,
    Timeline,
  },
  data() {
    return {
      timelineItems: [],
    };
  },
  computed: mapState(["isLoading"]),
  methods: {
    callTest() {
      timelineService.addElement({});
    },
    addTimelineItem(item) {
      this.timelineItems.unshift(item);
    },
  },
  created() {
    document.title = "Finteca Timeline";
  },
};
</script>
