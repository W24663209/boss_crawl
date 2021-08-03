<template>
  <div id="app">
    <div class="crx-content">
      <div id="down">
        <el-button type="success">测试</el-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "App.vue",
  data() {
    return {}
  },
  mounted() {
    console.log('插件已注入')
    this.getTitleInfo()
  },
  methods: {
    getTitleInfo() {
      let jobTitleInfo = $('.job-list ul li .job-primary');
      jobTitleInfo.each(function () {
        let jobTitle = $(this).find('.job-title');
        let jobName = jobTitle.find('.job-name a').attr('title');
        let jobArea = jobTitle.find('.job-area').text();
        let name = $(this).find('.company-text .name a').attr('title');
        let info = $(this).find('.company-text p').text();
        let price = $(this).find('.job-limit .red').text();
        let requirements = $(this).find('.job-limit p').text();
        console.log(jobName, jobArea, name, price, requirements, info)
      })
    }
  }
}
</script>

<style scoped>
.crx-content div {
  position: fixed;
  top: 10%;
  left: 10px;
}

#open_background {
  top: 16%;
}

.crx-content {
  z-index: 9999;
  position: fixed;
  top: 10%;
  left: 10px;
}

</style>