//----------------------------------------------------------------------------------------
//����������˵�������պ�����������
//	CheckAll(Ctrls,obj)--------ȫѡ��ť
//	CheckKeyCode(obj,keyCodes)------������������Ƿ�����Ч���֣����������׼����
//	GetDateFromStrInput(strInput)---------����ͨ��ʽ�������ձ任��Date��������
//	getFrameFeature(FrameName,FeatureName,FrameClass)---��ȡFRAME�����ԣ�����FRAME�Ŀ��ߵ�ֵ��
//	getScreenFeature(FeatureName)--------��ȡ��ǰ��Ļ�����ԣ�����ֱ��ʵĿ��ߵ�ֵ��
//	GetStandardFormatStringFromDate(strInput)--------��Date�������ݱ任����ͨ��ʽ��������
//	fPopUpDlg(endtarget,object)--------�������ڶԻ����ڣ�����ֵ�����object����
//	fPopUpDlgDefine(endtarget,Width,Height)-------�������ڶԻ����ڣ����Զ��崰�ڴ�С����������ֵ
//  fPopUpDlgReturn(endtarget,Width,Height)--------�������ڶԻ����ڣ����Զ��崰�ڴ�С������ֵ
//	fWindowOpenDefine(endtarget,Width,Height,Type)-----��������
//	SetFeature(Width,Height)--------���õ������ڲ������Ի���
//	SetFeatureNormal(Width,Height)-----���õ������ڲ������Ի���
//  setFrameFeature(FrameName,FeatureName,FrameClass,FeatureValue)------------����Frame������
//	SetWinFeature(Width,Height)-----���õ������ڲ������ǶԻ���	
//	SetWinFeatureNormal(Width,Height)---���õ������ڲ������ǶԻ���	
//	ShowAreaInfoFinder(strFormObject,strFormObject1,strFormObject2)-------չ�����ѡ����
//	ShowBoothFinder(strFormObject,strFormObject1,strFormObject2,strFormObject3,strFormObject4,strFormObject5)----չ̨��ѡ��(��������������
//	ShowCommonFinder(strFormObject,strFormObject1,strFinderName,strCommonID)------ͨ��ѡ����
//	ShowCommonFinder(strFormObject,strFormObject1,strFinderName,strCommonID,PostBack)-----ͨ��ѡ����
//	ShowCommonFinderByLevel(strFormObject,strFormObject1,strFinderName,strEntry)-----ͨ�÷ֲ�ѡ����
//	ShowCommonFinderThree(strFormObject,strFormObject1,strFormObject2,strFinderName)----ͨ��ѡ����(��������������
//	ShowCommonMultiFinder(strFormObject,strFormObject1,strFinderName,strCommonID)-------ͨ��ѡ��������ѡ����
//	ShowCommonMultiFinderThree(strFormObject,strFormObject1,strFormObject2,strFinderName)-----ͨ�ö�ѡ��(��������������
//	ShowExhiAlertTime(strFormObject,strFormObject1,strFormObject2,strExhiCode)-----չ���ʼ��ʱ�������ʱ��(��������������
//	ShowServiceFinder(strFormObject,strFormObject1,strFormObject2,strFormObject3,strFormObject4,strFormObject5,strFormObject6,strFormObject7)----�����ѡ��(�����߸�������
//----------------------------------------------------------------------------------------

//ϵͳ��Ŀ¼
//var vRoot = "/Visitor";
var vRoot = "/EfServiceCenter"  ;


function GetPath(v)
{
	alert(vRoot+"/"+v);
	return vRoot+"/"+v;
}

  //----------------------------
  //���ܣ���������
  //������endtarget:Ŀ��ҳ�� Object:�������
  //����ֵ��Object
  //���ߣ������� 
  //-----------------------------
function fPopUpDlg(endtarget,object){
    var vReturn = window.showModalDialog(endtarget,'',SetFeature(400,310));
    if(typeof(vReturn)!="undefined") object.value=vReturn ;	
    
}

  //----------------------------
  //���ܣ����õ������ڲ���
  //������Width��ҳ���� Height��ҳ��߶�
  //����ֵ��string
  //���ߣ������� 
  //-----------------------------
function SetFeature(Width,Height){
	var iHeight=Height;
	var iWidth =Width;
	
	var obH=0;
	
	var iLeft=148 ;
	var iTop =24;
	
	//var iLeft=event.screenX - event.offsetX - 148 ;
	//var iTop =event.screenY - event.offsetY + 24;
	
	var Att="dialogHeight: " + iHeight + "px;"+"dialogwidth:" + iWidth + "px;dialogleft:" + iLeft + "px;dialogtop:" + iTop +"px;status:0;help:0;";
	 
	return Att;
}

  //----------------------------
  //���ܣ����õ������ڲ���
  //������Width��ҳ���� Height��ҳ��߶�
  //����ֵ��string
  //���ߣ������� 
  //-----------------------------
function SetFeatureNormal(Width,Height){
	var iHeight=Height;
	var iWidth =Width;
	
	var obH=0;
	
	var iLeft=148 ;
	var iTop =24;
	
	//var iLeft=event.screenX - event.offsetX - 148 ;
	//var iTop =event.screenY - event.offsetY + 24;
	
	var Att="dialogHeight: " + iHeight + "px;"+"dialogwidth:" + iWidth + "px;dialogleft:" + iLeft + "px;dialogtop:" + iTop +"px;";
	 
	return Att;
}

  //----------------------------
  //���ܣ���������
  //������endtarget:Ŀ��ҳ�� Width��ҳ���� Height��ҳ��߶�
  //����ֵ��No
  //���ߣ������� 
  //-----------------------------
function fPopUpDlgDefine(endtarget,Width,Height)
{
	var vReturn = window.showModalDialog(endtarget,'',SetFeature(Width,Height));
}

  //----------------------------
  //���ܣ���������
  //������endtarget:Ŀ��ҳ�� Width��ҳ���� Height��ҳ��߶�
  //����ֵ������ֵ
  //���ߣ������� 
  //-----------------------------
