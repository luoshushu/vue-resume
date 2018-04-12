<template>
  <div id="ShowBox">
    <div class="motto">座右铭：细心从每一个小细节开始。</div>
    <div id="show">
      <section>
        <h3>基本信息</h3>
        <div class="message">
          <div class="content">
            <h2>{{resume.profile.name || '你的名字'}}</h2>
            <span>{{resume.profile.sex || '男'}}⎥ {{resume.profile.bitrh || '年龄'}}⎥ {{resume.contact.WeChat || '微信'}}⎥ {{resume.contact.mobile || '电话'}}</span>
            <span>博客：{{resume.contact.blogger}}</span>
            <span>邮箱：{{resume.contact.email || '邮箱'}}</span>
            <span>期望薪资：{{resume.profile.pay || '7k ~ 10k'}}</span>
            <span>期望城市：{{resume.profile.city || '广州'}}</span>
          </div>
          <div class="print">
            <Imges/>
          </div>
        </div>
      </section>
      <section v-if="filter(resume.work).length > 0 ">
        <h3>工作经历</h3>
        <ul v-for="work in filter(resume.work)">
          <li>{{work.company ||'公司名称'}}</li>
          <li>{{work.date ||'开始日期 - 结束日期'}}</li>
          <li>{{work.content ||'工作内容'}}</li>
        </ul>
      </section>
      <section v-if="filter(resume.project).length > 0 ">
        <h3>项目经历</h3>
        <ul v-for="project in filter(resume.project)">
          <li>{{project.name||'项目名称'}}</li>
          <li>{{project.introduce ||'项目介绍'}}</li>
          <li> {{project.site ||'项目地址'}}</li>
        </ul>
      </section>
      <section v-if="filter(resume.education).length > 0 ">
        <h3>教育信息</h3>
        <ul v-for="education in filter(resume.education)">
          <li>{{education.time ||'时间段'}} ⎥ {{education.school ||'学校名称'}} ⎥ {{education.degree ||'学历'}}</li>
        </ul>
      </section>
      <section v-if="filter(resume.award).length > 0 ">
        <h3>获奖情况</h3>
        <ul v-for="award in filter(resume.award)">
          <li>{{award.time ||'时间段'}} ⎥ {{award.name ||'获奖情况'}}</li>
        </ul>
      </section>
    </div>
  </div>
</template>

<style lang="scss">
  #ShowBox {
    font-size: 16px;
    padding-top: 30px;
    color: rgba(0, 0, 0, 0.6);
    >.motto {
      background: #000;
      color: #fff;
      padding: 8px 32px;
    }
    >#show {
      padding: 0 32px 32px 32px;
      overflow: auto; 
      >section {
        overflow: auto;
        >.message {
          display: flex;
          padding: 8px;
          >.content {
            flex-grow: 2;
            >span {
              max-width: 500px;
              display: block;
              padding: 5px 0;
              font-size: 16px;
            }
            >h2 {
              color: rgba(0, 0, 0, 0.6);
              font-size: 30px;
              margin-bottom: 10px;
            }
          }
          >.print {
            flex-grow: 1;
            display: flex;
            justify-content: center;
            align-items: center;
           
          }
        }
        >h3 {
          color: rgba(0, 0, 0, 0.7);
          text-align: left;
          background: rgba(0, 0, 0, 0.1);
          border-left: 3px solid #000;
          padding-left: 4px;
          margin: 20px 0 10px 0;
          padding: 5px;
        }
        >ul {
          padding: 8px;
          width: 100%;
          overflow: hidden;
          font-size: 16px;
          >li {
            padding: 5px;
            line-height: 30px;
          }
        }
      }
    }
  }
</style>

<script>
  import Imges from "./Imges.vue";
  export default {
    props: ["resume"],
    components: {
      Imges
    },
    methods: {
      filter(array) {
        //找出非空对象
        return array.filter(item => !this.isEmpty(item));
      },
      isEmpty(object) {
        //只要有一个value不是falsy,就返回flase
        let empty = true;
        for (let key in object) {
          if (object[key]) {
            empty = false;
            break;
          }
        }
        return empty;
      }
    }
  };
</script>
