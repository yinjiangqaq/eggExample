<template>
  <div class="container">
    <el-container class="outer-container">
      <Header />
      <el-container class="main-container">
        <Sider />
        <el-main class="layout-main">
          <div class="navbar">
            <transition-group name="breadcrumb" tag="el-breadcrumb">
              <el-breadcrumb-item v-for="name in names" :key="name">{{
                name
              }}</el-breadcrumb-item>
            </transition-group>
          </div>
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
import { mapState } from "vuex";
export default {
  components: {
    Header,
    Sider,
  },
  computed: {
    ...mapState("global", {
      names: "activeMenuNames",
    }),
  },
};
</script>

<style lang="scss" scoped>
/* 进入和离开动画 */
.fade-enter {
  opacity: 0;
  transform: translateX(-60px);
}
.fade-leave-to {
  opacity: 0;
  transform: translateX(60px);
}
.fade-enter-active,
.fade-leave-active {
  transition: all 0.7s;
}

.breadcrumb-enter,
.breadcrumb-leave-active {
  opacity: 0;
  transform: translateX(20px);
}
.breadcrumb-enter-active {
  transition: all 0.7s;
}
.breadcrumb-leave-active {
  transition: all 0.2s;
}
.container {
  height: 100%;
  .outer-container {
    display: flex;
    flex-direction: column;
    height: 100%;
  }
  .main-container {
    display: flex;
    flex-direction: row;
    background-color: #f5f5f5;
    .layout-main {
      margin: 20px;
      background-color: #fff;
      border: solid 1px #e9e9e9;
      .navbar {
        margin: 0 20px;
        padding-left: 15px;
        height: 50px;
        box-shadow: 0 1px 4px rgba(0, 21, 41, 0.08);
        .el-breadcrumb {
          height: 50px;
          .el-breadcrumb__item {
            line-height: 50px;
          }
        }

        .el-breadcrumb__item:first-child {
          .el-breadcrumb__inner {
            color: #606266;
          }
        }
      }
    }
  }
}
</style>