function fPopUpDlgReturn(endtarget,Width,Height)
{
	var vReturn = window.showModalDialog(endtarget,'',SetFeature(Width,Height));
	return vReturn;
}

  //----------------------------
  //���ܣ����õ������ڲ���
  //������Width��ҳ���� Height��ҳ��߶�
  //����ֵ��string
  //���ߣ������� 
  //-----------------------------
function SetWinFeature(Width,Height){
	var iHeight=Height;
	var iWidth =Width;
	
	var obH=0;
	
	var iLeft=148 ;
	var iTop =24;
	
	var Att="Height= " + iHeight + "px,"+"width=" + iWidth + "px,left=" + iLeft + "px,top=" + iTop +"px,toolbar=no, menubar=no, scrollbars=auto, resizable=no,location=no, status=no";
	
	return Att;
}

  //----------------------------
  //���ܣ����õ������ڲ���
  //������Width��ҳ���� Height��ҳ��߶�
  //����ֵ��string
  //���ߣ������� 
  //-----------------------------
function SetWinFeatureNormal(Width,Height){
	var iHeight=Height;
	var iWidth =Width;
	
	var obH=0;
	
	var iLeft=148 ;
	var iTop =24;
	
	var Att="Height= " + iHeight + "px,"+"width=" + iWidth + "px,left=" + iLeft + "px,top=" + iTop +"px,scrollbars=yes, resizable=yes";
	
	return Att;
}

  //----------------------------
  //���ܣ���������
  //������endtarget:Ŀ��ҳ�� Width��ҳ���� Height��ҳ��߶�
  //����ֵ��No
  //���ߣ������� 
  //-----------------------------
function fWindowOpenDefine(endtarget,Width,Height,Type)
{

	if(Type=="1") 
	{
		var Att = SetWinFeature(Width,Height) ;
		window.open(endtarget,"",Att);
	}
	else if(Type=="2") 
	{
	
		var Att = SetWinFeatureNormal(Width,Height) ;
		window.open(endtarget,"",Att);
	}
	else
	{
		var Att = SetWinFeature(Width,Height) ;
		window.open(endtarget,"",Att);
	}
		

}

  //----------------------------
  //���ܣ�����ͨ��ʽ�������ձ任��Date��������
  //������strInput ��׼��ʽ��2003-10-20
  //����ֵ��Date
  //���ߣ�hushiyong 
  //-----------------------------
function GetDateFromStrInput(strInput)
{
	var MyArray ;
	MyArray = strInput.split("-") ;
	alert(MyArray[1]);
	if(MyArray.length!=3)
		return new Date("1-1-1900") ;
	else
		return new Date(MyArray[1] + "-" + MyArray[2] + "-" + MyArray[0]) ;
}
  //----------------------------
  //���ܣ���Date�������ݱ任����ͨ��ʽ��������
  //������strInput Date
  //����ֵ����׼��ʽ��2003-10-20
  //���ߣ�hushiyong 
  //-----------------------------
function GetStandardFormatStringFromDate(strInput)
{
	return strInput.getYear() + "-" + (strInput.getMonth()+1) + "-" + strInput.getDate() ;
}


//----------------------------
  //���ܣ�ͨ��ѡ����
  //������strFormObject,strFormObject1:�ؼ�,strFinderName:ѡ������
  //����ֵ�����ݲ���
  //���ߣ������ 
  //-----------------------------
function ShowCommonFinder(strFormObject,strFormObject1,strFinderName,strCommonID)
{
	var strGotoPath = '/COMMON/Finder/CommonFinder/CommonFinderbrowse.aspx' ;
	if(window.screen.width == "800")
		window.open( vRoot  +  strGotoPath + '?FormObject=' + strFormObject + '&FormObject1=' + strFormObject1 + '&FinderName=' + strFinderName+ '&CommonID=' + strCommonID  ,strFinderName,"width=500,height=350,status=no,resizable=yes,scrollbars=yes,top=0,left=0") ;
	else
		window.open( vRoot  +  strGotoPath + '?FormObject=' + strFormObject + '&FormObject1=' + strFormObject1 + '&FinderName=' + strFinderName+ '&CommonID=' + strCommonID  ,strFinderName,"width=550,height=450,status=no,resizable=yes,scrollbars=yes,top=0,left=0") ;
	window.opener	= self ;	
}

function ShowCommonFinderleft(strFormObject,strFormObject1,strFinderName,strCommonID)
{
	var strGotoPath = '/COMMON/Finder/CommonFinder/CommonFinderbrowse.aspx' ;
	if(window.screen.width == "800")
		window.open( vRoot  +  strGotoPath + '?FormObject=' + strFormObject + '&FormObject1=' + strFormObject1 + '&FinderName=' + strFinderName+ '&CommonID=' + strCommonID  ,strFinderName,"width=500,height=350,status=no,resizable=yes,scrollbars=yes,top=0,left="+(window.screen.width-550)) ;
	else
		window.open( vRoot  +  strGotoPath + '?FormObject=' + strFormObject + '&FormObject1=' + strFormObject1 + '&FinderName=' + strFinderName+ '&CommonID=' + strCommonID  ,strFinderName,"width=550,height=450,status=no,resizable=yes,scrollbars=yes,top=0,left="+(window.screen.width-600)) ;
	window.opener	= self ;	
}
//----------------------------
  //���ܣ�ͨ��ѡ����
  //������strFormObject,strFormObject1:�ؼ�,strFinderName:ѡ������
  //����ֵ�����ݲ���
  //���ߣ������ 
  //-----------------------------
