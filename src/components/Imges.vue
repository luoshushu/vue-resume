<template>
  <div>
    <div class="file">
      <input type="file" @change="onFileChange" id="files" accept=".jpg, .jpeg, .png" />
      <div id="list"></div>
    </div>
  </div>
</template>

<style lang="scss">
  .file {
    max-width: 100%;
    min-width: 110px;
    height: 120px;
    position: relative;
    display: inline-block;
    background: #d0eeff;
    border-radius: 4px;
    border: 1px solid #767171;
    overflow: hidden;
    text-decoration: none;
    text-indent: 0;
    line-height: 20px;
    z-index: 10;
    #list div {
      display: none;
      >.thumb {
        height: 120px;
        overflow: hidden;
      }
    }
    #list div:last-child {
      display: block;
    }
    >input {
      position: absolute;
      font-size: 100px;
      right: 0;
      top: 0;
      opacity: 0;
    }
  }
  .file:hover {
    background: #aadffd;
    border-color: #78c3f3;
    color: #004974;
    text-decoration: none;
  }
  .file::after {
    content: "上传头像jpg/png/jpeg";
    display: block;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    width: 100%;
    z-index: -1;
  }
</style>

<script>
  import AV from "leancloud-storage"; //注意一要引入AV
  export default {
    data() {
      return {
        percentage: 0
      };
    },
    methods: {
      plan() {
        return {
          onprogress: e => {
            this.percentage = Math.ceil(e.percent);
            // console.log(Math.ceil(e.percent)); //上传后进度条
          }
        };
      },
    
      onFileChange(evt) {
        let files = evt.target.files;
        let f = files[0];
        let reader = new FileReader();
        reader.onload = (function(theFile) {
          return function(e) {
            let div = document.createElement("div");
            div.innerHTML = [
              '<img class="thumb" src="',
              e.target.result,
              '" title="',
              escape(theFile.name),
              '"/>'
            ].join("");
            document.getElementById("list").insertBefore(div, null);
          };
        })(f);
        reader.readAsDataURL(f);
        //上传到服务器
        // /*
        let imgLength = evt.target.files.length;
        if (imgLength > 0) {
          var localFile = evt.target.files[0];
          if (
            localFile.type === "image/png" ||
            localFile.type === "image/jpg" ||
            localFile.type === "image/jpeg"
          ) {
            let name = localFile.name;
            let file = new AV.File(name, localFile);
            file.save(this.plan()).then(
              file => {
                // 文件保存成功
                console.log(file);
              },
              function(error) {
                // 异常处理
                console.error(error);
              }
            );
          } else {
            alert("格式错误了！请用jpg/png/jepg格式上传");
          }
        }
        // */
      }
    }
  };
</script>


