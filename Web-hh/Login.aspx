<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="Login.aspx.cs" Inherits="Web.Login" %>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">

<html xmlns="http://www.w3.org/1999/xhtml">
<head id="Head1" runat="server">
    <title>巨鲸齿轮箱在线监测系统</title>
    <link rel="shortcut icon" href="/Images/slo.ico" type="image/x-icon" />
    <style type="text/css">
      #mima::after {
    display: inline-block;
    width: 100%;
    content: '';
    height:0;
}

        html, body {
          width: 100%;
          height: 100%;
          overflow: hidden;
        }

        body {
          background: #54afea;
        }

        #particles {
          width: 100%;
          height: 100%;
          overflow: hidden;
        }

        #login_table {
            padding:5px; 
            box-shadow: 4px 5px 3px #1b73ab; 
            background-color:rgba(255, 255, 255,0.8);
        }

        @media only screen and (max-width:1400px) {
            #Image2 {
                width:1000px;
            }
        }

        @media only screen and (max-width: 1153px) {
            .auto-style2 {
                width:98%;
            }
               #login_table {
                background:white;
                z-index: 10;
                left: 24%;
                top: 200px;
                position: absolute;
                box-shadow: 7px 7px 5px 0 rgba(0, 0, 0,0.5);
            }
        }

        @media only screen and (max-width: 568px) {
          #login_table {
                left: 1%;
                top: 20%;
                position: absolute;
            }
        }     
        .auto-style1 {
            height: 50px;
            width: 100px;
        }
    </style>
</head>
<body>
        <form id="form1" runat="server" >
        <div>
            <table width="100%">
                <tr>
                    <td class="auto-style2"><asp:Image ID="Image1" runat="server" ImageUrl="~/Images/logo .png"  style="height:80px;width:328px;margin-left:15px;" ImageAlign="Left"/></td>          
                </tr>
                <tr>
                    <td class="auto-style2" style="width:57%;">
                        <asp:Image ID="Image2" runat="server" ImageUrl="~/Images/pic-login-left.jpg" Width="102%" style="margin-left:15px;"/>
                    </td>
                    <td id="rt">
                        <table width="30%" id="login_table" align="center" cellpadding="0" cellspacing="0">
                            <tbody>
                                <tr>
                                    <td align="center">
                                         <table width="96%" border="0" cellspacing="0" cellpadding="0">
                                        <tr>
                                            <td>
                                                <table cellspacing="0" cellpadding="0" width="100%" border="0" style="height: 65px">
                                                    <tbody>
                                                        <tr>
                                                            <td style="border-right:2px solid #1b73ab;" class="auto-style3">
                                                            <img alt="" style="padding-right: 12px; padding-left:20px;" class="auto-style1" src="../Images/littlelogo.png" /></td>
                                                            <td width="100%" align="center" valign="middle" class="auto-style5">
                                                                <br />
                                                                <br />
                                                                <br />
                                                                <a href="#" style="text-decoration:none; color:#0070b8; font-size:30px; padding-left:2px;">巨鲸齿轮箱在线监测系统</a>
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td> &nbsp;</td>
                                        </tr>
                                        <tr>
                                            <td align="center" style="border-top:1px solid #1774b0;">
                                                <table width="520" border="0" cellspacing="0" cellpadding="0" style="height: 145px;">
                                                    <tr>
                                                         <td align="center" style="padding-top:35px;">
                                                             <table>
                                                                 <tr>
                                                                     <td>
                                                                         <table cellspacing="0" cellpadding="0" border="0" style="height: 80px; width: 248px; margin-left: 0px">
                                                                            <tr>
                                                                                <td width="220" height="25" valign="top" style="padding-bottom: 5px; color:#318c6e;">
                                                                                    <span style="display:inline-block;width:3em;">用户名</span>:
                                                                                    <input class="nemo01" value="" tabindex="1" maxlength="22" size="17" name="user" id="txtUsername"
                                                                                        runat="server" style="width: 139px; height: 26px"/>
                                                                                </td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td valign="bottom" height="25" style="color:#318c6e; padding-bottom: 5px;">
                                                                                    <span id="mima" style="display:inline-block;width:3em;text-align:justify;line-height:12px;" >密码</span>:
                                                                                    <input name="user" type="password" class="nemo01" tabindex="1" size="17" maxlength="22"
                                                                                        id="txtPwd" runat="server" style="width: 139px; height: 26px"/>
                                                                                </td>
                                                                            </tr>
                                                                        </table>
                                                                        <asp:Label ID="lblMsg" runat="server" BackColor="Transparent"></asp:Label>
                                                                     </td>
                                                                     <td>
                                                                         <table width="100%" border="0" cellspacing="0" cellpadding="0" style="height: 48px">
                                                                            <tr>
                                                                                <td height="50px" align="center">
                                                                                    <asp:ImageButton ID="btnLogin" runat="server" ImageUrl="/Images/login_p_img11.gif"   OnClick="btnLogin_Click" Height="48px" Width="71px"></asp:ImageButton>
                                                                                </td>
                                                                            </tr>
                                                                        </table>
                                                                     </td>
                                                                 </tr>
                                                             </table>
                                                            <br />
                                                         </td>
                                                    </tr>
                                                </table>
                                            </td>
                                        </tr>
                                    <tr>
                                        <td>
                                            &nbsp;</td>
                                    </tr>
                          </table>
                                   </td>
                               </tr>
                           </tbody>
                       </table>
                   </td>
                </tr>
            </table>
            <br />
        </div>
    </form>
</body>
</html>
