<template>
  <div>
    <!-- 阿里云视频播放器样式 -->
    <link
      rel="stylesheet"
      href="https://g.alicdn.com/de/prismplayer/2.8.1/skins/default/aliplayer-min.css"
    />

    <!-- 阿里云视频播放器脚本 -->
    <script
      charset="utf-8"
      type="text/javascript"
      src="https://g.alicdn.com/de/prismplayer/2.8.1/aliplayer-min.js"
    />

    <!-- 定义播放器dom -->
    <div class="vedio-container">
      <div id="J_prismPlayer" class="prism-player" />
      <div class="menu">
        <div v-for="video in this.videoList" :key="video.id">
          <nuxt-link :to="'/player/' + id + '/' + video.videoSourceId">
            <p class="list-items">{{ video.title }}</p>
          </nuxt-link>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import vod from "@/api/vod";
import courseApi from "@/api/course";

export default {
  data() {
    return {
      videoList: [],
    };
  },

  // fix: get the course list in the vedio page
  async asyncData({ params, error }) {
    let [pav, list] = await Promise.all([
      vod.getPlayAuth(params.vid),
      courseApi.getCourseInfo(params.id),
    ]);
    // console.log(pav);
    // console.log(list);
    return {
      id: params.id,
      vid: params.vid,
      playAuth: pav.data.data.playAuth,
      videoList: list.data.data.videoList,
    };
  },

  mounted() {
    //页面渲染之后  created
    new Aliplayer(
      {
        id: "J_prismPlayer",
        vid: this.vid, // 视频id
        playauth: this.playAuth, // 播放凭证
        encryptType: "1", // 如果播放加密视频，则需设置encryptType=1，非加密视频无需设置此项
        width: "100%",
        height: "700px",
        // 以下可选设置
        //cover: '', // 封面
        qualitySort: "asc", // 清晰度排序

        mediaType: "video", // 返回音频还是视频
        autoplay: false, // 自动播放
        isLive: false, // 直播
        rePlay: false, // 循环播放
        preload: true,
        controlBarVisibility: "hover", // 控制条的显示方式：鼠标悬停
        useH5Prism: true, // 播放器类型：html5
      },
      function (player) {
        console.log("播放器创建成功");
      }
    );
  },
};
</script>

<style>
.list-items {
  text-decoration: none;
  padding: 10px;
  background-color: white;
  margin: 10px 0;
}

.list-items:hover {
  text-decoration: none;
  background-color: cornflowerblue;
  color: white;
}

.menu {
  background-color: #e9e9e9;
  width: 30%;
  text-align: center;
  font-size: 18px;
  padding: 10px;
}

.vedio-container {
  display: flex;
  margin: 36px;
}
</style>
