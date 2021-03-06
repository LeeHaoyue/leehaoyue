import lodash from 'lodash'; // 实用工具库
import pinyinMatch from 'pinyin-match'; // 汉字转拼音
import lrz from 'lrz'; // 图片压缩
import CryptoJS from 'crypto-js'; // HMAC加密
import wx from 'weixin-js-sdk'; // 微信jssdk

export default {
  // 默认console
  defaultConsole() {
    // console.log('%c创业外包心有余力不足\n不是996就是007，且行且珍惜', `
    //    font-size: 5em;
    //    text-shadow: 0 1px 0 #ccc,0 2px 0 #c9c9c9,0 3px 0 #bbb,0 4px 0 #b9b9b9,0 5px 0 #aaa,0 6px 1px rgba(0,0,0,.1),0 0 5px rgba(0,0,0,.1),0 1px 3px rgba(0,0,0,.3),0 3px 5px rgba(0,0,0,.2),0 5px 10px rgba(0,0,0,.25),0 10px 10px rgba(0,0,0,.2),0 20px 20px rgba(0,0,0,.15);
    // `);
    // console.group('不止眼前的苟且，还有远方的苟且');
    // console.table([[
    //   '逼格我要简约的同时复杂一点',
    //   'LOGO大一点的同时小一点',
    //   '温软雅黑怎么不是黑的'
    // ], [
    //   '那个黑色你做成五彩斑斓',
    //   '这个正方形太方，你把它改圆一点',
    //   '算了，还是用初稿吧'
    // ], [
    //   '色彩要丰富，对比要强烈，红配绿最美丽',
    //   '不大怎么突出？我要产品名称占80%',
    //   '最重要的是字要大，又突出又好看'
    // ]]);
    // console.log('%c', 'background: url(http://imgsrc.baidu.com/forum/pic/item/77421dd5ad6eddc49415075637dbb6fd506633e7.jpg) no-repeat center;padding-left:80px;padding-bottom: 80px;border-radius:50%;');
    // console.groupEnd();
    // console.log('%c满纸荒唐言, 一把辛酸泪\n无（一）所（无）不（是）能（处）的：\n攻（代）城（码）狮（狗）———Lee\nhttps://leehaoyue.github.io/leehaoyue/', `
    //    color: blue;
    //    font-size: x-large;
    // `);
  },
  // 判断浏览器类型
  getBrowser() {
    if (Boolean(window.ActiveXObject) || 'ActiveXObject' in window) {
      return 'IE';
    }
    if (navigator.userAgent.indexOf('Firefox') !== -1){
      return 'Firefox';
    }
    if (navigator.userAgent.indexOf('Chrome') !== -1){
      return 'Chrome';
    }
    if (navigator.userAgent.indexOf('Safari') !== -1){
      return 'Safari';
    }
  },
  // 判断是否在微信
  isWeiXin() {
    if(window.navigator.userAgent.toLowerCase().match(/MicroMessenger/i) === 'micromessenger'){
      return true;
    }
    return false;
  },
  // 生成随机字符串
  randomString(len) {
    len = len || 32;
    let $chars = 'ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz2345678',
      maxPos = $chars.length,
      pwd = '';

    for (i = 0; i < len; i++) {
      pwd += $chars.charAt(Math.floor(Math.random() * maxPos));
    }
    return pwd;
  },
  // 微信分享
  weShare({appId, timestamp, noncestr, signature, appMessage, timeLine, shareWeibo}) {
    return new Promise((resolve, reject) => {
      wx.config({
        debug: false, // 开启调试模式
        appId: appId, // 必填，公众号的唯一标识
        timestamp: timestamp, // 必填，生成签名的时间戳
        nonceStr: noncestr, // 必填，生成签名的随机串
        signature: signature, // 必填，签名
        jsApiList: ['updateAppMessageShareData', 'updateTimelineShareData', 'onMenuShareWeibo', 'getLocation'] // 必填，需要使用的JS接口列表
      });
      wx.ready(function() {
        // 分享朋友、QQ
        wx.updateAppMessageShareData({...appMessage,
          success: function () {
          },
          cancel: function (res) {
            reject(res);
          }
        });
        // 分享朋友圈、QQ空间
        wx.updateTimelineShareData({...timeLine,
          success: function () {
          },
          cancel: function (res) {
            reject(res);
          }
        });
        // 分享腾讯微博
        wx.onMenuShareWeibo({...shareWeibo,
          success: function () {
          },
          cancel: function (res) {
            reject(res);
          }
        });
        // 获取地理位置
        wx.getLocation({
          type: 'wgs84',
          success: function (res) {
            reject(res);
          },
          cancel: function (res) {
            reject(res);
          }
        });
      });
      wx.error(err => {
        reject(err);
      });
    });
  },
  // 判断android、ios
  iSAndroid() {
    let u = navigator.userAgent;
    let isAndroid = u.indexOf('Android') > -1 || u.indexOf('Linux') > -1;
    let isIOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);

    if (isAndroid) {
      return true
    }
    if (isIOS) {
      return false
    }
  },
  // url截取参数
  getURLString (key){
    let reg = new RegExp('(^|&)'+ key +'=([^&]*)(&|$)');
    let r = window.location.search.substr(1).match(reg);

    if (r !== null) {
      return unescape(r[2]);
    }
    return null;
  },
  // 阻止事件冒泡
  cancelBubble(e) {
    e.cancelBubble = true
  },
  // 获取指定元素
  getnode(key, val, childkey, arrobj) {
    if (Array.isArray(arrobj)) {
      for (let i in arrobj) {
        if (val === arrobj[i][key]) {
          return arrobj[i]
        } else if (arrobj[i][childkey] && arrobj[i][childkey].length>0) {
          let node = this.getnode(key, val, childkey, arrobj[i][childkey]);

          if (node) {
            return node
          }
        }
      }
    } else {
      for (let i in arrobj) {
        if (val === i[key]) {
          return i
        } else if (i[childkey] && i[childkey].length>0) {
          let node = this.getnode(key, val, childkey, i[childkey]);

          if (node) {
            return node
          }
        }
      }
    }
  },
  // 判断是否为数字
  isNum(num) {
    return this.isEmpty(num) ? false : /^[0-9]+[0-9]*]*$/.test(num)
  },
  // 判断对象是否相等
  isEqual(origin, target) {
    let o1 = origin instanceof Object;
    let o2 = target instanceof Object;

    if (!o1 || !o2) {
      return origin === target;
    }
    if (Object.keys(origin).length !== Object.keys(target).length) {
      return false;
    }
    for (let attr in origin) {
      let t1 = origin[attr] instanceof Object;
      let t2 = target[attr] instanceof Object;

      if (t1 && t2) {
        return this.isEqual(origin[attr],target[attr]);
      } else if (origin[attr] !== target[attr]) {
        return false;
      }
    }
    return true;
  },
  // 只能输入数字、字母、下划线
  isLetter(str) {
    return this.isEmpty(str) ? false : /^\w+$/.test(str)
  },
  // 判断是否为时间
  isTime (time) {
    return !isNaN(Date.parse(time))
  },
  // 时间转换
  timeFilter(date, type) {
    if (!date) {
      return '—'
    }
    let time = '';

    try {
      time = this.iSAndroid() ? date : date.replace(/-/g, '/');
    } catch (err) {
      time = date;
    }
    time = new Date(time);
    let Y = time.getFullYear();
    let M = (time.getMonth()+1 < 10 ? '0'+(time.getMonth()+1) : time.getMonth()+1);
    let D = time.getDate()< 10 ? '0'+time.getDate() : time.getDate();
    let H = (time.getHours()< 10 ? '0'+time.getHours() : time.getHours());
    let MM = ':' + (time.getMinutes()< 10 ? '0'+time.getMinutes() : time.getMinutes());

    switch (type) {
    case 'hh:mm':
      time = `${H}${MM}`;
      break;
    case 'diff/hh:mm':
      let diff = (new Date().getTime()-time.getTime())/(3600*1000*24);

      if (diff<1) {
        time = `${H}${MM}`;
      } else if (diff>=1 && diff<2) {
        time = `昨日 ${H}${MM}`;
      } else {
        time = `${Math.round(diff)}天前 ${H}${MM}`;
      }
      break;
    case 'yyyy-mm-dd':
      time = `${Y}-${M}-${D}`;
      break;
    case 'yyyy-mm-dd/hh:mm':
      time = `${Y}-${M}-${D} ${H}${MM}`;
      break;
    case 'yyyy.mm.dd/hh:mm':
      time = `${Y}年${M}月${D}日 ${H}${MM}`;
      break;
    default:
      time = `${Y}-${M}-${D} ${H}${MM}`;
    }
    return time
  },
  // 数组去重并排序
  reDuplication(arrobj, key, method) {
    let newarr = [];
    let json = {};

    try {
      newarr = Array.from(new Set(arrobj.flat(Infinity))).sort((a,b)=>{
        if (!this.isEmpty(key)) {
          return this.isEmpty(method) ? a[key] - b[key] : a[key].localeCompare(b[key], method)
        }
        return a - b
      });
    } catch (err) {
      for (let i = 0; i < arrobj.length; i++) {
        if (json[arrobj[i]] !== arrobj[i]) {
          newarr.push(arrobj[i]);
          json[arrobj[i]] = arrobj[i];
        }
      }
    }
    return newarr;
  },
  // 判断是否为空
  isEmpty: (obj) => {
    if (typeof obj === 'boolean') {
      return false;
    }
    if ((!obj || obj === '') && obj !== 0) {
      return true;
    }
    if (typeof obj === 'string' && !obj.replace(/\s/g, '')) {
      return true;
    }
    if (Array.prototype.isPrototypeOf(obj) && obj.length === 0) {
      return true;
    }
    if (Object.prototype.isPrototypeOf(obj) && Object.keys(obj).length === 0) {
      if (obj instanceof Date) {
        return false
      }
      return true;
    }
    return false;
  },
  // 去掉空键值
  removeEmpty(obj) {
    let param = Object.assign({}, obj);

    for (let i in param) {
      if (this.isEmpty(param[i])) {
        delete param[i]
      }
    }
    return param
  },
  // 去空格
  removeBlank(str) {
    return str.replace(/\s/g, '');
  },
  // 按键名对象进行升序排序
  sortObj(obj) {
    let newkey = Object.keys(obj).sort();
    let newObj = {};

    for (let i = 0; i < newkey.length; i++) {
      newObj[newkey[i]] = obj[newkey[i]];
    }
    return newObj;
  },
  // 按相同属性值重新构造对象
  sameProtoClass(obj, key) {
    let newObj = {};

    for (let i in obj) {
      if (newObj[obj[i][key]]) {
        newObj[obj[i][key]].push(obj[i])
      } else {
        newObj[obj[i][key]] = [obj[i]]
      }
    }
    return newObj
  },
  // 链转树
  setTreeData(source, id, parentId, children) {
    let temp = lodash.cloneDeep(source);
    let tempObj = {};

    for (let i in temp) {
      tempObj[temp[i][id]] = temp[i];
    }
    return temp.filter(father => {
      let childArr = temp.filter(child => father[id] === child[parentId]);

      father[children] = childArr.length > 0 ? childArr : '';
      return father[parentId] === null || !tempObj[father[parentId]];
    });
  },
  // 汉字按拼音排序
  cwordSort(arrobj, key) {
    return arrobj.sort((a, b) => {
      return key ? a[key].localeCompare(b[key], 'zh') : a.localeCompare(b, 'zh');
    })
  },
  // 获取获取汉字首字母拼音
  cwordPY(str) {
    let py = '*abcdefghjklmnopqrstwxyz'.split('');
    let char = '';

    for (let i = 0; i<py.length; i++) {
      if (pinyinMatch.match(str.charAt(0), py[i])) {
        char = py[i];
        break;
      }
    }
    return char;
  },
  // HMAC加密
  createSign(type, host, url, data, secret) {
    let sign = type.toUpperCase() + '\n' + host.toLowerCase() + '\n' + url.toLowerCase() + '\n';
    let hmac = CryptoJS.HmacSHA256(sign.concat(data), secret.SIGN_SECRET);

    return secret.SIGN_KEY + ':' + hmac;
  },
  // HMAC加密（钉钉）
  createSignDD(timestamp, appSecret) {
    let hash = CryptoJS.HmacSHA256(timestamp, appSecret);

    return CryptoJS.enc.Base64.stringify(hash);
  },
  // 图片压缩
  compressImg(e) {
    return new Promise((resolve, reject) => {
      lrz(e, {
        quality: 0.5
      }).then(res => {
        resolve(res)
      }).catch(err => {
        reject(err)
      })
    })
  },
  // 加载弹窗
  pageLoading(obj, boolean) {
    if (boolean) {
      obj.$loading({
        customClass: 'pageLoading',
        background: 'transparent'
      });
    } else {
      obj.$loading({
        customClass: 'pageLoadingClose'
      }).close();
    }
  }
}