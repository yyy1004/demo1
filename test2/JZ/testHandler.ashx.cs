using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Common;
using System.Data;
using DataService;
using Model;
using System.Web.SessionState;
using JrscSoft.Common;
using Newtonsoft.Json;
using System.Web.UI;
using System.Text;
using System.Web.Script.Serialization;

namespace Web.testHandler
{
    /// <summary>
    /// JZHandler 的摘要说明
    /// </summary>
    public class testHandler : IHttpHandler
    {
        DataAccess data = new DataAccess();
        public static string gcname = "";//当点击菜单时 获取菜单名称。在gc.aspx.cs中给其赋值。

        public void ProcessRequest(HttpContext context)
        {
            ResultInfo result = new ResultInfo();
            jzjlInfo jz = new jzjlInfo();
            string action = context.Request["action"].ToString();
            context.Response.ContentType = "text/plain";
            int page;
            int rows;
            int menuid;
            string gcname;
            string t1;
            string t2;
            string cdname;//测点名称
            switch (action)
            {
                //case "GetAll":
                //    context.Response.Write(GetAll());
                //    break;
                //case "savePic1":
                //    menuid = int.Parse(CheckLoginStatus.node);
                //    gcname = MenuHelper.GetMenuNameById(menuid);

                //    break;

                case "GetAll":
                    // page = int.Parse(context.Request.Form["page"]);
                    // rows = int.Parse(context.Request.Form["rows"]);
                    //
                    page = int.Parse(context.Request.Form["page"]);
                    rows = int.Parse(context.Request.Form["rows"]);
                    menuid = int.Parse(CheckLoginStatus.node);
                    gcname = MenuHelper.GetMenuNameById(menuid);

                    context.Response.Write(GetAll(page, rows));
                    break;
                case "GetAlljz":
                    page = int.Parse(context.Request.Form["page"]);
                    rows = int.Parse(context.Request.Form["rows"]);
                    menuid = int.Parse(CheckLoginStatus.node);
                    gcname = MenuHelper.GetMenuNameById(menuid);

                    context.Response.Write(GetAllJZInfo(gcname, page, rows));
                    break;
                case "GetAllGCJZ":
                    page = int.Parse(context.Request.Form["page"]);
                    rows = int.Parse(context.Request.Form["rows"]);
                    menuid = int.Parse(CheckLoginStatus.node);
                    gcname = MenuHelper.GetMenuNameById(menuid);
                    // string gcname = System.Web.HttpContext.Current.Request.QueryString["node"].ToString();
                    context.Response.Write(GetAllGCJZInfo(gcname, page, rows));
                    break;

                case "GetAllGCJZt":
                    page = int.Parse(context.Request.Form["page"]);
                    rows = int.Parse(context.Request.Form["rows"]);
                    t1 = context.Request.Form["Start"];
                    t2 = context.Request.Form["End"];
                    // menuid = int.Parse(CheckLoginStatus.node);
                    //  gcname = MenuHelper.GetMenuNameById(menuid);
                    gcname = context.Request.Form["gcname"]; ;
                    context.Response.Write(GetAllGCJZInftime(gcname, page, rows, t1, t2));

                    break;
                case "GetCddata":
                    page = int.Parse(context.Request.Form["page"]);
                    rows = int.Parse(context.Request.Form["rows"]);
                    t1 = context.Request.Form["Start"];
                    t2 = context.Request.Form["End"];
                    // menuid = int.Parse(CheckLoginStatus.node);
                    //  gcname = MenuHelper.GetMenuNameById(menuid);
                    gcname = context.Request.Form["gcname"];
                    cdname = context.Request.Form["cdname"];
                    context.Response.Write(GetAllJZInftime(gcname, page, rows, t1, t2, cdname));
                    break;
                default:
                    break;
            }
        }



