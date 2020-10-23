<template>
<div class="tab-bar">
  <slot></slot>
</div>
</template>

<script>
export default {};
</script>

<style>
.tab-bar {
  width: 100%;
  height: 49px;
  background-color: #ffffff;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  box-shadow: 0 -1px 4px 1px rgba(100, 100, 100, 0.1);
  font-size: 14px;
}
</style>
