<template>
  <el-row>
    <el-col :span="22" :offset="1">
      <div>
        <el-form :inline="true" :model="formInline" class="demo-form-inline">
          <el-form-item label="机构名称">
            <el-select v-model="formInline.organization" clearable  placeholder="请选择">
              <el-option v-for="(item, index) in organizationName" :label="item.name" :value="item.name" :key="index"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="onSubmit">查询</el-button>
          </el-form-item>
        </el-form>
      </div>
    </el-col>
    <el-row>
      <el-col :span="24">
        <el-table
          :data="tableList"
          height="250"
          border
          style="width: 100%">
          <el-table-column
            prop="id"
            label="序号"
            width="70">
          </el-table-column>
          <el-table-column
            prop="orgName"
            label="机构名称"
            width="280">
          </el-table-column>
          <el-table-column
            prop="projectNum"
            label="项目数量">
          </el-table-column>
          <el-table-column
            prop="money"
            label="累计投资总额(万)">
          </el-table-column>
          <el-table-column
            prop="principal"
            label="剩余待还本金(万)">
          </el-table-column>
          <el-table-column
            prop="contractNum"
            label="合同数">
          </el-table-column>
          <el-table-column
            prop="overContractNum"
            label="逾期合同数">
          </el-table-column>
          <el-table-column
            prop="lendNum"
            label="出借人数">
          </el-table-column>
          <el-table-column
            prop="loanNum"
            label="借款人数">
          </el-table-column>
        </el-table>
      </el-col>
    </el-row>
  </el-row>

</template>

<script>
  export default {
    data() {
      return {
        formInline: {
          organization: ''
        },
        organizationName: [],
        tableList: []
      }
    },
    created() {
      this.getMenuList()
    },
    methods: {
      getMenuList() {
        this.$http.get('/static/data/platform/organization.json').then(response => {
          console.log(response, 'ddd')
          this.organizationName = response.data.data
        })
      },
      getTableList(param) {
        this.$http.get('/static/data/platform/organization.json', { params: { orgName: param }}).then(response => {
          this.tableList = response.data.list
        })
      },
      onSubmit() {
        console.log(this.formInline, 'sub')
        this.getTableList(this.formInline.organization)
      }
    }
  }
</script>
<style>
  .el-row{
    margin-top: 20px;
  }
  .el-table{
    font-size: 13px;
  }
</style>
