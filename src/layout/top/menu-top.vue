<template>
  <el-menu mode="horizontal" @select="handleSelect" >
    <template v-for="item in router">
      <el-menu-item :key="item.name" :index="item.name">{{item.meta.title}}</el-menu-item>
    </template>
  </el-menu>
</template>

<script>
  export default {
    data() {
      const router = this.$router.options.routes
      return {
        router: router
      }
    },
    methods: {
      handleSelect(key) {
        this.$router.push({ name: key })
      }
    }
  }
</script>

<style scoped>

</style>