function ShowCommonFinder(strFormObject,strFormObject1,strFinderName,strCommonID,PostBack)
{
	var strGotoPath = '/COMMON/Finder/CommonFinder/CommonFinderbrowse.aspx';
	if(window.screen.width == "800")
		window.open( vRoot  +  strGotoPath + '?FormObject=' + strFormObject + '&FormObject1=' + strFormObject1 + '&FinderName=' + strFinderName+ '&CommonID=' + strCommonID + '&PostBack=' + PostBack   ,strFinderName,"width=500,height=350,status=no,resizable=yes,scrollbars=yes,top=0,left=0") ;
	else	
		window.open( vRoot  +  strGotoPath + '?FormObject=' + strFormObject + '&FormObject1=' + strFormObject1 + '&FinderName=' + strFinderName+ '&CommonID=' + strCommonID + '&PostBack=' + PostBack   ,strFinderName,"width=550,height=450,status=no,resizable=yes,scrollbars=yes,top=0,left=0") ;
	window.opener	= self ;
}

function ShowCommonFinderleft(strFormObject,strFormObject1,strFinderName,strCommonID,PostBack)
{
	var strGotoPath = '/COMMON/Finder/CommonFinder/CommonFinderbrowse.aspx';
	if(window.screen.width == "800")
		window.open( vRoot  +  strGotoPath + '?FormObject=' + strFormObject + '&FormObject1=' + strFormObject1 + '&FinderName=' + strFinderName+ '&CommonID=' + strCommonID + '&PostBack=' + PostBack   ,strFinderName,"width=500,height=350,status=no,resizable=yes,scrollbars=yes,top=0,left="+(window.screen.width-550)) ;
	else	
		window.open( vRoot  +  strGotoPath + '?FormObject=' + strFormObject + '&FormObject1=' + strFormObject1 + '&FinderName=' + strFinderName+ '&CommonID=' + strCommonID + '&PostBack=' + PostBack   ,strFinderName,"width=550,height=450,status=no,resizable=yes,scrollbars=yes,top=0,left="+(window.screen.width-600)) ;
	window.opener	= self ;
}
//----------------------------
  //���ܣ�ͨ�÷ֲ�ѡ����
  //������strFormObject,strFormObject1:�ؼ�,strFinderName:ѡ������,strEntry:�Ƿ����������һ��,����ֵΪ��Yes����No������Сд���С�
  //����ֵ�����ݲ���
  //���ߣ������ 
  //-----------------------------
function ShowCommonFinderByLevel(strFormObject,strFormObject1,strFinderName,strEntry)
{
	var strGotoPath = '/COMMON/Finder/CommonFinder/CommonFinderByLevel.aspx' ;
	if(window.screen.width == "800")
		window.open( vRoot  +  strGotoPath + '?FormObject=' + strFormObject + '&FormObject1=' + strFormObject1 + '&FinderName=' + strFinderName+ '&Entry=' + strEntry  ,"","width=500,height=350,status=no,resizable=yes,scrollbars=yes,top=50,left=100") ;
	else	
		window.open( vRoot  +  strGotoPath + '?FormObject=' + strFormObject + '&FormObject1=' + strFormObject1 + '&FinderName=' + strFinderName+ '&Entry=' + strEntry  ,"","width=550,height=450,status=no,resizable=yes,scrollbars=yes,top=200,left=200") ;
	window.opener	= self ;	
}

//----------------------------
  //���ܣ�ͨ��ѡ��������ѡ����
  //������strFormObject,strFormObject1:�ؼ�,strFinderName:ѡ������
  //����ֵ�����ݲ���
  //���ߣ������ 
  //-----------------------------
function ShowCommonMultiFinder(strFormObject,strFormObject1,strFinderName,strCommonID)
{
	var strGotoPath = '/COMMON/Finder/CommonMultiFinder/CommonMultiFinder.aspx' ;
	if(window.screen.width == "800")
		window.open( vRoot  +  strGotoPath + '?FormObject=' + strFormObject + '&FormObject1=' + strFormObject1 + '&FinderName=' + strFinderName+ '&CommonID=' + strCommonID  ,"","width=500,height=350,status=no,resizable=yes,scrollbars=yes,top=50,left=100") ;
	else	
		window.open( vRoot  +  strGotoPath + '?FormObject=' + strFormObject + '&FormObject1=' + strFormObject1 + '&FinderName=' + strFinderName+ '&CommonID=' + strCommonID  ,"","width=550,height=450,status=no,resizable=yes,scrollbars=yes,top=200,left=200") ;
	window.opener	= self ;	
}
//----------------------------
  //���ܣ�ͨ��ѡ����(��������������
  //������strFormObject,strFormObject1,strFormObject2:�ؼ�,strFinderName:ѡ������
  //����ֵ�����ݲ���
  //���ߣ������ 
  //-----------------------------
function ShowCommonFinderThree(strFormObject,strFormObject1,strFormObject2,strFinderName)
{
	if(window.screen.width == "800")
		window.open(vRoot + '/COMMON/Finder/CommonFinderThree/CommonFinderThreebrowse.aspx?FormObject=' + strFormObject + '&FormObject1=' + strFormObject1+ '&FormObject2=' + strFormObject2 + '&FinderName=' + strFinderName  ,"","width=500,height=350,status=no,resizable=yes,scrollbars=yes,top=50,left=100") ;
	else	
		window.open(vRoot + '/COMMON/Finder/CommonFinderThree/CommonFinderThreebrowse.aspx?FormObject=' + strFormObject + '&FormObject1=' + strFormObject1+ '&FormObject2=' + strFormObject2 + '&FinderName=' + strFinderName  ,"","width=550,height=450,status=no,resizable=yes,scrollbars=yes,top=200,left=200") ;
		
	window.opener	= self ;	
}
//----------------------------
  //���ܣ�ͨ�ö�ѡ��(��������������
  //������strFormObject,strFormObject1,strFormObject2:�ؼ�,strFinderName:ѡ������
  //����ֵ�����ݲ���
  //���ߣ������ 
  //-----------------------------
