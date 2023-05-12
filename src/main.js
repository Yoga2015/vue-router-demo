import Vue from "vue";
import App from "./App.vue";
// 导入路由模块，目的：拿到 路由的实例对象
// 在进行模块化导入的时候，如果给定的是文件，则默认导入这个文件夹，名字叫做 index.js 的主配置文件
// import router from "@/router";     简版写法， 下面是完整写法
import router from "@/router/index.js";

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
  // 在 vue项目中，要想把 路由 用起来，必须把 路由实例对象，通过下面的方式进行挂载
  // router：路由的实例对象
  // router：router,  属性名 和 属性值一样，可以简写为 如下：
  router,
}).$mount("#app");
