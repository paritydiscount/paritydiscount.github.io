window.onload = function (){
//   var z = document.createElement("div"); // is a node
//   z.setAttribute(
//     "style",
//     "color: white;font-size: 17px;background-color: #0b66dbcc;padding: 18px 22px;"
//   );
//   z.innerHTML = "Get a parity discount!";
//   document.body.appendChild(z);
  
  
    var t = ".parity-banner {background-color:#0b66dbcc;color:white;border-radius:10px;font-size: 1rem;padding: 20px 10px;text-align: center;position: relative;}",r = ".parity-banner-close-btn{width:1rem;height:1rem;border:0;opacity:.5;background-color:transparent;color:currentColor;position:absolute;top:1rem;right:1rem;padding:0}.parity-banner-close-btn:hover{opacity:1;}",o = document.createElement("style");

		console.log({t,r,o});
	
    	o.innerText = ".parity-banner.parity-banner-has-logo {padding-left: 120px;}",document.head.appendChild(o);
	
	console.log({o});
  
    var a = <div class="parity-banner parity-banner-has-logo"><a class="parity-banner-logo" target="_blank" style="position: absolute;left: 20px;top: 50%;transform: translate3d(0, -50%, 0);color: inherit;opacity: 0.7;font-size: 11px;">⚡ Parity Deals</a><div class="parity-banner-inner">Hello 🇮🇳 Hey! It looks like you are from <b>India</b>. We support Parity Purchasing Power, so if you need it, use code <b>“test3”</b> to get <b>60%</b> off your subscription at checkout.</div></div>;
		
		console.log({a});
	
    document.getElementsByClassName("parity-banner").length || ("top" === "top" ? document.body.insertAdjacentHTML("afterbegin", a) : document.body.insertAdjacentHTML("beforeend", a));
  
    	var i = document.querySelector(".parity-banner-close-btn");
			i && i.addEventListener("click", function() {
				var e = document.querySelector(".parity-banner");
				e.parentNode.removeChild(e)
      })

	
		

// 	var e = new XMLHttpRequest;
// 	e.open("GET", "https://api.paritydeals.com/api/v1/deals/discount/?url=".concat(window.location.href), !0);
// 	var n = "Oops! something went wrong. Please email contact@paritydeals.com";
// 	e.onload = function() {
// 		if (this.status >= 200 && this.status < 400) {
// 			var e = JSON.parse(this.response);
// 			if (!e.bar) return;
// 			var t = e.bar.unStyled ? ".parity-banner {background-color: ".concat(e.bar.backgroundColor, ";color: ").concat(e.bar.fontColor, ";border-radius: ").concat(e.bar.borderRadius, ";font-size: 1rem;padding: 20px 10px;text-align: center;position: relative;}") : "",
// 				r = e.bar.addCloseIcon ? ".parity-banner-close-btn{width:1rem;height:1rem;border:0;opacity:.5;background-color:transparent;color:currentColor;position:absolute;top:1rem;right:1rem;padding:0}.parity-banner-close-btn:hover{opacity:1;}" : "",
// 				o = document.createElement("style");
// 			o.innerText = t + r + ".parity-banner.parity-banner-has-logo {padding-left: 120px;}", document.head.appendChild(o);
// 			console.log({t,r,o});
// 			var a = e.message;
// 			console.log({a});
// 			document.getElementsByClassName("parity-banner").length || ("top" === e.bar.placement ? document.body.insertAdjacentHTML("afterbegin", a) : document.body.insertAdjacentHTML("beforeend", a));
// 			var i = document.querySelector(".parity-banner-close-btn");
// 			i && i.addEventListener("click", function() {
// 				var e = document.querySelector(".parity-banner");
// 				e.parentNode.removeChild(e)
// 			})
// 		} else console.log(n)
// 	}, e.onerror = function() {
// 		console.log(n)
// 	}, e.send()


};
