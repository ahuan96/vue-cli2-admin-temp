<template>
  <div class='register'>
    <div class="logo-box">
       <!-- <img class="logo" src="../assets/images/logo.png" alt=""> -->
        <h1>后台模板</h1>
    </div>
    <div class="register-box">
      <el-form
          :model="ruleForm"
          status-icon
          :rules="rules"
          ref="ruleForm"
          label-width="80px"
          class="demo-ruleForm"
          label-position="left"
        >
          <el-form-item label="账户" prop="account">
            <el-input
              type="text"
              v-model="ruleForm.account"
              placeholder="请输入数字或字母"
              autocomplete="off"
            ></el-input>
          </el-form-item>
          <el-form-item label="密码" prop="password">
            <el-input
              type="password"
              v-model="ruleForm.password"
              autocomplete="off"
              placeholder="请输入6位以上数字或字母"
            ></el-input>
          </el-form-item>
          <el-form-item label="确认密码" prop="password2">
            <el-input
              type="password"
              v-model="ruleForm.password2"
              autocomplete="off"
              placeholder="请再次输入密码"
            ></el-input>
          </el-form-item>
          <el-form-item label="地区" prop="city" class="area-sel">
            <el-select v-model="ruleForm.province" placeholder="省"  @change="changePrince">
              <el-option
                v-for="item in provinceData"
                :key="item.number"
                :label="item.province_name"
                :value="item.number">
              </el-option>
            </el-select>
            <el-select v-model="ruleForm.city" placeholder="市" @change="changeCity">
              <el-option
                v-for="item in cityData"
                :key="item.number"
                :label="item.city_name"
                :value="item.number">
              </el-option>
            </el-select>
            <el-select v-model="ruleForm.region" placeholder="区">
              <el-option
                v-for="item in regionData"
                :key="item.number"
                :label="item.region"
                :value="item.number">
              </el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="学校" prop="school">
            <el-input
              type="text"
              v-model="ruleForm.school"
              autocomplete="off"
              placeholder="请输入学校名称"
            ></el-input>
          </el-form-item>
          <el-form-item label="手机号" prop="mobile">
            <el-input
              type="number"
              v-model="ruleForm.mobile"
              autocomplete="off"
              placeholder="请输入手机号"
            ></el-input>
          </el-form-item>
          <el-form-item label="卡号" prop="card_num">
            <el-input
              type="text"
              v-model="ruleForm.card_num"
              autocomplete="off"
              placeholder="请输入卡号"
            ></el-input>
          </el-form-item>

        </el-form>
        <div style="text-align:center;">
           <el-button style="width:200px;" type="primary" @click="submitForm('ruleForm')"
              >注册</el-button
            >
        </div>

    </div>
    <div class="des-info">
      Copyright  2019 - 2021 南京新知艺测科技有限公司 版权所有&nbsp;苏ICP备20001623号-1
    </div>
  </div>
</template>

<script>
import citys from '../assets/js/citys.js'
export default {
  name: '',
  data () {
    return {
      ruleForm: {
        account: '',
        password: '',
        password2: '',
        province: '',
        city: '',
        region: '',
        school: '',
        mobile: null,
        card_num: ''
      },
      rules: {
        account: [{ required: true, message: '请输入账号', trigger: 'blur' }, {
          pattern: /^[0-9a-zA-Z]*$/,
          message: '请输入数字或字母',
          trigger: 'blur'
        }],
        password: [{ required: true, message: '请输入六位以上密码', trigger: 'blur' }, {
          pattern: /^[0-9a-zA-Z]{6}[0-9a-zA-Z]*$/,
          message: '请输入6位以上数字或字母',
          trigger: 'blur'
        }],
        password2: [{ required: true, message: '请输入确认密码', trigger: 'blur' }, {
          pattern: /^[0-9a-zA-Z]{6}[0-9a-zA-Z]*$/,
          message: '请输入6位以上数字或字母',
          trigger: 'blur'
        }],
        city: [{ required: true, message: '请选择地区', trigger: 'blur' }],
        school: [{ required: true, message: '请输入学校编号', trigger: 'blur' }],
        mobile: [{
          required: true,
          message: '请输入手机号',
          trigger: 'blur'
        },
        {
          pattern: /^[1][3,4,5,7,8,9][0-9]{9}$/,
          message: '手机号格式不对',
          trigger: 'blur'
        }],
        card_num: [{ required: true, message: '请输入卡号', trigger: 'blur' }]
      },
      provinceData: citys.data(),
      cityData: [],
      regionData: [],
      citys: citys.data()

    }
  },
  created () {

  },
  mounted () {
  },
  methods: {
    // 表单提交
    submitForm (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          if (this.ruleForm.password !== this.ruleForm.password2) {
            this.$message.error('密码与确认密码不一致')
            return
          }
          let data = this.ruleForm
          // 如果是北京 || 上海 || 天津 || 重庆
          if (data.province === 16842752 || data.province === 16908288 || data.province === 18153472 || data.province === 18219008) {
            data.citycode = data.city
          } else {
            if (!data.region) {
              this.$message.error('请选择地区')
              return
            }
            data.citycode = data.region
          }
          this.$post('register/account', data)
            .then(res => {
              this.$router.push('/home')
            })
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    // 改变省选择
    changePrince (val) {
      console.log(val)
      this.provinceData.forEach(item => {
        if (item.number === val) {
          this.cityData = item.regions
          return ''
        }
      })
    },
    // 改变市选择
    changeCity (val) {
      console.log(val)
      this.cityData.forEach(item => {
        if (item.number === val) {
          this.regionData = item.citys
          console.log(item)

          return ''
        }
      })
    }
  }

}
</script>

<style lang='less' scoped>
.register{
   position: fixed;
   top: 0;
   bottom: 0;
   width: 100%;
   background: #f1f1f1;
   display: flex;
   justify-content: center;
   align-items: center;
   .logo-box{
     background: #fff;
     position: absolute;
     top: 0;
     width: 100%;
     .logo{
       height: 40px;
       margin: 10px 50px;
     }
     h1{
       line-height: 60px;
       height: 60px;
        font-size: 30px;
        color: #1A4A9E;
        font-weight: bold;
        margin-left: 20px;
      }
   }
  .register-box{
    width: 600px;
    box-sizing: border-box;
    background: #fff;
    padding:70px 70px;
    border-radius: 2px;
  }
}
.area-sel /deep/ .el-form-item__content{
  display: flex;
}
.des-info{
  background: #fff;
  padding: 20px 0;
  position: fixed;
  bottom: 0px;
  width: 100%;
  text-align: center;
  color: #999999;
  font-size: 14px;
}
</style>
