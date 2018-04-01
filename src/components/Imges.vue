<template>
  <div>
    <div  class="file">
      上传图片
      <input type="file" @change="onFileChange" />
    </div>
  </div>
</template>

<style>
.file {
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
}
.file input {
    position: absolute;
    font-size: 100px;
    right: 0;
    top: 0;
    opacity: 0;
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
    methods: {
      plan() {
        return {
          onprogress: e => {
            console.log(Math.ceil(e.percent)); //上传后进度条
          }
        };
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
                console.log(file.url());
                var url = file.thumbnailURL(400, 400);
                console.log(url);
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


