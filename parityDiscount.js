window.onload = function (){
  alert ("This is an alert dialog box");  
  console.log("enter");
  var z = document.createElement("div"); // is a node
  z.setAttribute(
    "style",
    "color: white;font-size: 17px;background-color: #0b66dbcc;padding: 18px 22px;"
  );
  z.innerHTML = "Get a parity discount!";
  document.body.appendChild(z);
};
