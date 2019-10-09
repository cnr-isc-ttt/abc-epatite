<template>
  <p class="share">
    Condividi
    <a
      title="Condividi App"
      class="action-button"
      v-if="isShare"
      @click="share()"
    >
      <ShareVariant />
    </a>
    <span v-else class="share">
      <a
        target="_blank"
        class="action-button"
        :href="mailto"
        title="Condividi per Mail"
      >
        <EmailSendOutline />
      </a>
      <a
        target="_blank"
        class="action-button"
        title="Condividi su WhatsApp"
        :href="whatsApp"
        ><WhatsApp />
      </a>
    </span>
  </p>
</template>
<script>
const mySite = "https://epatite.web.app/";
export default {
  data() {
    return {
      isShare: false
    };
  },
  computed: {
    url() {
      return mySite + (this.$page.path == "/" ? "" : this.$page.path);
    },
    whatsApp() {
      return "https://api.whatsapp.com/send?text=" + this.url;
    },
    mailto() {
      return "mailto:?subject=ABC+Epatite+web+app;body=" + this.url;
    }
  },
  mounted() {
    if (navigator.share) {
    } else {
      // console.log("cannot share"); // TODO
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
          url: this.url
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
  border-radius: 6px;
  background-color: rgba(255, 255, 255, 0.6);
  box-shadow: 0 2px 7px rgba(0, 0, 0, 0.5);
}

.action-button {
  display: inline-block;
  font-size: 1.2rem;
  color: #fff;
  background-color: $infoColor;
  padding: 0.8rem 1.6rem;
  border-radius: 4px;
  transition: background-color 0.1s ease;
  box-sizing: border-box;
  border-bottom: 1px solid darken($infoColor, 10%);
  margin: 6px;

  &:hover {
    background-color: lighten($infoColor, 10%);
  }
}

@media (max-width: $MQMobileNarrow) {
  .action-button {
    font-size: 1rem;
    padding: 0.6rem 1.2rem;
  }
}
</style>
