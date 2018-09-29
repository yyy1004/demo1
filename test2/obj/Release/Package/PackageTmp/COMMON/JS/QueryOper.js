
//取消按钮对应的事件：关闭窗口
function docancel()
{
   top.close ();
}

//把文本框的值设为用户在对话框中选择的值
//objValueText :需要设定值的文本框
//objColumn:存放列名称的字段
//objTName存放表代码的hidden
//objType字段类型.  D 代表日期型
function GetValuList(objColumn,objValueText,objTName,objType)
{
	if(objColumn.selectedIndex == 0)
	{
		alert("请选择条件列！");
		return;
	}
	var strValue = objColumn.value;
	var strColumn = strValue.substring(0,strValue.indexOf("@")).toUpperCase();
        var strCol = strColumn;
	
        //GetValueList.aspx页面是要把该列所有值列出来，供用户选择。
        //var strURL = "../query/GetValueList.aspx?PTYPE="+objType.value+"&SQL=SELECT DISTINCT " + strCol + " FROM  " +objTName.value + " order by  " + strCol;
        var strURL = "../DataQuery/GetValueList.aspx?PTYPE="+objType.value+"&COLNAME=" + strCol + "&TNAME=" +objTName.value;
        var strReturn = showModalDialog("../common/frame.htm",strURL,"font-size:10px;dialogWidth:700px;dialogHeight:500px");
	if (strReturn == undefined || strReturn == "")
	{
		strReturn = objValueText.value;
	}
	objValueText.value = strReturn;
}
