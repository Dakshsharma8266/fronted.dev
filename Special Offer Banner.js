$(document).ready(function () {

    // 1. Hide banners
    $("#hide").click(function () {
        $(".banner").hide();
    });

    // 2. Show banners
    $("#show").click(function () {
        $(".banner").show();
    });

    // 3. Slide Up/Down toggle
    $("#slide").click(function () {
        $(".banner").slideToggle();
    });

    // 4. Fade In/Out toggle
    $("#fade").click(function () {
        $(".banner").fadeToggle();
    });

    // 5. Auto rotate banners every 5 seconds
    let index = 0;
    const banners = $(".banner");

    setInterval(function () {
        banners.eq(index).fadeOut(500);

        index = (index + 1) % banners.length;

        banners.eq(index).fadeIn(500);

    }, 5000);

});
