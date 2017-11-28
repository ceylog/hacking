<template>
    <el-aside>
        <el-menu default-active="1-4-1" class="el-menu-vertical-demo" :collapse="isCollapse">
            <el-submenu index="1">
                <template slot="title">
                <i class="el-icon-location"></i>
                <span slot="title">导航一</span>
                </template>
                <el-menu-item-group>
                <span slot="title">分组一</span>
                <el-menu-item index="1-1">选项1</el-menu-item>
                <el-menu-item index="1-2">选项2</el-menu-item>
                </el-menu-item-group>
                <el-menu-item-group title="分组2">
                <el-menu-item index="1-3">选项3</el-menu-item>
                </el-menu-item-group>
                <el-submenu index="1-4">
                <span slot="title">选项4</span>
                <el-menu-item index="1-4-1">选项1</el-menu-item>
                </el-submenu>
            </el-submenu>
            <el-menu-item index="2">
                <i class="el-icon-menu"></i>
                <span slot="title">导航二</span>
            </el-menu-item>
            <el-menu-item index="3">
                <i class="el-icon-setting"></i>
                <span slot="title">导航三</span>
            </el-menu-item>
        </el-menu>
    </el-aside>
</template>
<style>
 .collapse{
     width: 300px;
     animation: move 1s;
     animation-fill-mode : forwards;
     z-index: 10;
 }
 @keyframes move {
     0%{width: 300px;}
     100%{width: 65px;}
 }

 .uncollapse{
     width: 65px;
     animation: move1 1s;
     animation-fill-mode : forwards;
 }
 @keyframes move1 {
     0%{width: 65px;}
     100%{width: 300px;}
 }

</style>
<script>
export default {
  name: 'SideBar',
  props:{
      isCollapse:{
          type: Boolean
      }
  }
}
</script>
