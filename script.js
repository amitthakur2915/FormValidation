function isEmail(email) {
    var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    return regex.test(email);
}

$("#phoneno").on("input", function () {
    this.value = this.value.replace(/\D/g, '').slice(0, 10);
});

$("#submitbutton").click(function () {
    var errormessage = "";
    var missingfield = "";

    $("#errors").html("");
    $("#success").html("");

    if ($("#Email").val() == "") {
        missingfield += "<p>Email not filled</p>";
    }
    if ($("#phoneno").val() == "") {
        missingfield += "<p>Phone No. not filled</p>";
    }
    if ($("#password").val() == "") {
        missingfield += "<p>Password not filled</p>";
    }

    if ($("#Email").val() !== "" && isEmail($("#Email").val()) == false) {
        errormessage += "<p>Email id is not valid</p>";
    }

    if ($("#phoneno").val() !== "" && !/^\d{10}$/.test($("#phoneno").val())) {
        errormessage += "<p>Phone No. must be exactly 10 digits</p>";
    }

    if ($("#password").val() !== $("#confirmpassword").val()) {
        errormessage += "<p>Password does not match</p>";
    }

    if (errormessage == "" && missingfield == "") {
        $("#success").html("You are Registered");
    } else {
        $("#errors").html(errormessage + missingfield);
    }
});

