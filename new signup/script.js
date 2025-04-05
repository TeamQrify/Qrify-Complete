document.getElementById("sendOtp").addEventListener("click", function() {
    let input = document.getElementById("phoneOrEmail").value;
    if (validateInput(input)) {
        Swal.fire("OTP Sent!", "Please check your phone or email.", "success");
        document.getElementById("otp-section").style.display = "block";
    } else {
        Swal.fire("Invalid Input!", "Enter a valid 10-digit phone number or email.", "error");
    }
});

document.getElementById("signup-form").addEventListener("submit", function(event) {
    event.preventDefault();
    let otp = document.getElementById("otp").value;
    if (otp === "qrify") {  // Replace with real OTP validation logic
        Swal.fire("Signup Successful!", "You can now log in.", "success");
    } else {
        Swal.fire("Invalid OTP!", "Please try again.", "error");
    }
});

function validateInput(input) {
    let phonePattern = /^[0-9]{10}$/;
    let emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return phonePattern.test(input) || emailPattern.test(input);
}
