$(document).ready(function () {

    // 1. Show greeting based on time
    const hour = new Date().getHours();
    if (hour < 12) {
        $("#greeting").text("Good Morning!");
    } else if (hour < 18) {
        $("#greeting").text("Good Afternoon!");
    } else {
        $("#greeting").text("Good Evening!");
    }

    // 2. Change greeting text
    $("#change-greet").on("click", function () {
        $("#greeting").text("Stay positive and keep learning!");
    });

    // 3. Toggle visibility of welcome message
    $("#toggle-msg").on("click", function () {
        $("#welcome-msg").toggle();
    });

    // 4. Show alert on clicking the greeting
    $("#greeting").on("click", function () {
        alert("You clicked the greeting!");
    });
});
