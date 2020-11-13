<template>
<div class="broad">
  <img :src="values.image" alt="">
  <div class="broad-r">
    <van-swipe>
      <van-swipe-item v-for="(value, key) in values.list" :key="key">
        <p>{{value.title}}</p>
        <p>
          <span class="prominent">{{value.prominent}}</span>
          <span class="describe">{{value.describe}}</span>
        </p>
      </van-swipe-item>
    </van-swipe>
  </div>
</div>
</template>

<script>
export default {
  props: ['values']
}
</script>

<style scoped>
.broad {
  display: flex;
  margin: 0 10px 10px 10px;
  align-items: center;
  background-color: #FFFFFF;
  border-radius: 10px;
  padding: 5px 0;
  box-shadow: 0 0 5px 5px rgba(186, 178, 178, 0.1);
}

.broad img {
  height: 50px;
  width: 88px;
}

.broad-r {
  flex: 1;
  border-left: 1px solid #E8E8E8;
  padding: 0 10px;
}

.broad-r p {
  font-size: 12px;
  color: #1A1A1A;
  margin: 4px 0;
}

.broad-r p span {
  display: inline-block;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.broad-r p span.prominent {
  background-color: #D50012;
  color: #FFFFFF;
  padding: 2px 4px;
  margin-right: 8px;
  max-width: 140px;
}

.broad-r p span.describe {
  color: #E43230;
  max-width: 80px;
}
</style>
