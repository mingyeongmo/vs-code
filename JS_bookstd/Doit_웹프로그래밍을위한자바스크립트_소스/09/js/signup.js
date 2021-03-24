var userId = document.querySelector("#user-id");
var userpw1 = document.querySelector("#user-pw1");
var userpw2 = document.querySelector("#user-pw2");

function checkId(){
    if(userId.value.length <4 || userId.value.length < 15)
    {
        alert("아이디를 다시 입력해주세요");
        userId.select();
    }
}

function checkPw(){
    if(userpw1.value.length < 8)
    {
        alert("비밀번호를 8자 이상 입력해주세요");  
        userpw1.focus();
    }
}

function comparePw(){
    if(userpw2.value != userpw1.value)
    {
        alert("비밀번호가 동일하지 않습니다.");  
        userpw2.value = ""; 
		userpw2.focus();
    }
}