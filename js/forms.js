		$('#testButton').on('click', function(e){
			e.preventDefault();
			alert(getInputs());
		});
		
		$('#submitButton').on('click', function(e){
			e.preventDefault();
			var data = getInputs();
			$.post('https://pastebin.com/api/api_post.php', {
				api_option: 'paste',
				api_dev_key: '6ee4a7ce78adad3009737128c0bd2460',
				api_paste_private: 1,
				api_paste_code: data
			}, function() {
				alert('done');
			}, 'jsonp');
		});
		
		function getInputs() {
			// Iterate through form elements and sent to pastebin
			var data = '';
			$('#myForm').children('input:not([type=submit]), textarea, select').each(function() {
				data += $(this).attr('name') + ': ' + $(this).val() + "\n";
			});
			return data;
		}
