document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('orderForm');
    const message = document.getElementById('formMessage');

    form.addEventListener('submit', function (e) {
        e.preventDefault(); // Stop form from submitting normally

        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const order = document.getElementById('order').value.trim();

        // Clear any existing timeout to prevent multiple timers
        clearTimeout(message.timer);

        if (!name || !email || !order) {
            message.textContent = 'Please fill out all fields.';
            message.style.color = 'red';
        } else {
            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailPattern.test(email)) {
                message.textContent = 'Please enter a valid email address.';
                message.style.color = 'red';
            } else {
                message.textContent = 'Thank you, your order has been received!';
                message.style.color = 'green';
                form.reset();
            }
        }

        // Automatically hide the message after 5 seconds
        message.timer = setTimeout(() => {
            message.textContent = '';
        }, 2000);
    });
});
