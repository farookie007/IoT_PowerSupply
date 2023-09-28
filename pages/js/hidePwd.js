var themeSwitch = document.getElementById('theme-switch')
const theme = document.getElementById('theme')

// Hide/Show theme switch button
themeSwitch.addEventListener('click', () => {
    themeSwitch.children[0].classList.toggle('no-show');
    themeSwitch.children[1].classList.toggle('no-show');

    theme.href.includes('dark') ? theme.setAttribute('href', theme.href.replace('dark', 'light')) : theme.setAttribute('href', theme.href.replace('light', 'dark'));

})


