<template>
    <el-upload
      class="upload-demo"
      :action="this.$url + '/question/do_upload'"
      :before-upload="beforeUpload"
      :data="{ 'userfile': 's.png' }"
      :show-file-list="false"
      :on-progress="uploadVideoProcess"
      :on-success="handleSucess">
      <el-button size="small" type="primary">{{title}}</el-button>
      <el-progress v-if="percentage>0" :percentage="percentage" status="success"></el-progress>
      <!-- <el-button @click.stop="addFileVisible = true" style="margin-left:10px;" size="small" type="primary">插入题目图片/音频/视频URL</el-button> -->
    </el-upload>
</template>

<script>
export default {
  name: '',
  props: ['title', 'target', 'type'], // 标题  上传类型数组  指定可上传文件类型
  data () {
    return {
      action: '/question/do_upload',
      percentage: 0 // 上传进度
    }
  },
  created () {

  },
  mounted () {
    if (this.$url.indexOf('localhost') > -1) {
      this.action = '/proxy/question/do_upload'
    }
  },
  methods: {
    beforeUpload (file) {
      // 上传类型模板
      let typeTemp = {
        'img': ['jpg', 'png'],
        'video': ['mp4'],
        'audio': ['mp3']
      }

      //  允许上传类型数组
      let allowType = []
      if (this.type && this.type.length > 0) {
        this.type.forEach(item => {
          allowType = allowType.concat(typeTemp[item])
        })
      }
      // 指定可上传类型
      if (this.target && this.target.length > 0) {
        this.target.forEach(item => {
          allowType.push(item)
        })
      }
      let fileType = this.$tools.getFileType(file.name)
      if (!allowType.includes(fileType)) {
        let txt = '上传文件类型错误'
        if (this.target && this.target.length) {
          txt += ',仅支持' + allowType.join(',') + '格式'
        }
        this.$message.error(txt)
        return false
      }
    },
    // 上传成功回调
    handleSucess (response, file, fileList) {
      this.$emit('callBack', response.data.img_path)
    },
    // 上传进度条显示
    uploadVideoProcess (event, file, fileList) {
      let _this = this
      this.percentage = parseInt(event.percent)
      // console.log(event)
      // console.log(99, this.percentage)
      // Number(event.percent.toFixed(0))
      if (this.percentage === 100) {
        this.$message.success('文件上传成功')
        setTimeout(() => {
          _this.percentage = 0
          // console.log(98, _this.percentage)
        }, 500)
      }
    }
  }

}
</script>

<style lang='less' scoped>

</style>
