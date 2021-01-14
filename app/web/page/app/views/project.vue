<template>
  <div class="container">
    <el-container class="outer-container">
      <Header />
      <el-container class="main-container">
        <Sider />
        <el-main class="layout-main">
          <transition name="fade">
            <keep-alive>
              <router-view />
            </keep-alive>
          </transition>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>


<script>
import Header from "../components/header.vue";

import Sider from "../components/sider.vue";
export default {
  components: {
    Header,
    Sider,
  },
};
</script>

<style scoped>
.container {
  height: 100%;
}
.outer-container {
  display: flex;
  flex-direction: column;
  height: 100%;
}
.main-container {
  display: flex;
  flex-direction: row;
  background-color: #f5f5f5;
}
.layout-main {
  margin: 20px;
  background-color: #fff;
  border: solid 1px #e9e9e9;
}
</style>