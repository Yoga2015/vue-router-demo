<template>
  <div id="app">
    <h1>App3 组件</h1>

    <!-- 使用 router-link 组件 进行导航 , 通过 传递 'to'来指定 链接-->
    <!-- `<router-link>` 将呈现一个带有正确 `href`属性的 <a>标签 -->
    <router-link to="/home" class="a-link">home</router-link>
    <router-link to="/music" class="a-link">music</router-link>
    <router-link to="/movie" class="a-link">movie</router-link>

    <!-- <router-link to="/movie/1" class="a-link">movie</router-link>  -->
    <!-- <router-link to="/movie/2" class="a-link">movie</router-link> -->
    <!-- <router-link to="/movie/3" class="a-link">movie</router-link> -->
    <!-- <router-link to="/movie/:mid" class="a-link">movie</router-link> -->

    <!-- router-view  路由占位符  -->
    <!-- 路由匹配到的组件将渲染在这里 -->
    <router-view> </router-view>

  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style lang="less" scoped>
#app-container {
  background-color: #efefef;
  overflow: hidden;
  margin: 10px;
  padding: 15px;
}

.a-link {
  margin-right: 20px;
}
</style>
