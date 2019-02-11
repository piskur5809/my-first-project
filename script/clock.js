function date()
	{
		
		var tm=new Date();
		var d=tm.getDate();
		var m=new Array(12);
		m[0]="January";
		m[1]="February";
		m[2]="March";
		m[3]="April";
		m[4]="May";
		m[5]="June";
		m[6]="July";
		m[7]="August";
		m[8]="September";
		m[9]="October";
		m[10]="November";
		m[11]="December";
		var month=m[tm.getMonth()]
		document.getElementById('txt').innerHTML= d+" "+month;
		
	}

	
	function time()
	{
		var t=new Date();
		var h=t.getUTCHours();
		var m=t.getMinutes();
		var s=t.getSeconds();
		var hh=h+3
		m=checkTime(m);
		s=checkTime(s);
		document.getElementById('tx').innerHTML=hh+":"+m;//+":"+s;
		t=setTimeout('time()',500);
	}
		function checkTime(i)
		{
			if(i<10)
			{
				i="0"+i;
			}
			return i;
		}