chrome.storage.sync.get(['userNm', 'cust_email_addr', 'cust_hp_cp', 'phone1', 'phone2', 'phone3'], function(data) {
	if (data.userNm && data.cust_email_addr) {
			// set fields
			$('input[name=userNm]').val(data.userNm);
			$('input[name=cust_email_addr]').val(data.cust_email_addr);
			$("input[name=cust_hp_cp][value=" + data.cust_hp_cp + "]").prop('checked', true);
			$('input[name=phone1').val(data.phone1);
			$('input[name=phone2').val(data.phone2);
			$('input[name=phone3').val(data.phone3);
			$('#agree1, #agree2').prop('checked', true);
			
			// click button
			$('img[onclick="goAct()"]').click();
		} else {
			// show instructions dialog
			
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