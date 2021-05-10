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
      <!-- <h1>{{ this.id }}</h1> -->
      <div class="prism-player" id="J_prismPlayer"></div>
    </div>

    <div class="menu">
      <div v-for="video in this.videoList" :key="video.id">
        <nuxt-link :to="'/player/' + id + '/' + video.videoSourceId">
          <p class="list-items">{{ video.title }}</p>
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
import courseApi from "@/api/course";
import vod from "@/api/vod";
export default {
  asyncData({ params, error }) {
    return courseApi.getCourseInfo(params.id).then((response) => {
      console.log(response.data.data.videoList);
      return {
        courseFrontInfo: response.data.data.courseFrontInfo,
        videoList: response.data.data.videoList,
        id: params.id,
      };
    });
  },
};
</script>

<style>
.video {
  background-color: #f5f5f5;
  width: 50%;
  height: 300px;
  margin-top: 52px;
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
