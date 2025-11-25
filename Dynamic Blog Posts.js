$(document).ready(function () {

    // 1. Add new post
    $("#addPost").click(function () {
        $("#posts").append("<li>New Blog Post</li>");
    });

    // 2. Prepend featured post
    $("#addFeatured").click(function () {
        $("#posts").prepend("<li><strong>FEATURED:</strong> Special Post</li>");
    });

    // 3. Remove last post
    $("#removeLast").click(function () {
        $("#posts li").last().remove();
    });

    // 4. Add tags using .before() / .after()
    $("#posts li").each(function () {
        $(this).before("<span>#tag</span>");
    });

    // 5. Highlight posts containing specific keyword
    $("#posts li").each(function () {
        if ($(this).text().toLowerCase().includes("javascript")) {
            $(this).css("background", "lightgreen");
        }
    });

});
