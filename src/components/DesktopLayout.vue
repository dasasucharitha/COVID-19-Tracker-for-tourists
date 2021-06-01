<template>
  <div id="app" class="main-wrapper">
        <left-menu-bar/>
        <el-main>
          <header-bar/>
          <router-view></router-view>
        </el-main>
  </div>
</template>

<script>
import LeftMenuBarVue from '../components/common/LeftMenuBar.vue'
import HeaderVue from '../components/common/Header.vue'
export default {
  components: {
    'left-menu-bar': LeftMenuBarVue,
    'header-bar': HeaderVue
  }
}
</script>
<style scoped>
.main-wrapper {display: flex; flex-direction: row;}
</style>
