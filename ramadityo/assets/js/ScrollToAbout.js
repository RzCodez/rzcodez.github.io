$(".go-Bottom").on("click", function (e) {
    let href = $(this).attr("href");
    let hrefElement = $(href);

    $("html, body").animate(
        {
            scrollTop: hrefElement.offset().top,
        },
        1250,
        "easeInOutExpo"
    );

    e.preventDefault();
});

$(".navbarLinks").on("click", function (e) {
    let href = $(this).attr("href");
    let hrefElement = $(href);

    $("html, body").animate(
        {
            scrollTop: hrefElement.offset().top,
        },
        1250,
        "easeOutQuint"
    );

    e.preventDefault();
});
// http://www.paulirish.com/2011/requestanimationframe-for-smart-animating/

