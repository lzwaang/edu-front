<template>
  <div id="aCoursesList" class="bg-fa of">
    <!-- <el-carousel indicator-position="outside">
      <el-carousel-item v-for="item in 4" :key="item">
        <h3>图片{{ item }}</h3>
      </el-carousel-item>
    </el-carousel> -->

    <!-- /课程列表 开始 -->
    <section class="container">
      <header class="comm-title">
        <h2 class="fl tac">
          <span class="c-333">全部课程</span>
        </h2>
      </header>

      <!--查询表单-->
      <el-form :inline="true" class="demo-form-inline">
        <el-form-item>
          <el-input v-model="courseFrontQuery.title" placeholder="课程名称" />
        </el-form-item>

        <!-- 所属分类 -->
        <el-form-item label="课程分类">
          <el-select v-model="courseFrontQuery.subjectId" placeholder="分类">
            <el-option
              v-for="subject in subjectList"
              :key="subject.id"
              :label="subject.title"
              :value="subject.id"
            />
          </el-select>
        </el-form-item>

        <el-button type="primary" icon="el-icon-search" @click="getCourseList()"
          >查询</el-button
        >
        <el-button type="default" @click="resetData()">清空</el-button>
      </el-form>

      <section class="c-sort-box">
        <div class="mt40">
          <ul class="of" id="bna">
            <li v-for="item in data.courseList" :key="item.id">
              <el-card class="box-card" shadow="hover">
                <h2 class="hLh30 txtOf mt10">
                  {{ item.title }}
                  <!-- <el-tag> {{item.title}} </el-tag> -->
                </h2>
                <br />
                <el-row>
                  <!-- <el-button
                    type="primary"
                    round
                    @click="location = '/course/' + item.id"
                    >课件学习</el-button
                  > -->
                  <router-link :to="'/course/' + item.id">
                    <el-button
                      type="primary"
                      round
                      @click="location = '/course/' + item.id"
                      >开始学习</el-button
                    >
                  </router-link>
                </el-row>
              </el-card>
              <div></div>
            </li>
          </ul>
          <!-- <div class="clear"></div> -->
        </div>

        <!-- 分页 -->
        <el-pagination
          background
          layout="total, prev, pager, next, jumper"
          style="padding: 30px 0; text-align: center"
          :current-page="current"
          :total="data.total"
          :page-size="limit"
          @current-change="getCourseList"
        >
          <!-- @current-change="getList" @表示v-on 绑定一个事件 getList处修改-->
        </el-pagination>
      </section>
    </section>
    <!-- /课程列表 结束 -->
  </div>
</template>
<script>
import courseApi from "@/api/course";

export default {
  data() {
    return {
      current: 1, //当前页
      limit: 5,
      data: {}, //课程列表
      subjectList: [], // 分类列表
      courseFrontQuery: {}, // 查询表单对象
    };
  },
  created() {
    //课程第一次查询
    this.getCourseList();
    //分类显示
    this.initSubject();
  },
  methods: {
    //查询所有分类
    initSubject() {
      courseApi.getAllSubject().then((response) => {
        this.subjectList = response.data.data.subjectList;
      });
    },

    getCourseList(current = 1) {
      this.current = current;
      courseApi
        .getCourseList(this.current, this.limit, this.courseFrontQuery)
        .then((response) => {
          this.data = response.data.data;
        });
    },

    //清空的方法
    resetData() {
      //表单输入项数据清空
      this.courseFrontQuery = {};
      //查询所有课程
      this.getCourseList();
    },
  },
};
</script>
<style scoped>
.active {
  background: #bdbdbd;
}
.hide {
  display: none;
}
.show {
  display: block;
}

.text {
  font-size: 14px;
}

.item {
  padding: 18px 0;
}

.box-card {
  width: 480px;
}
</style>