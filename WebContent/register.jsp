<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<!--[if IE 8]>    <html class="ie8" lang="en"> <![endif]-->
<!--[if gt IE 8]><!--><html lang="en-US" ><!--<![endif]-->

	<head>

		<meta charset="UTF-8" />

		<title>注册</title>

		<!--[if lt IE 9]>
		<script src="//html5shiv.googlecode.com/svn/trunk/html5.js"></script>
		<![endif]-->

		<meta name='viewport' content='width=device-width, initial-scale=0.7'>
		<meta name="format-detection" content="telephone=no">
<!--
		<script type="text/javascript" src="js/myg5ixg.js"></script>
		
		<script type="text/javascript">try{Typekit.load();}catch(e){}</script>

        
		<script type="text/javascript">
			var templateDir = "http://lamingtondrive.com/wp-content/themes/lamingtondrive";
			var baseURL = "http://lamingtondrive.com";
			var shopDomain = 'http://lamington-drive.myshopify.com';
		</script>

        <script type="text/javascript">
			var templateDir = "index.html";
			var baseURL = "index.html";
			var shopDomain = 'index.html';
		</script>


		<link rel="pingback" href="http://lamingtondrive.com/xmlrpc.php">
		<link rel="alternate" type="application/rss+xml" title="Lamington Drive RSS Feed" href="http://lamingtondrive.com/feed/">

		<link rel="alternate" type="application/rss+xml" title="Lamington Drive &raquo; Home Comments Feed" href="http://lamingtondrive.com/home/feed/" />
		-->

		
 <style type="text/css">
 
.user_form {
    float: left;
    position: relative;
    width: 60%;
    padding: 10px 20px;
}

#content .user_form {
    width: 60%;
    padding-left: 0;
}

.user_form h1, .user_form h2 {
    margin-bottom: 20px;
    padding: 5px 0 15px;
    font-size: 30px;
    font-weight: bold;
    border-bottom: 1px solid #eee;
}

.user_form div.req {
    font-size: 30px;
    position: absolute;
    top: 12px;
    right: 30px;
    width: 13em;
    text-align: right;
}

.user_form div.req b {
    color: #b00;
    font-size: 1.4em;
}

.user_form label, .user_form .label {
    display: block;
    padding: 5px 0;
}

.user_form label b, .user_form .label b {
    display: block;
    float: left;
    width: 190px;
    line-height: 23px;
    text-align: right;
    font-weight: normal;
}

.user_form label b .req, .user_form .label b .req {
    padding-right: 3px;
    color: #b00;
}

.user_form label em, .user_form .label em {
    padding-left: 5px;
    vertical-align: middle;
}

.user_form label .status, .user_form .label .status {
    display: inline-block;
    width: 16px;
    height: 16px;
    padding-left: 5px;
    vertical-align: middle;
}

.user_form label input, .user_form .label input {
    vertical-align: middle;
}

.user_form label .directions, .user_form .label .directions {
    float: left;
    display: inline-block;
    width: 570px;
    clear: both;
    margin-left: 190px;
    padding: 5px 0 10px;
    color: #999;
    line-height: 18px;
}

.user_form label img.captcha, .user_form .label img.captcha {
    vertical-align: middle;
}

.user_form .submit_wrap {
    padding: 10px 0 20px 190px;
}

.user_form .submit {
    vertical-align: middle;
}

        
</style>
		<style type="text/css">
img.wp-smiley,
img.emoji {
	display: inline !important;
	border: none !important;
	box-shadow: none !important;
	height: 1em !important;
	width: 1em !important;
	margin: 0 .07em !important;
	vertical-align: -0.1em !important;
	background: none !important;
	padding: 0 !important;
}

</style>

