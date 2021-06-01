<template>
    <nav>
        <h2 style="color:#fff">MYTIGATE</h2>
        <!-- <img src="https://mytigate.de/wp-content/uploads/2019/10/Logo-MYTIGATE@2x.png" style="margin-bottom:20px"  > -->
        <el-menu :router="true" default-active=activeLink class="el-menu-vertical-demo" background-color="#183754" text-color="#fff" active-text-color="#ffd04b">
            <el-menu-item index="/">
                <v-mdi name="mdiHomeAccount"></v-mdi>
                <span slot="title">Home</span>
            </el-menu-item>
            <el-menu-item index="/dashboard">
                <v-mdi name="mdiViewDashboard"></v-mdi>
                <span slot="title">Dashbord</span>
            </el-menu-item>
    </el-menu>
    </nav>
</template>
<script>
import _ from 'lodash'
export default {
  mounted: function () {
    let match = _.chain(this.$route.matched).sortBy(n => n.path.length).last().value()
    console.log('match', match)
    this.activeLink = match.path
  },
  data () {
    return {
      activeLink: null
    }
  }
}
</script>
<style scoped>
nav {padding:20px;border-right:1px solid #183754; background: #183754; min-height: 100vh; text-align: left;}
.el-menu {width: 200px;}
</style>
