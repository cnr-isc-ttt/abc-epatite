<template>
  <div class="improve">
    <a :href="href"><i class="fa fa-pencil"></i> &nbsp;Modifica su github</a>
  </div>
</template>
<script>
export default {
  data() {
    return {
      repo: "https://github.com/cnr-isc-ttt/abc-epatite/edit/master/docs/"
    };
  },
  props: {
    page: Object
  },
  computed: {
    href: function() {
      return this.repo + this.page.relativePath;
    }
  }
};
</script>
    