// GA
var _gaq = _gaq || [];
_gaq.push(['_setAccount', 'UA-64815338-1']);
_gaq.push(['_trackPageview']);

(function() {
  var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
  ga.src = 'https://ssl.google-analytics.com/ga.js';
  var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
})();

// Page Action
chrome.extension.sendRequest("show_page_action");

// TODO 약관, 개인정보 내용 변경시 사용자 동의 확인 알림

chrome.storage.sync.get(['userNm', 'cust_email_addr', 'cust_hp_cp', 'phone1', 'phone2', 'phone3'], function(data) {
	if (data.userNm && data.cust_email_addr) {
			// set fields
			$('input[name=userNm]').val(data.userNm);
			$('input[name=cust_email_addr]').val(data.cust_email_addr);
			$("input[name=cust_hp_cp][value=" + data.cust_hp_cp + "]").prop('checked', true);
			$('input[name=phone1]').val(data.phone1);
			$('input[name=phone2]').val(data.phone2);
			$('input[name=phone3]').val(data.phone3);
			$('#agree1, #agree2').prop('checked', true);
			
			// click button
			$('img[onclick="goAct()"]').click();
		} else {
			// show instructions dialog
			$('<div class="modal">\
				<h3 style="margin-bottom:10px;">Starsucks</h3>\
				<p>처음 본인의 정보를 입력해서 접속하면 앞으로 해당 정보로 자동 연결됩니다.\
				</div>').appendTo('body').modal({zIndex: 1000});

			// when click, save fields and go.
			$('img[onclick="goAct()"]').on('click', function() {
				chrome.storage.sync.set({
					'userNm': $('input[name=userNm]').val(),
					'cust_email_addr': $('input[name=cust_email_addr]').val(),
					'cust_hp_cp': $('input[name=cust_hp_cp]:checked').val(),
					'phone1': $('input[name=phone1]').val(),
					'phone2': $('input[name=phone2]').val(),
					'phone3': $('input[name=phone3]').val()
				});
			});
		}
	});