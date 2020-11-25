<template>
  <el-pagination background layout="pager, jumper, total" oncontextmenu="return false" onselectstart="return false"
    :total="total"
    :page-size="size"
    :current-page="page"
    @current-change="handleCurrentChange"
    v-if="total">
  </el-pagination>
</template>

<script>
export default {
  components: {
  },
  props: {
    total: {
      type: Number,
      default: 0
    },
    size: { // 默认每页条数 20
      type: Number,
      default: 20
    }
  },
  data () {
    return {
      page: 1
    }
  },
  computed: {
  },
  methods: {
    /**
     * [handleCurrentChange 切换页码]
     * @param  {[Int]} p [页码]
     * @return {[]} []
     */
    handleCurrentChange (p) {
      this.$emit('handlePage', p)
    }
  },
  created () {
  },
  mounted () {
  }
}
</script>
