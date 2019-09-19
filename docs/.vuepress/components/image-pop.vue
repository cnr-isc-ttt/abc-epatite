<template>
  <label>
    <img :src="src" :alt="alt" v-on:click="lightbox" />
    {{ alt }}
  </label>
</template>

<script>
export default {
  data() {
    return {
      clicked: false
    };
  },
  props: {
    src: String,
    alt: String
  },
  methods: {
    lightbox: () => {
      console.log("TODO");
    }
  }
};
</script>
<style scoped>
label {
  font-weight: 300;
  font-style: italic;
  font-size: 80%;
  text-align: center;
  float: right;
  width: 30%;
  padding: 5px;
  margin: 15px;
  border: solid thin;
}
</style>
