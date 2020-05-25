(function(){let col="white";
let color=["red" ,"blue" ,"orange","green","yellow","white"];
let x=document.getElementById("d3").children;
let i;
for(i=0;i<x.length;i++)
{
    x[i].style.backgroundColor=color[i%6];
    x[i].onclick = fun;
}
function fun(e)
{
    col=e.target.style.backgroundColor;
}
let y=document.getElementsByClassName("d2");
for(i=0;i<y.length;i++)
{
    y[i].onclick=fun1;
}
function fun1(e)
{
    e.target.style.backgroundColor=col;
}})();

