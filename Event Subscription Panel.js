$(document).ready(function () {

    let subscribed = false;

    // 1. Subscribe
    $("#subscribe").click(function () {
        subscribed = true;
        $("#message").text("You are now subscribed!");
    });

    // 2. Unsubscribe
    $("#unsubscribe").click(function () {
        subscribed = false;
        $("#message").text("You are unsubscribed!");
    });

    // 3. Add new topic dynamically
    $("#addTopic").click(function () {
        let topicName = $("#newTopicName").val().trim();
        if (topicName === "") return;

        $("#topics").append(`<button class='topic'>${topicName}</button>`);
        $("#newTopicName").val("");
    });

    // 4. Remove topic with .off()
    $("#topics").on("click", ".topic", function () {
        if (!subscribed) {
            $("#message").text("Subscribe first!");
            return;
        }
        $("#message").text(`Subscribed to ${$(this).text()}`);
    });

});
