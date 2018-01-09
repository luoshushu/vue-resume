<template>
  <div id="ShowBox">
    <section>
      <h2>{{resume.profile.name || '你的名字'}}</h2>
      <span>|{{resume.profile.bitrh || '出生年月'}}|{{resume.profile.city || '通讯地址'}}|</span>
    </section>
    <section>
      <h3>联系方式</h3>
      <ul>
        <li>{{resume.contact.WeChat || '微信'}}</li>
        <li>{{resume.contact.email || '邮箱'}}/{{resume.contact.mobile || '电话'}}</li>
        <li></li>
      </ul>
    </section>
    <section v-if="filter(resume.work).length > 0 ">
      <h3>工作经历</h3>
      <ul v-for="work in filter(resume.work)">
        <li>{{work.date ||'开始日期 - 结束日期'}}</li>
        <li>
          <span>{{work.company ||'公司名称'}}</span>
          <span>{{work.content ||'工作内容'}}</span>
        </li>
      </ul>
    </section>
    <section v-if="filter(resume.project).length > 0 ">
      <h3>项目经历</h3>
      <ul v-for="project in filter(resume.project)">
        <li>{{project.name||'项目名称'}}</li>
        <li>
          <span>{{project.introduce ||'项目介绍'}}</span>
          <span>{{project.site ||'项目地址'}}</span>
        </li>
      </ul>
    </section>
    <section v-if="filter(resume.education).length > 0 ">
      <h3>教育信息</h3>
      <ul v-for="education in filter(resume.education)">
        <li>{{education.time ||'时间段'}}</li>
        <li>
          <span>{{education.school ||'学校名称'}}</span>
          <span>{{education.degree ||'学历'}}</span>
        </li>
      </ul>
    </section>
    <section v-if="filter(resume.award).length > 0 ">
      <h3>获奖情况</h3>
      <ul v-for="award in filter(resume.award)">
        <li>{{award.time ||'时间段'}}</li>
        <li>{{award.name ||'获奖情况'}}</li>
      </ul>
    </section>
  </div>
</template>

<style lang="scss">
  #ShowBox {
    padding: 32px;
    overflow: auto;
    >section {
      overflow: auto;
      >h2 {
        border-bottom: 2px solid #3fa5b6;
        color: #2e7b87;
        font-size: 30px;
        margin-bottom: 10px;
      }
      >h3 {
        color: #2e7b87;
        text-align: left;
        background: rgba(0, 0, 0, 0.1);
        border-left: 3px solid #000;
        padding-left: 4px;
        margin: 20px 0 10px 0;
        padding: 5px;
      }
      >ul {
        padding: 8px;
        display: flex;
        >li {
          flex: 1;

        }
        >li:nth-child(1) {
          flex-grow: 2;
          align-self: center;
        }
        >li:nth-child(2) {
          text-align: left;
          flex-grow: 4;
          display: flex;
          flex-direction: column;
        }
      }
    }
  }
</style>

<script>
  export default {
    props: ["resume"],
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
