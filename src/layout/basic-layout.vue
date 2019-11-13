<template>
    <div>
        <el-container>
            <el-header>
                <el-menu
                  :default-active="activeIndex2"
                  class="el-menu-demo"
                  mode="horizontal"
                  @select="handleSelect"
                  background-color="#545c64"
                  text-color="#fff"
                  active-text-color="#ffd04b">
                    <template v-for="(item1) in router">
                        <template v-if="item1.children">
                            <el-submenu :index="item1.name" :key="item1.name">
                                <template slot="title">{{item1.title}}</template>
                                <template v-for="(item2) in item1.children">
                                    <el-menu-item :index="item2.name" :key="item2.name">
                                        {{item2.title}}
                                    </el-menu-item>
                                </template>
                            </el-submenu>
                        </template>
                        <template v-else>
                            <el-menu-item :index="item1.name" :key="item1.name">
                                {{item1.title}}
                            </el-menu-item>
                        </template>
                    </template>
                </el-menu>
            </el-header>
            <router-view></router-view>
        </el-container>
        <div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            const router = this.$router.options.routes
            return {
                router: router,
                activeIndex2: '1'
            };
        },
        methods: {
            handleSelect(key, keyPath) {
                this.$router.push({ name: key})
            }
        }
    }
</script>

<style scoped lang="scss">

    p {
        width: 200px;
        height: 20px;
        overflow: hidden;
    }
    .low {
        height: 600px !important;
    }
</style>