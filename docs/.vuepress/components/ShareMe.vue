<template>
  <p class="share">
    <a class="action-button" v-if="isShare" @click="share()">
      Condividi App
    </a>
  </p>
</template>
<script>
export default {
  data() {
    return {
      isShare: false
    };
  },
  mounted() {
    if (navigator.share) {
    } else {
      console.log("cannot share"); // TODO
    }
    this.isShare = navigator.share !== undefined;
  },
  methods: {
    share() {
      if (!this.isShare) return;
      navigator
        .share({
          title: "ABC Epatite",
          text: "ABC Epatite tutto quello che devo sapere",
          url: "https://epatite.web.app/"
        })
        .then(() => console.log("Successful share"))
        .catch(error => console.log("Error sharing", error));
    }
  }
};
</script>
<style lang="stylus">
p.share {
  text-align: center;
}

.action-button {
  display: inline-block;
  font-size: 1.2rem;
  color: #fff;
  background-color: $accentColor;
  padding: 0.8rem 1.6rem;
  border-radius: 4px;
  transition: background-color 0.1s ease;
  box-sizing: border-box;
  border-bottom: 1px solid darken($accentColor, 10%);

  &:hover {
    background-color: lighten($accentColor, 10%);
  }
}

@media (max-width: $MQMobileNarrow) {
  .action-button {
    font-size: 1rem;
    padding: 0.6rem 1.2rem;
  }
}
</style>
