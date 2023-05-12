<template>
  <div class="music-container">
    <h3>Music组件</h3>
    <!-- 子路由链接 -->
    <router-link to="/music/tab1" class="a-link">tab1</router-link>
    <router-link to="/music/tab2" class="a-link">tab2</router-link>

    <!-- 子路由占位符 -->
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "Music",
};
</script>

<style lang="less" scoped>
.music-container {
  min-height: 200px;
  background-color: greenyellow;
  padding: 15px;
}
.a-link {
  margin-right: 20px;
}
</style>
