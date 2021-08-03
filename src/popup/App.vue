<template>
  <div id="app">
<!--    <div class="text" @click="openUrl('https://www.bensun.cn')">我的博客</div>-->
<!--    <div class="text" @click="openUrl('https://unbug.github.io/codelf/#earn')">codelf</div>-->
<!--    <div class="text" @click="openUrl('https://element.eleme.cn/#/zh-CN/component/installation')">ElementUI</div>-->
<!--    <div class="text" @click="openUrl('chrome-extension://kfkdboecolemdjodhmhmcibjocfopejo/pages/jsonPages.html')">json工具</div>-->
<!--    <div class="text" @click="openUrl('chrome://extensions')">插件管理</div>-->
<!--    <div class="text" @click="openBackground">背景页</div>-->
  </div>
</template>
<script>
export default {
  name: 'app',
  data() {
    return {
      searchData: undefined,
      html: undefined,
      value: true
    }
  },
  created() {
  },
  methods: {
    search() {
      console.log(this.searchData)
    },
    openBackground() {
      window.open(chrome.extension.getURL('background.html'));
    },
    openUrl(url) {
      window.open(url);
    }
  }
}
</script>
<style scoped>
body, html {
  margin: unset;
}

.text {
  width: 100px;
  font-size: 14px;
  padding: 10px 10px;
  background-color: #fff;
  color: #43adfd;
  border-bottom: 1px solid rgba(0, 0, 0, .125);
}

</style>