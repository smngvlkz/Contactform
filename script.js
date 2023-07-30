// Access the form and relevant elements
const form = document.getElementById('contact-form');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const messageInput = document.getElementById('message');
const spinner = document.getElementById('spinner');

// Submit event listener for the form
form.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    // Show the spinner
    spinner.style.display = 'block';

    // Get the entered values
    const name = nameInput.value;
    const email = emailInput.value;
    const message = messageInput.value;

    // Validate the entered values
    if (name === '') {
        alert('Please enter your name');
        spinner.style.display = 'none';
        return;
    }
    if (email === '') {
        alert('Please enter your email');
        spinner.style.display = 'none';
        return;
    }
    if (message === '') {
        alert('Please enter your message');
        spinner.style.display = 'none';
        return;
    }

    // Send the data to a server for processing
    // ...

    // Hide the spinner
    spinner.style.display = 'none';

    // Display a confirmation message
    alert('Thank you for your message! We will get back to you as soon as possible.');

    // Clear the input fields
    nameInput.value = '';
    emailInput.value = '';
    messageInput.value = '';
});
