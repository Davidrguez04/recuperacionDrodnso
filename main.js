import { saveData, displayImage, hideImage } from './funciones.js';

// Elements
const form = document.querySelector('form');
const table = document.querySelector('table tbody');
const galleryItems = document.querySelectorAll('.gallery-item img');
const modal = document.getElementById('imageModal');
const modalImage = document.getElementById('modalImage');

// Event Listener for Form Submission
form.addEventListener('submit', (event) => {
    event.preventDefault();

    // Collect form data
    const email = document.getElementById('email').value;
    const name = document.getElementById('nombre').value;
    const preference = document.querySelector('input[name="horario"]:checked').nextSibling.textContent.trim();
    const notifications = form.querySelector('input[type="checkbox"]').checked ? 'Sí' : 'No';

    // Save data and update the table
    saveData({ email, name, preference, notifications }, table);

    // Clear form
    form.reset();
});

// Event Listeners for Image Clicks in Gallery
galleryItems.forEach((img) => {
    img.addEventListener('click', () => {
        displayImage(img.src, modalImage, modal);
    });
});

// Event Listener for Modal Close Button
modal.querySelector('button').addEventListener('click', () => {
    hideImage(modal);
});
