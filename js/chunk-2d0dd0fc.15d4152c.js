(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0dd0fc"],{"807e":function(n,t,e){"use strict";e.r(t),t["default"]='\n- 什么是` Ajax`? 如何创建一个`Ajax`？\n\n* `AJAX(Asynchronous Javascript And XML) `= 异步 `JavaScript` + `XML` 在后台与服务器进行异步数据交换，不用重载整个网页，实现局部刷新。\n\n* 创建 `ajax` 步骤：\n  - 1.创建 `XMLHttpRequest` 对象\n  - 2.创建一个新的 `HTTP` 请求，并指定该 `HTTP` 请求的类型、验证信息\n  - 3.设置响应 `HTTP` 请求状态变化的回调函数\n  - 4.发送 `HTTP` 请求\n  - 5.获取异步调用返回的数据\n  - 6.使用 `JavaScript` 和 `DOM` 实现局部刷新\n\n```js\nvar xhr = new XMLHttpRequest();\nxhr.open("POST", url, true);\nxhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");\nxhr.onreadystatechange = function () {\n    if (xhr.readyState == 4 && (xhr.status == 200 || xhr.status == 304)) {\n        fn.call(this, xhr.responseText);\n    }\n};\nxhr.send(data);\n```\n'}}]);