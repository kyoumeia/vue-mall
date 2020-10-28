<template>
<div class="hot-search">
  <ul>
    <li v-for="item in values['hot_search']" :key="item">{{item}}</li>
  </ul>
</div>
</template>

<script>
export default {
  props: ['values']
}
</script>

<style scoped>
.hot-search ul {
  list-style: none;
  display: flex;
  align-items: center;
  justify-content: space-around;
  font-size: 14px;
  padding: 8px;
}

.hot-search ul li {
  flex: 1;
  text-align: center;
}
</style>
