
// Function that changes the light/dark mode.
function toggleTheme() {
    const body = document.body;
    const btn = document.getElementById('theme-toggle')

    body.classList.toggle('light-mode');    //it adds the 'light-mode' class if doesn't exist, or remove if it already exists.

    // check the (atual) state to save the user's preference.
    if (body.classList.contains('light-mode')) {
        localStorage.setItem('theme', 'light');             //it saves the choice 'light' in user's browser.
        btn.innerHTML = '🌙';                               // it changes the bottom"s icon to moon. 
    } else {
        localStorage.setItem('theme', 'dark');              //it saves the choice 'dark' in user's browser.
        btn.innerHTML = '☀️';                           // changes the bottom's icon to Sun.
    }
}

// it runs like this window finished loading.
window.onload = function() {

    const savedTheme = localStorage.getItem('theme');
    const btn = document.getElementById('theme-toggle');

    // If the user choice 'light' previously, (reaplica) the class and icon.
    if (savedTheme === 'light') {
        document.body.classList.add('light-mode');
        btn.innerHTML = '🌙';

        //although, set dark and it leave the sun icon.
    } else {
        btn.innerHTML = '☀️';
    }
};