<script>
          function pw() {
              var pw1 = document.getElementById("pw1").value;
              var pw2 = document.getElementById("pw2").value;
              if(pw1 == pw2) {
              	  document.getElementById("information").innerHTML=" ";
                  document.getElementById("submit").disabled = false;
              }
              else {
                document.getElementById("information").innerHTML="<font color=red>两次密码不相同</font>";
                document.getElementById("submit").disabled = true;
              }
          }
</script>
<!--
<link rel='stylesheet' id='style-css'  href='http://cdn.lamingtondrive.com/wp-content/themes/lamingtondrive/style.css?ver=4.3.1' type='text/css' media='all' />
<link rel='stylesheet' id='icons-css'  href='http://netdna.bootstrapcdn.com/font-awesome/4.0.3/css/font-awesome.css?ver=4.3.1' type='text/css' media='all' />


<link rel='stylesheet' id='style-css'  href='/css/css' type='text/css' media='all' />
<link rel='stylesheet' id='icons-css'  href='/css/font-awesome.css?ver=??' type='text/css' media='all' />
<link rel='stylesheet' id='style-css'  href='/css/css?ver=??' type='text/css' media='all' />

<link rel='stylesheet' id='style-css'  href='/css/style.css?ver=??' type='text/css' media='all' />
-->
<!--
<script type='text/javascript' src='http://cdn.lamingtondrive.com/wp-includes/js/jquery/jquery.js?ver=1.11.3'></script>
<script type='text/javascript' src='http://cdn.lamingtondrive.com/wp-includes/js/jquery/jquery-migrate.min.js?ver=1.2.1'></script>
<script type='text/javascript' src='http://cdn.lamingtondrive.com/wp-content/themes/lamingtondrive/js/min/init.min.js?ver=4.3.1'></script>
-->

<link rel='stylesheet' id='style-css'  href='css/style.css' type='text/css' media='all' />
<script type='text/javascript' src='js/user/jquery.js'></script>
<script type='text/javascript' src='js/user/jquery-migrate.min.js'></script>
<script type='text/javascript' src='js/user/init.min.js'></script>
<link rel="EditURI" type="application/rsd+xml" title="RSD" href="http://lamingtondrive.com/xmlrpc.php?rsd" />
<link rel="wlwmanifest" type="application/wlwmanifest+xml" href="http://lamingtondrive.com/wp-includes/wlwmanifest.xml" /> 

<!--
<link rel="EditURI" type="application/rsd+xml" title="RSD" href="http://lamingtondrive.com/xmlrpc.php?rsd" />
<link rel="wlwmanifest" type="application/wlwmanifest+xml" href="http://lamingtondrive.com/wp-includes/wlwmanifest.xml" /> 
<link rel='canonical' href='http://lamingtondrive.com/' />
<link rel='shortlink' href='http://lamingtondrive.com/' />
-->
<link rel='stylesheet' id='icons-css'  href='http://netdna.bootstrapcdn.com/font-awesome/4.0.3/css/font-awesome.css?ver=4.3.1' type='text/css' media='all' />

	</head>

	<body>

		
		<header>
			<div class="container clearfix">

				<div id="logo">
					<a href="index.html">
