document.getElementById('sendOtp').addEventListener('click', function () {
    let phoneOrEmail = document.getElementById('phoneOrEmail').value;

    // Regular expressions for validation
    let emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    let phoneRegex = /^[0-9]{10}$/; // Only 10-digit numbers

    // Check if input is valid
    if (!emailRegex.test(phoneOrEmail) && !phoneRegex.test(phoneOrEmail)) {
        Swal.fire({
            icon: 'warning',
            title: 'Invalid Input!',
            text: 'Please enter a valid email or 10-digit phone number.',
        });
        return;
    }

    let otp = Math.floor(100000 + Math.random() * 900000); // Generate random 6-digit OTP
    localStorage.setItem('generatedOtp', otp);

    Swal.fire({
        icon: 'success',
        title: 'OTP Sent!',
        text: `Your OTP is ${otp}.`,
        timer: 5000,
        showConfirmButton: false
    });

    document.getElementById('otp-section').style.display = 'block';
});

document.getElementById('login-form').addEventListener('submit', function (e) {
    e.preventDefault();
    let enteredOtp = document.getElementById('otp').value;
    let generatedOtp = localStorage.getItem('generatedOtp');

    if (enteredOtp === generatedOtp) {
        Swal.fire({
            icon: 'success',
            title: 'Login Successful!',
            text: 'Redirecting...',
            timer: 2000,
            showConfirmButton: false
        }).then(() => {
            window.location.href = 'indexhome.html'; // Redirect to homepage
        });
    } else {
        Swal.fire({
            icon: 'error',
            title: 'Invalid OTP!',
            text: 'Please try again.',
        });
    }
});
