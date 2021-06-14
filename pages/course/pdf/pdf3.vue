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




    <div  class="mask" oncontextmenu="return false">
      
      <!-- 设置一个悬浮的透明div并屏蔽右键，覆盖掉pdf-->
    </div>

      <div id="pdf_viewer"  oncontextmenu="return false">
      </div>


    <div class="menu">
        <h3>pdf列表</h3>
        <nuxt-link to= 'pdf1' class="list-items">1</nuxt-link>
        <nuxt-link to= 'pdf2' class="list-items">2</nuxt-link>
        <nuxt-link to= 'pdf3' class="list-items">3</nuxt-link>
        <nuxt-link to= 'pdf4' class="list-items">4</nuxt-link>

        <!--<a href="http://8.140.10.109:8080/home/edu/static/upload/2.pdf" target="blank" class="list-items">2</a>
        <a href="http://8.140.10.109:8080/home/edu/static/upload/3.pdf" target="blank" class="list-items">3</a>
        <a href="http://8.140.10.109:8080/home/edu/static/upload/4.pdf" target="blank" class="list-items">4</a>-->
      
    </div>

  </div>
</template>

<script>


import PDFObject from 'pdfobject'
import courseApi from "@/api/course";
import vod from "@/api/vod";
var options = {
    pdfOpenParams: { scrollbars: '0', toolbar: '0', statusbar: '0'}              //禁用工具栏代码
};


export default {
  
  mounted() { 
    PDFObject.embed("http://8.140.10.109:8080/home/edu/static/upload/3.pdf", "#pdf_viewer", options);
  },
};
</script>

<style>

.list-items {
  text-decoration: none;
  padding: 10px;
  background-color: white;
  color: #000;
  margin: 10px 0;
  display: block;
}

.list-items:hover {
  text-decoration: none;
  background-color: cornflowerblue;
  color: white;
}

.mask {

 opacity: 0.3;
 position: absolute;
 left:18px;
  width: 61%;
  height: 650px;
  margin-top: 52px;
  margin-left: 30px;
  padding: 0px;
 z-index: 10000
}
.menu {
  background-color: #e9e9e9;
  float: right;
  height: 500px;
  padding: 10px;
  border-radius: 5px;
  width: 30%;
  margin-top: 50px;
}
#pdf_viewer {
  background-color: #f5f5f5;
  width: 61.8%;
  height: 600px;
  margin-top: 52px;
  margin-bottom: 52px;
  margin-left: 30px;
  padding: 0px;

}
#viewer {
  background-color: #f5f5f5;
  width: 61.8%;
  height: 550px;
  margin-top: 52px;
  margin-left: 30px;
  padding: 0px;
}

.box {
  display: -webkit-flex;
  display: flex;
  /*flex-wrap: wrap-reverse;*/
  justify-content: space-around;
  align-items: center;
}
</style>
