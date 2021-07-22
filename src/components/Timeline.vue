<template>
  <h4 v-if="timelineItems.length === 0" class="no-timeline-items">
    Aún no has añadido ningún elemento 🥲
  </h4>
  <ul v-if="timelineItems.length !== 0" class="timeline">
    <TimelineItem
      v-for="item in timelineItems"
      :key="item.id"
      :timelineItem="item"
    />
  </ul>
</template>

<script>
import TimelineItem from "./TimelineItem.vue";

export default {
  name: "Timeline",
  components: {
    TimelineItem,
  },
  props: {
    timelineItems: {
      type: Array,
      default: function() { return [] }
    },
  },
};
</script>

<style scoped>
.no-timeline-items {
  margin-top: 50px;
}

.timeline {
  border-left: 4px solid #4298c3;
  border-bottom-right-radius: 4px;
  border-top-right-radius: 4px;
  background: rgba(255, 255, 255, 0.03);
  color: #313534;
  font-family: "Source Sans Pro", sans-serif;
  margin: 50px auto;
  padding: 50px;
  letter-spacing: 0.5px;
  position: relative;
  line-height: 1.4em;
  font-size: 1.03em;
  list-style: none;
  text-align: left;
  font-weight: 100;
  max-width: 300px;
}
.timeline h1,
.timeline h2,
.timeline h3 {
  font-family: "Oswald", sans-serif;
  letter-spacing: 1.5px;
  font-weight: 100;
  font-size: 1.4em;
}

@media (max-width: 576px) {
  .timeline {
    padding: 20px;
  }

  .timeline {
    max-width: calc(90% - 40px);
  }
}
</style>