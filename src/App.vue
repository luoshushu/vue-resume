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
    <el-button id="download" v-on:click="download" round>导出</el-button>
  </div>
</template>

<script>
import Cephalosome from "./components/Cephalosome";
import EditBox from "./components/EditBox";
import ShowBox from "./components/ShowBox";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import html2canvas from "html2canvas";
import jsPDF from "jsPDF";
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
        work: [
          {
            company: "",
            date: "",
            content: ""
          }
        ],
        // 声明教育信息
        education: [
          {
            school: "",
            time: "",
            degree: ""
          }
        ],
        //声明项目经历
        project: [
          {
            name: "",
            introduce: "",
            site: ""
          }
        ],
        //声明获奖情况数组
        award: [
          {
            name: "",
            time: ""
          }
        ],
        //声明联系方式
        contact: [
          {
            mobile: "",
            WeChat: "",
            email: ""
          }
        ]
      }
    };
  },
  methods: {
    exitButton() {
      this.previewMode = false;
      document.body.style.setProperty("height", "100%", "important");
      document.body.style.setProperty("background", "#fff");
    },
    exitX() {
      this.loginMode = false;
      this.signUpMode = false;
    },
    preview() {
      this.previewMode = true;
      this.signUpMode = false;
      this.loginMode = false;
      document.body.style.setProperty("height", "auto", "important");
      document.body.style.setProperty("background", "#F2F6FC");
    },
    login() {
      // this.previewMode = true;
      this.loginMode = true;
      this.signUpMode = false;
    },
    signUp() {
      this.signUpMode = true;
      this.loginMode = false;
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
      // window.print()
      //  ,useCORS=true
      //   html2canvas(document.body).then(function(canvas) {
      //     document.body.appendChild(canvas);
      // });
      // /*
      var opts = { useCORS: true };
      html2canvas(document.querySelector(".showBox")).then(canvas => {
        let imgData = canvas.toDataURL("image/JPEG");
        let imgWidth = 210;
        let pageHeight = 295;
        let imgHeight = canvas.height * imgWidth / canvas.width;
        let heightLeft = imgHeight;
        let doc = new jsPDF("p", "mm");
        let position = 0;
        doc.addImage(imgData, "JPEG", 0, position, imgWidth, imgHeight);
        heightLeft -= pageHeight;
        while (heightLeft > 0) {
          position = heightLeft - imgHeight;
          doc.addPage();
          doc.addImage(imgData, "JPEG", 0, position, imgWidth, imgHeight);
          heightLeft -= pageHeight;
        }
        doc.save("Resume.pdf");
      });
      // */
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
  overflow: visible;
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
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif; // height: 100vh;
  display: flex;
  flex-direction: column;
  .cephalosome {
    position: relative;
    box-shadow: 0px 0px 3px 2px hsla(0, 0, 0, 0.3);
    z-index: 1;
    overflow: hidden;
  }
  main {
    display: flex;
    flex: 1;
    // background: #fff;
    background: #f2f6fc;
    > .editBox {
      background: #fff;
      width: 36em;
      margin: 16px 8px 16px 16px;
      box-shadow: 0px 0px 1px 2px hsla(0, 0, 0, 0.1);
      border-radius: 5px;
      overflow: hidden;
    }
    > .showBox {
      background: #fff;
      flex: 1;
      margin: 16px 16px 16px 8px;
      box-shadow: 0px 0px 1px 2px hsla(0, 0, 0, 0.1);
      border-radius: 5px;
      overflow: auto;
    }
  }
}
.previewMode main {
  background: #fff;
}
.previewMode > #Cephalosome {
  display: none;
}
.previewMode #EditBox {
  display: none;
}
.previewMode #ShowBox {
  max-width: 65vw;
  margin: 16px auto !important;
}
.previewMode html,
body,
#app {
  height: none;
  overflow: visible;
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
#app > .loginMode,
#app > .signUpMode {
  display: block;
}
</style>
