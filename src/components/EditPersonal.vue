<!-- 个人信息 -->
<template>
  <div>
    <h2>个人信息</h2>
    <el-form>
      <el-form-item label="姓名">
        <el-input v-model="profile.name" placeholder="请输入姓名"></el-input>
      </el-form-item>
      <el-form-item label="性别">
        <el-input v-model="profile.sex" placeholder="请输入性别"></el-input>
      </el-form-item>
      <el-form-item label="年龄">
        <el-input v-model="profile.bitrh" placeholder="请输入年龄"></el-input>
      </el-form-item>
      <el-form-item label="期望薪资">
        <el-input v-model="profile.pay" placeholder="请输入薪资"></el-input>
      </el-form-item>
      <el-form-item label="期望城市">
        <el-input v-model="profile.city" placeholder="请输入城市"></el-input>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
  // import Imges from './Imges.vue'
  export default {
    props: ['profile'],
    // components: {
    //   Imges
    // }
  }
</script>



