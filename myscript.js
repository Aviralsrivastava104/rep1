var mybt=document.querySelector(".b1");
var myoff=document.querySelector(".ig2");
var img=myoff.querySelector("img");

document.dir(img);

function machine()
{
  img.setAttribute("src","image/on1.png");  
}
function timer(){
  img.setAttribute("opacity","0.7");
  
  setInterval("machine()",10000);
}

function togglesidebar()
{
    document.querySelector("#sidebar").classList.toggle("active");
}