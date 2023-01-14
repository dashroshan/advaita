// Nav bar start
function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

var prevScrollpos = window.pageYOffset;
var navWrap = document.getElementById("navbar-wrap");
var navBody = document.getElementById("navbar");

window.onscroll = function () {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos >= currentScrollPos) {
        navWrap.style.top = "0";
    } else {
        navWrap.style.top = "-106px";
    }
    prevScrollpos = currentScrollPos;
}
// Nav bar end



// Events Start
var swiper = new Swiper(".mySwiper", {
    breakpoints: {
        945: { slidesPerView: 3 },
        630: { slidesPerView: 2, spaceBetween: 25 },
    },
    spaceBetween: 10,
    slidesPerView: 1,
    centeredSlides: false,
    loop: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
        dynamicBullets: true,
    },
});
// Events end


const pageLoaded = () => {
    // Remove loader
    const loader = document.getElementById('loader_block');
    loader.style.opacity = '0';
    setTimeout(() => loader.style.display = 'none', 300);

    window.removeEventListener('load', pageLoaded);
}
window.addEventListener('load', pageLoaded);