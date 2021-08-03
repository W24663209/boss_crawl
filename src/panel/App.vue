<template>
  <div id="app">
    <div class="show">
      <span class="title">请求信息</span>
      <el-button type="danger" class="clear" size="small" @click="reses=[]">清除</el-button>
      <span class="msg">{{ msg }}</span>
      <span>{{ href }}</span>
      <div class="res-info" v-for="res in reses">
        <div class="copy-btn" v-clipboard:copy="res.url" v-clipboard:success="onCopy" v-clipboard:error="onError">
          {{ res.url }}
        </div>
        <div class="copy-btn" v-clipboard:copy="res.params" v-clipboard:success="onCopy" v-clipboard:error="onError">
          {{ res.params }}
        </div>
        <div class="copy-btn" v-clipboard:copy="res.info" v-clipboard:success="onCopy" v-clipboard:error="onError">
          {{ res.info }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "App.vue",
  data() {
    return {
      "reses": [],
      "msg": "",
      'url': window.location.href
    }
  },
  created() {
    //注册回调函数，每一个http请求完成后，都会执行。
    chrome.devtools.network.onRequestFinished.addListener((data) => {
          let that = this
          let request = data['request'];
          let resourceType = data['_resourceType'];
          let params = request['postData']['text'];
          console.log(request['postData'])
          if (resourceType != 'xhr') {
            return
          }
          let res = {}
          let url_split = request.url.split('/');
          res.url = url_split[url_split.length - 2] + '/' + url_split[url_split.length - 1]
          res.params = params
          data.getContent((content, encoding) => {
            res.info = content
            that.reses.push(res)
          });
        }
    );
  },
  methods: {
    log(...params) {
      chrome.devtools.inspectedWindow.eval(`console.log(...${JSON.stringify(params)})`);
    },
    // 复制成功时的回调函数
    onCopy(e) {
      this.msg = '复制成功'
      let that = this
      setTimeout(function () {
        that.msg = ''
      }, 1000)
    },
    // 复制失败时的回调函数
    onError(e) {
      this.msg = '复制失败'
      let that = this
      setTimeout(function () {
        that.msg = ''
      }, 1000)
    }
  }
}
</script>

<style scoped>
.res-info {
  margin-bottom: 30px;
  margin-top: 10px;
}

.res-info div {
  display: inline-block;
  text-overflow: ellipsis; /*文本溢出显示省略号*/
  overflow: hidden; /*超出隐藏*/
  white-space: nowrap; /*规定段落中的文本不进行换行*/
  width: 100%;
  font-size: 16px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: #000000;
}

.title, .msg {
  font-size: 16px;
  font-weight: 400;
}

.clear {
  margin: 0 10px 0;
}

.msg {
  color: green;
}

</style>