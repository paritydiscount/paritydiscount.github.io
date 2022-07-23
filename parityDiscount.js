window.onload = function (){

  
   	var head = document.getElementsByTagName('HEAD')[0];
 
        // Create new link Element
        var link = document.createElement('link');
 
        // set the attributes for link element
        link.rel = 'stylesheet';
     
        link.type = 'text/css';
     
        link.href = 'https://paritydiscount.github.io/parityDiscount.css';
 
        // Append link element to HTML head
        head.appendChild(link);
  
    	var htmlCode = `<div class="pd-root pd-root-has-logo"><a class="pd-root-logo" target="_blank" style="position: absolute;left: 20px;top: 50%;transform: translate3d(0, -50%, 0);color: inherit;opacity: 0.7;font-size: 11px;">Parity Discount</a><div class="pd-root-inner">Hello 🇮🇳 Hey! It looks like you are from <b>India</b>. We support Parity Purchasing Power, so if you need it, use code <b>“test3”</b> to get <b>60%</b> off your subscription at checkout.</div></div>`;
		
	
   	 document.body.insertAdjacentHTML("afterbegin", htmlCode);
  
    	var closeEvent = document.querySelector(".pd-root-close-btn");
	closeEvent && closeEvent.addEventListener("click", function() {
		var e = document.querySelector(".pd-root");
		e.parentNode.removeChild(e);
      	})

};
