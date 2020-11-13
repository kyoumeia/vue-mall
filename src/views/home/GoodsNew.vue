<template>
<div>
  <special-active box-background="#E2FBE2" title-color="#1FAA2D" :datas="values.item" :title="title">
    <img slot="icon" src="../../assets/img/home/goods-new.png" alt="">
  </special-active>
</div>
</template>

<script>
import SpecialActive from '../../components/home/SpecialActive.vue'
export default {
  data() {
    return {
      title: ['新品', '上市']
    }
  },
  components: {
    SpecialActive
  },
  props: ['values']
}
</script>

<style scoped>
</style>
