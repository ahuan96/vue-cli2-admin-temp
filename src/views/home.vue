<template>
  <div class='main'>
   <div class="list">
     <div class="item" @click="toAddQustion">
     <div class="img-box"><img src="../assets/images/shijuan.png" alt=""></div>
     <div class="tip-box" >
       <h3>新增题目</h3>
       <p>新增音乐、美术题目</p>
     </div>
   </div>
   <div class="item" @click="toAddPaper">
     <div class="img-box"><img src="../assets/images/timu.png" alt=""></div>
     <div class="tip-box" >
       <h3>创建试卷</h3>
       <p>新增音乐、美术试卷</p>
     </div>
   </div>
   </div>
  </div>
</template>

<script>
export default {
  name: '',
  data () {
    return {
      addQuestionVisible: false,
      addQuestionForm: {
        type: '',
        id: ''
      }
    }
  },
  created () {

  },
  mounted () {

  },
  methods: {
    // 去制题
    toAddQustion () {
      // this.$router.push('addQuestion')
    },
    // 去制卷
    toAddPaper () {
      // this.$router.push('addPaper')
    }
  }

}
</script>

<style lang='less' scoped>
.list{
  display: flex;
  .item{
    border: 1px solid #ccc;
    padding: 20px;
    display: flex;
    cursor: pointer;
    border-radius: 5px;
    margin-right: 20px;
    background: #fff;
    .img-box{
      background: #FC9E6D;
      border-radius: 50%;
      width: 80px;
      height: 80px;
      display: flex;
      justify-content: center;
      align-items: center;
      img{
        width: 60%;
        height: 60%;
      }

    }
    .tip-box{
      display: flex;
      flex-direction: column;
      justify-content: center;
      margin-left: 10px;
    }
    h3{
        font-size: 16px;
        font-weight: bold;
        margin-bottom: 15px;
      }
      p{
        font-size: 14px;
        color: #666;
      }
  }

    .item:hover{
      border: 1px solid #FC9E6D;
      .img-box{
        transition: all 0.4s ease-in-out;
        transform: rotate(360deg);
      }
    }
}
</style>

