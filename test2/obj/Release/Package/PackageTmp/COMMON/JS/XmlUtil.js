//-----------------------------------------------------------------------------
//���ļ����������б�
//	1.function createNode(NodeName,AttrName,AttrValue,TextValue)
//		--�������ܣ���������Ĳ���������һ���ڵ�
//	2.function insertNode(pNode,cNode,iPosition)
//		--�������ܣ���ָ���ڵ����Ŀ��ڵ��ָ��λ��֮ǰ
//	3.function appendTableRowAt(tableIdName,trClassName,tdClassName,arrHtml,rowIndex)
//		--�������ܣ���Table��һ���Ϸ����һ��
//	4.function hasElementChild(pNode)
//		--�������ܣ��ж�һ���ڵ��Ƿ����NODE_ELEMENT���͵��ӽڵ�
//	5.function isElementNode(oNode)
//		--�������ܣ��ж�һ���ڵ��Ƿ���NODE_ELEMENT���͵��ӽڵ�
//	6.function isLastRow(tableID,rowIndex)
//		--�������ܣ��ж�����һ���Ƿ�Ϊ������һ��
//	7.function getElementChildNumber(oNode)
//		--�������ܣ���ȡ�ڵ�����Ч�ӽڵ������function findObjIndexById(obj)
//	8.function findObjIndexById(obj)
//		--�������ܣ�ȷ����ǰ��������������е�λ��
//	9.function convertXmlStringToNode(sXml)
//		--�������ܣ���Xml�ַ���ת��Ϊһ���ڵ�
//	10.function insertNodesFromXmlString(oNode,sXml,iLevel)
//		--�������ܣ���Xml�ַ���ת��Ϊ�ڵ��б���ӵ�ָ���ڵ���
//-----------------------------------------------------------------------------
//--�������ܣ���������Ĳ���������һ���ڵ�
//-----���������
//----------NodeName���ڵ�����
//----------AttrName:�����ַ�������
//----------AttrValue:����ֵ�ַ�������
//----------TextValue:�����ַ�������
//-----�������
//----------һ���ڵ�
	function createNode(NodeName,AttrName,AttrValue,TextValue)
	{

		var oXml=new ActiveXObject("Microsoft.XMLDOM");
		var oNode=oXml.createNode(1,NodeName,"");
		var aAttrList=oNode.attributes;//��������


		var oAttr;//��ʱ����������һ�����Խڵ�

		for (var i=0;i<AttrName.length;i++)
		{
			//������Ӹ�������
			oAttr=oXml.createAttribute(AttrName[i]); //�������Խڵ�
			oAttr.value=AttrValue[i]; //��������ֵ
			aAttrList.setNamedItem(oAttr); //��ӵ��ڵ�
		}
		oNode.text=TextValue;

		oXml=null;

		return oNode;
	}

//-----------------------------------------------------------------------------
//-----------------------------------------------------------------------------
//--�������ܣ���ָ���ڵ����Ŀ��ڵ��ָ��λ��֮ǰ
//-----���������
//----------pNode��Ŀ��ڵ�
//----------cNode: ָ���ڵ�
//----------iPosition:λ�ã�-1:��ʾ��β����
//-----�������
//----------�ޣ���pNode�����ݻᷢ���仯
	function insertNode(pNode,cNode,iPosition)
	{
		var aChildList;

		if(iPosition<0)
		{
			//����ڽڵ��ĩβ
			pNode.appendChild(cNode);
		}
		else
		{
			//�����ĳ���ڵ�֮ǰ
			aChildList=pNode.childNodes;
			for (var i=0;i<aChildList.length;i++)
			{
				if (i==iPosition)
				{
					pNode.insertBefore(cNode,pNode.childNodes.item(i));
					break;
				}
			}

		}
	}

