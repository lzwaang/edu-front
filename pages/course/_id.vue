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
      <h2 class="title-course">{{ courseFrontInfo.title }}</h2>
      <p class="info">课程简介: {{ courseFrontInfo.description }}</p>
      <!-- <h1>{{ this.id }}</h1> -->
      <div class="prism-player" id="J_prismPlayer"></div>
    </div>
    <div class="box-next">
      <div class="menu">
        <h3>pdf列表</h3>
        <nuxt-link to= 'pdf/pdf1' target="blank" class="list-items">1</nuxt-link>
        
        <nuxt-link to= 'pdf/pdf1' target="blank" class="list-items">2</nuxt-link>
        <nuxt-link to= 'pdf/pdf1' target="blank" class="list-items">3</nuxt-link>

        <nuxt-link to= 'pdf/pdf1' target="blank" class="list-items">4</nuxt-link>

        <!--<a href="http://8.140.10.109:8080/home/edu/static/upload/2.pdf" target="blank" class="list-items">2</a>
        <a href="http://8.140.10.109:8080/home/edu/static/upload/3.pdf" target="blank" class="list-items">3</a>
        <a href="http://8.140.10.109:8080/home/edu/static/upload/4.pdf" target="blank" class="list-items">4</a>-->
      </div>
      <div class="menu">
        <h3>视频列表</h3>
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
  background-color: #dae5ff;
  width: 50%;
  margin: 56px 56px;
  padding: 80px;
  border-radius: 10px;
}
.video .info {
  margin-top: 30px;
  text-align: center;
}
.video .title-course {
  text-align: center;
}
.box {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
}
.box-next {
  display: flex;
  width: 64%;
  margin-bottom: 100px;
}
</style>
