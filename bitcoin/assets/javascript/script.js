const boxs = document.querySelectorAll(".box");
let index = 0;
const next = document.querySelector("#next");
// function next(){
//     boxs[index].classList.remove('active')
//     index = (index + 1 ) % boxs.length;
//     boxs[index].classList.add('active')
//     console.log(index);
// }
// function prev() {
//     boxs[index].classList.remove('active')
//     index = (index - 1 + boxs.length) % boxs.length;
//     boxs[index].classList.add('active')
//     console.log(index);
//  }
next.addEventListener("click", function () {
  for (let i = 0; i < boxs.length; i++) {
    console.log(i);
    boxs[i].classList.remove("active");
  }
  boxs[index].classList.add("active");
  index = (index + 1) % boxs.length;
  boxs[index].classList.add("active");
});

prev.addEventListener("click", function () {
  for (let i = 0; i < boxs.length; i++) {
    // console.log(i);
    boxs[i].classList.remove("active");
  }
  boxs[index].classList.add("active");
  index = (index - 1 + boxs.length) % boxs.length;
  boxs[index].classList.add("active");
});

const arrow_down = document.querySelector(".fa-arrow-down");
const arrow_up = document.querySelector(".fa-arrow-up");

const headerBest = document.querySelectorAll(".header-best");

console.log(headerBest);

// arrow_down.addEventListener('click',()=>{
//   best_coin.classList.add('active')
// })
// arrow_up.addEventListener('click',()=>{
//   best_coin.classList.remove('active')
// })

headerBest.forEach((item) => {
  item.addEventListener("click", () => {
    item.classList.toggle("active");
    const best_coin = item.nextElementSibling;
    if (best_coin.style.height) {
      best_coin.style.height =null;
      best_coin.style.padding =0;
      
    } else {
      best_coin.style.height = best_coin.scrollHeight + "px";
      best_coin.style.padding = "2rem";
      

      console.log(best_coin.scrollHeight);
    }
  });
});



const iconmenu=document.querySelector('.menu-icon')
const menubars= document.querySelector('.main-menu')
iconmenu.addEventListener('click',function(){

menubars.classList.toggle("show")
iconmenu.style.position='absolute'
console.log(iconmenu);


})