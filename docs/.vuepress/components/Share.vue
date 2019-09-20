<template>
  <span @click="share()">Share me</span>
</template>
<script>
export default {
  data() {
    return {
      isShare: navigator.share !== undefined
    };
  },
  methods: {
    share: function() {
      if (navigator.share) {
        navigator
          .share({
            title: "ABC Epatite",
            text: "ABC Epatite tutto quello che devo sapere",
            url: "https://epatite.web.app/"
          })
          .then(() => console.log("Successful share"))
          .catch(error => console.log("Error sharing", error));
      } else {
        console.log("cannot share");
      }
    }
  }
};
</script>