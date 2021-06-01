<template>
    <el-header style="height: auto">
        <el-row :gutter="24" class="d-flex-center">
            <el-col :xs="24" :sm="24" :md="23" :lg="23" class="text-right">
                <v-mdi class="mr20" name="mdiBell" size="30" fill="#183754"></v-mdi>
                <v-mdi name="mdiAccount" size="30" fill="#183754"></v-mdi>
                <span class="text-right">demo@mytigate.com</span>
            </el-col>
        </el-row>
    </el-header>
</template>
<style scoped>
.el-header {padding: 10px 30px;box-shadow:0 1px 0 #eeeff3;background:#FFF;}.text-right { text-align: right}
.text-right { text-align: right; margin-bottom: 20px; color: #183754;}
.mr20 {margin-right: 20px;}
</style>
