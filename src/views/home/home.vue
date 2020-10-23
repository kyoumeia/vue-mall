<template>
<div class="home">
  <navigator>
    <span slot="mid-icon" class="iconfont icon-saoyisao"></span>
    <span slot="right-icon" class="iconfont icon-xiaoxi"></span>
  </navigator>
  <div v-for="item in datas" :key="item.keys">
    <component :is="[Object.keys(item)]"></component>
  </div>

</div>
</template>

<script>
import Navigator from 'components/navigator/Navigator'
import hot_search from 'views/home/HotSearch'
import goods_class from 'views/home/GoodsClass'
import home5 from 'views/home/Home5'
import goods from 'views/home/Goods'
import {
  request
} from 'network/request'
export default {
  data() {
    return {
      datas: [],
      currentCpn: Navigator
    }
  },
  created() {
    request({
      url: '/index.php?act=index'
    }).then((result) => {
      if (result.data.code == 200) {
        this.datas = result.data.datas
      }
    }).catch((err) => {
      console.log(err)
    });
  },
  components: {
    Navigator,
    hot_search,
    goods_class,
    home5,
    goods
  }
}
</script>

<style>

</style>
