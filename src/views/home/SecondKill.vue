<template>
<div>
  <special-active box-background="#FFE8E8" title-color="#D50012" :datas="values.item" :title="title">
    <img slot="icon" src="../../assets/img/home/second-kill.png" alt="">
  </special-active>
</div>
</template>

<script>
import SpecialActive from 'components/home/SpecialActive'
export default {
  data() {
    return {
      title: ['限量', '秒杀']
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
