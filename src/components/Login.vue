
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
    <el-form  class="two" label-width="50px" @refer.prevent='login'>
      <el-form-item label="账号" prop="pass">
        <el-input type="texe" auto-complete="off" v-model="formData.username"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="pass">
        <el-input type="password" @keyup.enter.native="loginSubmit"  auto-complete="off" v-model="formData.password"></el-input>
      </el-form-item>
      <!-- <el-form-item> -->
      <el-button type="primary"   @click="login('refer')">登录</el-button>
      <!-- </el-form-item> -->
    </el-form>
  </div>
</template>

<script>
  import bus from '../assets/ligature'; //引入ligature.js
  import AV from "leancloud-storage"; //注意一要引入AV
  export default {
    props: ["title"],
    data() {
      return {
        formData: {
          username: '',
          password: ''
        }
      }
    },
    methods: {
      //回车登录
      loginSubmit(){
        this.login()
      },
      exitX() {
        this.$emit("exitX");
      },

      login: function() {
        if (this.formData.username === '') {
          alert('请输入账号')
        } else if (this.formData.password === '') {
          alert('请输入密码')
        } else {
          AV.User.logIn(this.formData.username, this.formData.password).then((loginedUser) => {
            console.log(loginedUser);
            bus.$emit("login", loginedUser.attributes.username)
           login.style.display = "none"
          }, function(error) {
            alert('密码错误呗')
          });
        }
      }
    }
  }
</script>

<style lang="scss">
  .login {
    text-align: center;
    padding: 32px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    >.two .el-form-item {
      text-align: right; // background: red;
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



