<template name="fade">
  <div class="signUp">
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
    <el-form class="two" label-width="50px" @refer.prevent='signUp'>
      <el-form-item label="账号" prop="pass">
        <el-input type="texe" auto-complete="off" v-model="formData.username"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="pass">
        <el-input type="password" @keyup.enter.native="loginSubmit" auto-complete="off" v-model="formData.password"></el-input>
      </el-form-item>
      <!-- <el-form-item> -->
      <el-button type="primary" @click="signUp('refer')">注册</el-button>
      <!-- </el-form-item> -->
    </el-form>
  </div>
</template>

<script>
  // import bus from '../assets/ligature'; //引入ligature.js
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
      loginSubmit() {
        this.signUp()
      },
      exitX() {
        this.$emit("exitX");
      },
      open3() {
        this.$notify({
          title: '注册成功',
          message: '去登录吧',
          type: 'success'
        });
      },
      open4() {
        this.$notify({
          title: '警告',
          message: '请输入账号或密码',
          type: 'warning'
        });
      },
      open6() {
        this.$notify.error({
          title: '注册失败',
          message: '请重新注册'
        });
      },
      signUp: function() {
        if (this.formData.username === '') {
          this. open4()
        } else if (this.formData.password === '') {
          this. open4()
        } else {
          let user = new AV.User();
          user.setUsername(this.formData.username);
          user.setPassword(this.formData.password);
          user.signUp().then((loginedUser) => {
          //  bus.$emit("login", loginedUser.attributes.username)
            console.log(loginedUser);
            this.open3()
            signUp.style.display = "none"
          }, (error) => {
            this.open6()
          });
        }
      }
    }
  };
</script>

<style lang="scss">
  .signUp {
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
      color: #409EFF;
      p {
        padding: 8px 0 32px 8px;
        font-size: 16px;
      }
      >span>.icon {
        width: 1em;
        height: 1em;
        vertical-align: -0.15em;
        fill: #409EFF;
        overflow: hidden;
      }
    }
  }
</style>



