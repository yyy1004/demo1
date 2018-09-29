﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using DataService;
using System.Data;
using System.Web.Security;
using System.IO;
using System.Web.SessionState;
using Common;
using Newtonsoft.Json;
using JrscSoft.Common;
using System.Collections;
using Model;

namespace Web.JZ
{
    public partial class jz : System.Web.UI.Page
    {
        DataAccess data = new DataAccess();
        string JZBH = "10001";
        protected void Page_Load(object sender, EventArgs e)
        {
         
           // DataAccess data = new DataAccess();
            if (!IsPostBack)
            {
                //btnFirst.Text = "最首页";
                //btnPrev.Text = "前一页";
                //btnNext.Text = "下一页";
                //btnLast.Text = "最后页";
                //this.GridUser.PageSize = 20;
                ////数据选择过滤
                //ViewState["Filter"] = "";
                BindGrid();
                BindJZCD();
            }
        }
        public void BindJZCD()
        {
            //string JZBH = "10001";
            DataTable dTable = null;
            DataView dView = null;
            string sql = "SELECT * FROM `web`.`" + JZBH + "` ORDER BY ID DESC  limit 1 ";
            ////整理菜单
            dTable = data.GetTable(sql);
            int colnum = dTable.Columns.Count;

            if (colnum > 4)
            {
                this.Label1.Text = dTable.Columns[4].ColumnName;
                this.Label2.Text = dTable.Rows[0][4].ToString();
            }
            else
            {
                this.Label1.Visible=false;
                this.Label2.Visible = false; ;
            }

            if (colnum > 5)
            {
                this.Label3.Text = dTable.Columns[5].ColumnName;
                this.Label4.Text = dTable.Rows[0][5].ToString();
            }
            else
            {
                this.Label3.Visible = false;
                this.Label4.Visible = false; ;
            }
            if (colnum > 6)
            {
                this.Label5.Text = dTable.Columns[6].ColumnName;
                this.Label6.Text = dTable.Rows[0][6].ToString();
            }
            else
            {
                this.Label5.Visible = false;
                this.Label6.Visible = false; ;
            }
            if (colnum >7)
            {
                this.Label5.Text = dTable.Columns[7].ColumnName;
                this.Label6.Text = dTable.Rows[0][7].ToString();
            }
            else
            {
                this.Label7.Visible = false;
                this.Label8.Visible = false; ;
            }
            if (colnum > 8)
            {
                this.Label9.Text = dTable.Columns[8].ColumnName;
                this.Label10.Text = dTable.Rows[0][8].ToString();
            }
            else
            {
                this.Label9.Visible = false;
                this.Label10.Visible = false; ;
            }
            if (colnum > 9)
            {
                this.Label11.Text = dTable.Columns[9].ColumnName;
                this.Label12.Text = dTable.Rows[0][9].ToString();
            }
            else
            {
                this.Label11.Visible = false;
                this.Label12.Visible = false; ;
            }
            if (colnum > 10)
            {
                this.Label13.Text = dTable.Columns[10].ColumnName;
                this.Label14.Text = dTable.Rows[0][10].ToString();
            }
            else
            {
                this.Label13.Visible = false;
                this.Label14.Visible = false; ;
            }
            if (colnum > 11)
            {
                this.Label15.Text = dTable.Columns[11].ColumnName;
                this.Label16.Text = dTable.Rows[0][11].ToString();
            }
            else
            {
                this.Label15.Visible = false;
                this.Label16.Visible = false; ;
            }
        }
        public void BindGrid()
        {
           
            DataTable dTable = null;
            DataView dView = null;
           string sql = "SELECT * FROM `web`.`机组运行记录表`";
            ////整理菜单
           dTable = data.GetTable(sql);
          
            dView = dTable.DefaultView;
            GridUser.DataSource = dView;
            GridUser.DataBind();
            ViewState["rowCount"] = dView.Table.Rows.Count;
            GridUser.DataKeyNames = new string[] { "ID" };

        }
        protected void GridUser_RowDataBound(object sender, GridViewRowEventArgs e)
        {
            if (e.Row.RowType == DataControlRowType.DataRow)
            {
                if (e.Row.RowIndex % 2 == 1)
                {
                    //设置偶数行背景颜色
                    e.Row.BackColor = System.Drawing.Color.FromName("#ECF9FC");//System.Drawing.Color.SeaShell;

                }
                else
                    System.Drawing.Color.FromName("#FFFFFF");

                //鼠标滑过背景颜色
                e.Row.Attributes.Add("onMouseOver", "Color=this.style.backgroundColor;this.style.backgroundColor='#D6F1F8';this.style.cursor='hand'");
                e.Row.Attributes.Add("onMouseOut", "this.style.backgroundColor=Color;");
            }

        }
    }
}