<template>
  <div
    class="page"
  >
    <div class="page__body body">
      <header-menu
        class="body__header"
      />
      <div class="body__content">
        <nuxt />
      </div>
    </div>
  </div>
</template>
<script>

import Header from '~/components/widgets/Header';

export default {
  components: {
    'header-menu': Header,
  },
};
</script>
<style lang="scss" scoped>
.body__header{
  //position: sticky;
  //top: 0;
  //left: 0;
}

</style>
