<template>
  <div>
    <h2>{{title}}</h2>
    <el-form>
      <div class="useless" v-for="(item,index) in workExperience" v-bind:key="index">
        <el-form-item v-for="key in keys" v-bind:label="labels[key] || key" :key="key">
          <el-input v-model="item[key]" placeholder="请输入内容"></el-input>
        </el-form-item>
        <i class="el-icon-delete" v-on:click="ctrl(index)"></i>
      </div>
      <el-button v-on:click="addItem">添加</el-button>
    </el-form>
  </div>
</template>

<script>
  export default {
    props: ["workExperience", "labels", "title"],
    computed: {
      keys() {
        return Object.keys(this.workExperience[0])
      }
    },
    methods: {
      // 添加按钮
      addItem() {
        const empty = {}
        this.keys.map((key) => {
          empty[key] = ''
        })
        this.workExperience.push(empty);
      },
      //删除按钮
      ctrl(index) {
        this.workExperience.splice(index, 1);
      }
    }
  };
</script>
