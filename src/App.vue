<template>
<div id="app">
  <router-view></router-view>
  <tabbar>
    <tabbar-item link="/home">
      <img slot="item-icon" src="./assets/img/tabbar/home.svg" alt="">
      <img slot="item-icon-active" src="./assets/img/tabbar/home_active.svg" alt="">
      <div slot="item-text">首页</div>
    </tabbar-item>
    <tabbar-item link="/category">
      <img slot="item-icon" src="./assets/img/tabbar/category.svg" alt="">
      <img slot="item-icon-active" src="./assets/img/tabbar/category_active.svg" alt="">
      <div slot="item-text">分类</div>
    </tabbar-item>
    <tabbar-item link="/store">
      <img slot="item-icon" src="./assets/img/tabbar/store.svg" alt="">
      <img slot="item-icon-active" src="./assets/img/tabbar/store_active.svg" alt="">
      <div slot="item-text">店铺</div>
    </tabbar-item>
    <tabbar-item link="/cart">
      <img slot="item-icon" src="./assets/img/tabbar/cart.svg" alt="">
      <img slot="item-icon-active" src="./assets/img/tabbar/cart_active.svg" alt="">
      <div slot="item-text">购物车</div>
    </tabbar-item>
    <tabbar-item link="/profile">
      <img slot="item-icon" src="./assets/img/tabbar/profile.svg" alt="">
      <img slot="item-icon-active" src="./assets/img/tabbar/profile_active.svg" alt="">
      <div slot="item-text">我的</div>
    </tabbar-item>
  </tabbar>
</div>
</template>

<script>
import Tabbar from 'components/tabbar/Tabbar'
import TabbarItem from 'components/tabbar/TabbarItem'
export default {
  name: "App",
  components: {
    Tabbar,
    TabbarItem
  },
};
</script>

<style>
@import './assets/css/base.css';
@import './assets/css/normalize.css';
@import './assets/iconfont/iconfont.css';

body {
  background-color: #F2F2F2;
}

#app {}
</style>
