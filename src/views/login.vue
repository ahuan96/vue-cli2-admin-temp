<template>
  <div class="login">
    <div class="login-content-wrap">
      <div class="login-content">
       <div>
          <!-- <img class="logo" src="../assets/images/logo.png" alt=""> -->
          <h1>后台模板</h1>
       </div>
        <el-form
          :model="ruleForm"
          status-icon
          :rules="rules"
          ref="ruleForm"
          label-width=""
          class="demo-ruleForm"
        >
          <el-form-item label="" prop="account">
            <el-input
              type="text"
              v-model="ruleForm.account"
              autocomplete="off"
              placeholder="账号"
            ></el-input>
          </el-form-item>
          <el-form-item label="" prop="password">
            <el-input
              type="password"
              v-model="ruleForm.password"
              autocomplete="off"
              placeholder="密码"
            ></el-input>
          </el-form-item>

          <el-form-item style="text-aglign:center;">
            <el-button style="width:100%;" type="primary" @click="submitForm('ruleForm')"
              >登录</el-button
            >
            <el-button style="width:100%;margin:15px 0;" @click="toRegister" type="primary" plain>注册账号</el-button>
            <div style="text-align:center;">
              <el-link @click="downClient">点击下载客户端></el-link>
            </div>

          </el-form-item>
        </el-form>
      </div>
    </div>
    <div class="des-info">
      Copyright  2019 - 2021 南京新知艺测科技有限公司 版权所有&nbsp;苏ICP备20001623号-1
    </div>
  </div>
</template>

<script>
export default {
  name: '',
  data () {
    return {
      ruleForm: {
        account: '',
        password: ''
      },
      rules: {
        account: [{ required: true, message: '请输入账号', trigger: 'blur' }],
        password: [{ required: true, message: '请输入密码', trigger: 'blur' }]
      }
    }
  },
  created () {},
  mounted () {},
  methods: {

    // 表单提交
    submitForm (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.$router.push('/home')
          // this.$post('login/verify', this.ruleForm)
          //   .then(res => {
          //     this.$router.push('/main')
          //   })
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    // 去注册
    toRegister () {
      this.$router.push('/register')
    },
    // 下载客户端
    downClient () {
    }
  }
}
</script>

<style lang="less" scoped>
.login {
  position: fixed;
  top: 0;
  bottom: 0;
  width: 100%;
  background: url(../../static/bgx1.png) no-repeat 100% 100%;
  background-size: 100% 100%;
  .login-content-wrap {
    position: absolute;
    width: 520px;
    height: 100%;
    min-height: 580px;
    // background: rgba(255, 255, 255, 0.4);
    top: 0;
    right: 10%;
    .login-content {
      h1{
        font-size: 50px;
        color: #1A4A9E;
        font-weight: bold;
        text-align: center;
        margin-bottom: 40px;
      }
      display: flex;
      flex-direction: column;
      .logo{
        width: 200px;
        margin-bottom: 30px;
      }
      width: 380px;
      height: 590px;
      margin: auto;
      justify-content: center;
      background: rgba(255, 255, 255, 1);
      position: absolute;
      left: 0;
      right: 0;
      top: 50%;
      font-size: 12px;
      transform: translateY(-50%);
      display: flex;
      align-items: center;
    }
  }
}
.des-info{
  position: fixed;
  bottom: 30px;
  width: 100%;
  text-align: center;
  color: #fff;
  font-size: 14px;
}
.login /deep/ .el-form-item__content{
  width:250px;
}
</style>
