<template>
  <div class="test">
    <div class="test__element">
      <Content />
    </div>
  </div>
</template>
<script>

import Content from '~/components/widgets/Test/Content';

export default {
  components: {
    Content,
  },
};
</script>

<style lang="scss" scoped>
.test{
  max-width: 1170px;
  font-family: $Roboto;
  margin: 0 auto;
  }

</style>
