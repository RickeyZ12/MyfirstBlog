const toggleModeButton = document.getElementById('toggle-mode');

toggleModeButton.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    document.body.classList.toggle('light-mode');
    const mode = document.body.classList.contains('dark-mode') ? 'dark' : 'light';
    localStorage.setItem('mode', mode);
});

window.addEventListener('load', () => {
    if (localStorage.getItem('mode') === 'dark') {
        document.body.classList.add('dark-mode');
    } else {
        document.body.classList.add('light-mode');
    }
});
