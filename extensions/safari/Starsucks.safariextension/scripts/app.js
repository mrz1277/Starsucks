// GA
var _gaq = _gaq || [];
_gaq.push(['_setAccount', 'UA-64815338-2']);
_gaq.push(['_trackPageview']);

(function() {
	var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
	ga.src = 'https://ssl.google-analytics.com/ga.js';
	var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
})();


function respondToMessage(event) {
	if (event.name === 'userNm,cust_email_addr') {
		if (event.message) {
			safari.self.tab.dispatchMessage("getValues", 'cust_hp_cp,phone');

			Object.keys(event.message).forEach(function(key) {
				$('input[name=' + key + ']').val(event.message[key]);
			});
		} else {
			$('<div class="modal">\
			<h3 style="margin-bottom:10px;">Starsucks</h3>\
			<p>처음 본인의 정보를 입력해서 접속하면 앞으로 해당 정보로 자동 연결됩니다.\
			</div>').appendTo('body').modal({zIndex: 1000});

			$('img[onclick="goAct()"]').on('click', function() {
				safari.self.tab.dispatchMessage('userNm', $('input[name=userNm]').val());
				safari.self.tab.dispatchMessage('cust_email_addr', $('input[name=cust_email_addr]').val());
				safari.self.tab.dispatchMessage('cust_hp_cp', $('input[name=cust_hp_cp]:checked').val());
				safari.self.tab.dispatchMessage('phone', $('input[name=phone1]').val() + '-' + $('input[name=phone2]').val() + '-' + $('input[name=phone3]').val());
			});
		}
	}
	else if (event.name === 'cust_hp_cp,phone') {
		if (event.message) {
			$('input[name=cust_hp_cp][value=' + event.message['cust_hp_cp'] + ']').prop('checked', true);
			event.message['phone'].split('-').forEach(function(phone, index) {
				$('input[name=phone' + (index+1) + ']').val(phone);
			});
		}

		$('#agree1, #agree2').prop('checked', true);
		$('img[onclick="goAct()"]').click();
	}
}

safari.self.addEventListener("message", respondToMessage, false);

if (/index(\_|\_en\_)new\.html$/.test(document.location.href)) {
	$('.goWifi a')[0].click();
}

if (/starbucks\_(kr|en)\.php$/.test(document.location.href)) {
	safari.self.tab.dispatchMessage("getValues", 'userNm,cust_email_addr');
}