document.addEventListener('DOMContentLoaded', (event) => {
    console.log('Website loaded successfully!');
});

// Example of basic form validation
function validateForm() {
    let name = document.forms["contactForm"]["name"].value;
    let email = document.forms["contactForm"]["email"].value;
    let message = document.forms["contactForm"]["message"].value;

    if (name === "" || email === "" || message === "") {
        alert("All fields must be filled out");
        return false;
    }

    // You can add more validation rules here

    alert("Form submitted successfully!");
    return true;
}
