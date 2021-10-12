<style>
    .header {
        visibility: hidden;
    }
    .loris-logo {
        visibility: hidden;
    }
    body {
        background-repeat: no-repeat;
        background-size: 591px 650px;
        background-position: center;
        background-image: url('images/bigbrain_cover_Feb_26_2015.jpg');
    }
    .footer {
        visibility: hidden;
    }
    .footernew {
        bottom: 0;
        width: 100%;
        position: fixed;
        font-size: 15pt;
        text-align: center;
    }
    .btn-primary {
        color: #fff;
        background-color: #0b4681;
        border-color: #021b32;
        width: 150px;
        height: 44px;
        font-size: 14pt;
    }
    .btn-primary:hover {
        color: #fff;
        background-color: #02203d;
        border-color: #021b32;
    }

</style>

<div style="position:absolute; top: 0; color: white; width: 100%; font-size: 18pt;">
    <div class="navbar navbar-default" role="navigation">
        <div style="text-align: center; padding: 10px;">
            <div class="container loginheader">
                Montreal Neurological Institute | Forschungszentrum Jülich <br>
                <b>BigBrain LORIS Database</b>
            </div>
        </div>
    </div>
</div>

<div style="position: absolute; top: 140px; width: 100%; margin: 0 auto;">
    <form action="{$action}" method="post">
        <input name="username" value="admin" type="hidden">
        <input name="password" type="hidden" value="a1123581321">
        <center>
            <input class="btn btn-primary" name="login" type="submit" value="&nbsp;&nbsp; &nbsp;&nbsp; ENTER &nbsp;&nbsp; &nbsp;&nbsp; ">
        </center>
    </form>
</div>

<div class="footernew navbar-bottom">
    <div align="center" colspan="1" style="color:#064785">
                Visit <a href="http://bigbrainproject.org" style="color:#064785; target=" _blank"=""><b>BigBrainProject.org</b></a> for more information
    </div>
    <div align="center" colspan="1" style="color:#808080">
        <b>Supported Browsers:</b> Mozilla Firefox, Google Chrome.
    </div>
    <div align="center" colspan="1">
        <a href="https://bigbrain-ftp.loris.ca/bigbrain-ftp/"><b>Raw data also available using Anonymous FTP:</b> View and connect with FTP client.</a>
    </div>
    <div align="center" colspan="1" style="color:#808080">
       <a href="http://LORIS.CA" style="color:#064785" target="_blank">Powered by LORIS</a> © 2021 All rights reserved.  <a href="http://mcin.ca" target="_blank">Created by MCIN</a>
    </div>
    <div align="center" colspan="1" style="color:blue">
<br>
<!--
        <a href="http://mcin.ca" style="color: blue;" target="_blank">Created by MCIN</a>
--->
    </div>
</div>
