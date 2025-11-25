$(document).ready(function () {

    // 1. Click manager → highlight all direct reports
    $(".manager").click(function () {
        $(".employee").removeClass("highlight");
        $(this).children(".employee").addClass("highlight");
    });

    // 2. Hover employee → show contact info
    $(".employee").hover(
        function () {
            $(this).after("<span class='info-box'> Contact: 9876543210 </span>");
        },
        function () {
            $(this).siblings(".info-box").remove();
        }
    );

    // 3. Click department → change background of all members
    $(".dept-title").click(function () {
        const dept = $(this).parent();
        $(".department").css("background", "white");
        dept.css("background", "#e0f7fa");
    });

    // 4. Random employee → highlight siblings
    $("#random").click(function () {
        let employees = $(".employee");
        let randomIndex = Math.floor(Math.random() * employees.length);
        let randomEmp = employees.eq(randomIndex);

        $(".employee").css("background", "white");
        randomEmp.siblings(".employee").css("background", "lightgreen");
    });

    // 5. Collapse/Expand team
    $(".dept-title").dblclick(function () {
        $(this).parent().find(".manager").slideToggle();
    });

});
