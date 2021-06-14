<template>
  <div id="aCoursesList" class="box">

    <div id="pdf_viewer" >
    </div>

    <div class="menu">
        <h3>pdf列表</h3>
        <nuxt-link to= 'pdf1' class="list-items">1</nuxt-link>
        <nuxt-link to= 'pdf2' class="list-items">2</nuxt-link>
        <nuxt-link to= 'pdf3' class="list-items">3</nuxt-link>
        <nuxt-link to= 'pdf4' class="list-items">4</nuxt-link>
  
    </div>

    <div  class="mask" oncontextmenu="return false">     
      <!-- 设置一个悬浮的透明div并屏蔽右键，覆盖掉pdf-->
    </div>

  </div>
</template>








<script>
  import PDFObject from 'pdfobject'
  var options = {
    pdfOpenParams: { scrollbars: '0', toolbar: '0', statusbar: '0'}              //禁用工具栏代码
  };

  export default {
    mounted() {
      ;
      PDFObject.embed("http://8.140.10.109:8080/home/edu/static/upload/1.pdf", "#pdf_viewer", options);
    },
};
</script>
<style>



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