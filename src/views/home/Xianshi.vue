<template>
<div>
  <special-active box-background="#FEF5DA" title-color="#F4831E" :datas="values.item" :title="title">
    <img slot="icon" src="../../assets/img/home/xianshi.png" alt="">
  </special-active>
</div>
</template>

<script>
import SpecialActive from 'components/home/SpecialActive'
export default {
  data() {
    return {
      title: ['今日', '爆品']
    }
  },
  props: ['values'],
  components: {
    SpecialActive
  }
}
</script>

<style scoped>
</style>
