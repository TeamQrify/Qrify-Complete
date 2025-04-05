document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let subject = document.getElementById("subject").value.trim();
    let message = document.getElementById("message").value.trim();

    if (name === "" || email === "" || subject === "" || message === "") {
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "All fields are required!",
            confirmButtonColor: "#ff2e63",
        });
        return;
    }

    // Simple email validation
    let emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailPattern.test(email)) {
        Swal.fire({
            icon: "warning",
            title: "Invalid Email",
            text: "Please enter a valid email address!",
            confirmButtonColor: "#ff2e63",
        });
        return;
    }

    // Success popup
    Swal.fire({
        icon: "success",
        title: "Message Sent!",
        text: "Thank you for reaching out. We'll get back to you soon!",
        showConfirmButton: false,
        timer: 3000,
        background: "#fff",
        color: "#333",
        position: "center",
    });

    this.reset(); // Clear form after submission
});
