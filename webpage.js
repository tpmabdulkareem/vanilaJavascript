function hideFunction(){
  
  if (document.getElementById("text").style.display !== "none"){
    document.getElementById("text").style.display = "none";
    document.getElementById("btn").value= "Show";
       }
    else
    {
   document.getElementById("text").style.display = "block" ;
        document.getElementById("btn").value = "Hide";
    } 
  }

function clrFunction(){
  var color = document.getElementById("color").value;
    document.getElementById("text").style.color = color;
}
