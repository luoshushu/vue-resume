<template name="fade">
  <div class="login">
    <div class="logo">
      <span>
        <h2>RESUME</h2>
        <p>高效-便捷-实用</p>
     </span>
      <span>
        <svg class="icon" v-on:click="exitX">
          <use xlink:href="#icon-fon8"></use>
        </svg>
      </span>
    </div>
    <el-form class="two" label-width="50px">
      <el-form-item label="账号" prop="pass">
        <el-input type="texe" auto-complete="off"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="pass">
        <el-input type="password" auto-complete="off"></el-input>
        <el-button type="text">忘记密码?</el-button>
      </el-form-item>
      <el-button round>登录</el-button>
      <el-button round>注册</el-button>
    </el-form>
  </div>
</template>

<script>
  export default {
    props: ["title"],
    methods: {
      exitX() {
        this.$emit("exitX");
      }
    }
  };
</script>

<style lang="scss">
  .login {
    text-align: center;
    padding: 32px;
    display: flex;
    justify-content: center;
    flex-direction: column;
      
    >.two .el-form-item{
        text-align: right;
        // background: red;
      }    
    
    >.logo {
      display: flex;
      justify-content: space-between; // align-items: center;
      font-family: Century Gothic;
      font-size: 24px;
      font-weight: bold;
      color: #3fa5b6;
      p {
        padding: 8px 0 32px 8px;
        font-size: 16px;
      }
      >span>.icon {
        width: 1em;
        height: 1em;
        vertical-align: -0.15em;
        fill: #3fa5b6;
        overflow: hidden;
      }
    }
  }
 
</style>



