<template>
  <div id="app" v-bind:class="{previewMode:previewMode}">
    <Login id="login" v-bind:class="{loginMode:loginMode}" v-on:exitX="exitX" />
    <Cephalosome class="cephalosome" v-on:preview="preview" v-on:login="login" />
    <!-- 头部导航 -->
    <main>
      <EditBox v-bind:resume="resume" class="editBox" />
      <!-- 左边编辑器 -->
      <ShowBox v-bind:resume="resume" class="showBox" />
      <!-- 右边预览 -->
    </main>
    <el-button id="exitButton" v-on:click="exitButton" round>退出预览</el-button>
  </div>
</template>


<script>
  import Cephalosome from "./components/Cephalosome";
  import EditBox from "./components/EditBox";
  import ShowBox from "./components/ShowBox";
  import Login from "./components/Login";
  export default {
    data() {
      return {
        previewMode: false,
        loginMode: false,
        resume: {
          // 声明数据
          profile: {
            name: "",
            city: "",
            bitrh: ""
          },
          //声明工作经历数据
          work: [{
            company: "",
            date: "",
            content: ""
          }],
          // 声明教育信息
          education: [{
            school: "",
            time: "",
            degree: ""
          }],
          //声明项目经历
          project: [{
            name: "",
            introduce: "",
            site: ""
          }],
          //声明获奖情况数组
          award: [{
            name: "",
            time: ""
          }],
          //声明联系方式
          contact: [{
            mobile: "",
            WeChat: "",
            email: ""
          }]
        }
      };
    },
    methods: {
      exitButton() {
        this.previewMode = false;
      },
      exitX() {
        this.loginMode = false;
      },
      preview() {
        this.previewMode = true;
      },
      login() {
        // this.previewMode = true;
        this.loginMode = true;
      }
    },
    components: {
      Cephalosome,
      EditBox,
      ShowBox,
      Login
    }
  };
</script>

<style lang="scss">
  html,
  body,
  #app {
    height: 100%;
    overflow: hidden;
    position: relative;
  }
  .icon {
    width: 2em;
    height: 2em;
    vertical-align: -0.15em;
    fill: #fff;
    overflow: hidden;
  }
  #app {
    font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
    /* height: 100vh; */
    display: flex;
    flex-direction: column;
    .cephalosome {
      position: relative;
      box-shadow: 0px 0px 3px 2px hsla(0, 0, 0, 0.3);
      z-index: 1; // background: #1682fb;
      overflow: hidden;
    }
    main {
      display: flex;
      flex: 1;
      background: #f2f6fc;
      >.editBox {
        background: #fff;
        width: 36em;
        margin: 16px 8px 16px 16px;
        box-shadow: 0px 0px 1px 2px hsla(0, 0, 0, 0.1);
        border-radius: 5px;
        overflow: hidden;
      }
      >.showBox {
        background: #fff;
        flex: 1;
        margin: 16px 16px 16px 8px;
        box-shadow: 0px 0px 1px 2px hsla(0, 0, 0, 0.1);
        border-radius: 5px;
        overflow: hidden;
      }
    }
  }
  .previewMode>#Cephalosome {
    display: none;
  }
  .previewMode #EditBox {
    display: none;
  }
  .previewMode #ShowBox {
    max-width: 65vw;
    margin: 16px auto !important;
  }
  #exitButton {
    display: none;
  }
  .previewMode #exitButton {
    display: inline-block;
    position: fixed;
    top: 16px;
    right: 16px;
  }
  #login {
    display: none;
    background: #fff;
    border-radius: 16px;
    box-shadow: 0px 0px 2px 2px hsla(0, 0, 0, 0.3);
    width: 400px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 2;
  }
  #app>.loginMode {
    display: block;
  }
</style>
