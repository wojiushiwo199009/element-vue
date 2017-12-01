<template>
  <div class="dashboard-editor-container">
    <el-row :gutter="20">
      <el-col :span="8" class="el-row" >
        <el-card class="el-card-list">
            <el-row>
              <el-col :span="12">接入机构总数：</el-col>
              <el-col :span="12">
                <router-link class="el-button el-button--text" to="/platform/organization">{{dataList.organization | numberFilter}}家</router-link>
              </el-col>
            </el-row>
        </el-card>
      </el-col>
      <el-col :span="8" class="el-row">
        <el-card class="el-card-list">
          <el-row>
            <el-col :span="12">累计投资金额：</el-col>
            <el-col :span="12">
              <router-link class="el-button el-button--text" to="/platform/money">{{dataList.money | numberFilter}}</router-link>
            </el-col>
          </el-row>
        </el-card>
      </el-col>
      <el-col :span="8" class="el-row">
        <el-card class="el-card-list">
          <el-row>
            <el-col :span="12">剩余待还本金：</el-col>
            <el-col :span="12">
              <router-link class="el-button el-button--text" to="/platform/principal">{{dataList.principal | numberFilter}}</router-link>
            </el-col>
          </el-row>
        </el-card>
      </el-col>
      <el-col :span="8" class="el-row">
        <el-card class="el-card-list">
          <el-row>
            <el-col :span="12">合同数：</el-col>
            <el-col :span="12">
              <router-link class="el-button el-button--text" to="/platform/contractNum">{{dataList.contractNum | numberFilter}}个</router-link>
            </el-col>
          </el-row>
        </el-card>
      </el-col>
      <el-col :span="8" class="el-row">
        <el-card class="el-card-list">
          <el-row>
            <el-col :span="12">逾期合同数：</el-col>
            <el-col :span="12">
              <router-link class="el-button el-button--text" to="/platform/overContractNum">{{dataList.overContractNum | numberFilter}}个</router-link>
            </el-col>
          </el-row>
        </el-card>
      </el-col>
      <el-col :span="8" class="el-row">
        <el-card>
            <el-row>
              <el-col :span="12">出借人数：</el-col>
              <el-col :span="12">
                <router-link class="el-button el-button--text" to="/platform/lendNum">{{dataList.lendNum | numberFilter}}</router-link>
              </el-col>
            </el-row>
          <el-row>
            <el-col :span="12">借款人数：</el-col>
            <el-col :span="12">
              <router-link class="el-button el-button--text" to="/platform/loanNum">{{dataList.loanNum | numberFilter}}</router-link>
            </el-col>
          </el-row>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  export default {
    name: 'platindex',
    data() {
      return {
        dataList: []
      }
    },
    filters: {
      numberFilter(number) {
        if (typeof (number) === 'string' && number.length > 5) {
          return number.slice(0, number.length - 4) + '万'
        } else {
          return number
        }
      }
    },
    created() {
      this.getList()
    },
    methods: {
      getList() {
        this.$http.get('/static/data/platform/index.json').then(response => {
          console.log(response, 'ss')
          this.dataList = response.data.data
          console.log(this.dataList)
        })
      }
    }
  }
</script>

<style>
  .dashboard-editor-container {
    margin-top: 40px;
    padding-left: 10px;
    padding-right: 10px;
  }
  .el-row {
    margin-bottom: 20px;
  }
  .el-card-list{
    height: 142px;
    line-height: 101px;
  }
  .el-row .el-row:nth-child(6) .el-card .el-card__body .el-row{
    height:40px;
    line-height: 40px;
  }
  .el-row .el-row:nth-child(6) .el-card .el-card__body .el-row:nth-child(2) {
    margin-bottom: 0;
  }
</style>
