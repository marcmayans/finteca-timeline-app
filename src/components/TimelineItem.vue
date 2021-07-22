<template>
  <li class="event">
    <div v-if="!editMode">
      <h3>
        <span v-on:click="editItem" class="edit-pencil">✏️</span>
        {{ title }}
      </h3>
      <p>
        {{ description }}
      </p>
    </div>
    <form v-if="editMode" class="timeline-form" @submit.prevent="onSubmit">
      <div class="card-label">
        <label class="control-label" for="title">Título</label>
        <input id="title" v-model="title" type="text" />
      </div>
      <div class="card-label">
        <label class="control-label" for="description">Descripción</label>
        <textarea id="description" v-model="description"></textarea>
      </div>
      <input class="submit-btn" type="submit" value="Guardar" />
    </form>
  </li>
</template>

<script>
// import timelineService from "../services/timeline";
import store from "../store/store";

export default {
  name: "TimelineItem",
  data() {
    return {
      editMode: false,
      id: this.timelineItem.id,
      title: this.timelineItem.title,
      description: this.timelineItem.description,
    };
  },
  props: {
    timelineItem: Object,
  },
  methods: {
    editItem() {
      this.editMode = true;
    },
    onSubmit() {
      if (this.title === "" || this.description === "") {
        alert("Tienes que completar todos los campos");
        return;
      }

      let timelineItem = {
        id: this.id,
        title: this.title,
        description: this.description,
      };

      // Call to the API to edit the timeline item
      // timelineService.editElement(timelineItem);

      // Simulate we are calling the API and waiting for almost a second
      store.commit("isLoading", true);

      setTimeout(() => {
        this.$emit("item-submitted", timelineItem);
        store.commit("isLoading", false);
        this.editMode = false;
        this.$notify("Has editado un elemento del timeline");
      }, 800);
    },
  },
};
</script>

<style scoped>
.edit-pencil {
  cursor: pointer;
}

.timeline .event {
  border-bottom: 1px dashed rgba(255, 255, 255, 0.1);
  padding-bottom: 25px;
  margin-bottom: 50px;
  position: relative;
}
.timeline .event:last-of-type {
  padding-bottom: 0;
  margin-bottom: 0;
  border: none;
}
.timeline .event:before,
.timeline .event:after {
  position: absolute;
  display: block;
  top: 0;
}
.timeline .event:before {
  left: -217.5px;
  color: rgba(255, 255, 255, 0.4);
  content: attr(data-date);
  text-align: right;
  font-weight: 100;
  font-size: 0.9em;
  min-width: 120px;
}
.timeline .event:after {
  box-shadow: 0 0 0 4px #4298c3;
  left: -57.85px;
  background: #313534;
  border-radius: 50%;
  height: 11px;
  width: 11px;
  content: "";
  top: 5px;
}

@media (max-width: 576px) {
  .timeline .event {
    margin-bottom: 20px;
  }

  .timeline .event:after {
    left: -27.85px;
  }
}
</style>