        /// <summary>
        /// 获取所有的机组详细信息列表
        /// </summary>
        /// <returns></returns>
        public string GetAll(int page, int rows)
        {
            int start = (page - 1) * rows;
            int end = page * rows;
            List<jzjlInfo> jzs = new List<jzjlInfo>();
            string sql = "SELECT * FROM `web`.`工厂机组运行记录` where `工厂名称`='" + gcname + "'order by ID desc ";
            string where = "limit " + start + "," + end;
            Dictionary<string, object> d = new Dictionary<string, object>();
            //获取数据总数(注意是总数,不是一页中数据的条数)
            DataTable dTable = data.GetTable(sql);
            d.Add("total", data.GetTable(sql).Rows.Count);
            //获取page页的数据
            dTable = dTable.AsEnumerable().Skip((page - 1) * rows).Take(rows).CopyToDataTable();
            for (int i = 0; i < dTable.Rows.Count; i++)
            {
                jzjlInfo jz = new jzjlInfo();
                jz.id = long.Parse(dTable.Rows[i]["ID"].ToString());
                jz.jzname = dTable.Rows[i]["机组名称"].ToString();
                jz.jzid = dTable.Rows[i]["机组编号"].ToString();
                jz.stime = dTable.Rows[i]["时间"].ToString();
                jz.ms = dTable.Rows[i]["状态描述"].ToString();
                jz.status = int.Parse(dTable.Rows[i]["状态"].ToString());
                jz.mid = int.Parse(dTable.Rows[i]["菜单号"].ToString());
                jz.cdname = dTable.Rows[i]["测点"].ToString();
                jz.cdvalue = dTable.Rows[i]["值"].ToString();
                jzs.Add(jz);

            }
            d.Add("rows", jzs);

            return JsonConvert.SerializeObject(d);
        }

        /// <summary>
        /// 获取工厂所有机组的状态
        /// </summary>
        /// <param name="name"></param>
        /// <returns></returns>
        public string GetAllGCJZInfo(string name, int page, int rows)
        {
            int start = (page - 1) * rows;
            int end = page * rows;
            List<jzjlInfo> jzs = new List<jzjlInfo>();
            string sql = "SELECT * FROM `web`.`工厂机组运行记录` WHERE `工厂名称`='" + name + "' order by ID desc ";
            string where = "limit " + start + "," + end;
            Dictionary<string, object> d = new Dictionary<string, object>();
            //获取数据总数(注意是总数,不是一页中数据的条数)
            DataTable dTable = data.GetTable(sql);
            d.Add("total", data.GetTable(sql).Rows.Count);
            //获取page页的数据
            dTable = dTable.AsEnumerable().Skip((page - 1) * rows).Take(rows).CopyToDataTable();
            for (int i = 0; i < dTable.Rows.Count; i++)
            {
                jzjlInfo jz = new jzjlInfo();
                jz.id = long.Parse(dTable.Rows[i]["ID"].ToString());
                jz.jzname = dTable.Rows[i]["机组名称"].ToString();
                jz.jzid = dTable.Rows[i]["机组编号"].ToString();
                jz.stime = dTable.Rows[i]["时间"].ToString();
                jz.ms = dTable.Rows[i]["状态描述"].ToString();
                jz.status = int.Parse(dTable.Rows[i]["状态"].ToString());
                jz.mid = int.Parse(dTable.Rows[i]["菜单号"].ToString());
                jz.cdname = dTable.Rows[i]["测点"].ToString();
                jz.cdvalue = dTable.Rows[i]["值"].ToString();
                jzs.Add(jz);
            }
            d.Add("rows", jzs);

            return JsonConvert.SerializeObject(d);
        }

