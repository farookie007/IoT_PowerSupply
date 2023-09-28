const hidePwds = document.querySelectorAll('.hide-pwd')


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
