<template>
<div class="home1">
  <img :src="values.image" alt="">
</div>
</template>

<script>
export default {
  props: ['values']
}
</script>

<style scoped>
.home1 img {
  width: 100%;
}
</style>
