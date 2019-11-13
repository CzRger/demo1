<template>
  <el-menu mode="vertical" @select="handleSelect" >
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
    mounted() {
      console.log(this.$route)
    },
    methods: {
      handleSelect(key, keyPath) {
        
        this.$router.push({ name: key })
      }
    }
  }
</script>

<style scoped>

</style>