function ShowCommonMultiFinderThree(strFormObject,strFormObject1,strFormObject2,strFinderName)
{
	if(window.screen.width == "800")
		window.open(vRoot + '/COMMON/Finder/CommonFinderThree/CommonMultiFinderThree.aspx?FormObject=' + strFormObject + '&FormObject1=' + strFormObject1+ '&FormObject2=' + strFormObject2 + '&FinderName=' + strFinderName  ,"","width=500,height=350,status=no,resizable=yes,scrollbars=yes,top=50,left=100") ;
	else	
		window.open(vRoot + '/COMMON/Finder/CommonFinderThree/CommonMultiFinderThree.aspx?FormObject=' + strFormObject + '&FormObject1=' + strFormObject1+ '&FormObject2=' + strFormObject2 + '&FinderName=' + strFinderName  ,"","width=550,height=450,status=no,resizable=yes,scrollbars=yes,top=200,left=200") ;
	window.opener	= self ;	
}
//----------------------------
  //���ܣ�չ̨��ѡ��(��������������
  //������strFormObject(HallCode),strFormObject1(BoothCode),strFormObject2(BoothType),strFormObject3(Area)
  //����ֵ�����ݲ���
  //���ߣ�½���� 
  //-----------------------------
//function ShowBoothFinder(strFormObject,strFormObject1,strFormObject2,strFormObject3,strFormObject4,strFormObject5,strFormObject6,strHallCode)
//{	
//	if(window.screen.width == "800")
//		window.open(vRoot + '/COMMON/Finder/BoothFinder/BoothFinderBrowse.aspx?FormObject=' + strFormObject + '&FormObject1=' + strFormObject1+ '&FormObject2=' + strFormObject2 + '&FormObject3=' + strFormObject3+ '&FormObject4=' + strFormObject4+ '&FormObject5=' + strFormObject5 + '&FormObject6=' + strFormObject6  +  '&strHallCode=' + strHallCode  ,"","width=500,height=350,status=yes,resizable=yes,scrollbars=yes,top=50,left=100") ;
//	else
//		window.open(vRoot + '/COMMON/Finder/BoothFinder/BoothFinderBrowse.aspx?FormObject=' + strFormObject + '&FormObject1=' + strFormObject1+ '&FormObject2=' + strFormObject2 + '&FormObject3=' + strFormObject3+ '&FormObject4=' + strFormObject4+ '&FormObject5=' + strFormObject5 + '&FormObject6=' + strFormObject6  +  '&strHallCode=' + strHallCode  ,"","width=550,height=450,status=yes,resizable=yes,scrollbars=yes,top=200,left=200") ;
//	window.opener	= self ;	
//}

function ShowBoothFinder(strFormObject,strFormObject1,strFormObject2,strFormObject3,strFormObject4,strFormObject5,strFormObject6,strFormObject7,strHallCode)
{	
	if(window.screen.width == "800")
		window.open(vRoot + '/COMMON/Finder/BoothFinder/BoothFinderBrowse.aspx?FormObject=' + strFormObject + '&FormObject1=' + strFormObject1+ '&FormObject2=' + strFormObject2 + '&FormObject3=' + strFormObject3+ '&FormObject4=' + strFormObject4+ '&FormObject5=' + strFormObject5 + '&FormObject6=' + strFormObject6  + '&FormObject7=' + strFormObject7 + '&strHallCode=' + strHallCode  ,"","width=500,height=350,status=yes,resizable=yes,scrollbars=yes,top=50,left=100") ;
	else
		window.open(vRoot + '/COMMON/Finder/BoothFinder/BoothFinderBrowse.aspx?FormObject=' + strFormObject + '&FormObject1=' + strFormObject1+ '&FormObject2=' + strFormObject2 + '&FormObject3=' + strFormObject3+ '&FormObject4=' + strFormObject4+ '&FormObject5=' + strFormObject5 + '&FormObject6=' + strFormObject6  + '&FormObject7=' + strFormObject7 + '&strHallCode=' + strHallCode  ,"","width=550,height=450,status=yes,resizable=yes,scrollbars=yes,top=200,left=200") ;
	window.opener	= self ;	
}



//----------------------------
  //���ܣ������ѡ��(�����߸�������
  //������strFormObject(ServiceCode),strFormObject1(ServiceName),strFormObject2(ServiceType),strFormObject3(CompanyName),strFormObject3(Price),strFormObject3(ServiceUnit),strFormObject3(Actor)
  //����ֵ�����ݲ���
  //���ߣ�½���� 
  //-----------------------------
function ShowServiceFinder(strFormObject,strFormObject1,strFormObject2,strFormObject3,strFormObject4,strFormObject5,strFormObject6,strFormObject7,strFormObject8)
{
	if(window.screen.width == "800")
		window.open(vRoot + '/COMMON/Finder/ServiceFinder/ServiceFinderBrowse.aspx?FormObject=' + strFormObject + '&FormObject1=' + strFormObject1+ '&FormObject2=' + strFormObject2 + '&FormObject3=' + strFormObject3+ '&FormObject4=' + strFormObject4+ '&FormObject5=' + strFormObject5 + '&FormObject6=' + strFormObject6+ '&FormObject7=' + strFormObject7+ '&FormObject8=' + strFormObject8 ,"","width=500,height=350,status=no,resizable=yes,scrollbars=yes,top=50,left=100") ;	
	else	
		window.open(vRoot + '/COMMON/Finder/ServiceFinder/ServiceFinderBrowse.aspx?FormObject=' + strFormObject + '&FormObject1=' + strFormObject1+ '&FormObject2=' + strFormObject2 + '&FormObject3=' + strFormObject3+ '&FormObject4=' + strFormObject4+ '&FormObject5=' + strFormObject5 + '&FormObject6=' + strFormObject6+ '&FormObject7=' + strFormObject7+ '&FormObject8=' + strFormObject8 ,"","width=550,height=450,status=no,resizable=yes,scrollbars=yes,top=200,left=200") ;
	window.opener	= self ;	
}
//--------------------------------
//���ܣ�������������Ƿ�����Ч���֣����������׼����
//������obj:Ҫ������ı���keyCodes:event.keyCode
//���ߣ�½����
//--------------------------------
function CheckKeyCode(obj,keyCodes)
{
	if(event.keyCode==110 || event.keyCode==190)
	{
		if(obj.value.indexOf('.')!=-1)
		{
			return false;
		}
		else
		{
			return true;
		}
	}
	else
	{
		var keyCodes=new Array(8,9,13,16,17,35,36,37,38,39,40,46,48,49,50,51,52,53,54,55,56,57,96,97,98,99,100,101,102,103,104,105);
		for(var i=0;i<keyCodes.length;i++)
		{
			if(event.keyCode==keyCodes[i])
			{
				return true;
			}
		}
		return false;
	}
}
//----------------------------
  //���ܣ�չ���ʼ��ʱ�������ʱ��(��������������
  //������strFormObject,strFormObject1,strFormObject2:�ؼ�,strExhiCode:չ�����
  //����ֵ�����ݲ���
  //���ߣ���Ȩ 
  //-----------------------------
