
var ObjXMLHttp = new ActiveXObject("Microsoft.XMLDOM");

function UpdateVisitorAttr(IsMain,VisitorIDList,TargetField,NewValue)
{
	var SendData=VisitorIDList+";"+TargetField+";"+NewValue;
	
    var UrlPath = vRoot+"/Common/Ajax/VisitorTreat.aspx?SendData="+SendData;
    GetRemoteInfo(UrlPath);
     
    UpdateVisitorInfo(IsMain,TargetField,NewValue);
}

function GetRemoteInfo(UrlPath)
{    
     var strA = "";
     ObjXMLHttp = new ActiveXObject("Microsoft.XMLHTTP");
     ObjXMLHttp.open("POST",UrlPath,false);
     ObjXMLHttp.setRequestHeader("Content-Length",strA.length);
     ObjXMLHttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");
     ObjXMLHttp.send(strA);
} 

function  UpdateVisitorInfo(IsMain,TargetField,NewValue)
{
    var ResponseStr = ObjXMLHttp.responseText ;
    var ObjXmlDom = new ActiveXObject("Microsoft.XMLDOM");;
    try{
	    ObjXmlDom.loadXML(ResponseStr);

		var oRoot=ObjXmlDom.documentElement;
		//���³ɹ�
		if(parseInt(oRoot.childNodes.item(0).text)>0)
		{
			if(IsMain)	//����¼��Ϣ����������¼��ѭ������ÿ����ѡ�еļ�¼
			{
				var ChkList=document.all('ChkVisitor');
				var VisitorIDList="";
				if(isNaN(ChkList.length))
				{
					if(ChkList.checked)
					{
						document.getElementById(TargetField+'_0').innerText=NewValue;
					}
				}
				else
				{
					for(var i=0;i<ChkList.length;i++)
					{
						if(ChkList[i].checked)
						{
							document.getElementById(TargetField+'_'+i).innerText=NewValue;
						}
					}
				}
			}
			else	//��������¼
			{
		        if(document.getElementById(TargetField).tagName=="SPAN")
		        {
				    document.getElementById(TargetField).innerText=NewValue;
				}
				else
				{
    				document.getElementById(TargetField).value=NewValue;
				}
			}
		}
		else
		{
			alert("��Ϣ����ʧ�ܣ������ԣ�");
		}
    }catch(e){}
}

function padRight(str,length,sign)
{   
    if(str.length>=length)  return str;   
    else    return padRight(str+sign,length,sign);   
} 

