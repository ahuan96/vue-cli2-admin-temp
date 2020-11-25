<template>
  <div>
    <div class="search-box">
    <el-form :inline="true" :model="searchData" class="demo-form-inline">
      <el-form-item label="用户名">
        <el-input v-model="searchData.username" placeholder="用户名"></el-input>
      </el-form-item>
      <el-form-item label="性别">
        <el-select v-model="searchData.sex" placeholder="性别">
          <el-option label="男" value="1"></el-option>
          <el-option label="女" value="0"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">查询</el-button>
        <el-button type="primary" @click="add">新增</el-button>
      </el-form-item>
    </el-form>
  </div>
  <div class="table-box">
      <el-table
      :data="tableData"
      class="tableLimit"
      style="width: 100%">
      <el-table-column
      type="selection"
      width="55">
    </el-table-column>
      <el-table-column
      type="index"
      width="50">
    </el-table-column>
      <el-table-column
        prop="username"
        label="用户名"
        width="180">
      </el-table-column>
      <el-table-column
        prop="sex"
        label="性别">
        <template slot-scope="scope">
            <span>{{scope.row.sex == 1?'男':'女'}}</span>
        </template>
      </el-table-column>
      <el-table-column
        prop="age"
        label="年龄"
        >
      </el-table-column>
      <el-table-column
        prop="work"
        label="职业">
      </el-table-column>
      <el-table-column
        prop="phone"
        label="联系方式">
      </el-table-column>
      <el-table-column
        prop="address"
        label="地址">
      </el-table-column>
      <el-table-column
        prop="address"
        width="250"
        label="操作">
        <template slot-scope="scope">
            <el-button size="small" type="primary" @click="view(scope.row)" plain>预览</el-button>
            <el-button size="small" type="primary" @click="edit(scope.row.id)" plain>编辑</el-button>
            <el-button size="small" type="warning" @click="del(scope.row.id)" plain>删除</el-button>
      </template>
      </el-table-column>
    </el-table>

    <!-- 全局分页组件 -->
    <YsMyPage :total="20" :size="10" />
    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        total:20,
        size:10,
        searchData: {
          username: '',
          sex: ''
        },
        tableData:[
          {username:'王一',age:'20',sex:1,phone:'18266668888','work':'作家',address:'南京市江宁区'},
          {username:'王二',age:'18',sex:0,phone:'18266668888','work':'作家',address:'南京市江宁区'},
          {username:'王三',age:'35',sex:1,phone:'18266668888','work':'作家',address:'南京市江宁区'},
          {username:'王四',age:'14',sex:1,phone:'18266668888','work':'作家',address:'南京市江宁区'},
          {username:'王五',age:'33',sex:0,phone:'18266668888','work':'作家',address:'南京市江宁区'},
        ]
      }
    },
    methods: {
      onSubmit() {
        console.log('submit!');
      },
      add(){
        this.$router.push('listAdd')
      },
      view(){
        this.$router.push('listAdd')
      },
      edit(){
        this.$router.push('listAdd')
      },
      del(){
        this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.$message({
            type: 'success',
            message: '删除成功!'
          });
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          });
        });
      }
    }
  }
</script>
