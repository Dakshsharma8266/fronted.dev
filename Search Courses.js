$(document).ready(function () {

    $("#searchBox").keyup(function () {

        let text = $(this).val().toLowerCase();
        let count = 0;

        $("#courseList li").each(function () {
            let course = $(this).text().toLowerCase();

            if (course.includes(text)) {
                $(this).show().css("background", "yellow");
                count++;
            } else {
                $(this).hide();
            }
        });

        $("#count").text(count + " courses found");

        if (text === "") {
            $("#courseList li").show().css("background", "white");
            $("#count").text("");
        }
    });

});
