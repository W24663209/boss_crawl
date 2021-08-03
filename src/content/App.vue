<template>
  <div id="app">
    <div class="crx-content">
      <div id="down">
        <el-button type="success" @click="download">下载</el-button>
      </div>
    </div>
  </div>
</template>

<script>
import {saveAs} from 'file-saver';

export default {
  name: "App.vue",
  data() {
    return {}
  },
  mounted() {
    console.log('插件已注入')
    if (localStorage.getItem('crawlDownlaod') === '1') {
      this.getTitleInfo()
    }
  },
  methods: {
    download() {
      localStorage.setItem('crawlDownlaod', '1');
      window.location.reload()
    },
    getTitleInfo() {
      if (!localStorage.getItem('crawlText')) {
        localStorage.setItem('crawlText', '职位, 城市, 公司, 薪资, 要求, 详情\n')
      }
      let jobTitleInfo = $('.job-list ul li .job-primary');
      let text = ''
      jobTitleInfo.each(function () {
        let jobTitle = $(this).find('.job-title');
        let jobName = jobTitle.find('.job-name a').attr('title');
        let jobArea = jobTitle.find('.job-area').text();
        let name = $(this).find('.company-text .name a').attr('title');
        let info = $(this).find('.company-text p').text();
        let price = $(this).find('.job-limit .red').text();
        let requirements = $(this).find('.job-limit p').text();
        text += jobName + ',' + jobArea + ',' + name + ',' + price + ',' + requirements + ',' + info + '\n'
        console.log(jobName, jobArea, name, price, requirements, info)
      })
      let item = localStorage.getItem('crawlText');
      item += text
      localStorage.setItem('crawlText', item)
      if (!$('.page .next').hasClass('disabled')) {
        window.location.href = $('.page .next').attr('href')
      } else {
        var blob = new Blob([item], {type: "text/plain;charset=utf-8"});
        saveAs(blob, $('.ipt-wrap input').val() + ".csv");
        localStorage.setItem('crawlText', '');
        console.log('下载完成')
        localStorage.setItem('crawlDownlaod', '0')
      }
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