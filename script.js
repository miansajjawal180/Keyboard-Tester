document.addEventListener('DOMContentLoaded', () => {
    const keys = document.querySelectorAll('.key');

    document.addEventListener('keydown', (event) => {
        const keyElement = document.querySelector(`.key[data-key="${event.key.toLowerCase()}"]`);
        if (keyElement) {
            keyElement.classList.toggle('active');
        }
    });

    keys.forEach(key => {
        key.addEventListener('click', () => {
            key.classList.toggle('active');
        });
    });
});
