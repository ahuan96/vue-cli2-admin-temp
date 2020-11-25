<template>
  <div class='videoPlay'>
    <el-dialog title="视频播放" :visible.sync="showLegend"  :append-to-body="true" width="610px">
      <video style="width:570px;height:370px;"  controlslist="nodownload nofullscreen" autoplay controls>
        <source :src="videoUrl">
      </video>
  </el-dialog>
  </div>
</template>

<script>
export default {
  name: '',
  data () {
    return {
      showLegend: false,
      videoUrl: ''
    }
  },
  created () {

  },
  mounted () {

  },
  methods: {
    init (url) {
      this.showLegend = true
      this.videoUrl = url
      console.log(this.videoUrl)
    }
  }

}
</script>

<style lang='less' scoped>

</style>
<style lang="">

</style>
