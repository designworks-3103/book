'use strict';
{
// *******名前ボタン*******//
const buttons = document.querySelectorAll(".name__wrapper li");

buttons.forEach(button => {
  button.addEventListener("click", () => {
    for (const btn of buttons) {
      btn.classList.toggle("on", btn === button);
    }
  });
});


// 予約表背景色変化
const available = document.querySelectorAll("td.available");
available.forEach(v1 => {
  v1.addEventListener('click',() => {
    available.forEach(v2 => v2.classList[v1 == v2 ? "add" : "remove"]("on"));
  });
});

}

// 名前ボタンと表示画面

// 各ボタンの要素を取得
const names = document.querySelectorAll('.name__wrapper li');
const name0 = document.querySelector('.name0');
const name1 = document.querySelector('.name1');
const name2 = document.querySelector('.name2');
const name3 = document.querySelector('.name3');
const name4 = document.querySelector('.name4');
const name5 = document.querySelector('.name5');

// // 各画面
const figures =document.querySelectorAll('.reservation figure')
const figure0 =document.querySelector('.figure0');
const figure1 =document.querySelector('.figure1');
const figure2 =document.querySelector('.figure2');
const figure3 =document.querySelector('.figure3');
const figure4 =document.querySelector('.figure4');
const figure5 =document.querySelector('.figure5');

name0.addEventListener("click",() =>{
    figure0.classList.add("on");
})
name1.addEventListener("click",() =>{
    figure1.classList.add("on");
})
name2.addEventListener("click",() =>{
    figure2.classList.add("on");
})
name3.addEventListener("click",() =>{
    figure3.classList.add("on");
})
name4.addEventListener("click",() =>{
    figure4.classList.add("on");
})
name5.addEventListener("click",() =>{
    figure5.classList.add("on");
})



