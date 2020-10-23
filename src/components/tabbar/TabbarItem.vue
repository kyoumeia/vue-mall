<template>
<div class="tab-bar-item" @click="itemClick">
  <div v-if="!isActive">
    <slot name="item-icon"></slot>
  </div>
  <div v-else>
    <slot name="item-icon-active"></slot>
  </div>
  <div :style="activeStyle">
    <slot name="item-text"></slot>
  </div>
</div>
</template>

<script>
export default {
  data() {
    return {

    }
  },
  props: {
    link: String
  },
  computed: {
    isActive() {
      return this.$route.path.indexOf(this.link) !== -1
    },
    activeStyle() {
      return this.isActive ? {
        color: '#d4237a'
      } : {}
    }
  },
  methods: {
    itemClick() {
      this.$router.push(this.link)
    }
  },
}
</script>

<style>
.tab-bar-item {
  flex: 1;
  text-align: center;
}

.tab-bar-item img {
  margin-top: 5px;
  height: 20px;
  width: 20px;
}
</style>
