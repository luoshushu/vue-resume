<template>
  <div>
    <div class="file">
      <input type="file" @change="onFileChange" />
      <p id="pp">{{percentage + '%'}}</p>
      <img v-bind:src="imgUrl" alt="上传120 x 130图片"  >
    </div>
  </div>
</template>

<style lang="scss">
.file {

  // width: 120px;
  height: 130px;
  position: relative;
  display: inline-block;
  background: #d0eeff;
  border: 1px solid #99d3f5;
  border-radius: 4px; // padding: 4px 12px;
  overflow: hidden;
  color: #1e88c7;
  text-decoration: none;
  text-indent: 0;
  line-height: 20px;
  > input {
    position: absolute;
    font-size: 100px;
    right: 0;
    top: 0;
    opacity: 0;
  }
  > img {
    width: 120px;
    height: 130px;
    vertical-align: middle;
  }
  > p {
    text-align: center;
  }
}
.file:hover {
  background: #aadffd;
  border-color: #78c3f3;
  color: #004974;
  text-decoration: none;
}
</style>

<script>
import AV from "leancloud-storage"; //注意一要引入AV
export default {
  data() {
    return {
      percentage: 0,
      imgUrl: "../src/assets/picture.png"
    };
  },
  methods: {
    plan() {
      return {
        onprogress: e => {
          this.percentage = Math.ceil(e.percent);

          console.log(Math.ceil(e.percent)); //上传后进度条
        }
      };
    },
    okImg(file) {
      this.imgUrl = file.url()
      console.log(file.url());
      // this.imgUrl = file.thumbnailURL(120, 600);
      // console.log(this.imgUrl);
    },
    onFileChange(e) {
      let imgLength = e.target.files.length;
      if (imgLength > 0) {
        var localFile = e.target.files[0];
        if (localFile.type === "image/png" || localFile.type === "image/jpg") {
          let name = localFile.name;
          let file = new AV.File(name, localFile);
          file.save(this.plan()).then(file => {
              // 文件保存成功
              document.getElementById("pp").style.display = "none";

              this.okImg(file);
            },
            function(error) {
              // 异常处理
              console.error(error);
            }
          );
        } else {
         alert("格式错误了！请用jpg/png格式上传");
        }
      }
    }
  }
};
</script>


