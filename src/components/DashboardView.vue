<template>
    <div>
        <div>
            <div class="small">
                <small>Dashboard  ></small>
            </div>
            <!-- <el-input  v-model="input"><i slot="prefix" class="el-input__icon el-icon-search"></i></el-input> -->
            <el-select
              class="inline-input"
              v-model="input"
              filterable
              remote
              reserve-keyword
              placeholder="Please enter a keyword"
              :loading="loading">
              <i slot="prefix" class="el-input__icon el-icon-search"></i>
              <el-option
                v-for="item in links"
                :key="item"
                :label="item"
                :value="item">
              </el-option>
            </el-select>
            <el-button @click="search(input)">Search</el-button>
            <el-button @click="reset">Reset</el-button>
            <div>
              <small v-if="vflag" style="color: red">Enter country name</small>
            </div>
        </div>
        <div style="margin: 60px" v-if="resData.total">
            <el-card>
                <h2>Cases in {{input}}</h2><h3>(Updated Cases: {{resData.updated}})</h3>
                <el-row :gutter="20" style="text-align: left;">
                    <el-col :span="6">Cases : {{resData.total.cases}}</el-col>
                    <el-col :span="6">Todays Cases : {{resData.total.todayCases}}</el-col>
                    <el-col :span="6">Todays Active Cases : {{resData.total.todayActive}}</el-col>
                    <el-col :span="6">Deaths : {{resData.total.deaths}}</el-col>
                    <el-col :span="6">Today Deaths : {{resData.total.todayDeaths}}</el-col>
                    <el-col :span="6">Recovered : {{resData.total.recovered}}</el-col>
                    <el-col :span="6">Today Recovered : {{resData.total.todayRecovered}}</el-col>
                    <el-col :span="6">Active Cases : {{resData.total.active}}</el-col>
                </el-row>
            </el-card>
        </div>
        <div style="margin: 60px" v-else>
            <el-card>
                <h2>Cases all Over World</h2><h3>(Updated Cases: {{allCases.updated}})</h3>
                <el-row :gutter="20" style="text-align: left;">
                    <el-col :span="6">Cases : {{allCases.cases}}</el-col>
                    <el-col :span="6">Todays Cases : {{allCases.todayCases}}</el-col>
                    <el-col :span="6">Deaths : {{allCases.deaths}}</el-col>
                    <el-col :span="6">Today Deaths : {{allCases.todayDeaths}}</el-col>
                    <el-col :span="6">Recovered : {{allCases.recovered}}</el-col>
                    <el-col :span="6">Today Recovered : {{allCases.todayRecovered}}</el-col>
                    <el-col :span="6">Active : {{allCases.active}}</el-col>
                    <el-col :span="6">Critical : {{allCases.critical}}</el-col>
                    <el-col :span="6">Cases Per One Million : {{allCases.casesPerOneMillion}}</el-col>
                    <el-col :span="6">Deaths Per One Million : {{allCases.deathsPerOneMillion}}</el-col>
                    <el-col :span="6">Tests : {{allCases.tests}}</el-col>
                    <el-col :span="6">Tests Per One Million : {{allCases.testsPerOneMillion}}</el-col>
                    <el-col :span="6">Population : {{allCases.population}}</el-col>
                    <el-col :span="6">One Case Per People : {{allCases.oneCasePerPeople}}</el-col>
                    <el-col :span="6">One Death Per People : {{allCases.oneDeathPerPeople}}</el-col>
                    <el-col :span="6">One Test Per People : {{allCases.oneTestPerPeople}}</el-col>
                    <el-col :span="6">Active Per One Million : {{allCases.activePerOneMillion}}</el-col>
                    <el-col :span="6">Recovered Per One Million : {{allCases.recoveredPerOneMillion}}</el-col>
                    <el-col :span="6">Critical Per One Million : {{allCases.criticalPerOneMillion}}</el-col>
                    <el-col :span="6">Affected Countries : {{allCases.affectedCountries}}</el-col>
                </el-row>
            </el-card>
        </div>
    </div>
</template>
<script>
import axios from 'axios'
export default {
  data () {
    return {
      resData: [],
      input: '',
      allCases: {},
      links: [],
      list: [],
      loading: false,
      vflag: false,
      url: 'https://disease.sh'
    }
  },
  async created () {
    this.casesAllOverWOrld()
    this.getCountries()
  },
  methods: {
    async casesAllOverWOrld () {
      axios.get('https://disease.sh/v3/covid-19/all').then((data) => {
        console.log('casesAllOverWOrld', data.data)
        this.allCases = data.data
      })
    },
    async getCountries () {
      axios.get('https://disease.sh/v3/covid-19/gov/').then((data) => {
        console.log('getCountries', data.data)
        this.links = data.data
      })
    },
    async search (v) {
      console.log('vvv', v)
      if (v) {
        this.vflag = false
        axios.get('https://disease.sh/v3/covid-19/gov/india').then((data) => {
          console.log('country res', data.data)
          this.resData = data.data
          // this.input = ''
        })
      } else {
        this.vflag = true
      }
    },
    reset () {
      this.input = ''
      this.vflag = false
      this.resData = {}
      this.casesAllOverWOrld()
    }
  }
}
</script>
<style scoped>
.el-button {background-color: #407e8d; color: #FFF;}
.inline-input {width: 88%;}
.small {color: lightgray; text-align: left; margin: 10px 0px 20px;}
.el-col {margin: 10px 0px 10px;}
</style>
