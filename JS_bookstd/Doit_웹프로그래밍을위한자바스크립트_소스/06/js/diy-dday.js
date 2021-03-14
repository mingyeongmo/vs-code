var now = new Date();

var firstDay = new Date("2021-02-12");

var toNow = now.getTime(); // 지금날짜
var toFirst = firstDay.getTime(); // 처음 만난날
var passedTime = toNow - toFirst; // 며칠 만났나?

var passedDay = Math.round(passedTime/(1000*60*60*24));

document.querySelector('#accent').innerText = passedDay + "일";