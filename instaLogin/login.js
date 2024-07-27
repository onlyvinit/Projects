document.addEventListener('DOMContentLoaded', function() {
    const inputs = document.querySelectorAll('.input-container input');

    inputs.forEach(input => {
        const label = input.nextElementSibling;

        input.addEventListener('focus', function() {
            label.classList.add('active');
        });

        input.addEventListener('blur', function() {
            if (input.value === '') {
                label.classList.remove('active');
            }
        });

        if (input.value !== '') {
            label.classList.add('active');
        }
    });
});
