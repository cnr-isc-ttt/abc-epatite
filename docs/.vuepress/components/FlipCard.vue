<template>
  <div class="container" @click="() => (isFlipped = !isFlipped)">
    <div class="card" :class="{ flipped: isFlipped }">
      <div class="front"><slot></slot></div>
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
  }
};
</script>
<style lang="stylus" scoped>
.container {
  width: 300px;
  height: 200px;
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
    background: $backColor;
    display: flex;
    justify-content: center;
    align-items: center;
    font: 16px / 1.5 'Helvetica Neue', Helvetica, Arial, sans-serif;
    font-smoothing: antialiased;
    color: $textColor;
  }

  .front {
    background: darken($accentColor, 20%);
    color: #fff;
  }

  .back {
    transform: rotateY(180deg);
  }

  &.flipped {
    transform: rotateY(180deg);
  }
}
</style>
