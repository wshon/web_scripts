// ==UserScript==
// @name        阿米加助手
// @namespace   Violentmonkey Scripts
// @include     https://ame.primeton.com/*
// @grant       none
// @version     1.0
// @author      wshon
// @description 2020/4/14 上午9:49:57
// ==/UserScript==


;(function () {
  'use strict';
  
  var siteFunctions = {
    '/default/sso.login' : function (){  
      $("#verifyCode_container > Img").attr("src","http://tinyurl.com/rnmnnx8"); 
      $("#verifyCode_container").hide();
      $(window).bind("load", function () {
        $("#login_btn").unbind();
        $("#login_btn").click(function(){
          $("#loginForm").submit();
        });
      })
    },
    '/default/labor/returnToWork/queryEmpReturns.jsp' : function (){
      console.debug("aaa");
      document.title = "复工日报查询";
      $('<a class="nui-button" id="dailReturn" iconCls="icon-add" href="https://ame.primeton.com/default/labor/returnToWork/dailReturn.jsp">复工情况填报</a>').insertAfter("#export");
      $('<span>&nbsp;</span>').insertAfter("#export");
    },
    '/default/labor/returnToWork/dailReturn.jsp' : function (){
      var data = form1.getData();
      data.retrunWork.retrunstatus = "1";
      data.retrunWork.returnprovince = "310000000000";
      data.retrunWork.returncity = "310100000000";
      form1.setData(data);
      window.close = function (){};
    },
    '/default/ame/clipview/index.jsp' : function (){
      window.returnCitySN = {"cip": "117.131.11.98", "cid": "310000", "cname": "上海市"};
      console.log("set returnCitySN", window.returnCitySN);
    }
  }
  var func = siteFunctions[location.pathname];
  console.debug(location.pathname, document.title, func);
  if(func) func();
})();
