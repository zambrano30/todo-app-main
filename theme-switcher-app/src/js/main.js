// This file initializes the theme switching functionality and sets up event listeners for the theme button.

import { toggleTheme } from './theme.js';
import ThemeButton from './components/themeButton.js';

document.addEventListener('DOMContentLoaded', () => {
    const themeButton = new ThemeButton();
    themeButton.render();

    const buttonElement = document.querySelector('.theme-button');
    buttonElement.addEventListener('click', toggleTheme);
});