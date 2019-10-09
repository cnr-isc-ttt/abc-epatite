<template>
  <p class="center">
    <a class="action-button" href="/scuola/" title="Scuola">
      Percorso Scuole →
    </a>
  </p>
</template>

<style lang="stylus">
p.center {
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
  margin: 6px;

  &:hover {
    background-color: lighten($accentColor, 10%);
  }
}
</style>
