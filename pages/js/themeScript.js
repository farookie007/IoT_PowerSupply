var themeSwitch = document.getElementById('theme-switch')
var theme = document.getElementById('theme')


// Setting the theme for the sight
theme.setAttribute('href', theme.href.replace('theme', localStorage.getItem('theme')));


function switchTheme(theme) {
    themeURL = theme.href
    if (themeURL.includes('dark')) {
        theme.setAttribute('href', themeURL.replace('dark', 'light'));
        localStorage.setItem('theme', 'light');
    } else {
        theme.setAttribute('href', themeURL.replace('light', 'dark'));
        localStorage.setItem('theme', 'dark');
        
    };
};

// Hide/Show theme switch button
themeSwitch.addEventListener('click', () => {
    themeSwitch.children[0].classList.toggle('no-show');
    themeSwitch.children[1].classList.toggle('no-show');

    switchTheme(theme);
});


