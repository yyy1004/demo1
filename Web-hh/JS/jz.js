/// <reference path="/EasyUI/jquery.min.js" />

// #region ------------------请选择测点下拉框---------------

var datajson;//测点列表
var cdselected="";//所选择的测点

$.ajaxSettings.async = false;
$.post("/JZ/JZHandler.ashx", { "action": "GetJZCDInfo" }, function (data) {
    datajson = (JSON.parse(data)).rows;
    //console.log(datajson);
});
$.ajaxSettings.async = true;
var combobox=$("#cd").combobox({
    data: datajson,
    valueField: 'id',
    textField: 'text',
    onChange: function () {
        cdselected = combobox.combobox('getText');
       // console.log(select);
    },
});


// #endregion


// #region -------------------自定义标签----------------------

$(function () {
    $("#tabs").tabs({
        plain: false,
        boder: false,
        width: $(window).width(),
        height: $(window).height(),
        onSelect: function (title, index) {
            tabtitle = title;//把当前tab的title赋值给tabtitle。
        }
    });
});

//监测浏览器
$(window).resize(function () {
    $('#tabs').tabs({
        plain: false,
        boder: false,
        width: $(window).width(),
        height: $(window).height(),
    }).tabs('resize');
    //alert("窗口变化")
})
//状态格式化  正常 报警  故障
function stateformater(val, row, index) {
    var status = row.status;
    var res = '';
    if (status == 1) {
        return "<font style='color:white;'>正常</font>";
    } else if (status == 2) {
        return "<font style='color:black;text-shadow: 0px 0px 0px #000;'>报警</font>";
    } else if (status == 3) {
        return "<font style='color:white;'>故障</font>"
    }
}
//机组状态列 样式 -背景
function statestyler(val, row, index) {
    var status = row.status;
    if (status == 1) {
        return 'background-color:blue';
    } else if (status == 2) {
        return 'background-color:yellow';
    } else {
        return 'background-color:red'
    }
}

// #endregion


// #region ---------------------机组监测  柱状图监测new-----------------------


