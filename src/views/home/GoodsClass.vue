<template>
<div class="goods-class">
  <ul class="goods-class-box">
    <li v-for="items in values.item" :key="items.image">
      <img :src="items.image" alt="">
      <p>{{items.title}}</p>
    </li>
  </ul>
</div>
</template>

<script>
export default {
  props: ['values']
}
</script>

<style scoped>
.goods-class {
  width: 100%;
  box-sizing: border-box;
  padding: 0 10px;
  margin-bottom: 10px;
}

.goods-class .goods-class-box {
  background-color: #ffffff;
  border-radius: 10px;
  overflow: hidden;
  display: grid;
  grid-template-rows: 90px 90px;
  grid-template-columns: repeat(5, 20%);
  box-shadow: 0 0 5px 5px rgba(186, 178, 178, 0.1);
}

.goods-class .goods-class-box li {
  text-align: center;
  font-size: 12px;
  color: #333333;
}

.goods-class .goods-class-box img {
  height: 60px;
  width: 60px;
  margin-bottom: 7px;
}
</style>