        /// <summary>
        /// 获取工厂所有机组的状态
        /// </summary>
        /// <param name="name"></param>
        /// <returns></returns>
        public string GetAllJZInfo(string name, int page, int rows)
        {
            int start = (page - 1) * rows;
            int end = page * rows;
            List<jzjlInfo> jzs = new List<jzjlInfo>();
            string sql = "SELECT * FROM `web`.`工厂机组运行记录` WHERE `机组名称`='" + name + "' order by ID desc ";
            string where = "limit " + start + "," + end;
            Dictionary<string, object> d = new Dictionary<string, object>();
            //获取数据总数(注意是总数,不是一页中数据的条数)
            DataTable dTable = data.GetTable(sql);
            d.Add("total", data.GetTable(sql).Rows.Count);
            //获取page页的数据
            dTable = dTable.AsEnumerable().Skip((page - 1) * rows).Take(rows).CopyToDataTable();
            for (int i = 0; i < dTable.Rows.Count; i++)
            {
                jzjlInfo jz = new jzjlInfo();
                jz.id = long.Parse(dTable.Rows[i]["ID"].ToString());
                jz.jzname = dTable.Rows[i]["机组名称"].ToString();
                jz.jzid = dTable.Rows[i]["机组编号"].ToString();
                jz.stime = dTable.Rows[i]["时间"].ToString();
                jz.ms = dTable.Rows[i]["状态描述"].ToString();
                jz.status = int.Parse(dTable.Rows[i]["状态"].ToString());
                jz.mid = int.Parse(dTable.Rows[i]["菜单号"].ToString());
                jz.cdname = dTable.Rows[i]["测点"].ToString();
                jz.cdvalue = dTable.Rows[i]["值"].ToString();
                jzs.Add(jz);
            }
            d.Add("rows", jzs);

            return JsonConvert.SerializeObject(d);
        }
        /// <summary>
        /// 获取工厂所有机组的状态
        /// </summary>
        /// <param name="name"></param>
        /// <returns></returns>
        public string GetAllGCJZInftime(string name, int page, int rows, string t1, string t2)
        {
            int start = (page - 1) * rows;
            int end = page * rows;
            List<jzjlInfo> jzs = new List<jzjlInfo>();
            string sql = "SELECT * FROM `web`.`工厂机组运行记录` WHERE `工厂名称`='" + name + "' and 时间>='" + t1 + "'   and 时间<='" + t2 + "'  ";
            string where = "limit " + start + "," + end;
            Dictionary<string, object> d = new Dictionary<string, object>();
            //获取数据总数(注意是总数,不是一页中数据的条数)
            DataTable dTable = data.GetTable(sql);
            d.Add("total", data.GetTable(sql).Rows.Count);
            //获取page页的数据
            dTable = dTable.AsEnumerable().Skip((page - 1) * rows).Take(rows).CopyToDataTable();
            for (int i = 0; i < dTable.Rows.Count; i++)
            {
                jzjlInfo jz = new jzjlInfo();
                jz.id = long.Parse(dTable.Rows[i]["ID"].ToString());
                jz.jzname = dTable.Rows[i]["机组名称"].ToString();
                jz.jzid = dTable.Rows[i]["机组编号"].ToString();
                jz.stime = dTable.Rows[i]["时间"].ToString();
                jz.ms = dTable.Rows[i]["状态描述"].ToString();
                jz.status = int.Parse(dTable.Rows[i]["状态"].ToString());
                jz.mid = int.Parse(dTable.Rows[i]["菜单号"].ToString());
                jz.cdname = dTable.Rows[i]["测点"].ToString();
                jz.cdvalue = dTable.Rows[i]["值"].ToString();
                jzs.Add(jz);
            }
            d.Add("rows", jzs);

            return JsonConvert.SerializeObject(d);
        }


        public string GetAllJZInftime(string name, int page, int rows, string t1, string t2, string cdname)
        {
            int start = (page - 1) * rows;
            int end = page * rows;
            List<jzjlInfo> jzs = new List<jzjlInfo>();
            string sql;
            if (cdname != "")//单个测点数据
            {
                sql = "SELECT * FROM `web`.`工厂机组运行记录` WHERE `机组编号`='" + name + "' and 时间>='" + t1 + "'   and 时间<='" + t2 + "'  " + " and 测点 ='" + cdname + "' " + " order by ID desc";
            }
            else//所有测点数据
            {
                sql = "SELECT * FROM `web`.`工厂机组运行记录` WHERE `机组编号`='" + name + "' and 时间>='" + t1 + "'   and 时间<='" + t2 + "'  " + " order by ID desc";
            }
            //  string where = "limit " + start + "," + end;
            Dictionary<string, object> d = new Dictionary<string, object>();
            //获取数据总数(注意是总数,不是一页中数据的条数)
            DataTable dTable = data.GetTable(sql);
            //d.Add("total", data.GetTable(sql).Rows.Count);
            d.Add("total", dTable.Rows.Count);
            //获取page页的数据

            if (dTable.Rows.Count > 0)
            {
                dTable = dTable.AsEnumerable().Skip((page - 1) * rows).Take(rows).CopyToDataTable();

                for (int i = 0; i < dTable.Rows.Count; i++)
                {
                    jzjlInfo jz = new jzjlInfo();
                    jz.id = long.Parse(dTable.Rows[i]["ID"].ToString());
                    jz.jzname = dTable.Rows[i]["机组名称"].ToString();
                    jz.jzid = dTable.Rows[i]["机组编号"].ToString();
                    jz.stime = dTable.Rows[i]["时间"].ToString();
                    jz.ms = dTable.Rows[i]["状态描述"].ToString();
                    jz.status = int.Parse(dTable.Rows[i]["状态"].ToString());
                    jz.mid = int.Parse(dTable.Rows[i]["菜单号"].ToString());
                    jz.cdname = dTable.Rows[i]["测点"].ToString();
                    jz.cdvalue = dTable.Rows[i]["值"].ToString();
                    jzs.Add(jz);
                }
            }
            d.Add("rows", jzs);

            return JsonConvert.SerializeObject(d);
        }

        public bool IsReusable
        {
            get
            {
                return false;
            }
        }
    }
}