var jzStatusType;//状态类型 1 正常 2 报警 3 停机
var oldtime;//保存更新时间。//放在定时器外
var isFirstRun = true;// 是否为第一次执行，放在定时器外
var tabtitle;//标签名
var timer;//定时器
function GetTimeAndType() {//获取数据更新时间和类型，
    $.post("/JZ/JZHandler.ashx", { "action": "Qstatus" }, function (data) {
        var data = JSON.parse(data);
        var temptime = data.newtime;
        jzStatusType = data.status;
        if (oldtime != temptime) {  //true表示时间更新，第一次oldtime != temptime值为true，//如果时间没有更新，则什么也不做。
            oldtime = temptime;                                                      //保存当前时间
            $("#recordingdingtime-value").html(temptime);//更新时间
            ShowJZstatusType();                                                   //更新启停状态
            myajax(isFirstRun);                                                       //更新数据
            isFirstRun = false;//后面不在动态显示柱状图
        }
    })
}
function ShowJZstatusType() {
    if (jzStatusType != "" && jzStatusType != null) {
        //如果服务器时间与当前是按对比大于5分钟，就判定断网。
        //  if (updatetime != undefined && (new Date().getTime() - updatetime) <5 * 60 * 1000) {
        if (jzStatusType == 1) {
            $("#ssisrun-value").html('正常');
            $('#ssisrun-value').css("color", "green");
            $('#round-marking').css('background-color', 'green');
            //     $('#value-father1').each(function() {
            //  $(this).css("background-color", "green")
            //      })
        }
        else if (jzStatusType == 2) {
            //  $('#value-father1').css("background-color", "yellow");
            $("#ssisrun-value").html('报警');
            $('#ssisrun-value').css("color", "yellow");
            $('#round-marking').css("background-color", "yellow");
        } else if (jzStatusType == 3) {
            //    $('#value-father1').each(function () {
            //      $(this).css("background-color", "red")
            //     });
            $("#ssisrun-value").html('故障');
            $('#ssisrun-value').css("color", "red")
            $('#round-marking').css("background-color", "red");
        }
        //} else {// 断网-五分钟内没有更新
        //    $("#ssisrun-value").html('断网');
        //    $('#ssisrun-value').css("color", "#fff");
        //    $('#round-marking').css("background-color", "gray");
        //}
    }
}
function myajax(isFirstRun) {

    // #region  查询data- 异步

    for (var i = 1; i < 9; i++) {
    (function Q(n) {//通过函数传参，避免异步导致的传参错误。
        $.post("/JZ/JZHandler.ashx", { "action": "Q"+n }, function (data) {
            mycallback(data, n);
        });
    })(i);
    }
    function mycallback(data, index) {//回调函数。
        var data = JSON.parse(data);
        var fv = data.fv * 1;
        fv = fv.toFixed(2); // 输出结果为 2.45
        //柱状图监测
        if (data.fd != "" && data.fd != null) {
            CreateChart('canvas' + index, data);
        }
        //机组监测
        if (data.fd != "" && data.fd != null) {
            $("#ss" + index + "-name").html(data.fd);
            $("#ss" + index + "-value").html(fv + ' g');
            //正常
            if (fv < data.yjz * 1) {
                $("#ss" + index + "-value").css("color", "green");
                //if (maxstatus < 1) {
                //    maxstatus = 1;
                //}
            }
            else if (fv >= data.yjz * 1 && fv < data.bjz * 1) {
                //  $('#value-father1').css("background-color", "yellow");
                $("#ss" + index + "-value").css("color", "yellow");
                //if (maxstatus < 2) {
                //    maxstatus = 2
                //}
            } else {
                //    $('#value-father1').each(function () {
                //      $(this).css("background-color", "red")
                //     });
                $("#ss" + index + "-value").css("color", "red");
                //if (maxstatus < 3) {
                //    maxstatus = 3
                //}
            }
        }
    }
  
    // #endregion

    // #region     //绘制柱状图

    function CreateChart(chartId, data) {
        var data1 = {
            "fd": data.fd,//名称
            "fv": (data.fv * 1).toFixed(2),//值
            "yjz": data.yjz,//预警值
            "bjz": data.bjz,//报警值
            "limitHigh": data.bjz * 1 + 10,//最高值
            "limitLow": "0",
        }
        var chart = new sBarChart(chartId, data1, {
            title: '',
            bgColor: '#fff',     //背景颜色
            titleColor: 'red',      // 标题颜色
            titlePosition: 'top',       // 标题位置
            axisColor: '#000',       // 坐标轴颜色
            contentColor: '#cecece',     // 内容横线颜色
            padding: 50,
            paddingTop: 35,
            isloop: isFirstRun,//是否动画显示
        })
    }

    // #endregion
}
GetTimeAndType();//先获取更新时间，状态。并显示更新时间和状态以及数据。//myajax(true);//先执行一次，动画显示柱状图，然后再设置3秒执行一次
clearInterval(timer);//清除定时器
//timer = setInterval(myajax, 1000);
timer = setInterval(function () {
    if (tabtitle == "机组监测" || tabtitle == "柱状图监测") {
        GetTimeAndType();
    }
}, 1000);

// #endregion


// #region -------------------下载--------------------
//记录下载
    //function toExcel() {
    //    $.ajax({
    //        url: '/JZ/JZHandler.ashx',
    //        type: 'POST',
    //        data: {
    //            action: 'ToExcel',
    //            JZId: '<%=JZBH%>',
    //            cdname:cdselected,
    //            Start: $('#dd1').datebox('getValue'),
    //            End: $('#dd2').datebox('getValue')
    //        },
    //        beforeSend: function () {
    //            $.messager.progress({
    //                text: '正在处理中...'
    //            })
    //        },
    //        success: function (data) {
    //            $.messager.progress('close');
    //            //                    if (getBrowserType() == "Chrome") {
    //            //                        location.href = data; //谷歌文件下载方式
    //            //                    } else {
    //            //                        window.open(data); //ie文件下载方式
    //            //                    }
    //            download(data);
    //        }
    //    });
    //}





// #endregion


//#region---------------------柱状图刷新old--------------------
//var timer2;
//var innerhtml = '<object type="text/html" data="/JZ/jzzzt.aspx" width="100%" height="600px;"></object>';
//clearInterval(timer2);
//GetJZZZTHtml();//先执行一次
////    setInterval("GetJZZZTHtml()", 3000);
//timer2 = setInterval(function () {
//    if (tabtitle == "柱状图监测") {
//        GetJZZZTHtml();
//    }
//}, 5000);

//function GetJZZZTHtml() {
//    document.getElementById("jzzzt").innerHTML = innerhtml;
//}
//// #endregion



