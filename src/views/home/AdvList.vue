<template>
<div class="adv-list">
  <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
    <van-swipe-item v-for="item in values.item" :key="item.image">
      <img class="adv-img" :src="item.image" alt="">
    </van-swipe-item>
  </van-swipe>
  <slot></slot>
</div>
</template>

<script>
export default {
  props: ['values']
}
</script>

<style scoped>
.adv-list {
  margin-bottom: 10px;
}

.my-swipe .van-swipe-item {
  height: 88px;
  box-sizing: border-box;
  padding: 0 10px;
}

.adv-img {
  width: 100%;
  height: 88px;
  border-radius: 5px;
}
</style>
