console.log(1)

// addStatic('content.main.js', function (res) {
//     addJsByText(res)
// })

//加载content.html
addStatic('content.html', function (res) {
    addHtml(res)
})

//注入项目静态资源到网页中
function addStatic(pathName, fun) {
    let content_url = chrome.extension.getURL(pathName)
    $.ajax({
        url: content_url,
        type: 'get',
        async: true,
        success: function (res) {
            fun(res, content_url)
        },
        error: function (response) {
        }
    });
}

//注入页面
function addHtml(text) {
    $("body").prepend(text)
}

//注入js
function loadScript(src, callback = undefined) {
    var script = document.createElement('script'),
        head = document.getElementsByTagName('head')[0];
    script.type = 'text/javascript';
    script.charset = 'UTF-8';
    script.src = chrome.extension.getURL(src);
    if (script.addEventListener) {
        script.addEventListener('load', function () {
            // callback();
        }, false);
    } else if (script.attachEvent) {
        script.attachEvent('onreadystatechange', function () {
            var target = window.event.srcElement;
            if (target.readyState == 'loaded') {
                // callback();
            }
        });
    }
    head.appendChild(script);
}

//注入css
function addCss(text) {
    $("head").prepend("<style>" + text + "</style>")
}

function addJsByText(text) {
    $("body").prepend("<script type=\"text/javascript\">" + text + "<\/script>")
}