function ShowExhiAlertTime(strFormObject,strFormObject1,strFormObject2,strExhiCode)
{
	if(window.screen.width == "800")
		window.open(vRoot + '/Exhibition/Exhibit/ExhiAlertTimeChoose.aspx?FormObject=' + strFormObject + '&FormObject1=' + strFormObject1+ '&FormObject2=' + strFormObject2 + '&ExhiCode=' + strExhiCode  ,"","width=500,height=350,status=no,resizable=yes,scrollbars=yes,top=50,left=100") ;
	else	
		window.open(vRoot + '/Exhibition/Exhibit/ExhiAlertTimeChoose.aspx?FormObject=' + strFormObject + '&FormObject1=' + strFormObject1+ '&FormObject2=' + strFormObject2 + '&ExhiCode=' + strExhiCode  ,"","width=550,height=450,status=no,resizable=yes,scrollbars=yes,top=200,left=200") ;
	window.opener	= self ;	
}
//----------------------------
  //���ܣ�չ�����ѡ����
  //������strFormObject,strFormObject1:�ؼ�
  //����ֵ�����ݲ���
  //���ߣ����� 
  //-----------------------------
function ShowAreaInfoFinder(strFormObject,strFormObject1,strFormObject2)
{
	var strGotoPath = '/COMMON/Finder/CommonFinder/SecAreaInfoList.aspx' ;
	if(window.screen.width == "800")
		window.open( vRoot  +  strGotoPath + '?FormObject=' + strFormObject + '&FormObject1=' + strFormObject1,"","width=500,height=350,status=no,resizable=yes,scrollbars=yes,top=50,left=100") ;
	else
		window.open( vRoot  +  strGotoPath + '?FormObject=' + strFormObject + '&FormObject1=' + strFormObject1,"","width=550,height=450,status=no,resizable=yes,scrollbars=yes,top=200,left=200") ;
	window.opener	= self ;	
}

//----------------------------
  //���ܣ�ȫѡ��ť
  //������Ctrls:Ҫȫѡ��CheckBox  Array ,obj:ȫѡ��CheckBox
  //����ֵ����
  //���ߣ�½����
  //-----------------------------
function CheckAll(Ctrls,obj)
{
	for(var i=0;i<Ctrls.length;i++)
	{
		if(document.all[Ctrls[i]].disabled==false)
		{
			try
			{
				if(document.all[obj].checked)
				{
					document.all[Ctrls[i]].checked=true;
				}
				else
				{
					document.all[Ctrls[i]].checked=false;
				}
			}
			catch(e){}
		}
	}
}

//-----------------
function setObjDisable(obj)
{
	obj.setAttribute("disabled","disabled");
}

//-----------------
function removeDisable(obj)
{
	obj.removeAttribute("disabled")
}

//---------------
//���ҳ���checkbox�Ƿ�ѡ������
//����:Ctrls:ҳ��ȫ���ؼ�Ԫ��
//����ֵ:true��false
//---------------
function getFromCheckbox(Ctrls)
{
	var HaveData = false;
	for(var i=0;i<Ctrls.length;i++)
	{
		if(Ctrls[i].type=='checkbox')
		{
			if(Ctrls[i].checked)
			{
				HaveData = true;
				break;
			}
		}
	}
	return HaveData;
}

//-----------------
//ȫѡ��ťѡ��,����button�ؼ������,���򲻿���
//����:obj:ȫѡ��checkbox,objArray:button�ؼ���
//����ֵ:��
//����:guowenjuan
//-----------------
function DisabledArray(objValue,objArray)
{
	for(var i=0;i<objArray.length;i++)
	{
		if(objValue)
			removeDisable(document.getElementById(objArray[i]));
		else
			setObjDisable(document.getElementById(objArray[i]));
	}
}

//-----------------
//checkbox��ť��ѡ��,����button�ؼ������
//����:Ctrls:ҳ��ȫ���ؼ�Ԫ�� ,objArray:�ܿصĿؼ�id����
//����ֵ:��
//����:guowenjuan
//-----------------
function ArrayDisabled(Ctrls,objArray)
{
	var f = getFromCheckbox(Ctrls);
	DisabledArray(f,objArray);
}

//-----------------
//ȫѡ��ť
//����:Ctrls:ҳ��ȫ���ؼ�Ԫ�� ,obj:ȫѡ��CheckBox
//����ֵ:��
//����:guowenjuan
//-----------------
function CheckAlls(Ctrls,obj)
{
	for(var i=0;i<Ctrls.length;i++)
	{
		if(Ctrls[i].type == 'checkbox')
		{
			if(obj.checked)
			{
				obj.value = '1';
				Ctrls[i].checked = true;
			}
			else
			{
				obj.value = '0';
				Ctrls[i].checked = false;
			}
		}
	}
}

//�����滻ҳ�����ύ�ĵ����������������������ָ����õ������ַ�guowenjuan
function FormatString(Answer)
{
	var Str = Answer;
	Str = Str.replace(':','��');
	Str = Str.replace(';','��');
	Str = Str.replace('|','��');
	Str = Str.replace('(','��');
	Str = Str.replace(')','��');
	Str = Str.replace('%','');
	return Str;
}

