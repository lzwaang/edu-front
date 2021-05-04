<template>
  <div id="aCoursesList" class="box">
    <link
      rel="stylesheet"
      href="https://g.alicdn.com/de/prismplayer/2.9.3/skins/default/aliplayer-min.css"
    />
    <script
      charset="utf-8"
      type="text/javascript"
      src="https://g.alicdn.com/de/prismplayer/2.9.3/aliplayer-min.js"
    ></script>

    <div class="video">
      <h2 class="title">{{ courseFrontInfo.title }}</h2>
      <p class="info">课程简介: {{ courseFrontInfo.description }}</p>
      <div class="prism-player" id="J_prismPlayer"></div>
    </div>

    <div class="menu">
      <ul>
        <li v-for="video in this.videoList" :key="video.id">
          <a :href="'/player/' + video.videoSourceId">{{ video.title }}</a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import courseApi from "@/api/course";
import vod from "@/api/vod";
export default {
  asyncData({ params, error }) {
    return courseApi.getCourseInfo(params.id).then((response) => {
      return {
        courseFrontInfo: response.data.data.courseFrontInfo,
        videoList: response.data.data.videoList,
      };
    });
  },
};
</script>

<style>
.menu {
  background-color: #e9e9e9;
  float: right;
  height: 500px;
  padding: 10px;
  border-radius: 5px;
  width: 30%;
  margin-top: 50px;
}
.video {
  background-color: #f5f5f5;
  width: 50%;
  height: 300px;
  margin-top: 52px;
  margin-left: 30px;
  padding: 60px;
}
.video .info {
  margin-top: 30px;
}
.box {
  display: -webkit-flex;
  display: flex;
  /*flex-wrap: wrap-reverse;*/
  justify-content: space-around;
  align-items: center;
}
</style>
