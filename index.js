document.addEventListener('DOMContentLoaded', function() {
    console.log('Profile page loaded');

    // Form submission handler
    const form = document.querySelector('form');
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        alert('Thank you for your message!');
        form.reset();
    });
});
