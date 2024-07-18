(function () {
    emailjs.init("5RV8s_eS5CIp7Hdwb"); // Initialize EmailJS with your user ID
})();

function sendEmail(event) {
    event.preventDefault(); // Prevent default form submission

    var from_name = document.getElementById("from_name").value;
    var email_id = document.getElementById("email_id").value;
    var message = document.getElementById("message").value;

    // Confirm the user's input
    var confirmation = confirm("Please confirm your details:\n\nName: " + from_name + "\nEmail: " + email_id + "\nMessage: " + message);

    if (confirmation) {
        var templateParams = {
            from_name: from_name,
            email_id: email_id,
            message: message
        };

        emailjs.send('service_hio9qp8', 'template_dadvlxi', templateParams) // Use your service ID and template ID
            .then(function (response) {
                console.log('SUCCESS!', response.status, response.text);
                alert('Email sent successfully!');
                location.reload();
            }, function (error) {
                console.log('FAILED...', error);
                alert('Failed to send email.');
            });
    }
}