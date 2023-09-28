const hamMenu = document.querySelector('.hamburger-menu');
const myNav = document.getElementById("mobile-nav");

const alertMsgs = document.querySelectorAll('.alert');
const hidePwds = document.querySelectorAll('.hide-pwd')


// hamburger menu
hamMenu.addEventListener('click', () => {
    hamMenu.classList.toggle('active');
    if (myNav.style.height == "100%") {
        myNav.style.height = "0%";
    }
    else {
        myNav.style.height = "100%";
    };
});

// timeout for each alert messages
// also removes them on click
alertMsgs.forEach((msg) => {
    setTimeout(() => {
        msg.style.display = "none";
    }, 5000);
    msg.addEventListener('click', () => {
        msg.style.display = "none";
    });
});

// Hide/Show password button
hidePwds.forEach((icon) => {
    icon.addEventListener('click', () => {
        inputTag = icon.previousElementSibling;
        imgs = icon.children;
        if (inputTag.type === "text") {
            inputTag.type = "password";
        } else {
            inputTag.type = "text";
        };
        imgs[0].classList.toggle('no-show');
        imgs[1].classList.toggle('no-show');
    });
});
