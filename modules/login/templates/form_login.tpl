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
        font-size: 15pt;
        text-align: center;
        padding-bottom: 40px;
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

{*<div style="position: absolute; top: 140px; width: 100%; margin: 0 auto;">*}
{*    <form action="{$action}" method="post">*}
{*        <input name="username" value="alizee.wickenheiser@mcgill.ca" type="hidden">*}
{*        <input name="password" type="hidden" value="Yy9JgW2AC*_KaXmYyMyiyLfr">*}
{*        <center>*}
{*            <input class="btn btn-primary" name="login" type="submit" value="&nbsp;&nbsp; &nbsp;&nbsp; ENTER &nbsp;&nbsp; &nbsp;&nbsp; ">*}
{*        </center>*}
{*    </form>*}
{*</div>*}

