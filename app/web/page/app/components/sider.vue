<template>
  <el-aside width="210px">
    <el-menu class="menu">
      <el-submenu
        v-for="(menuItem, index) in menu"
        :key="index"
        :index="String(index)"
      >
        <template slot="title">
          <span slot="title">{{ menuItem.name }} </span>
        </template>
        <template v-for="(submenu, subIndex) in menuItem.children">
          <template v-if="submenu.children && submenu.children.length">
            <el-submenu
              v-for="(ssubmenu, ssubIndex) in submenu.children"
              :key="`menu-${ssubIndex}`"
              :index="`${index}-${subIndex}`"
            >
              <template slot="title">
                <span slot="title">{{ ssubmenu.name }} </span>
              </template>
              <router-link :to="`/project/${ssubmenu.label}`" class="link_style">
                <el-menu-item :index="`${index}-${subIndex}-${ssubIndex}`">
                  <span slot="title">{{ ssubmenu.name }}</span>
                </el-menu-item>
              </router-link>
            </el-submenu>
          </template>
          <router-link v-else :key="subIndex" :to="`/project/${submenu.label}`" class="link_style">
            <el-menu-item :index="`${index}-${subIndex}`">
              <span slot="title">{{ submenu.name }}</span>
            </el-menu-item>
          </router-link>
        </template>
      </el-submenu>
    </el-menu>
  </el-aside>
</template>

<script>
export default {
  data() {
    return {
      menu: [
        {
          id: 0,
          name: "用户管理",
          children: [
            {
              id: 1,
              name: "账号管理",
              label:'account'
            },
            {
              id: 2,
              name: "信用管理",
              label:'credit'
            },
          ],
        },
        {
          id: 3,
          name: "租赁管理",
          children: [
            {
              id: 4,
              name: "房屋租赁管理",
              label:'room'
            },
            {
              id: 5,
              name: "公共资源租赁管理",
              label:'common'
            },
          ],
        },
      ],
    };
  },
};
</script>

<style scoped>
.menu{
  height: 100%;
}
.link_style{
  text-decoration: none;
}
</style>