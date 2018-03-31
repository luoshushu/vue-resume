<template>
  <div id="app" v-bind:class="{previewMode:previewMode}">
    <Login id="login" v-bind:class="{loginMode:loginMode}" v-on:exitX="exitX" v-on:login="login" />
    <SignUp id="signUp" v-bind:class="{signUpMode:signUpMode}" v-on:exitX="exitX" />
    <Cephalosome class="cephalosome" v-on:preview="preview" v-on:login="login" v-on:signUp="signUp" />
    <!-- 头部导航 -->
    <main v-on:click="hide">
      <EditBox v-bind:resume="resume" class="editBox" />
      <!-- 左边编辑器 -->
      <ShowBox v-bind:resume="resume" class="showBox" />
      <!-- 右边预览 -->
    </main>
    <el-button id="exitButton" v-on:click="exitButton" round>退出</el-button>
    <el-button id="download" v-on:click="download" round>下载</el-button>
  </div>
</template>

<script>
  console.log(document)
  import Cephalosome from "./components/Cephalosome";
  import EditBox from "./components/EditBox";
  import ShowBox from "./components/ShowBox";
  import Login from "./components/Login";
  import SignUp from "./components/SignUp";
  import html2canvas from 'html2canvas';
  import jsPDF from 'jsPDF';
  export default {
    data() {
      return {
        previewMode: false,
        loginMode: false,
        signUpMode: false,
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
        this.signUpMode = false
      },
      preview() {
        this.previewMode = true;
        this.signUpMode = false;
        this.loginMode = false;
      },
      login() {
        // this.previewMode = true;
        this.loginMode = true;
        this.signUpMode = false;
      },
      signUp() {
        this.signUpMode = true;
        this.loginMode = false;
        // console.log(signUp)
      },
      hideModal() {
        this.signUpMode = false;
        this.loginMode = false;
      },
      hide() {
        this.signUpMode = false;
        this.loginMode = false;
      },
      download() {
        html2canvas(document.querySelector('.showBox')).then(
          function(canvas) {
            console.log(canvas.width)
            var contentWidth = canvas.width;
            var contentHeight = canvas.height;
            //一页pdf显示html页面生成的canvas高度;
            var pageHeight = contentWidth / 595.28 * 841.89;
            //未生成pdf的html页面高度
            var leftHeight = contentHeight;
            //pdf页面偏移
            var position = 0;
            //a4纸的尺寸[595.28,841.89]，html页面生成的canvas在pdf中图片的宽高
            var imgWidth = 595.28;
            var imgHeight = 595.28 / contentWidth * contentHeight;
            var pageData = canvas.toDataURL('image/jpeg', 1.0);
            var pdf = new jsPDF('', 'pt', 'a4');
            //有两个高度需要区分，一个是html页面的实际高度，和生成pdf的页面高度(841.89)
            //当内容未超过pdf一页显示的范围，无需分页
            if (leftHeight < pageHeight) {
              pdf.addImage(pageData, 'JPEG', 20, 0, imgWidth, imgHeight);
            } else {
              while (leftHeight > 0) {
                pdf.addImage(pageData, 'JPEG', 20, position, imgWidth, imgHeight)
                leftHeight -= pageHeight;
                position -= 841.89;
                //避免添加空白页
                if (leftHeight > 0) {
                  pdf.addPage();
                }
              }
            }
            pdf.save('resume.pdf');
          }
        )
      }
    },
    components: {
      Cephalosome,
      EditBox,
      ShowBox,
      Login,
      SignUp
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
        overflow: auto;
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
  #exitButton,
  #download {
    display: none;
  }
  .previewMode #exitButton {
    display: inline-block;
    position: fixed;
    top: 16px;
    right: 16px;
  }
  .previewMode #download {
    display: inline-block;
    position: fixed;
    top: 64px;
    right: 16px;
  }
  #login,
  #signUp {
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
  #app>.loginMode,
  #app>.signUpMode {
    display: block;
  }
</style>
