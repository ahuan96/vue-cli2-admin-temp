<template>
  <div class='navMenu'>
<el-menu
      class="el-menu-vertical-demo"
      :router='true'
      :default-active="activerouter"
      background-color="#27274A"
       text-color="#fff"
       width='160px'
      >
      <el-menu-item index="/home">
        <i class="el-icon-menu"></i>
        <span slot="title">首页</span>
      </el-menu-item>
      <el-menu-item index="/list">
        <i class="el-icon-edit-outline"></i>
        <span slot="title">列表</span>
      </el-menu-item>
      <el-menu-item index="/admin" v-if="userinfo.level == 1 && userinfo.account == 'admin'">
        <i class="el-icon-document-copy"></i>
        <span slot="title">管理员</span>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script>
import {mapState} from 'vuex'

export default {
  name: '',
  data () {
    return {
      activerouter: ''
    }
  },
  created () {

  },
  computed: {
    ...mapState([
      'userinfo'
    ])
  },
  mounted () {
    // 获取地址栏中的路由，设置elementui中的导航栏选中状态
    this.activerouter = this.$route.path
  },
  methods: {
  },
  watch: {
    '$route': function () {
      // 监听路由 自动激活当前导航
      this.activerouter = this.$route.path
    }
  }

}
</script>

<style lang='less' scoped>
.navMenu{
  height: 100%;
  /deep/ .el-menu{
    height: 100%;
    .el-menu-item{
      border-left: 4px solid #27274A;
    }
    .is-active{
      border-left: 4px solid #1a8dff;
    }
  }

}
</style>
