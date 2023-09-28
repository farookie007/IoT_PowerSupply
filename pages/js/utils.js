const alertMsgs = document.querySelectorAll('.alert');


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
