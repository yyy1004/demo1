<!--
//***********Ĭ�����ö���.*********************
tPopWait = 50;		//ͣ��tWait�������ʾ��ʾ��
tPopShow = 6000;		//��ʾtShow�����ر���ʾ
showPopStep = 20;
popopacity = 95;
fontcolor = "#000000";
bgcolor = "Honeydew";
bordercolor = "#9d95bf";

//***************�ڲ���������*****************
sPop = null;
curShow = null;
tFadeout = null;
tFadeIn = null;
tFadeWaiting = null;
//����һ��CSS��ʽ���һ����
document.write("<style type='text/css' id='defaultPopStyle'>");
document.write(".cPopText {  background-color: " + bgcolor + ";color:" + fontcolor + "; border: 1px " + bordercolor + " solid;font-color: padding-right: 4px; padding-left: 4px; height: 20px; padding-top: 2px; padding-bottom: 2px; filter: Alpha(opacity=0)}");
document.write("</style>");
document.write("<div id='dypopLayer' style='position:absolute;z-index:1000;font-size: 12px; ' class='cPopText'></div>");



function showPopupText()
{
var o = event.srcElement;	//ȡ���¼���Ԫ��ID
	MouseX=event.x;	//Ԫ�ص�X����
	MouseY=event.y;	//Ԫ�ص�Y����
	if(o.alt != null && o.alt != "")	//����alt���Բ���Ϊ��ʱ	
	{
			o.dypop = o.alt;
			o.alt = "";
	}
    if(o.title != null && o.title != "")
	{
			o.dypop = o.title;
			o.title = "";
	}	//����title���Բ���Ϊ��ʱ
	if(o.dypop != sPop)		//���Ԫ�ؾ���dypop���� 
	{
			sPop = o.dypop;
			clearTimeout(curShow);
			clearTimeout(tFadeout);
			clearTimeout(tFadeIn);
			clearTimeout(tFadeWaiting);	
			//----------------��sPopΪ��ʱ��dypopLayer��Ϊ���ɼ�
			if(sPop == null || sPop == "") 
			{
				dypopLayer.innerHTML = "";
				dypopLayer.style.filter = "Alpha()";
				dypopLayer.filters.Alpha.opacity = 0;	
			}
			else 
			{
				if(o.dyclass != null) 
					popStyle = o.dyclass; 
				else 
					popStyle="cPopText";
				
				curShow=setTimeout("showIt()",tPopWait);
			}
			
	}
}

function showIt()
{
	dypopLayer.className=popStyle;
	dypopLayer.innerHTML=sPop;
	popWidth=dypopLayer.clientWidth;
	popHeight=dypopLayer.clientHeight;
	if(MouseX+12+popWidth>document.body.clientWidth) popLeftAdjust=-popWidth-24;
		else popLeftAdjust=0;
	if(MouseY+12+popHeight>document.body.clientHeight) popTopAdjust=-popHeight-24;
		else popTopAdjust=0;
	dypopLayer.style.left=MouseX+12+document.body.scrollLeft+popLeftAdjust;
	dypopLayer.style.top=MouseY+12+document.body.scrollTop+popTopAdjust;
	dypopLayer.style.filter="Alpha(opacity=0)";
	fadeout();
}

function fadeout(){
	if(dypopLayer.filters.Alpha.opacity<popopacity) {
		dypopLayer.filters.Alpha.opacity+=showPopStep;
		tFadeout=setTimeout("fadeout()",1);
		}
		else {
			dypopLayer.filters.Alpha.opacity=popopacity;
			tFadeWaiting=setTimeout("fadeIn()",tPopShow);
			}
}

function fadeIn(){
	if(dypopLayer.filters.Alpha.opacity>0) {
		dypopLayer.filters.Alpha.opacity-=1;
		tFadeIn=setTimeout("fadeIn()",1);
		}
}
document.onmouseover = showPopupText;	//������onMouseOver�¼�ʱ,����showPopupText����
-->