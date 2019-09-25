<template>
  <article class="message" :class="accordionClasses">
    <h3 class="message-header" @click="toggleAccordion">
      {{ ans }}
    </h3>
    <div class="message-body" v-bind:class="{ yes: yes }">
      <div class="message-content">
        <slot></slot>
      </div>
    </div>
  </article>
</template>

<script>
export default {
  data() {
    return {
      isOpen: false
    };
  },
  props: {
    ans: String,
    yes: Boolean
  },
  methods: {
    toggleAccordion: function() {
      this.isOpen = !this.isOpen;
    }
  },
  computed: {
    accordionClasses: function() {
      return {
        "is-closed": !this.isOpen,
        "is-primary": this.isOpen,
        "is-dark": !this.isOpen
      };
    }
  }
};
</script>
<style scoped>
.message {
  max-width: 500px;
  margin-left: auto;
  margin-right: auto;
}

.message-header {
  cursor: pointer;
}

.message-body {
  padding: 0;
  max-height: 10em;
  overflow: hidden;
  transition: 0.3s ease all;
}

.is-closed .message-body {
  max-height: 0;
}

.message-content {
  padding: 20px;
}
</style>
