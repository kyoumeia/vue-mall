<template>
<div class="special-active">
  <div class="special-active-con" :style="{backgroundImage: 'linear-gradient(' + this.boxBackground + ', #FFFFFF)'}">
    <div class="con-head">
      <div class="icon">
        <slot name="icon"></slot>
      </div>
      <p class="title">
        <span class="title-start">{{title[0]}}</span>
        <span class="title-end" :style="{color: this.titleColor}">{{title[1]}}</span>
      </p>
      <p class="more">
        <span>更多</span>
        <span class="iconfont icon-arrow-backimg"></span>
      </p>
    </div>
    <div class="con-main">
      <ul>
        <li v-for="item in datas" :key="item.goods_id">
          <div class="img-box">
            <img :src="item.image_url || item.goods_image" alt="">
          </div>
          <span class="tag" v-show="item.secondkill_id || item.xianshi_id">限时{{item.secondkill_discount || item.xianshi_discount}}</span>
          <p class="good-name">{{item.goods_name}}</p>
          <goods-price :now-price="item.secondkill_price || item.xianshi_price || item.goods_price" :before-price="item.goods_price" :if-show-before="item.secondkill_id || item.xianshi_id" />
        </li>
      </ul>
    </div>
  </div>
</div>
</template>

<script>
import GoodsPrice from '../common/GoodsPrice.vue'
export default {
  props: {
    boxBackground: {
      type: String,
      default: "#FFFFFF"
    },
    titleColor: {
      type: String,
      default: "#333333"
    },
    datas: Array,
    title: Array
  },
  components: {
    GoodsPrice
  },

}
</script>

<style scoped>
.special-active {
  margin-bottom: 10px;
  box-shadow: 0 0 5px 5px rgba(186, 178, 178, 0.1);
}

.special-active-con {
  width: 100%;
  box-sizing: border-box;
  padding: 0 10px;
  border-radius: 10px;
}

.con-head {
  display: flex;
  align-items: center;
  padding: 15px 0;
}

.con-head .icon img {
  height: 20px;
  width: 20px;
}

.con-head .title {
  flex: 1;
  font-size: 16px;
  color: #333333;
  font-style: italic;
  font-weight: bold;
  margin-left: 5px;
}

.con-head .more {
  font-size: 12px;
  color: #333333;
  display: flex;
  align-items: center;
}

.con-head .iconfont {
  color: #757575;
  margin-bottom: 2px;
}

.con-main {
  background-color: #FFFFFF;
  border-radius: 10px;
  position: relative;
}

.con-main ul {
  overflow-x: scroll;
  white-space: nowrap;
}

.con-main ul li {
  display: inline-block;
  width: 33.3%;
}

.con-main ul li .img-box {
  height: 94px;
  box-sizing: border-box;
  padding-top: 17px;
  text-align: center;
  position: relative;
  margin-bottom: 4px;
}

.con-main ul li .img-box img {
  display: block;
  height: 80px;
  width: 80px;
  margin: 0 auto;
}

.con-main ul li span.tag {
  font-size: 10px;
  color: #FFFFFF;
  background-image: linear-gradient(to right, #FF7977, #FF5943);
  border-radius: 0 5px 0 5px;
  padding: 1px 4px;
  height: 16px;
  line-height: 18px;
}

.con-main ul li .good-name {
  padding: 10px 10px 6px 10px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-size: 14px;
  color: #333333;
}
</style>
