<template>
  <div>
    <div class="file">
      <p>上传图片</p>
      <input type="file" @change="onFileChange" />
      <p>{{percentage + '%'}}</p>
      <img v-bind:src="imgUrl" >
    </div>
  </div>
</template>

<style lang="scss">
  .file {
    width: 125px;
    height: 120px;
    position: relative;
    display: inline-block;
    background: #D0EEFF;
    border: 1px solid #99D3F5;
    border-radius: 4px;
    padding: 4px 12px;
    overflow: hidden;
    color: #1E88C7;
    text-decoration: none;
    text-indent: 0;
    line-height: 20px;
    >input {
      position: absolute;
      font-size: 100px;
      right: 0;
      top: 0;
      opacity: 0;
    }
    >p {
      text-align: center;
    } 
  
  }
  .file:hover {
    background: #AADFFD;
    border-color: #78C3F3;
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
        imgUrl: ''
      }
    },
    methods: {
      plan() {
        return {
          onprogress: e => {
            this.percentage = Math.ceil(e.percent)
            console.log(Math.ceil(e.percent)); //上传后进度条
          }
        };
      },
      okImg(file) {
        this.imgUrl = file.thumbnailURL(100, 200);
        console.log(this.imgUrl);
      },
      onFileChange(e) {
        let imgLength = e.target.files.length;
        if (imgLength > 0) {
          var localFile = e.target.files[0];
          console.log(localFile.type)
          if (localFile.type === 'image/png' || localFile.type === 'image/jpg') {
            console.log(localFile.type)
            let name = localFile.name;
            let file = new AV.File(name, localFile);
            file.save(this.plan()).then(
              (file) => {
                // 文件保存成功
                // console.log(file.url());
                this.okImg(file)
              },
              function(error) {
                // 异常处理
                console.error(error);
              }
            );
          } else {
            console.log("格式错误了！请用jpg/png格式上传")
          }
        }
      }
    }
  };
</script>


