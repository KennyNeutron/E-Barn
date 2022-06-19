let searchForm = document.querySelector('.search-form');

document.querySelector('#search-btn').onclick = () =>
{
    searchForm.classList.toggle('active');
    shoppingCart.classList.remove('active');
    loginForm.classList.remove('active');
    navbar.classList.remove('active');
}

let shoppingCart = document.querySelector('.shopping-cart');

document.querySelector('#cart-btn').onclick = () =>
{
    shoppingCart.classList.toggle('active');
    searchForm.classList.remove('active');
    loginForm.classList.remove('active');
    navbar.classList.remove('active');
}

let loginForm = document.querySelector('.login-form');

document.querySelector('#login-btn').onclick = () =>
{
    loginForm.classList.toggle('active');
    searchForm.classList.remove('active');
    shoppingCart.classList.remove('active');
    navbar.classList.remove('active');
}

let navbar = document.querySelector('.navbar');

document.querySelector('#menu-btn').onclick = () =>
{
    navbar.classList.toggle('active');
    searchForm.classList.remove('active');
    shoppingCart.classList.remove('active');
    loginForm.classList.remove('active');
}

window.onscroll = () =>
{
    searchForm.classList.remove('active');
    shoppingCart.classList.remove('active');
    loginForm.classList.remove('active');
    navbar.classList.remove('active');
}

var swiper = new Swiper(".home-slider", 
{
    grabCursor:true,
    loop:true,
    centeredSlides:true,
    navigation: 
    {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
});

var swiper = new Swiper(".product-slider", 
{
    loop:true,
    spaceBetween: 20,
    autoplay:
    {
        delay:7500,
        disableOnInteraction:false,
    },
    breakpoints: 
    {
      1: 
      {
        slidesPerView: 1,
      },
      768: 
      {
        slidesPerView: 2,
      },
      1020: 
      {
        slidesPerView: 3,
      },
    },
  });

/*const countdown = document.querySelector(".countdown");

const interval = setInterval(()=>
{
  const deadline = newDate(2022, 6, 19, 12, 00, 00);

  const current = newDate();
  const diff = deadline-current;
  const days = Math.floor(diff/(1000*60*60*24));
  const hours = Math.floor((diff/(1000*60*60))%24);
  const minutes = Math.floor((diff/(1000*60))%60);
  const seconds = Math.floor((diff/1000)%60);

  countdown.innerHTML = 
    `
    <div>${Days}</div>
    <div>${Hours}</div>
    <div>${Minutes}</div>
    <div>${Seconds}</div>
    `;
}, 1000);*/
