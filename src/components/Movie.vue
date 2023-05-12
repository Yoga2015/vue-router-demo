<template>
  <div class="movie-container">
    <h3>Movie组件</h3>
    <!-- <h5>{{ this.$route.params.mid }}---{{ mid }}</h5> -->
    <button @click="gotoHome">点击回到Home组件</button>
    <hr />
    <button @click="$router.back()">后退 go(-1)</button>
  </div>
</template>

<script>
export default {
  name: "Movie",
  // 动态路由参数
  // props: ["mid"],
  methods: {
    gotoHome() {
      this.$router.push("/home");
    },
  },
};
</script>

<style lang="less" scoped>
.movie-container {
  min-height: 200px;
  background-color: skyblue;
  padding: 15px;
}
</style>
