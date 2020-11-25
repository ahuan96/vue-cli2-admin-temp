<template>
  <div class="header">
    <!-- <img class="logo" src="../assets/images/logo.png" alt="" /> -->
    <h1>后台模板</h1>
    <div class="right-sel">
      <el-dropdown trigger="click" @command="handleCommand">
        <span class="el-dropdown-link">
          <i class="el-icon-user-solid">{{userinfo.account}}</i>
            <i style="font-size:20px;" class="el-icon-arrow-down el-icon--right"
          ></i>
        </span>
        <el-dropdown-menu slot="dropdown" >
          <!-- <el-dropdown-item><i class="el-icon-edit">
            </i> 个人信息
            </el-dropdown-item > -->
          <el-dropdown-item command="exit">
            <i class="el-icon-circle-close" ></i> 退出登录</el-dropdown-item
          >
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
export default {
  name: '',
  data () {
    return {}
  },
  computed: {
    ...mapState([
      'userinfo'
    ])
  },
  created () {},
  mounted () {
  },
  methods: {
    ...mapMutations([
      'setUser'
    ]),
    // 退出
    quitBtn () {
      this.$delcookie('test_edu_sid')
      this.$delcookie('release_edu_sid')
      // 删除vuex存储的用户信息
      this.setUser('')
      this.$router.push('/login')
    },
    handleCommand (command) {
      if (command === 'exit') {
        this.quitBtn()
      }
    }
  }
}
</script>

<style lang="less" scoped>
.header {
  padding: 0 15px;
  line-height: 60px;
  height: 58px;
  // border-bottom: 1px solid #ccc;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-shadow: 0 1px 4px 0 rgba(58,62,81,0.20);
  .logo {
    height: 60%;
  }
  h1{
       line-height: 60px;
       height: 60px;
        font-size: 26px;
        color: #1A4A9E;
        font-weight: bold;
        margin-left: 20px;
      }
  .right-sel {
    float: right;
    margin-right: 60px;
  }
}

.right-sel /deep/ .el-dropdown-link {
  cursor: pointer;
  color: #409eff;
}
</style>
