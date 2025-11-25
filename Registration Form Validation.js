$(document).ready(function () {

    $("#regForm").submit(function (e) {

        let name = $("#name").val().trim();
        let email = $("#email").val().trim();
        let pass = $("#pass").val();

        let valid = true;

        $(".error").remove();

        // 1. Name not empty
        if (name === "") {
            $("#name").after("<span class='error'>Name required</span>");
            $("#name").css("border", "2px solid red");
            valid = false;
        }

        // 2. Email valid
        if (!email.includes("@")) {
            $("#email").after("<span class='error'>Invalid email</span>");
            $("#email").css("border", "2px solid red");
            valid = false;
        }

        // 3. Password min 8 chars
        if (pass.length < 8) {
            $("#pass").after("<span class='error'>Min 8 characters</span>");
            $("#pass").css("border", "2px solid red");
            valid = false;
        }

        if (!valid) {
            e.preventDefault(); 
            return;
        }

        $("#msg").text("Form Submitted Successfully!");
    });

    // Errors disappear on typing
    $("input").keyup(function () {
        $(this).css("border", "1px solid black");
        $(this).next(".error").remove();
    });

});
