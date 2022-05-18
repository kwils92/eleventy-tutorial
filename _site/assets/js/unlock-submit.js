window.onload = function() {
    //check to make sure form is on page. 
    if(typeof document.forms["contact"] !== 'undefined'){
        var recaptcha = document.forms["contact"]["g-recaptcha-response"];
        recaptcha.required = true;
        recaptcha.oninvalid = function(e) {
            let btn = document.getElementById("contact-submit");
            btn.removeAttribute('disabled');        
        }
    } 
  }