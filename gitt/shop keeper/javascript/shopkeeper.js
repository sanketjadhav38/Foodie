document.addEventListener('DOMContentLoaded', function() {
    // Registration Form Validation
    const registrationForm = document.getElementById('registrationForm');
    
    if (registrationForm) {
        registrationForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form values
            const shopName = document.getElementById('shopName').value;
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;
            const confirmPassword = document.getElementById('confirmPassword').value;
            
            // Simple validation
            if (password !== confirmPassword) {
                alert('Passwords do not match!');
                return;
            }
            
            if (!document.getElementById('terms').checked) {
                alert('You must agree to the terms and conditions');
                return;
            }
            
            // In a real application, you would send this data to your server
            console.log('Registration submitted:', {
                shopName,
                email,
                password,
                // other form fields...
            });
            
            alert('Registration successful! You will receive a confirmation email shortly.');
            registrationForm.reset();
        });
    }
});