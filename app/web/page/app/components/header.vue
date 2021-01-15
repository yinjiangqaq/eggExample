<template>
  <el-header class="header">
    <div class="left-menu">
      <div class="logo"></div>
      <div class="products">共享公寓管理后台</div>
    </div>

    <div class="right-menu">
      <el-dropdown placement="bottom-end" trigger="click">
        <span class="el-dropdown-link">
          <i class="el-icon-user"></i>
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item icon="el-icon-plus">黄金糕</el-dropdown-item>
          <el-dropdown-item icon="el-icon-circle-plus">狮子头</el-dropdown-item>
          <el-dropdown-item icon="el-icon-circle-plus-outline"
            >螺蛳粉</el-dropdown-item
          >
          <el-dropdown-item icon="el-icon-check">双皮奶</el-dropdown-item>
          <el-dropdown-item icon="el-icon-circle-check"
            >蚵仔煎</el-dropdown-item
          >
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </el-header>
</template>

<script>
export default {};
</script>

<style  scoped>
.header {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 4px;
  height: 50px !important;
  overflow: hidden;
  position: relative;
  background: #fff;
  -webkit-box-shadow: 0 1px 4px rgba(0, 21, 41, 0.08);
  box-shadow: 0 1px 4px rgba(0, 21, 41, 0.08);
  border-bottom: 1px solid #e9e9e9;
  z-index: 1;
  padding: 0 50px 0 20px;
}

.left-menu {
  display: flex;
}

.right-menu {
}
.logo {
  width: 38px;
  height: 38px;
  margin-left: 10px;
}
.el-dropdown {
  font-size: 20px;
}
.products {
  line-height: 38px;
}
.el-dropdown-link {
  cursor: pointer;
}
</style>>

