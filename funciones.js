// Function to save form data and update the table
export function saveData(data, tableElement) {
    const row = tableElement.insertRow();
    row.insertCell(0).textContent = data.email;
    row.insertCell(1).textContent = data.name;
    row.insertCell(2).textContent = data.preference;
    row.insertCell(3).textContent = data.notifications;
}

// Function to display an image in large view
export function displayImage(src, modalImageElement, modalElement) {
    modalImageElement.src = src;
    modalElement.style.display = 'block';
}

// Function to hide the large image view
export function hideImage(modalElement) {
    modalElement.style.display = 'none';
}
