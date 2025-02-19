$(document).ready(function () {
    $(".hide-category").hide(); // Hide 19 categories initially

    $(".category-toggle").click(function () {
        if ($(".hide-category").is(":visible")) {
            // Hide extra categories
            $(".hide-category").slideUp();
            $(".show-more").show();
            $(".show-less").hide();
        } else {
            // Show all categories
            $(".hide-category").slideDown();
            $(".show-more").hide();
            $(".show-less").show();
        }
    });
});
