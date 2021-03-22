var Check = document.querySelectorAll(".check");

for(var i=0; i<Check.length; i++)
{
    Check[i].addEventListener("click",function()
    {
        this.parentNode.style.color = "#ccc";
    });
}