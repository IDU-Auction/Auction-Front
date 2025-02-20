$(document).ready(function () {
    $(".show-more").click(function () {
        $(".hide-category").css({"visibility": "visible", "height": "auto"});
        $(".show-more").hide();
        $(".show-less").show();
    });

    $(".show-less").click(function () {
        $(".hide-category").css({"visibility": "hidden", "height": "0"});
        $(".show-less").hide();
        $(".show-more").show();
    });
});


// Carousel script

