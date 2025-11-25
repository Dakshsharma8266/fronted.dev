// Allow both versions
var jq1 = jQuery.noConflict(true); 
var jq2 = jQuery.noConflict(true);

// 1. Carousel animation using version 1
jq1(function () {
    setInterval(function () {
        jq1("#carousel").fadeToggle();
    }, 2000);
});

// 2. Modal popup using version 2
jq2(function () {
    jq2("#modal").click(function () {
        alert("Modal Opened!");
    });
});

// 3. Highlight widget using version 1
jq1("#carousel").css("background", "yellow");

// 4. Tooltip using version 2
jq2("#tooltipBox").hover(function () {
    jq2(this).after("<span> Tooltip shown </span>");
});

// 5. Both versions working independently