//-----------------------------------------------------------------------------
//-----------------------------------------------------------------------------
//--�������ܣ���Table��һ���Ϸ����һ��
//-----���������
//----------tableIdName����TableԪ�ص�id
//----------trClassName: TRԪ�ص���ʽ��û��Ϊ��
//----------tdClassName: TDԪ�ص���ʽ��û��Ϊ��
//----------arrHtml: TRԪ�ص���ʽ��û��Ϊ��
//----------rowIndex:λ�ã�-1:��ʾ��β����
//-----�������
//----------�ޣ���Table�����ݻᷢ���仯
function appendTableRowAt(tableIdName,trClassName,tdClassName,arrHtml,rowIndex)
{
	var tb=document.all(tableIdName);
	var i = rowIndex;
	if(tb && tb.tagName=="TABLE")
	{
	   var rowId=tb.rows.length - 1;
	   //���rowIndex�������һ�У�����rowIndex<0,��i����Ϊ-1
	   if(rowIndex>rowId||rowIndex<0) i=-1;
	   var row=tb.insertRow(i);
	   var cols=arrHtml.length;

	   if(row)
	   {
	      row.className=trClassName ;
	      for(var j=0;j<cols;j++)
	      {
		 var cell=row.insertCell(j);
		 if(cell)
		 {
			if(j>0)
			{
				//��һ�в���tdClassNameӰ��
				cell.className=tdClassName;
		    }
		    cell.innerHTML=arrHtml[j];
		    cell.noWrap=true;
		 }
	       }
	    }
	}
}
//-----------------------------------------------------------------------------
//-----------------------------------------------------------------------------
//--�������ܣ��ж�һ���ڵ��Ƿ����NODE_ELEMENT���͵��ӽڵ�
//-----���������
//----------pNode��Ŀ��ڵ�
//-----�������
//----------true/false
function hasElementChild(pNode)
{
	var bResult=false;

	if(pNode.hasChildNodes())
	{
		for (var i=0;i<pNode.childNodes.length;i++)
		{
			if(isElementNode(pNode.childNodes.item(i)))
			{
				bResult=true;
				break;
			}
		}
	}

	return bResult;
}
//-----------------------------------------------------------------------------
//-----------------------------------------------------------------------------
//--�������ܣ��ж�һ���ڵ��Ƿ���NODE_ELEMENT���͵��ӽڵ�
//-----���������
//----------oNode��Ŀ��ڵ�
//-----�������
//----------true/false
function isElementNode(oNode)
{
	var bResult=false;

	if(oNode.nodeType==1)
	{
		bResult=true;
	}

	return bResult;
}
//-----------------------------------------------------------------------------
//-----------------------------------------------------------------------------
//--�������ܣ�ɾ�����е�һ��
//-----���������
//----------tableID����Ԫ�ص�ID
//----------rowIndex����������0��ʼ����
//-----�������
//----------�ޣ���ҳ�����Ӱ��
function deleteTableRow(tableID,rowIndex)
{
	var oTable=document.all(tableID);
	//ע�⣺oTable.rows.length�а�����ͷ��һ�У�����rowIndex�ļ��ޱ���С
	if(rowIndex<oTable.rows.length) oTable.deleteRow(rowIndex);

}
//-----------------------------------------------------------------------------
//-----------------------------------------------------------------------------
//--�������ܣ��ж�����һ���Ƿ�Ϊ������һ��
//-----���������
//----------tableID����Ԫ�ص�ID
//----------rowIndex����������0��ʼ����
//-----�������
//----------true/false
//-----ע�⣺�����漰�ı���ڱ�ͷ��һ�У����򲻶ԡ�
function isLastRow(tableID,rowIndex)
{
	if(rowIndex+1<document.all(tableID).rows.length-1)
		return false;
	else
		return true;
}
//-----------------------------------------------------------------------------
//-----------------------------------------------------------------------------
//--�������ܣ���ȡ�ڵ�����Ч�ӽڵ������
//-----���������
//----------oNode���ڵ�
//-----�������
//----------��Ч�ڵ�����
function getElementChildNumber(oNode)
{
	var oNodeList=oNode.childNodes;
	var len=0;

	for(var i=0;i<oNodeList.length;i++)
	{
		if(isElementNode(oNodeList.item(i)))
		{
			len=len+1;
		}
	}

	return len;

}
//-----------------------------------------------------------------------------
//-----------------------------------------------------------------------------
//--�������ܣ�ȷ����ǰ��������������е�λ��
//-----���������
//----------obj:ҳ����󡣸ö����id���Ա������ã��Ƕ�������ĳ�Ա��
//-----�������
//----------�����ڶ��������е�λ�ã���0��ʼ����������ʱҲ����0
function findObjIndexById(obj)
{
	var objCollection = document.all(obj.id);
	var objLen = objCollection.length;
	if ( isNaN(objLen) ) return 0;

	for ( var i = 0; i < objLen; i++ )
	{
		if ( obj == objCollection[i] )
			return i;
	}
	return 0;
}
//-----------------------------------------------------------------------------
//-----------------------------------------------------------------------------
//--�������ܣ���һ���ڵ��Xml�ַ���ת��Ϊһ���ڵ�
//-----���������
//----------sXml:Xml�ַ�����
//-----�������
//----------�ڵ�
function convertXmlStringToNode(sXml)
{
	var oXml=new ActiveXObject("Microsoft.XMLDOM");
	var oRoot;

	oXml.loadXML(sXml);
	oRoot=oXml.documentElement;

	oXml=null;

	return oRoot;
}
//-----------------------------------------------------------------------------
//-----------------------------------------------------------------------------
//--�������ܣ���Xml�ַ���ת��Ϊ�ڵ��б���ӵ�ָ���ڵ���
//-----���������
//----------oNode:ָ���ڵ㡣
//----------sXml:Xml�ַ�����
//-----�������
//----------�ޣ�ָ���ڵ����ݱ仯
function insertNodesFromXmlString(oNode,sXml,iLevel)
{
        var oXml=new ActiveXObject("Microsoft.XMLDOM");
        var oRoot;
        var oTempNode;
        var attrValue;

        oXml.loadXML("<root>"+sXml+"</root>");
        oRoot=oXml.documentElement;


        for (var i=0;i<oRoot.childNodes.length;i++)
        {
                if(isElementNode(oRoot.childNodes.item(i)))
                {
                        if(getNodeLevel(oRoot.childNodes.item(i).getAttribute('DetailCode'))==iLevel)
                        {
                                //�ҵ�ָ������Ľڵ㣬�Ӹü��ڵ㿪ʼ����
                                oTempNode=oRoot.childNodes.item(i).cloneNode(true);
                                insertNodesFromXmlString(oTempNode,sXml,iLevel+1);
                                if(iLevel!=0) //������Ƕ����ڵ㣬����Ҫ�жϸ��ڵ�
                                {
                                        attrValue=oTempNode.getAttribute('DetailCode');
                                        if(attrValue.substr(0,attrValue.lastIndexOf("-"))==oNode.getAttribute('DetailCode'))
                                        {
                                                //ֻ����Լ��Ķ���
                                                oNode.appendChild(oTempNode);
                                        }
                                }
                                else
                                {   //�����ڵ�ȫ�����
                                        oNode.appendChild(oTempNode);
                                }
                        }
                }
        }

        oXml=null;
}
//-----------------------------------------------------------------------------
//-----------------------------------------------------------------------------
//-----------------------------------------------------------------------------
//--�������ܣ�������ţ���Xml����������Ӧ�Ľڵ�
//-----���������
//----------idValue:����ֵ
//----------attrName:��������
//----------oNode:�ڵ�
//-----�������
//----------���������Ľڵ㡣�Ҳ���������null

	function findNode(idValue,attrName,oNode)
	{
		var oNodeList=oNode.childNodes;
		var attrValue;
		var ifFind=false; //��ʱ������ȷ���Ƿ��ҵ�
		var oNodeTemp=null;
		var i;


		for (i=0;i<oNodeList.length;i++)
		{
			if(isElementNode(oNodeList.item(i)))//ֻ����Element�Ľڵ����
			{
				//���жϱ��ڵ��Ƿ���Ҫ���ҵĽڵ�
				attrValue=oNodeList.item(i).getAttribute(attrName);
				if(attrValue==idValue)
				{
					ifFind=true;
					oNodeTemp=oNodeList.item(i);
					break;
				}
				//���жϱ��ڵ���ӽڵ��Ƿ���Ҫ���ҵĽڵ�
				oNodeTemp=findNode(idValue,attrName,oNodeList.item(i));
				if(oNodeTemp!=null)
				{
					ifFind=true;
					break;
				}
			}
		}

		if(ifFind)
			return oNodeTemp;
		else
			return null;

	}
