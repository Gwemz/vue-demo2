<template>
  <main-layout>
    <div class="wrap shadow">
      <ol id="ol"
          class="list">
        <li v-for="">

        </li>
      </ol>
    </div>
  </main-layout>
</template>

<style>
  body {
    font: 14px/1.5 "Helvetica, 微软雅黑, arial";
    background: #fff;
  }

  body, h1, h2, h3, h4, h5, h6, ul, li, dl, dd, p {
    list-style: none;
    margin: 0;
    padding: 0;
    border: 0;
  }

  a {
    color: #cf4646;
    text-decoration: none;
  }

  .wrap {
    margin: 50px auto 0;
    width: 500px;
    font-size: 22px;
    padding: 40px 20px;
  }

  .shadow {
    border: 1px solid #e6e6e6;
    border-radius: 5px;
    box-shadow: 0px 2px 3px #ececec;
    background: #ffffff;
  }

  .list {
    padding: 0 60px;
    color: #cf4646;
  }

  .list li {
    list-style: decimal;
    line-height: 50px;
    border-bottom: 1px solid #f2f2f2;
  }

  .list li h1 {
    font-size: 22px;
    font-style: normal;
    font-family: "Hiragino Sans GB", "Hiragino Sans GB W3", '微软雅黑';
  }

  .list li a {
    display: block;
    padding: 5px 8px;
    transition: all .6s;
  }

  .list li a:hover {
    text-indent: 25px;
    border-radius: 5px;
    color: #fff;
    text-shadow: 0 2px 1px rgba(0, 0, 0, 0.8);
    background-color: #DD3A0A;
    background-image: linear-gradient(to bottom, #DD3A0A, #DD560A);
    border-color: rgba(0, 0, 0, 0.1) rgba(0, 0, 0, 0.1) rgba(0, 0, 0, 0.25);
  }

  .sub-dl {
    height: 0;
    line-height: 45px;
    overflow: hidden;
  }

  #pages_0101 {
    width: 500px;
    margin: 0 auto;
    padding-top: 100px;
  }

  #pages_0102 {
    width: 600px;
    margin: 0 auto;
    padding-top: 50px;
  }

  #pages_0404 {
    width: 100%;
    height: 970px;
    background: #282828;
    padding-top: 5%;
  }

  #pages_0404 .div1200 {
    width: 1200px;
    height: 100%;
    position: relative;
    margin: 0 auto;
  }

  #pages_0404 .div1200 span.title {
    display: block;
    width: 184px;
    border-bottom: 4px #3c3c3c solid;
    cursor: pointer;
    margin: 0 auto;
  }

  #pages_0404 .div1200 span.title img {
    width: 100%;
  }

  #pages_0404 .div1200 ul.list {
    margin-top: 30px;
    overflow: hidden;
    padding: 0;
  }

  #pages_0404 .div1200 ul.list li {
    width: 210px;
    height: 210px;
    float: left;
    margin: 0 0 20px 20px;
    background: #383838;
    cursor: pointer;
    position: relative;
    list-style: none;
    border-bottom: 0;
    transition: all 0.3s linear;
    transform: scale(1) translate(0px, 0px);
    overflow: hidden;
  }

  #pages_0404 .div1200 ul.list li img {
    display: block;
    margin: 0 auto;
    margin-top: 10px;
    height: 190px;
  }

  #pages_0404 .div1200 ul.list li div {
    position: absolute;
    z-index: 1;
    width: 190px;
    height: 190px;
    top: 10px;
    left: 10px;
    background: rgba(209, 51, 49, 0.8);
    transition: all .3s linear;
    transform-origin: 100% 100%;
    transform: rotate(90deg);
    opacity: 0;
  }

  #pages_0404 .div1200 ul.list li div i {
    display: block;
    height: 44px;
    margin: 0 auto;
    margin-top: 50px;
    /*background: url("../imgs/y1.png") center center no-repeat;*/
  }

  #pages_0404 .div1200 ul.list li div span {
    width: 100%;
    display: inline-block;
    text-align: center;
    font-size: 20px;
    color: #fff;
    margin-top: 10px;
  }

  #pages_0404 .div1200 ul.list li div p {
    font-size: 12px;
    text-align: center;
    color: #fff;
    height: 20px;
    line-height: 20px;
  }

  #pages_0404 .div1200 ul.list li:hover {
    background: #4c4c4c;
  }

  #pages_0404 .div1200 ul.list li:hover div {
    opacity: 1;
    transform: rotate(0deg);
  }

  #pages_0404 .box_bg1 {
    position: fixed;
    left: 0;
    top: 0;
    z-index: 60;
    background: rgba(0, 0, 0, 0.8);
    width: 100%;
    height: 100%;
    transform: scale(0);
    transition: all .2s linear;
    opacity: 0;
  }

  #pages_0404 .box_ovo {
    width: 940px;
    height: 500px;
    position: fixed;
    left: 50%;
    top: 50%;
    margin-left: -470px;
    margin-top: -250px;
    background: #ffffff;
    z-index: 100;
    transition: all .2s linear;
    opacity: 0;
    transform: scale(0);
  }

  #pages_0404 .current {
    opacity: 1;
    transform: scale(1);
  }

  #pages_0404 .close {
    width: 40px;
    height: 40px;
    position: absolute;
    right: -40px;
    top: 0;
    cursor: pointer;
    background: #d83e40;
  }

  #pages_0404 .close i {
    display: block;
    width: 40px;
    height: 40px;
    /*background: url("../imgs/close.png") center center no-repeat;*/
    transition: all .2s linear;
  }

  #pages_0404 .close:hover i {
    transform: rotate(180deg);
  }

  /*.container {
    max-width: 600px;
    margin: 0 auto;
    padding: 15px 30px;
    background: #f9f7f5;
  }*/
