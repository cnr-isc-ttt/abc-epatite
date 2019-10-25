<template>
  <carousel v-if="isMounted">
    <slide>
      <label>
        1. Il fegato
      </label>
      <img src="../../assets/images/liver-wide.jpg" />
    </slide>
    <slide>
      <label>
        2. Le Epatiti Virali
      </label>
      <img src="../../assets/images/virus.jpg" />
    </slide>
    <slide>
      <label>
        3. Epatite A
      </label>

      <img src="../../assets/images/AcquaContaminata.jpg" />
    </slide>
    <slide>
      <label>
        4. Epatite B
      </label>

      <img src="../../assets/images/vaccino-wide.jpg" />
    </slide>
    <slide>
      <label>
        5. Epatite C
      </label>
      <img src="../../assets/images/ago.jpg" />
    </slide>
  </carousel>
</template>
<script>
export default {
  data() {
    return {
      isMounted: false
    };
  },
  mounted() {
    this.isMounted = true;
  }
};
</script>