//----------------------------
  //���ܣ���ȡ��ǰ��Ļ�����ԣ�����ֱ��ʵĿ��ߵ�ֵ��
  //������FeatureName------���������ַ���������width����ȣ�,height���߶ȣ�
  //����ֵ������ֵ
  //���ߣ����
  //-----------------------------
function getScreenFeature(FeatureName)
{
	var strFun="screen."+FeatureName;
	return eval(strFun);
}

//----------------------------
  //���ܣ���ȡFRAME�����ԣ�����FRAME�Ŀ��ߵ�ֵ��
  //������
  //	FrameName------Frame��������ơ�
  //	FeatureName------���������ַ���������width����ȣ�,height���߶ȣ�
  //	FrameClass-------��ܵļ���0����ʾ�����ӣ�1����ʾ�ӵ���(ָ�ڿ���ڵ�ҳ����ʹ�ñ���ܻ�������ܵ�����)
  //	��������һ��Frame�ڲ���ȡ�Լ�����Ϣwindow.parent.document.getElementById("FrameName")��
  //����ֵ������ֵ
  //���ߣ����
  //-----------------------------
function getFrameFeature(FrameName,FeatureName,FrameClass)
{
	var strFun="window";	
	if(FrameClass>0) //�ӵ������������Ҫ���parent��ʶ
	{
		for(i=0;i<FrameClass;i++)
		{
			strFun=strFun+".parent";
		}
	}	
	strFun=strFun+".document.getElementById(\""+FrameName+"\")."+FeatureName;	
	return eval(strFun);
}

//----------------------------
  //���ܣ�����FRAME�����ԣ�����FRAME�Ŀ��ߵ�ֵ��
  //������
  //	FrameName------Frame��������ơ�
  //	FeatureName------���������ַ���������width����ȣ�,height���߶ȣ�
  //	FrameClass-------��ܵļ���0����ʾ�����ӣ�1����ʾ�ӵ���(ָ�ڿ���ڵ�ҳ����ʹ�ñ���ܻ�������ܵ�����)
  //    FeatureValue-----���ÿ�ܵ�ĳ������
  //	��������һ��Frame�ڲ���ȡ�Լ�����Ϣwindow.parent.document.getElementById("FrameName")��
  //����ֵ������ֵ
  //���ߣ����
  //-----------------------------
function setFrameFeature(FrameName,FeatureName,FrameClass,FeatureValue)
{
	var strFun="window";	
	if(FrameClass>0) //�ӵ������������Ҫ���parent��ʶ
	{
		for(i=0;i<FrameClass;i++)
		{
			strFun=strFun+".parent";
		}
	}	
	strFun=strFun+".document.getElementById(\""+FrameName+"\")."+FeatureName+"='"+FeatureValue+"'";	
	eval(strFun);
}


//----------------------------
  //���ܣ���ȡͼƬ�����ԭʼ�߶ȺͿ��
  //������
  //	picUrl------ͼƬ��Url��
  //	featureName------width��height
  //����ֵ��
  //���ߣ����
  //-----------------------------
function getImageActualSize(picUrl,featureName)
{
	//���Ǹ��ܱ��İ취����ò���
	var divObj;
	var imgObj;
	//�ж���Ҫʹ�õ�divԪ���Ƿ����
	if(typeof(divHidden)!='object')
	{
		document.write("<div id='divHidden' ></div>");
	}
	divObj=divHidden;
	//�ж����ص�ͼ�ζ����Ƿ����
	if(typeof(divObj.imgHidden)!='object')
	{
		imgObj=divObj.appendChild(document.createElement("<img id='imgHidden' src='"+picUrl+"'>"));		
	}
	else
	{
		imgObj=divObj.imgHidden;
	}
	imgObj.visibility="hidden";
	return eval("imgObj."+featureName);
}

//----------------------------
  //���ܣ��ж�һ��ҳ��Ԫ���Ƿ����
  //������
  //	elementName------Ԫ������
  //����ֵ��true/false
  //���ߣ����
  //-----------------------------
function isElementExist(elementName)
{
	var bResult=false;
	var cObj=eval("document.all(\""+elementName+"\")");

	if(cObj!=null)
	{
		bResult=true;
	}
	
	return bResult;
}

//��ȡһ��Cookie��ֵ
function getcookie(obj)
{
    var aa = new RegExp("��","ig");
    var bb = new RegExp("��","ig");
    var cookieString = new String(document.cookie);
	var cookieHeader = "(" + obj.id + ")";
	var cookiefooter = "(/" + obj.id + ")";
	var beginPosition = cookieString.indexOf(cookieHeader);
	var endPosition = cookieString.indexOf(cookiefooter);
	if (beginPosition != -1)
	{
		return cookieString.substring(beginPosition + cookieHeader.length,endPosition).replace(aa,";").replace(bb,"=");
	}
	else
	{
		return "";
	}
}

//ȡ��һ���ؼ�cookies
function getEnterControl(obj)
{
	var cookieString = new String(document.cookie);
	var cookieHeader = "(/" + obj.id + ")";
	var beginPosition = cookieString.indexOf(cookieHeader)+cookieHeader.length+1;
	var endPosition = cookieString.indexOf(")",beginPosition);
	if(endPosition != -1)
		return document.getElementById(cookieString.substring(beginPosition,endPosition));
	else//���򷵻�˳�����һ��
		return null;
}

function  getNextControl(Ctrls,obj)
{
	for(var i=0;i<Ctrls.length;i++)
	{
		if(Ctrls[i].Orders != null && parseInt(Ctrls[i].Orders) > parseInt(obj.Orders))
		{
			return Ctrls[i];
		}
	}
	return obj;
}

function getPreControl(Ctrls,obj)
{
	for(var i = Ctrls.length-1;i >= 0;i--)
	{
		if(Ctrls[i].Orders != null && parseInt(Ctrls[i].Orders) < parseInt(obj.Orders))
		{
			return Ctrls[i];
		}
	}
	return obj;
}