</style>

<script>
  import MainLayout from '../layouts/Main.vue'
  import $ from 'jquery'

  /*new Vue({
      el: '#ol',
      data: {
          items:[
              {"data":[
                  {title:'第一章 表单常用代码'},
                  {url: '/0101', title: '去除字符串左右的空格'},
                  {url: '/0102', title: '验证用户是否输入'},
                  {url: '/0103', title: '禁止用户输入'},
                  {url: '/0104', title: '关闭用户中文输入法'},
                  {url: '/0105', title: '禁止用户复制和粘贴'},
                  {url: '/0106', title: '限制只能输入数字'},
                  {url: '/0107', title: '限制字符串长度'},
                  {url: '/0108', title: '拖拽进度条'},
                  {url: '/0109', title: '通过cookie实现网页背景切换'},
                  {url: '/0110', title: '全国城市三级联动'},
                  {url: '/0111', title: 'Angular数据渲染'},
                  {url: '/0112', title: 'JS生成图片验证码'}
              ]},
              {"data":[
                  {title: '第二章 JS效果相关代码'},
                  {url: '/0201', title: '楼层跳转效果'},
                  {url: '/0202', title: '按需加载图片'},
                  {url: '/0203', title: '全选、反选、全不选效果'},
                  {url: '/0204', title: '图片懒加载'},
                  {url: '/0205', title: '照片查看器'},
                  {url: '/0206', title: '图片轮播'},
                  {url: '/0207', title: '图片上传'},
                  {url: '/0208', title: '分页功能实现'}
              ]},
              {"data":[
                  {title: '第三章 js相关插件'},
                  {url: '/0301', title: 'PhotoSwipe 相册控件'},
                  {url: '/0302', title: 'fullpage-网易邮箱6.0'},
                  {url: '/0303', title: 'fullpage-iPhone 5C'},
                  {url: '/0304', title: 'three.js-3D图形绘制'},
                  {url: '/0305', title: 'Video.js-视频播放器'},
                  {url: '/0306', title: 'sweetalert2-Alert弹框'},
                  {url: '/0307', title: 'Chart.js'},
                  {url: '/0308', title: 'dragsort拖拽排序'},
                  {url: '/0309', title: 'jquery-qrcode图片二维码'},
                  {url: '/0310', title: 'JS进行MD5加密'}
              ]},
              {"data":[
                  {title: '第四章 CSS3效果层'},
                  {url: '/0404', title: 'css3弹出层'},
                  {url: '/0405', title: 'Yo-master相关动画'},
                  {url: '/0406', title: 'CSS使用Tips'},
                  {url: '/0407', title: 'CSS3加载动画'}
              ]},
              {"data":[
                  {title: '第五章 移动端效果'}
              ]},
              {"data":[
                  {title: '第六章 时间日期效果'},
                  {url: '/0601', title: '学习资源整理(By phodal Huang)'},
                  {url: '/0602', title: 'IntelliJ-IDEA'}
              ]},
              {"data":[
                  {title: '第七章 其它练习'},
                  {url: '/0701', title: '刷新当前页面'},
                  {url: '/0702', title: '百度地图引用'},
                  {url: '/0703', title: '高德地图引用'},
                  {url: '/0704', title: '腾讯地图引用'},
                  {url: '/0705', title: '扫码登录'}
              ]}

          ]
      }
  })*/

  $(function () {
      //原生
      var str = '',
          data = [
              [
                  {title: '第一章 表单常用代码'},
                  {url: '/0101', title: '去除字符串左右的空格'},
                  {url: '/0102', title: '验证用户是否输入'},
                  {url: '/0103', title: '禁止用户输入'},
                  {url: '/0104', title: '关闭用户中文输入法'},
                  {url: '/0105', title: '禁止用户复制和粘贴'},
                  {url: '/0106', title: '限制只能输入数字'},
                  {url: '/0107', title: '限制字符串长度'},
                  {url: '/0108', title: '拖拽进度条'},
                  {url: '/0109', title: '通过cookie实现网页背景切换'},
                  {url: '/0110', title: '全国城市三级联动'},
                  {url: '/0111', title: 'Angular数据渲染'},
                  {url: '/0112', title: 'JS生成图片验证码'}
              ],
              [
                  {title: '第二章 JS效果相关代码'},
                  {url: '/0201', title: '楼层跳转效果'},
                  {url: '/0202', title: '按需加载图片'},
                  {url: '/0203', title: '全选、反选、全不选效果'},
                  {url: '/0204', title: '图片懒加载'},
                  {url: '/0205', title: '照片查看器'},
                  {url: '/0206', title: '图片轮播'},
                  {url: '/0207', title: '图片上传'},
                  {url: '/0208', title: '分页功能实现'}
              ],
              [
                  {title: '第三章 js相关插件'},
                  {url: '/0301', title: 'PhotoSwipe 相册控件'},
                  {url: '/0302', title: 'fullpage-网易邮箱6.0'},
                  {url: '/0303', title: 'fullpage-iPhone 5C'},
                  {url: '/0304', title: 'three.js-3D图形绘制'},
                  {url: '/0305', title: 'Video.js-视频播放器'},
                  {url: '/0306', title: 'sweetalert2-Alert弹框'},
                  {url: '/0307', title: 'Chart.js'},
                  {url: '/0308', title: 'dragsort拖拽排序'},
                  {url: '/0309', title: 'jquery-qrcode图片二维码'},
                  {url: '/0310', title: 'JS进行MD5加密'}
              ],
              [
                  {title: '第四章 CSS3效果层'},
                  {url: '/0404', title: 'css3弹出层'},
                  {url: '/0405', title: 'Yo-master相关动画'},
                  {url: '/0406', title: 'CSS使用Tips'},
                  {url: '/0407', title: 'CSS3加载动画'}
              ],
              [
                  {title: '第五章 移动端效果'},
              ],
              [
                  {title: '第六章 时间日期效果'},
                  {url: '/0601', title: '学习资源整理(By phodal Huang)'},
                  {url: '/0602', title: 'IntelliJ-IDEA'}
              ],
              [
                  {title: '第七章 其它练习'},
                  {url: '/0701', title: '刷新当前页面'},
                  {url: '/0702', title: '百度地图引用'},
                  {url: '/0703', title: '高德地图引用'},
                  {url: '/0704', title: '腾讯地图引用'},
                  {url: '/0705', title: '扫码登录'}
              ]
          ];

      for (var i = 0; i < data.length; i++) {
          var item = data[i];
          var sub = '';
          console.table(data[i]);
          console.log(data[i]);
          for (var j = 0; j < item.length; j++) {
              if (j == 0) {
                  sub += '<li data-track="title点击"><h1><a href="javascript:;" title="' + item[j].title + '">' + item[j].title + '</a></h1><dl class="sub-dl">';
              } else {
                  sub += '<dd><a href="' + item[j].url + '" target="_blank" title="' + item[j].title + '">' + item[j].title + '</a></dd>';
              }

              if (j == item.length - 1) {
                  sub += '</dl></li>';
              }
          }
          str += sub;
      }

      var ol = document.getElementById('ol');
      ol.innerHTML = str;
      var h1 = document.getElementsByTagName('li');
      var dl = document.getElementsByTagName('dl');
      var sub = 1;
      // jquery
      $('.wrap li').on('click', 'h1', function () {
          var hg = $(this).next().children().height();
          var num = $(this).next().children().length;
          $(this).next().toggleClass('active');
          if ($(this).next().hasClass('active')) {
              $(this).siblings('.active').animate({height: '' + hg * num + 'px'}, 500);
          } else {
              $(this).next().animate({height: 0}, 500);
          }

      })

      var _hmt = _hmt || [];
      (function () {
          var hm = document.createElement("script");
          hm.src = "https://hm.baidu.com/hm.js?7117e1fef39f18ac2431859dffdda945";
          var s = document.getElementsByTagName("script")[0];
          s.parentNode.insertBefore(hm, s);
      })();

      //添加事件统计
      $("[data-track]").on("click", function () {
          var label = $(this).data("track");
          window._hmt && window._hmt.push(['_trackEvent', label, 'click', '体验包']);
      });

      // This is a test program by Visual Studio Code!
      // 百度统计点击次数累加
  })

  export default {
    components: {
      MainLayout
    }
  }
</script>
