<template>
<div class="navigator">
  <div class="nav-left">
    <span class="iconfont icon-weizhidingwei"></span>
    <span class="addr_text">定位地址定位地址</span>
    <span class="iconfont icon-arrow-backimg"></span>
  </div>
  <div class="nav-right">
    <slot name="mid-icon"></slot>
    <slot name="right-icon"></slot>
  </div>
</div>
</template>

<script>
export default {
  name: 'navigator'
}
</script>

<style>
.navigator {
  height: 44px;
  display: flex;
  background-color: #D50012;
  align-items: center;
  font-size: 15px;
  color: #ffffff;
  box-sizing: border-box;
  padding: 0 10px;
  position: relative;
  top: 0;
  left: 0;
  right: 0;
}

.nav-left {
  flex: 1;
  display: flex;
  align-items: center;
}

.icon-weizhidingwei {
  font-size: 18px !important;
}

.nav-left span {
  display: inline-block;
}

.nav-left .addr_text {
  padding: 0 4px;
  overflow: hidden;
  max-width: 200px;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.nav-right span {
  font-size: 26px !important;
  margin: 0 2px;
}
</style>
