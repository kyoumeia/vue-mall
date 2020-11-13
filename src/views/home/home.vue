<template>
<div class="home">
  <navigator>
    <span slot="mid-icon" class="iconfont icon-saoyisao"></span>
    <span slot="right-icon" class="iconfont icon-xiaoxi"></span>
  </navigator>
  <search-box box-background="#D50012" background-color="#ffffff" />
  <component v-for="(item, index) in datas" :key="index" :is="item.key" :values="item.value">
    <div slot="hot-search-bg" class="hot-search-bg"></div>
  </component>
</div>
</template>

<script>
import Navigator from "components/navigator/Navigator";
import SearchBox from "components/searchbox/SearchBox";

import hot_search from "views/home/HotSearch";
import goods_class from "views/home/GoodsClass";
import home5 from "views/home/Home5";
import goods from "views/home/Goods";
import adv_list from "views/home/AdvList";
import broad from "views/home/Broad";
import goods_new from "views/home/GoodsNew";
import home1 from "views/home/Home1";
import secondkill from "views/home/SecondKill";
import xianshi from "views/home/Xianshi";
import {
  request
} from "network/request";

import Vue from 'vue';
import {
  Swipe,
  SwipeItem
} from 'vant';
Vue.use(Swipe);
Vue.use(SwipeItem);

export default {
  data() {
    return {
      datas: [],
      currentCpn: Navigator,
    };
  },
  created() {
    request({
        url: "/index.php?act=wechat_index",
      })
      .then((result) => {
        if (result.data.code == 200) {
          this.datas = result.data.datas;
        }
      })
      .catch((err) => {
        console.log(err);
      });
  },
  components: {
    Navigator,
    SearchBox,
    hot_search,
    goods_class,
    home5,
    goods,
    adv_list,
    broad,
    goods_new,
    home1,
    secondkill,
    xianshi
  },
};
</script>

<style>
.hot-search-bg {
  height: 44px;
  width: 100%;
  background-color: #D50012;
  border-radius: 0 0 50% 50%;
  position: absolute;
  bottom: -44px;
  left: 0;
  z-index: -99;
}
</style>
