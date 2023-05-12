<template>
  <div class="home-container">
    <h3>Home组件</h3>
    <!-- <button @click="showThis">点击打印 this 看看</button><br /> -->
    <button @click="gotoMovie">点击跳转到最后一个组件--->Movie组件</button>
    <hr />
    <button @click="$router.forward()">前进 go(1)</button><hr>
    <!-- 全局前置守卫 -->
    <router-link to="/main">去访问 Main组件</router-link>
  </div>
</template>

<script>
export default {
  name: "Home",
  methods: {
    showThis() {
      console.log(this);
    },

    gotoMovie() {
      this.$router.push("/movie");
    },
  },
};
</script>

<style lang="less" scoped>
.home-container {
  min-height: 200px;
  background-color: pink;
  padding: 15px;
}
</style>
