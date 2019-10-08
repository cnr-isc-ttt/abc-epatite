<template>
  <div class="cardcontainer" @click="() => (isFlipped = !isFlipped)">
    <div class="card" :class="{ flipped: isFlipped }">
      <div class="front">
        <h4 v-if="title">{{ title }}</h4>
        <p><slot></slot></p>
      </div>
      <div class="back"><slot name="backside"></slot></div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      isFlipped: false
    };
  },
  props: {
    title: String
  }
};
</script>
<style lang="stylus" scoped>
.cardcontainer {
  width: 90%;
  height: 300px;
  position: relative;
  perspective: 800px;
  border-radius: 4px;
}

.card {
  width: 100%;
  height: 100%;
  position: absolute;
  transform-style: preserve-3d;
  transition: transform 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  border-radius: 6px;
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.15);
  cursor: pointer;

  div {
    position: absolute;
    width: 100%;
    height: 100%;
    backface-visibility: hidden;
    border-radius: 6px;
    background: darken($infoColor, 10%);
    display: flex;
    justify-content: center;
    align-items: center;
    /* font: 16px / 1.5 'Helvetica Neue', Helvetica, Arial, sans-serif; */
    font-smoothing: antialiased;
    color: #fff;
  }

  .front {
    background: darken($accentColor, 10%);
  }

  .back {
    transform: rotateY(180deg);
  }

  &.flipped {
    transform: rotateY(180deg);
  }
}
</style>
