<template>
  <div class="in-wrap">
    <!-- 公共头引入 -->
    <header id="header">
      <section class="container">
        <div class="h-r-nsl">
          <ul class="nav">
            <router-link to="/" tag="li" active-class="current" exact>
              <a>首页</a>
            </router-link>
            <router-link to="/test" tag="li" active-class="current">
              <a>讨论区</a>
            </router-link>
            <!-- <router-link to="/" tag="li" active-class="current">
              <a>在线考试</a>
            </router-link> -->
            <!-- <router-link to="/" tag="li" active-class="current">
              <a>后台管理</a>
            </router-link> -->
          </ul>
          <ul class="h-r-login">
            <li id="no-login">
              <a href="/" title="登录">
                <em class="icon18 login-icon">&nbsp;</em>
                <span class="vam ml5">登录</span>
              </a>
              |
              <a href="/" title="注册">
                <span class="vam ml5">注册</span>
              </a>
            </li>
            <li class="mr10 undis" id="is-login-one">
              <a href="#" title="消息" id="headerMsgCountId">
                <em class="icon18 news-icon">&nbsp;</em>
              </a>
              <q class="red-point" style="display: none">&nbsp;</q>
            </li>
            <li class="h-r-user undis" id="is-login-two">
              <a href="#" title>
                <img
                  src="~/assets/img/avatar-boy.gif"
                  width="30"
                  height="30"
                  class="vam picImg"
                  alt
                />
                <span class="vam disIb" id="userName"></span>
              </a>
              <a
                href="javascript:void(0)"
                title="退出"
                onclick="exit();"
                class="ml5"
                >退出</a
              >
            </li>
          </ul>
        </div>
        <aside class="mw-nav-btn">
          <div class="mw-nav-icon"></div>
        </aside>
        <div class="clear"></div>
      </section>
    </header>
    <!-- /公共头引入 -->
    <nuxt />
    <!-- 公共底引入 -->
    <footer id="footer">
      <section class="container">
        <div class>
          <h4 class="hLh30">
            <span class="fsize18 f-fM c-999">2020郭老师团队综合实践项目</span>
          </h4>
          <div class="clear"></div>
        </div>
        <div class="b-foot">
          <section class="fl col-7">
            <section class="mr20">
              <section class="b-f-link">
                <a href="#" title="关于我们" target="_blank">关于我们</a>|
                <a href="#" title="联系我们" target="_blank">联系我们</a>|
                <a href="#" title="帮助中心" target="_blank">帮助中心</a>|
                <span>contact@pku.com</span>
              </section>
              <section class="b-f-link mt10">
                <span>©冀ICP备2021002767号</span>
              </section>
            </section>
          </section>
          <div class="clear"></div>
        </div>
      </section>
    </footer>
    <!-- /公共底引入 -->
  </div>
</template>
<script>
import "~/assets/css/reset.css";
import "~/assets/css/theme.css";
import "~/assets/css/global.css";
import "~/assets/css/web.css";

export default {};
</script>