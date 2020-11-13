<template>
<div class="search-box" :style="[boxStyle]">
  <slot name="search-left"></slot>
  <div class="search-mid" :style="[midStyle]">
    <span class="iconfont icon-sousuo"></span>
    <input type="text" placeholder="搜索">
    <span class="iconfont icon-qingchu"></span>
  </div>
  <slot name="search-right"></slot>
</div>
</template>

<script>
export default {
  props: {
    backgroundColor: {
      type: String,
      default: '#E5E5E5'
    },
    boxBackground: {
      type: String,
      default: 'inherit'
    }
  },
  computed: {
    midStyle() {
      return {
        backgroundColor: this.backgroundColor
      }
    },
    boxStyle() {
      return {
        backgroundColor: this.boxBackground
      }
    }
  },
}
</script>

<style>
.search-box {
  height: 31px;
  width: 100%;
  box-sizing: border-box;
  padding: 0 15px;
  display: flex;
  align-items: center;
  position: relative;
}

.search-mid {
  border-radius: 15px;
  flex: 1;
  height: 100%;
  display: flex;
  align-items: center;
  box-sizing: border-box;
  padding: 0 11px;
}

.search-mid input {
  border: none;
  flex: 1;
  height: 100%;
  background-color: inherit;
  font-size: 14px;
  color: #9B9B9B;
  padding-left: 8px;
}

.search-mid input:focus {
  outline: none;
}

.search-mid .icon-qingchu {
  color: #999999;
}

.icon-sousuo {
  color: #cdcdcd;
}
</style>
