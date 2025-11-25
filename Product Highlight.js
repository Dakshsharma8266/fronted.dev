$(document).ready(function () {

    // 1. Click on product → highlight background
    $(".product").click(function () {

        // Remove highlight from all
        $(".product").removeClass("highlight");

        // Add to clicked one
        $(this).addClass("highlight");

        // 5. Alert if product is out of stock
        if ($(this).data("stock") === "out") {
            alert("❌ This product is OUT OF STOCK!");
        }
    });

    // 2. Hover → show additional details
    $(".product").hover(
        function () {
            $(this).find(".details").slideDown();
        },
        function () {
            $(this).find(".details").slideUp();
        }
    );

    // 3. Favorite icon → toggle selected class
    $(".fav").click(function (event) {
        event.stopPropagation();  // Stop product click highlight
        $(this).toggleClass("selected");
    });

    // 4. Different styles using attribute selector (done in CSS)
    //    [data-discount="yes"] is styled green border

});
