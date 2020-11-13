<template>
<div class="store">
  <navigator>
    <span slot="mid-icon" class="iconfont icon-sousuo"></span>
    <span slot="right-icon" class="iconfont icon-xiaoxi"></span>
  </navigator>
  <search-box style="margin-top: 16px">
    <div class="search-btn" slot="search-right">
      <span>搜索</span>
    </div>
  </search-box>
  <div class="store-list">
    <div class="list-head">
      <span class="title">附近商家</span>
    </div>
    <ul class="store-cate">
      <li v-for="item in datas.datas.store_class_list" :key="item.sc_name">{{item.sc_name}}</li>
    </ul>
    <div class="store-each">
      <div class="each-left">
        <img src="" alt="">
      </div>
      <div class="each-right">
        <div class="store-name">
          <span class="name">阳光平价超市</span>
          <span class="addr">（南岳村店）</span>
          <span class="distance">43分钟 2.1km</span>
        </div>
        <p class="credit">
          <span>信用度：</span>
          <img src="" alt="">
        </p>
        <p>马上生鲜直营店</p>
        <p>好评度100%</p>
        <p>交易数量</p>
        <ul class="goods-list">
          <li>
            <img src="" alt="">
            <span class="price">￥9.99</span>
            <span class="name">交易数量</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import Navigator from "components/navigator/Navigator";
import SearchBox from "components/searchbox/SearchBox";
import {
  request
} from "network/request"
export default {
  data() {
    return {
      datas: ''
    };
  },
  created() {
    request({
        url: '/index.php?act=store_list'
      })
      .then(result => {
        if (result.data.code == 200) {
          this.datas = result.data
        }
        console.log(result)
      })
      .catch(error => {
        console.error(error)
      })
  },
  components: {
    Navigator,
    SearchBox
  },
};
</script>

<style>
.search-btn {
  width: 45px;
  height: 25px;
  line-height: 25px;
  font-size: 15px;
  color: #FFFFFF;
  background-color: #D50012;
  border-radius: 12px;
  text-align: center;
  margin-left: 12px;
}

.store-list {
  width: 100%;
  box-sizing: border-box;
  padding: 20px 10px;
}

.list-head {
  margin-bottom: 15px;
}

.list-head .title {
  font-size: 18px;
  color: #000000;
  font-weight: 500;
}

.store-cate {
  overflow-x: scroll;
  white-space: nowrap;
  padding-bottom: 10px;
}

.store-cate li {
  display: inline-block;
  background-color: #E9E9E9;
  font-size: 10px;
  color: #595757;
  border-radius: 3px;
  padding: 5px 14px;
  margin-right: 4px;
}

.store-each {
  display: flex;
  background-color: #FFFFFF;
  border-radius: 10px;
  padding: 10px 0;
}

.each-left {
  width: 70px;
  text-align: center;
}

.each-right {
  flex: 1;
  box-sizing: border-box;
  padding-right: 10px;
  font-size: 10px;
  color: #A4A4A4;
}

.each-left img {
  width: 56px;
  height: 56px;
  border-radius: 2px;
}

.each-right .store-name {
  display: flex;
  align-items: baseline;
  color: #000000
}

.each-right .store-name span {
  display: inline-block;
}

.each-right .store-name .name {
  font-size: 18px;
  font-weight: 500;
  max-width: 50%;
}

.each-right .store-name .addr {
  font-size: 12px;
  flex: 1;
}

.each-right .store-name .distance {
  color: #A4A4A4;
  font-size: 10px;
}

.each-right p {
  margin-top: 4px;
}

.goods-list {
  overflow-x: scroll;
  white-space: nowrap;
  padding-top: 8px;
}

.goods-list li {
  display: inline-block;
  width: 62px;
  text-align: center;
}

.goods-list li img {
  height: 56px;
  width: 56px;
}

.goods-list li span {
  display: block;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.goods-list li span.price {
  color: #D50012;
  margin-bottom: 4px;
}
</style>
