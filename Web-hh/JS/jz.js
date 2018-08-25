/// <reference path="/EasyUI/jquery.min.js" />
function myajax() {

$.post("/JZ/JZHandler.ashx", {"action":"Q1"}, function (data) {
  // alert(data);
  var data=JSON.parse(data);
    $("#ss1-name").html(data.fd);
    $("#ss1-value").html(new Date().toLocaleTimeString());
});
$.post("/JZ/JZHandler.ashx", { "action": "Q2" }, function (data) {
    //alert(data);
    var data = JSON.parse(data);
    $("#ss2-name").html(data.fd);
    $("#ss2-value").html(new Date().getSeconds().toString());
});
$.post("/JZ/JZHandler.ashx", { "action": "Q3" }, function (data) {
   // alert(data);
    var data = JSON.parse(data);
    $("#ss3-name").html(data.fd);
    $("#ss3-value").html(new Date().toLocaleTimeString());
});
$.post("/JZ/JZHandler.ashx", { "action": "Q4" }, function (data) {
    // alert(data);
    var data = JSON.parse(data);
    $("#ss4-name").html(data.fd);
    $("#ss4-value").html(new Date().toLocaleTimeString());
});
}

var timer;//定时器
myajax();//先执行一次，然后再设置2秒执行一次
clearInterval(timer);//清除定时器
timer= setInterval(myajax, 200000);

