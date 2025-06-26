const buttonCatalog1 = document.querySelector('.catalog1');
const buttonCatalog2 = document.querySelector('.catalog2');
const buttonCatalog3 = document.querySelector('.catalog3');
const buttonCatalog4 = document.querySelector('.catalog4');
const buttonCatalog5 = document.querySelector('.catalog5');
const buttonCatalog6 = document.querySelector('.catalog6');
const buttonCatalog7 = document.querySelector('.catalog7');
const buttonCatalog8 = document.querySelector('.catalog8');
const buttonCatalog9 = document.querySelector('.catalog9');
const catalog1 = document.querySelector('.home__catalog');
const catalog2 = document.querySelector('.home__catalog2');
const catalog3 = document.querySelector('.home__catalog3');

buttonCatalog2.addEventListener('click', function () {
    catalog1.classList.add('active');
    catalog2.classList.add('active');
});

buttonCatalog3.addEventListener('click', function () {
    catalog1.classList.add('active');
    catalog3.classList.add('active');
});

buttonCatalog4.addEventListener('click', function () {
    catalog1.classList.remove('active');
    catalog2.classList.remove('active');
});

buttonCatalog6.addEventListener('click', function () {
    catalog3.classList.add('active');
    catalog2.classList.remove('active');
});

buttonCatalog7.addEventListener('click', function () {
    catalog3.classList.remove('active');
    catalog1.classList.remove('active');
});

buttonCatalog8.addEventListener('click', function () {
    catalog3.classList.remove('active');
    catalog2.classList.add('active');
});

const swiper = new Swiper('.swiper', {
    loop: true,
    slidesPerView: 1,

    autoplay: {
        delay: 5000,
    },
});

const menuBtn = document.querySelector('.menu-header');
const menuHeader = document.querySelector('.header__mobile');

menuBtn.addEventListener('click', () => {
  menuBtn.classList.toggle('open');
  menuHeader.classList.toggle('active');
});