<svg width="98px" height="98px" viewBox="0 0 98 98" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <defs></defs>
    <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" sketch:type="MSPage">
        <path d="M48.7,85.1146185 C28.5706667,85.1146185 12.2512261,68.8028647 12.2512261,48.6812722 C12.2512261,28.5596797 28.5706667,12.2465148 48.7,12.2465148 C68.8279217,12.2465148 85.1473623,28.5596797 85.1473623,48.6812722 C85.1473623,68.8028647 68.8279217,85.1146185 48.7,85.1146185 L48.7,85.1146185 Z M48.7,0 C21.8034841,0 0,21.7965105 0,48.6812722 C0,75.5674449 21.8034841,97.3625443 48.7,97.3625443 C75.5951043,97.3625443 97.4,75.5674449 97.4,48.6812722 C97.4,21.7965105 75.5951043,0 48.7,0 L48.7,0 Z" id="Fill-15" fill="#FFFFFF" sketch:type="MSShapeGroup"></path>
        <path d="M33.0186548,48.0491935 C33.7375844,48.0491935 34.0021616,47.9010331 34.525775,47.6061233 C35.2530159,47.1969184 36.2489897,46.636731 38.0386949,46.636731 C39.8284001,46.636731 40.8243739,47.1969184 41.5516148,47.6061233 C42.0752282,47.9010331 42.3384202,48.0491935 43.058735,48.0491935 C43.7776645,48.0491935 44.0242338,47.9094994 44.5644699,47.6061233 C45.2903256,47.1969184 46.2876846,46.636731 48.0773898,46.636731 C49.867095,46.636731 50.864454,47.1969184 51.5903097,47.6061233 C52.1305458,47.9094994 52.3757299,48.0491935 53.0960447,48.0491935 C53.8149742,48.0491935 54.0615435,47.9094994 54.6017796,47.6061233 C55.3276353,47.1969184 56.3249943,46.636731 58.1146995,46.636731 C59.90579,46.636731 60.9031489,47.1969184 61.6303898,47.6047123 C62.1567737,47.899622 62.4199656,48.0491935 63.1430509,48.0491935 C63.8647509,48.0491935 64.1293281,47.899622 64.655712,47.6047123 C65.3829529,47.1969184 66.3803118,46.636731 68.1714023,46.636731 L68.1714023,29 L28,29 L28,46.636731 C29.7897052,46.636731 30.785679,47.1969184 31.5129199,47.6061233 C32.053156,47.9094994 32.29834,48.0491935 33.0186548,48.0491935" id="Fill-16" fill="#FFFFFF" sketch:type="MSShapeGroup"></path>
        <path d="M63.1430509,51.4110514 C61.3505752,51.4110514 60.3532163,50.850864 59.6259754,50.4416591 C59.1009767,50.1467493 58.8363995,50 58.1146995,50 C57.3943847,50 57.1492006,50.138283 56.6089645,50.440248 C55.8831088,50.8494529 54.8857499,51.4110514 53.0960447,51.4110514 C51.3063394,51.4110514 50.3089805,50.8494529 49.5831248,50.440248 C49.0428887,50.138283 48.7963194,50 48.0773898,50 C47.357075,50 47.1118909,50.138283 46.5716548,50.440248 C45.8457992,50.8494529 44.8484402,51.4110514 43.058735,51.4110514 C41.2676445,51.4110514 40.2716708,50.8494529 39.5444299,50.440248 C39.0041938,50.138283 38.7576245,50 38.0386949,50 C37.3183801,50 37.0718108,50.138283 36.5329599,50.440248 C35.8043338,50.8494529 34.8097453,51.4110514 33.0186548,51.4110514 C31.2289496,51.4110514 30.2315907,50.8494529 29.505735,50.440248 C28.9654989,50.138283 28.7189296,50 28,50 L28,69.0491935 L68.1714023,69.0491935 L68.1714023,50 C67.448317,50 67.1851251,50.1467493 66.6601264,50.4416591 C65.9328855,50.850864 64.9355266,51.4110514 63.1430509,51.4110514" id="Fill-17" fill="#FFFFFF" sketch:type="MSShapeGroup"></path>
        <path d="M63.1430509,50.8221027 C61.7079622,50.8221027 60.9571725,50.4001984 60.2936518,50.0276808 C59.7021625,49.6974948 59.1924013,49.4110514 58.1146995,49.4110514 C57.038383,49.4110514 56.5286217,49.6960837 55.9399029,50.0276808 C55.2791526,50.4001984 54.5283629,50.8221027 53.0960447,50.8221027 C51.6637264,50.8221027 50.9129367,50.4001984 50.2521864,50.0276808 C49.6620824,49.6960837 49.1537063,49.4110514 48.0773898,49.4110514 C47.0010733,49.4110514 46.491312,49.6960837 45.9025932,50.0276808 C45.2418429,50.4001984 44.4910532,50.8221027 43.058735,50.8221027 C41.6250315,50.8221027 40.875627,50.4001984 40.2134915,50.0276808 C39.6233875,49.6960837 39.1136262,49.4110514 38.0386949,49.4110514 C36.9623784,49.4110514 36.4526171,49.6960837 35.8625131,50.0276808 C35.2017628,50.4001984 34.4523583,50.8221027 33.0186548,50.8221027 C31.5863366,50.8221027 30.8355469,50.4001984 30.1747966,50.0276808 C29.5846926,49.6960837 29.0763165,49.4110514 28,49.4110514 L28,48 C29.4323183,48 30.1831079,48.4204933 30.842473,48.7930109 C31.4325771,49.1246079 31.9409531,49.4110514 33.0186548,49.4110514 C34.0949714,49.4110514 34.6047326,49.1231969 35.1948367,48.7915998 C35.8569722,48.4204933 36.6063766,48 38.0386949,48 C39.4710132,48 40.2204176,48.4204933 40.8825531,48.7915998 C41.471272,49.1231969 41.9810332,49.4110514 43.058735,49.4110514 C44.1350515,49.4110514 44.6434275,49.1246079 45.2335316,48.7930109 C45.8942819,48.4204933 46.6450715,48 48.0773898,48 C49.5097081,48 50.2604977,48.4204933 50.921248,48.7930109 C51.5099669,49.1246079 52.0197281,49.4110514 53.0960447,49.4110514 C54.1723612,49.4110514 54.6807372,49.1246079 55.2708413,48.7930109 C55.9315916,48.4204933 56.6823812,48 58.1146995,48 C59.5497882,48 60.2991926,48.4204933 60.9627134,48.7915998 C61.5528174,49.1231969 62.0625787,49.4110514 63.1430509,49.4110514 C64.2221379,49.4110514 64.7318991,49.1231969 65.3233884,48.7915998 C65.9869091,48.4204933 66.7363136,48 68.1714023,48 L68.1714023,49.4110514 C67.0923153,49.4110514 66.5825541,49.6974948 65.9910648,50.0276808 C65.3289293,50.4001984 64.5781396,50.8221027 63.1430509,50.8221027" id="Fill-18" fill="#FFFFFF" sketch:type="MSShapeGroup"></path>
    </g>
