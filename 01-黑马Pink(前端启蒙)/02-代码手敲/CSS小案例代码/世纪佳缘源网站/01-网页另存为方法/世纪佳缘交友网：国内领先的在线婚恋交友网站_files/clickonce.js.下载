		runtimeVersion = "2.0.0";
		checkClient = false;
		
		function NavigateTo(urldomain)
		{
			if (HasRuntimeVersion(runtimeVersion, false) || (checkClient && HasRuntimeVersion(runtimeVersion, checkClient)))
		  {
		    directLink = "http://webim." + urldomain + "/client/clickonce/jymsgr.php";
		    send_jy_pv2("pcclient_clickonce_startup");
		  }
		  else
		  {
		  	//directLink = "http://dl.jiayuan.com/client/JiayuanSetupV1_6.exe";
				directLink = "http://im." + urldomain + "/client/channeldl.php?isstatistics=6&ch=0&from=usercp_install";
		  }
			parent.window.location= directLink;
		}

		function HasRuntimeVersion(v, c)
		{
		  var va = GetVersion(v);
		  var i;
		  var a = navigator.userAgent.match(/\.NET CLR [0-9.]+/g);
		  if(va[0]==4)
		    a = navigator.userAgent.match(/\.NET[0-9.]+E/g);
		  if (c)
		  {
		    a = navigator.userAgent.match(/\.NET Client [0-9.]+/g);
		    if (va[0]==4)
		       a = navigator.userAgent.match(/\.NET[0-9.]+C/g);
		  }
		  if (a != null)
		    for (i = 0; i < a.length; ++i)
		      if (CompareVersions(va, GetVersion(a[i])) <= 0)
		                                return true;
		  return false;
		}
		function GetVersion(v)
		{
		  var a = v.match(/([0-9]+)\.([0-9]+)\.([0-9]+)/i);
		  if(a==null)
		     a = v.match(/([0-9]+)\.([0-9]+)/i);
		  return a.slice(1);
		}
		function CompareVersions(v1, v2)
		{
		   if(v1.length>v2.length)
		   {
		      v2[v2.length]=0;
		   }  
		   else if(v1.length<v2.length)
		   {
		      v1[v1.length]=0;
		   }
		
		  for (i = 0; i < v1.length; ++i)
		  {
		    var n1 = new Number(v1[i]);
		    var n2 = new Number(v2[i]);
		    if (n1 < n2)
		      return -1;
		    if (n1 > n2)
		      return 1;
		  }
		  return 0;
		}