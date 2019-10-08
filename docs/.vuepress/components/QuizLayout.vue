<template>
  <div class="container">
    <ol>
      <li v-for="q in data">
        <article>
          <h3>{{ q.Q }}</h3>
          <FlipCard>
            <p>(A) {{ q.A }}</p>
            <p>(B) {{ q.B }}</p>
            <p>(C) {{ q.C }}</p>
            <p>(D) {{ q.D }}</p>
            <template v-slot:backside
              ><ul>
                <li v-for="r in q.R">{{ r }}</li>
              </ul>
            </template>
          </FlipCard>
        </article>
      </li>
    </ol>
  </div>
</template>
<script>
export default {
  computed: {
    data() {
      return this.$page.frontmatter.QandA;
    }
  }
};
</script>
<style lang="stylus" scoped>
article h3 {
  margin-bottom: 3px;
  font-size: 1em;
}
</style>