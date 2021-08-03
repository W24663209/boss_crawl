<template>
  <div id="app">
    <h3>hello vue !2442</h3>
  </div>
</template>
<script>
export default {
  name: 'app',
  created() {
    chrome.bookmarks.getTree((res) => {
      console.log(res);
    })
    this.list_session()
  },
  methods:{
    //获取打开的链接
    list_session() {
      var list = [];
      chrome.windows.getAll(
          {"populate": true},
          function (window_list) {
            window_list[0].tabs.forEach(e=>{
              list.push(e.url)
            })
          }
      );
      console.log(list)
      return list;
    }
  }
}
</script>
<style scoped>
#app {
  width: 420px;
  height: auto;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #333;
  background: #f5f5f5;
}
</style>