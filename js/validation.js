// Name validation

function nameValidation(inputtxtID, errorSpanID) {
    var namePattern = /^[a-zA-Z\s]+$/;
    if (namePattern.test(inputtxtID.value) == true) {
        document.getElementById(errorSpanID).style.display = "none";
    } else if (inputtxtID.value == '') {
        document.getElementById(errorSpanID).style.display = "none";
    } else {
        document.getElementById(errorSpanID).style.display = "block";
        inputtxtID.focus();
    }

}

// Toggle Password Visibility

function togglePasswordVisibility(iconElement, errorSpanID) {
    var passwordField = $('#password');
    var type = passwordField.attr("type");

    // Toggle the type attribute
    if (type === "password") {
        console.log('checking eye');
        $(iconElement).find("i").removeClass("fa-eye").addClass("fa-eye-slash");
        passwordField.attr("type", "text");
    } else if (type === "text") {
        console.log('checking slash');
        $(iconElement).find("i").removeClass("fa-eye-slash").addClass("fa-eye");
        passwordField.attr("type", "password");
    }

    if (iconElement.value == "") {
        document.getElementById(errorSpanID).style.display = "block";
    } else {
        document.getElementById(errorSpanID).style.display = "none";
    }
}
//email validation with particular format
function emailValidation(inputtxtID, errorSpanID) {
    var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    if (reg.test(inputtxtID.value) == true) {
        document.getElementById(errorSpanID).style.display = "none";
    } else if (inputtxtID.value == '') {
        document.getElementById(errorSpanID).style.display = "none";
    } else {
        document.getElementById(errorSpanID).style.display = "block";
        inputtxtID.focus();
    }
}

// phone validation 

function phoneValidation(inputtxtID, errorSpanID) {
    var phonePattern = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
    if (phonePattern.test(inputtxtID.value) == true) {
        document.getElementById(errorSpanID).style.display = "none";
    } else if (inputtxtID.value == '') {
        document.getElementById(errorSpanID).style.display = "none";
    } else {
        document.getElementById(errorSpanID).style.display = "block";
        inputtxtID.focus();
    }
}