<template>
  <el-container style="height:100%">
    <el-header style="padding:0;">
      <Header/>
    </el-header>
    <el-container>
      <el-aside width="200px">
        <NavMenu/>
      </el-aside>
      <el-main style="background:#F5F7FA;">
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>
<script>
import NavMenu from 'components/tools/navMenu'
import Header from 'components/header'
export default {
  components:{NavMenu,Header},
  data() {
    return {

    }
  },
  methods: {
  },
  computed: {
  },
}
</script>
