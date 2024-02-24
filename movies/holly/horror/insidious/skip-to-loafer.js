const arrows = document.querySelectorAll(".arrows");
const moviewrapper = document.querySelectorAll(".movielistContainerWrapper");

let clickCounter = 0 ;

arrows.forEach((arrow,i)=>{
    arrow.addEventListener("click",()=>{
        clickCounter++;
        const check = moviewrapper[i].querySelectorAll(".wrapperItem").length;
        if((clickCounter + 3)-check <0 )
        {
            moviewrapper[i].style.transform = `translateX(${-425*(clickCounter)}px)`;
        }
        else
       { moviewrapper[i].style.transform = `translateX(0px)`;
        clickCounter = 0 ;}
    })
})


// theme changer

const ball = document.querySelector(".ball")
const items = document.querySelectorAll(".topbar,.navList,.leftbar,.leftbarWrapper,.mainContainer,.newreleaseheading,.theme,.ball,.profileHeading");

ball.addEventListener("click",()=>{
    items.forEach(item=>{
        item.classList.toggle("active");
    })
})


let menu = document.querySelector('#menu-bars');
let navbar = document.querySelector('.navbar');

menu.onclick = () =>{
  menu.classList.toggle('fa-times');
  navbar.classList.toggle('active');
}


var swiper = new Swiper(".home-slider", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 7500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    loop:true,
  });

 
