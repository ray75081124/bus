passedt();

localStorage.removeItem("udmacau");
localStorage.removeItem("udmacau_e");

chineseWish='<div style="font-size:17px;line-height:110%;background: #A81212;border-top: 5px solid #960D0D;display:block;clear:both;color:#FFEAFD;padding:14px 10px 20px;font-weight:bold;">澳門出行易提提您：氣溫嚴寒，注意保暖。</div>';
englishWish='<div style="font-size:17px;line-height:110%;background: #A81212;border-top: 5px solid #960D0D;display:block;clear:both;color:#FFEAFD;padding:14px 10px 20px;font-weight:bold;">Keep warm! Macau EasyGo cares about you.</div>';

localStorage.setItem("DATA_e_r2x",'##Since 2015/Nov/25<br>Bus stop "Venceslau Morais/Airway Bldg." is added for BARRA bound temporarily.');localStorage.setItem("DATA_r2x",'##2015年11月25日起<br>往媽閣方向臨時停靠「慕拉士/飛通大廈」站');
localStorage.setItem("DATA_e_r6Ax",'##Since 2015/Nov/25<br>Bus stop "Venceslau Morais/Airway Bldg." is added for HOSPITAL S. JANUÁRIO bound temporarily.');localStorage.setItem("DATA_r6Ax",'##2015年11月25日起<br>往山頂醫院方向臨時停靠「慕拉士/飛通大廈」站');
localStorage.setItem("DATA_e_r30x",'##2015/Dec/14 - 2016/Feb/11<br>Bus stop "Av. Kwong Tung/Jockey Club" is suspended temporarily.');localStorage.setItem("DATA_r30x",'##2015年12月14日至2016年2月11日<br>不停靠「廣東大馬路/馬會」站');


if((vers!="v68")){
    var link = '<a ontouchstart="localStorage.setItem(\'getgetmacau\',\'\');localStorage.setItem(\'udmacau\',\'\');localStorage.setItem(\'udmacau_e\',\'\');window.location.href=\'https://play.google.com/store/apps/details?id=com.locmacau&apk\'" class="upd-icon">';

    localStorage.setItem("udmacau",link+"<b>澳門出行易 V4.3</b><u>恢復「我的下一站」功能</u><div>檢視</div></a>"+chineseWish);
    localStorage.setItem("udmacau_e",link+"<b>Macau EasyGo V4.3</b><u>Update 24 Routes</u><div>VIEW</div></a>"+englishWish);
    window.location.reload();
}

else{
    localStorage.setItem("udmacau",chineseWish);
    localStorage.setItem("udmacau_e",englishWish);
    window.location.reload();
}


