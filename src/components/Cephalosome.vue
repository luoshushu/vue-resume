<template>
  <div id="Cephalosome">
    <div class="logo">
      RESUME
    </div>
    <div class="actions">
      <el-button round v-on:click="signUp">{{msg}}</el-button>
      <el-button round v-on:click="login">{{exit}}</el-button>
      <el-button round v-on:click="preview">预览/导出</el-button>
    </div>
  </div>
</template>

<script>
  import bus from "../assets/ligature";
  import AV from "leancloud-storage"; //注意一要引入AV
  export default {
    data() {
      return {
        msg: "免费注册",
        exit: "立即登录",
        currentUser: null,
      }
    },
    mounted() {
      //监听A组件中的login，并接受数据
      bus.$on("login", (msg) => {
        if (this.msg = '你好！' + msg) {
          this.exit = '退出'
        }
      });
    },
    methods: {
      preview() {
        this.$emit("preview");
      },
      login() {
        this.$emit("login");
        if (this.exit === "退出") {
          AV.User.logOut()
          this.currentUser = null
          window.location.reload()
        }
      },
      signUp() {
        this.$emit("signUp")
      },
    }
  };
</script>

<style lang="scss">
  #Cephalosome {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 24px;
    font-size: 20px;
    >.logo {
      font-family: Century Gothic;
      font-size: 40px;
      font-weight: bold;
      color: #409EFF; // text-shadow: 1px -1px 0 #46A0FC, -1px 2px 1px #737272, -2px 4px 1px #767474, -3px 6px 1px #787777, -4px 8px 1px #7b7a7a;
    }
  }
</style>






