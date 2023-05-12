// 1、 导入 vue 、vue-router
import Vue from "vue";
import VueRouter from "vue-router";
import Home from "@/components/Home.vue";
import Music from "@/components/Music.vue";
import Movie from "@/components/Movie.vue";
import Tab1 from "@/components/tab/Tab1.vue";
import Tab2 from "@/components/tab/Tab2.vue";
import Main from "@/components/Main.vue";
import Login from "@/components/Login.vue";

// 2、通过 Vue 安装 vue-router
Vue.use(VueRouter);

// 3、创建 vue-router 路由实例对象
const router = new VueRouter({
  routes: [
    // 路由规则 :{ 路由地址，路由对应的组件}
    { path: "/", redirect: "/home" },
    { path: "/home", component: Home },

    // 嵌套路由
    {
      path: "/music",
      component: Music,
      // 当切换入 Music组件 展示时，默认 也展示 tab1组件
      // 所以 给 /music 加个重定向
      redirect: "/music/tab1",
      children: [
        // 通过 children 属性，嵌套 声明 子级路由规则， /tab1 可以不加 / 斜线
        { path: "tab1", component: Tab1 },
        { path: "tab2", component: Tab2 },
      ],
    },

    // 动态路由
    { path: "/movie", component: Movie },
    // { path: "/movie/:mid", component: Movie, props: true },

    // 后台管理路由
    { path: "/main", component: Main },
    { path: "/login", component: Login },
  ],
});

// 5、全局前置守卫
router.beforeEach(function (to, from, next) {
  // console.log(to);
  // console.log(from);
  // next();
  // 分析：
  // 1、要拿到 用户 将要访问的 hash地址  ，怎么拿？
  // 2、判断 hash 地址是否等于 /main
  // 2.1、如果 等于 /main，则需要登录之后才能访问
  // 2.2、如果 不等于 /main，则不需要登录，直接放行 next()
  // 3、如果 访问的地址是 /main，则需要读取 localStorage中的 token值
  // 3.1、如果有token，则放行
  // 3.2、如果没有token，则强制跳转到/login登录页面
  if (to.path === '/main') {
    const token = localStorage.getItem('token');
    // console.log(token);
    if (token) {
      next();
    } else {
      next('/login');
    }
  } else {
    next()
  }
})

// 4、向外共享 路由实例对象
export default router;
