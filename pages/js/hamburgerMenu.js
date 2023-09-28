const hamMenu = document.querySelector('.hamburger-menu');
const myNav = document.getElementById("mobile-nav");
const wrapper = document.getElementById("wrapper");

const MOBILE_WIDTH = 480;

// hamburger menu
hamMenu.addEventListener('click', () => {
    hamMenu.classList.toggle('active');
    if (wrapper.clientWidth > MOBILE_WIDTH) {
        myNav.style.height = "100%";
        if (myNav.style.width > "0%") {
            myNav.style.width = "0%";
        }
        else {
            myNav.style.width = "50%";
        };
    } else {
        myNav.style.width = "100%";
        if (myNav.style.height > "0%") {
            myNav.style.height = "0%";
        }
        else {
            myNav.style.height = "100%";
        };
    };
});

// to close the hamburger menu if the user scrolls without closing it
document.addEventListener('scroll', () => {
        if (myNav.style.height > "0%" && myNav.style.width > "0%") {
            hamMenu.classList.toggle('active');
            wrapper.clientWidth > MOBILE_WIDTH ? myNav.style.width = "0%" : myNav.style.height = "0%";
    }
});