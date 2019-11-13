<template>
  <div>
    <el-container class="container">
      <el-header class="header">
        <menu-top></menu-top>
      </el-header>
      <el-container>
        <el-aside class="aside">
          <menu-left></menu-left>
        </el-aside>
        <el-container>
          <el-main class="main">
            <h1>这是首页</h1>
            <router-view/>
          </el-main>
          <el-footer class="footer">
            这是页脚
          </el-footer>
        </el-container>
      </el-container>
    </el-container>
  </div>
</template>

<script>
  import MenuTop from '@/layout/top/menu-top'
  import MenuLeft from '@/layout/left/menu-left'
  export default {
    components: { MenuTop, MenuLeft }
  }
</script>

<style scoped lang="scss">
  *{
    padding: 0;
    margin: 0;
  }
  .container {
    width: calc(100%);
    height: 600px;
    .header {
      width: calc(100%);
      height: 100px !important;
    }
    .aside {
      width: 200px !important;
      height: calc(100% - 100px);
    }
    .main{
      width: calc(100% - 200px);
      height: calc(100% - 100px - 50px);
    }
    .footer {
      width: calc(100% - 200px);
      height: 50px !important;
    }
  }
</style>