<template>
  <div class="timeline-form-container">
    <h3>Añade un elemento al timeline</h3>
    <form class="timeline-form" @submit.prevent="onSubmit">
      <div class="card-label">
        <label class="control-label" for="title">Título</label>
        <input id="title" v-model="title" type="text" />
      </div>
      <div class="card-label">
        <label class="control-label" for="description">Descripción</label>
        <textarea id="description" v-model="description"></textarea>
      </div>
      <input class="submit-btn" type="submit" value="Añadir" />
    </form>
  </div>
</template>

<script>
// import timelineService from "../services/timeline";
import store from "../store/store";

export default {
  name: "TimelineForm",
  data() {
    return {
      title: "",
      description: "",
    };
  },
  methods: {
    onSubmit() {
      
      if (this.title === "" || this.description === "") {
        alert("Tienes que completar todos los campos");
        return;
      }

      let timelineItem = {
        id: Math.random().toString(36).substr(2, 9),
        title: this.title,
        description: this.description,
      };

      // Call to the API to add the new timeline item
      // timelineService.addElement(timelineItem);

      // Simulate we are calling the API and waiting for almost a second
      store.commit("isLoading", true);

      setTimeout(() => {
        this.title = "";
        this.description = "";
        this.$emit("item-submitted", timelineItem);
        store.commit("isLoading", false);
        this.$notify("Has añadido un elemento al timeline");
      }, 800);
    },
  },
};
</script>

<style scoped>
.timeline-form-container {
  display: flex;
  align-items: center;
  flex-direction: column;
}
</style>