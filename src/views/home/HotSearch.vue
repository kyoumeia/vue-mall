<template>
<div class="hot-search">
  <ul>
    <li v-for="item in values" :key="item">{{item}}</li>
  </ul>
  <slot name="hot-search-bg"></slot>
</div>
</template>

<script>
export default {
  props: ['values']
}
</script>

<style scoped>
.hot-search {
  position: relative;
  padding: 5px 0;
  background-color: #D50012;
}

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
  color: #FFFFFF;
}
</style>
