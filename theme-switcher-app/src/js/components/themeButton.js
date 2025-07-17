class ThemeButton {
    constructor() {
        this.button = document.createElement('button');
        this.button.textContent = 'Toggle Theme';
        this.button.classList.add('theme-button');
        this.render();
    }

    render() {
        document.body.appendChild(this.button);
        this.button.addEventListener('click', this.handleClick.bind(this));
    }

    handleClick() {
        import('../theme.js').then(module => {
            module.toggleTheme();
        });
    }
}

export default ThemeButton;