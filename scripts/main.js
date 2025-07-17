// Dark mode functionality
const themeToggle = document.getElementById('theme-toggle');
const themeIcon = document.getElementById('theme-icon');
const html = document.documentElement;

// Check for saved theme preference or default to light mode
const currentTheme = localStorage.getItem('theme') || 'light';

// Apply the saved theme on page load
if (currentTheme === 'dark') {
    html.classList.add('dark');
    themeIcon.src = '/images/icon-sun.svg';
    themeIcon.alt = 'Switch to light mode';
} else {
    html.classList.remove('dark');
    themeIcon.src = '/images/icon-moon.svg';
    themeIcon.alt = 'Switch to dark mode';
}

// Toggle theme when button is clicked
themeToggle.addEventListener('click', () => {
    html.classList.toggle('dark');
    
    // Update icon and save preference
    if (html.classList.contains('dark')) {
        themeIcon.src = '/images/icon-sun.svg';
        themeIcon.alt = 'Switch to light mode';
        localStorage.setItem('theme', 'dark');
    } else {
        themeIcon.src = '/images/icon-moon.svg';
        themeIcon.alt = 'Switch to dark mode';
        localStorage.setItem('theme', 'light');
    }
});



