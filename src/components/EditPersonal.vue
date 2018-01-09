<!-- 个人信息 -->
<template>
  <div>
    <h2>个人信息</h2>
    <el-form>
      <el-form-item label="姓名">
        <el-input v-model="profile.name" placeholder="请输入姓名"></el-input>
      </el-form-item>
      <el-form-item label="城市">
        <el-input v-model="profile.city" placeholder="请输入城市"></el-input>
      </el-form-item>
      <el-form-item label="出生年月">
        <el-input v-model="profile.bitrh" placeholder="请输入出生年月"></el-input>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
  export default {
    props: ['profile']
  };
</script>



