// 创建自定义面板，同一个插件可以创建多个自定义面板
// 几个参数依次为：panel标题、图标（其实设置了也没地方显示）、要加载的页面、加载成功后的回调
// chrome.devtools.panels.create('MyPanel', 'img/icon.png', 'panel.html', function(panel)
// {
//     console.log('自定义面板创建成功！'); // 注意这个log一般看不到
// });

const CD = chrome.devtools;

CD.panels.create(
    "\u62e6\u622a\u54cd\u5e94",
    "static/img/icon.png",
    "panel.html", // 这个devtools拓展真正的操作页面
)