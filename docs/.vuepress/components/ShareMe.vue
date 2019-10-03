<template>
  <div>
    <button v-if="isShare" @click="share()">Condividi</button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      isShare: false
    };
  },
  mounted() {
    console.log(navigator);
    if (navigator.share) {
    } else {
      console.log("cannot share");
    }
    this.isShare = navigator.share !== undefined;
  },
  methods: {
    share() {
      console.log(navigator);
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