//��Cookie��ȡ�����id��ͬ��cookieֵ���������󣬲�ѡ�ж���
function DoFocus(obj)
{
    try
	{
		if(obj.value == null || obj.value == "")
		{
			var  objValue = getcookie(obj);
			if(obj.id == 'VisitorCard')
				obj.value = parseInt(objValue)+1;
			else
				obj.value = objValue;
			obj.select();
		}
	}
	catch(e){}
}

//�������ҳ����Ӧ��
//	1.���ϼ�ͷ�����ͷ���ܹ�����ҳ��˳�����һ���ؼ���
//	2.���س����¼�ͷ���Ҽ�ͷ���ܹ�����ҳ��˳�����һ���ؼ���
//	3.�����ǰ�������Ϊ�����򣬰����ּ�����ѡ��ѡ��
//	4.��shift+alt���ܹ�����뽹�����ͬ����cookieֵ����Ȼcookie��Ҫ���ڣ�
//	5.����"�س�"+Ctrl����"�س�"+alt�����ո�+Ctrl����"�ո�"+alt���е�һ�֣�ֱ���ύ��ҳ��
//	   ��������ҳ��ı��水ťΪ"BtnSave"���Ҵ���__doPostBack����
//	6.��ctrl+alt��ҳ�����пؼ��ܹ����ͬ����cookieֵ����Ȼcookie��Ҫ���ڣ�
//==============================================================================================
//	Ctrls��ҳ��ؼ����󼯺�
//	obj����ǰ�������
function DoKeyDown(Ctrls,obj)
{
    //�����ּ�ѡ���������ֵ��objΪ���������
	if(obj.tagName.toLowerCase() == "select")
	{
		var index="";
		if((event.keyCode>=48 && event.keyCode<=57))
		{
			index = String.fromCharCode(event.keyCode)-1;
		}
		else if(event.keyCode>=97 && event.keyCode<=105)
		{
			index = String.fromCharCode(event.keyCode-48)-1;
		}
		try
		{
		    obj.options[index].selected = true;
		}
		catch(e){}
	}
	//ͬʱ����shift+alt������cookie�ж���obj��ֵ
	if(event.shiftKey && event.altKey )
	{
		obj.value = getcookie(obj.id);
	}
	//����"�س�"+Ctrl����"�س�"+alt�����ո�+Ctrl����"�ո�"+alt���е�һ�֣�ֱ���ύ��ҳ��
	//��������ҳ��ı��水ťΪ"BtnSave"���Ҵ���__doPostBack����
    if((event.keyCode==13 || event.keyCode==83)  &&  (event.ctrlKey || event.altKey))
    {
		try
      	{
         	if (check_form1(Form1))
         	{
         		__doPostBack('BtnSave','');
         	}
      	}
      	catch(e){}
      	return false;
    }
    //��ҳ��ؼ����Ͻ��еĴ���
	//ͬʱ����ctrl+alt������cookie�и�ҳ�����ֵ
	if(event.ctrlKey && event.altKey)
	{
		for(var i=0;i<Ctrls.length;i++)
		{
			try
			{	
				var CtrlValue = getcookie(Ctrls[i].id);
				if(Ctrls[i].Orders != null && CtrlValue != "")
				{
					Ctrls[i].value = CtrlValue;
				}
			}
			catch(e){}
		}
	}
	//textarea�Ĵ������
	if(obj.tagName.toLowerCase() == "textarea" && obj.value != "")
	{
		//ֵ��Ϊ�գ�������
		return;
	}
	else
	{
		var NextObj;
		if(event.keyCode == 13)
		{
			//����cookie����һ���ؼ�
			NextObj = getEnterControl(obj);
			if(NextObj == null)
			{
				NextObj = getNextControl(Ctrls,obj);
			}
			NextObj.focus();
		}
		else if(event.keyCode == 38)//UP��˳��������һ���ؼ�
		{
			getPreControl(Ctrls,obj).focus();
		}
		else if(event.keyCode == 40)//DOWN��˳��������һ���ؼ�
		{
			getNextControl(Ctrls,obj).focus();
		}
		else if(event.keyCode == 37)//PRE
		{
			if(obj.value !="" && (obj.type == "text" || obj.tagName.toLowerCase() == "textarea"))
			{}
			else
				getPreControl(Ctrls,obj).focus();
		}
		else if(event.keyCode==39 )//NEXT
		{
			if(obj.value !="" && (obj.type == "text" || obj.tagName.toLowerCase() == "textarea"))
			{}
			else
				getNextControl(Ctrls,obj).focus();
		}
	}
}

//����һ��Cookie��ֵ
function setcookie(name,value)
{
	var aa = new RegExp(";","ig");
    var bb = new RegExp("=","ig");
����var Then = new Date();

	Then.setTime(Then.getTime() + 30*24*60*60*1000 ); //30��
	document.cookie = name + "=" + value.replace(aa,"��").replace(bb,"��") + ";expires="+ Then.toGMTString()
}

//=============================================================================================
//����һ�ο϶���ִ�еĳ��򣬶�����һ������
  try
  {
	var TimeMinute=0;
	var TimeSecond=0;
	var OutTimeText='�����ı༭ʱ�䳬��6���ӣ���ע�Ᵽ�档';
	var OTT='';
	var TS=0;
	var TS=0;
	//��״̬����ʾҳ��ͣ��ʱ��ĺ���
	function showtime()
	{
		if(TimeSecond>59){
			TimeMinute++;
			TimeSecond=0;
		}
		if(TimeMinute>59){
			TimeMinute=0;
		}
		if(TimeSecond<10){
			TS="0"+TimeSecond;
		}else{
			TS=TimeSecond;
		}
		if(TimeMinute<10){
			TM="0"+TimeMinute;
		}else{
			TM=TimeMinute;
		}
		if(TimeMinute>=6){
			if(TimeSecond%2==0){
				OTT=OutTimeText;
			}else{
				OTT=OutTimeText;
			}
		}
		if(TimeMinute>=10 && TimeSecond==0){
			OutTimeText='�����ı༭ʱ�䳬��10���ӣ���ˢ�»����µ�¼';
		}
		window.status="ҳ��ͣ��ʱ��["+TM+":"+TS+"]"+OTT;
		TimeSecond++;
		setTimeout('showtime()',1000);
	}
	showtime(); //ִ����ʾͣ��ʱ�亯��
}
catch(e){}

