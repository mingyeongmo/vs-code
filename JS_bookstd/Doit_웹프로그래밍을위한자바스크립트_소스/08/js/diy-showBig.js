var bigPic = document.querySelector("#cup");
var smallPics = document.querySelectorAll(".small")

for(var i =0; i<smallPics.length; i++)
{
    smallPics[i].addEventListener("click",chagePic); // 노드를 클릭하면 chagePic 함수 실행
}

function chagePic()
{
    var newPic = this.src; // click 이벤트가 발생한 대상의 src 속성 값 가져옴
    bigPic.setAttribute("src", newPic);
    // 윗 줄을 cup.src = newPic; 로 사용해도 됨.
}

