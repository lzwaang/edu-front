<template>
  <div>
    <!-- 公共头引入 -->
    <el-backtop></el-backtop>
    <header id="header">
      <img class="logo" src="../assets/img/course.png" />
      <p class="title">2020 郭老师团队线上教育平台</p>
      <div class="menu-items">
        <a href="/" class="items"><i class="el-icon-s-home"></i> 首页</a>
        <a href="/" class="items"><i class="el-icon-s-comment"></i> 讨论区</a>
      </div>
    </header>
    <!-- /公共头引入 -->
    <nuxt />
    <!-- 公共底引入 -->
    <header id="header">
      <img class="logo" src="../assets/img/course.png" />
      <p class="title">2020 郭老师团队线上教育平台</p>
      <div class="menu-items">
        <a href="/" class="items">© 冀ICP备2021002767号</a>
      </div>
    </header>
    <!-- /公共底引入 -->
  </div>
</template>
<script>
import "../assets/css/main.css";
export default {};
</script>