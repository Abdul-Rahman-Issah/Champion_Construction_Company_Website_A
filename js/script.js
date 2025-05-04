document.addEventListener('DOMContentLoaded', function () {
    // --- Form Validation ---
    const form = document.getElementById('orderForm');
    const message = document.getElementById('formMessage');

    if (form) {
        form.addEventListener('submit', function (e) {
            e.preventDefault();

            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const order = document.getElementById('order').value.trim();

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

            message.timer = setTimeout(() => {
                message.textContent = '';
            }, 2000);
        });
    }

    // --- Image Modal Enlarging ---
    const modal = document.createElement('div');
    modal.classList.add('image-modal');
    modal.innerHTML = `
        <span class="image-modal-close">&times;</span>
        <img src="" alt="Enlarged Image">
    `;
    document.body.appendChild(modal);

    const modalImg = modal.querySelector('img');
    const closeBtn = modal.querySelector('.image-modal-close');

    document.querySelectorAll('.responsive-img').forEach(img => {
        img.addEventListener('click', function () {
            modal.classList.add('active');
            modalImg.src = this.src;
            modalImg.alt = this.alt;
        });
    });

    closeBtn.addEventListener('click', function () {
        modal.classList.remove('active');
        modalImg.src = '';
        modalImg.alt = '';
    });

    modal.addEventListener('click', function (e) {
        if (e.target === modal) {
            modal.classList.remove('active');
            modalImg.src = '';
            modalImg.alt = '';
        }
    });
});
