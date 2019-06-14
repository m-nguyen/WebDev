$(document).ready(function () {
    $("body").mousemove(function (event) {
        $("body").css("background-position", (event.pageX - 250) + 'px ' + (event.pageY - 250) + 'px');
    });

    $("#overlay").click(function () {
        $(this).toggleClass("lightOff");
    })
});