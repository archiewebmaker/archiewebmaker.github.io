// Ashramedia Bootstrap Form with validation and Math Captcha 

// Disable form submissions if there are invalid fields
(function() {
  'use strict';
  window.addEventListener('load', function() {
    // Get the forms we want to add validation styles to
    var forms = document.getElementsByClassName('needs-validation');
    // Loop over them and prevent submission
    var validation = Array.prototype.filter.call(forms, function(form) {
      form.addEventListener('submit', function(event) {
        if (form.checkValidity() === false) {
          event.preventDefault();
          event.stopPropagation();
        }
        form.classList.add('was-validated');
      }, false);
    });
  }, false);
})();

(function($){

	jQuery.fn.ebcaptcha = function(options){

		var element = this; 
		var submit = $(this).find('input[type=submit]');
		$('<label id="ebcaptchatext"></label>').insertBefore(submit);
		$('<input type="text" class="form-control" id="ebcaptchainput" placeholder="Are you human?"/><br/><br/>').insertBefore('#humantest');
		var input = this.find('#ebcaptchainput'); 
		var label = this.find('#ebcaptchatext'); 
		
		$(element).find('input[type=submit]').attr('disabled','disabled'); 

		
		var randomNr1 = 0; 
		var randomNr2 = 0;
		var totalNr = 0;


		randomNr1 = Math.floor(Math.random()*10);
		randomNr2 = Math.floor(Math.random()*10);
		totalNr = randomNr1 + randomNr2;
		var texti = "What is "+randomNr1+" + "+randomNr2;
		$('#ebcaptchatext').text(texti);
		
	
		$(input).keyup(function(){

			var nr = $(this).val();
			if(nr==totalNr)
			{
				$(element).find('input[type=submit]').removeAttr('disabled');				
			}
			else{
				$(element).find('input[type=submit]').attr('disabled','disabled');
			}
			
		});

		$(document).keypress(function(e)
		{
			if(e.which==13)
			{
				if((element).find('input[type=submit]').is(':disabled')==true)
				{
					e.preventDefault();
					return false;
				}
			}

		});

	};

})(jQuery);