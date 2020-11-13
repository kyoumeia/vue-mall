<template>
<div class="goods-price">
  <div class="price-box">
    <span class="now">￥{{nowPrice}}</span>
    <span v-show="ifShowBefore" class="before">￥{{beforePrice}}</span>
  </div>
  <span class="iconfont icon-tianjiagouwuche"></span>
</div>
</template>

<script>
export default {
  props: {
    nowPrice: String,
    beforePrice: String,
    ifShowBefore: String
  }
}
</script>

<style scoped>
.goods-price {
  width: 100%;
  display: flex;
  align-items: center;
  box-sizing: border-box;
  padding: 10px;
}

.goods-price span {
  display: block;
}

.price-box {
  flex: 1;
}

.price-box .now {
  font-size: 16px;
  color: #D50012;
  font-weight: bold;
}

.price-box .before {
  font-size: 12px;
  color: #999999;
  position: relative;
  text-decoration: line-through;
}

.icon-tianjiagouwuche {
  color: #D50012;
  font-size: 22px;
}
</style>