//document.body.onload = function onload()
function onLoad()
{
	var Orders = 0;
	for(var i=0;i<document.forms[0].elements.length;i++)
	{
		var obj = document.forms[0].elements[i];
		if(obj.type == "text" || obj.tagName.toLowerCase() == "textarea")
		{
			if(obj.disabled == false)
			{
				obj.Orders = Orders.toString();
				obj.onfocus = function onfocus(){DoFocus(this);}
				obj.onkeydown = function onkeydown(){DoKeyDown(document.forms[0].elements,this);}
				Orders++;
			}
		}
		else if(obj.tagName.toLowerCase() == "select")
		{
			if(obj.disabled == false)
			{
				obj.Orders = Orders.toString();
				obj.onfocus=function onfocus(){DoFocus(this);}
				obj.onkeydown = function onkeydown(){DoKeyDown(document.forms[0].elements,this);}
				Orders++;
			}
		}
		else if(obj.type == "button")
		{
			if(obj.disabled == false)
			{
				obj.Orders = Orders.toString();
				obj.onkeydown = function onkeydown(){DoKeyDown(document.forms[0].elements,this);}
				Orders++;
			}
		}
		//alert(obj.type+"="+obj.id+"="+obj.Orders);
	}
}

//������������棬��ҳ��ֵ���浽cookie������¼��¼��˳��
//document.body.onbeforeunload = function onbeforeunload()
function unLoad()
{
  	var cookieString = new String(document.cookie);
	var cookieHeader = 'WebCookies=';
	var cookiefooter = ";";
	var beginPosition = cookieString.indexOf(cookieHeader);
	var endPosition =cookieString.indexOf(cookiefooter);
	var WebCookies = '';
	if(beginPosition != -1)
	{
		WebCookies = cookieString.substring(beginPosition+ cookieHeader.length,endPosition);
	}
	//alert(WebCookies);
	for(var i=0;i<document.forms[0].elements.length;i++)
	{
		var obj = document.forms[0].elements[i];
		if(obj.Orders != null)
		{
			var objCookie = obj.value;
			if(WebCookies.indexOf('(' + obj.id + ')') != -1 && WebCookies.indexOf('(/' + obj.id + ')') != -1)
			{
				var aaaa = WebCookies.substring(WebCookies.indexOf('(' + obj.id + ')'),WebCookies.indexOf('(/' + obj.id + ')') + obj.id.length + 3);
				if(objCookie != '')
				{
					//var aaaa = new RegExp('^.*\('+obj.id+'\)'+'.*\(\/'+obj.id+'\).*$','g');
					//aaaa.Multiline = true;
					//WebCookies = WebCookies.replace(aaaa,'(' + obj.id + ')' + objCookie + '(/' + obj.id + ')');
					WebCookies = WebCookies.replace(aaaa,'(' + obj.id + ')' + objCookie + '(/' + obj.id + ')');
				}
				else
				{
					WebCookies = WebCookies.replace(aaaa,'');
				}
			}
			else if(objCookie != '')
			{
				WebCookies += '(' + obj.id + ')' + objCookie + '(/' + obj.id + ')';
			}
		}
	}
	setcookie('WebCookies',WebCookies);
	//alert(WebCookies);
}

//=============================================================================================
//��ȡĳ���������ѡ���ı�
function getSelectText(selectName)
{
	var objSelect = document.all(selectName);
	var selectedText = "";
	for(var i = 0; i < objSelect.options.length; i++)
	{
		if (objSelect.options(i).selected)
		{
			if (objSelect.options(i).value != "")
				selectedText += objSelect.options(i).text + ",";
		}
	}
	return selectedText.substring(0, selectedText.length - 1);
}

//����ĳ���������ѡ��ֵ
function setSelectText(selectName, strText)
{
	if ( strText == "" ) return;

	var objSelect	= document.all(selectName);

	var strArray = strText.split(",");
	for ( var i = 0; i < objSelect.options.length; i++)
	{
		objSelect.options(i).selected = false;
		for ( var k = 0; k < strArray.length; k++ )
		{
			if ( objSelect.options(i).text == strArray[k] )
			{
				objSelect.options(i).selected = true;
				break;
			}
		}
	}
}

//��ȡCheckBox��Radio�����ѡ��ֵ�����ѡ�ж�����Զ��ŷָ�
function GetCheckedValue(elementName) {
	var obj = GetObject(elementName);
	var nLength = GetLength(elementName);
	var strValue = "";
	switch (nLength) {
		case 0:
			break;
		case 1:
			if (obj.checked)
				strValue = obj.value;
			break;
		default:
			for (var i = 0; i < nLength; i++) {
				if (obj.item(i).checked) {
					if (strValue == "")
						strValue = obj.item(i).value;
					else
						strValue += "," + obj.item(i).value;
			    }
			}
	}
	return strValue;
}

// ȡԪ������ĳ��ȡ�
function GetLength(element)
{
    var obj = GetObject(element);
    if (obj == null)
        return 0;
    var nLength = obj.length;
    if (isNaN(nLength) || obj.tagName=="SELECT")
        nLength = 1;
    return nLength;
}

/**
 * ������Ϊһ������ֱ�ӷ��ش˶���������Ϊһ�ַ������򷵻��Դ��ַ���ΪID�Ķ���(����󼯺�)��
 */
function GetObject(elementName) {
	var obj;
	if (typeof elementName == "object") {
		obj = elementName;
	}
	else {
		obj = document.all(elementName);
	}
	return obj;
}

//�ַ����Ƿ�Ϊ����
function IsNumber(str){
    if (str.length == 0)
        return true;
    for (var i=0;i < str.length;i++)
    {
        if ((str.substring(i,i+1) < '0') || (str.substring(i,i+1) > '9'))
            return false;
    }
    return true;
}

