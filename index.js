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

// Page loader start
const pageLoaded = () => {
    // Remove loader
    const loader = document.getElementById('loader_block');
    loader.style.opacity = '0';
    setTimeout(() => loader.style.display = 'none', 300);

    window.removeEventListener('load', pageLoaded);
}
window.addEventListener('load', pageLoaded);
// Page loader end