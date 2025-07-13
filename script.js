// Email validation function
function isEmail(email) {
    var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    return regex.test(email);
}

// Allow only digits for phone number and limit to 10
$("#phoneno").on("input", function () {
    this.value = this.value.replace(/\D/g, '').slice(0, 10);
});

// Show/Hide password toggle function
function togglePassword(id, btn) {
    const field = document.getElementById(id);
    if (field.type === "password") {
        field.type = "text";
        btn.textContent = "Hide";
    } else {
        field.type = "password";
        btn.textContent = "Show";
    }
}

// Form submit validation
$("#submitbutton").click(function () {
    var errormessage = "";
    var missingfield = "";

    $("#errors").html("");
    $("#success").html("");

    var email = $("#Email").val();
    var phone = $("#phoneno").val();
    var password = $("#password").val();
    var confirmPassword = $("#confirmpassword").val();

    // Required field checks
    if (email == "") {
        missingfield += "<p>Email not filled</p>";
    }
    if (phone == "") {
        missingfield += "<p>Phone No. not filled</p>";
    }
    if (password == "") {
        missingfield += "<p>Password not filled</p>";
    }

    // Email format validation
    if (email !== "" && !isEmail(email)) {
        errormessage += "<p>Email id is not valid</p>";
    }

    // Phone number validation
    if (phone !== "" && !/^\d{10}$/.test(phone)) {
        errormessage += "<p>Phone No. must be exactly 10 digits</p>";
    }

    // Password pattern validation
    var passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[\W_]).{8,15}$/;

    if (password !== confirmPassword) {
        errormessage += "<p>Passwords do not match</p>";
    } else if (!passwordRegex.test(password)) {
        errormessage += "<p>Password must be 8-15 characters long and include at least 1 uppercase letter, 1 lowercase letter, and 1 special character.</p>";
    }

    // Show success or error
    if (errormessage === "" && missingfield === "") {
        $("#success").html("You are Registered");
    } else {
        $("#errors").html(errormessage + missingfield);
    }
});