</svg></a>
				</div>
				<nav class="clearfix">
					<div class="menu-menu-1-container">
						<ul id="menu-menu-1" class="menu">
						    <li id="menu-item-50" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-50"><a href="index.jsp">首页</a></li>
							<li id="menu-item-50" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-50"><a href="">艺术品</a></li>
                            <li id="menu-item-98" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-98"><a href="">艺术家</a></li>
                            <li id="menu-item-52" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-52"><a href="">艺术定制</a></li>
                            <li id="menu-item-617" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-617"><a href="">拍卖</a></li>
                            <li id="menu-item-617" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-617"><a href="">商城</a></li>
                            <li id="menu-item-617" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-617"><a href="">艺术资讯</a></li>
                        </ul>
                    </div>				
                </nav>

				<div class="hamburger">
					<i class="fa fa-bars"></i>
				</div>

			</div>
		</header>


        <!--此处是手机端的菜单-->
  		<div id="mobile_menu">
			<div class="menu-menu-1-container">
				<ul id="menu-menu-2" class="menu">
				    <li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-50"><a href="index.jsp">首页</a></li>
					<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-50"><a href="">艺术品</a></li>
                    <li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-98"><a href="">艺术家</a></li>
                    <li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-52"><a href="">艺术定制</a></li>
                    <li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-617"><a href="">拍卖</a></li>
                    <li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-617"><a href="">商城</a></li>
                    <li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-617"><a href="">艺术资讯</a></li>
                </ul>
            </div>			

            <div class="hamburger">
            	<i class="fa fa-bars"></i>
            </div>

            <!--
			<div id="contact_small">
				<p>
					<a href="https://www.google.com.au/maps/place/101+Sackville+St/">101A Sackville St<br>
					Collingwood, Australia</a>
				</p>
				<p>
					03 8060 9745<br>
					<a href="mailto:info@lamingtondrive.com">info@lamingtondrive.com</a>
				</p>
			</div>
		    -->
		</div>

		<section>
		<div id="content">
			<div id="dynamic" class="page page-id-7 page-template page-template-_templates page-template-about page-template-_templatesabout-php">
			<!--
			    <div class="container">
			    
			        <form method="post" action="" class="user_form">
	                    <h2>邮箱注册</h2>
	                    <div class="req"><b>*</b> 为必填项</div>
		                <label><b><span class="req">*</span>E-mail：</b></label>
		                <input type="text" name="email"/>
	                    
	                    <label><b><span class="req">*</span>用户名：</b></label>
		                <input type="text" name="username"/>
						
						<label><b>手机：</b></label>
						<input type="text" name="mobile" />
						
						<label for="password"><b><span class="req">*</span>密码：</b></label>
						<input type="password" name="password"/>
					    
					    <label for="confirm_password"><b><span class="req">*</span>确认密码：</b></label>
						<input type="password" name="confirm_password"/>
					    
						<label for="agreement"><b>&nbsp;</b>
						<input type="checkbox" name="agreement" value="1" checked="checked" id="agreement"/>
						<em>我已看过并接受<a href="article.php?cat_id=-1" id="agr_link">《用户协议》</a></em>
					    </label>
					    <div class="submit_wrap">
						    <input type="submit" name="Submit" value="注册" class="submit btn_special btn_register"/>
					    </div>
                    </form>
                </div>

                -->
			
			    <div id="about_section" class="clearfix"       style="background-image: url('images/user/1.jpg');">
						<div id="about_tabs" class="box" >
							<div class="tab-content">
								<div class="tab-pane fade in active" id="login_info1">
								
									<form action="userRegister" id="">

									<b><span class="req">*</span>邮&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;箱：</b><input type="text" name="email" id="email"  required="required"><br><br>

									<b><span class="req">*</span>用&nbsp;户&nbsp;名：</b><input type="text" id="username"  name="userName"  required="required"/><br><br>

									<b>手&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;机：</b><input type="text" name="phoneNumber" id="phonenumber"/><br><br>

									<b><span class="req">*</span>密&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;码：</b><input type="password" name="password" id="pw1"  required="required"/><br><br>

									<!--js确认密码-->
									<b><span class="req">*</span>确认密码：</b><input type="password" name="confirm_password" id="pw2"  required="required"  onkeyup="pw()"/><br><br><span id="information"></span><br><br>

									<input type="checkbox" name="agreement" value="1" checked="checked" id="agreement"/>我已看过并接受<a href="">《用户协议》</a>

									<input type="submit" value="注册" name="" id=""  class="button"><br><br>
									    <!--<input type="submit" value="忘记密码" name="" id=""  class="button">-->
                                    </form>

								</div>
							</div>

						</div>
					</div>
	        </div>
	    </div>
	    </section>
<!--
		<script type="text/javascript">

		  var _gaq = _gaq || [];
		  _gaq.push(['_setAccount', 'UA-7766337-1']);
		  _gaq.push(['_trackPageview']);

		  (function() {
		    var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
		    ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
		    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
		  })();

		</script>
-->
		<script type='text/javascript' src='js/user/plugins.min.js'></script>
		<!--
<script type='text/javascript'>
/* <![CDATA[ */
var my_ajax = {"ajaxurl":"http:\/\/lamingtondrive.com\/wp-admin\/admin-ajax.php"};
/* ]]> */
</script>
-->
<script type='text/javascript' src='js/user/scripts.min.js'></script>

	</body>

</html>
