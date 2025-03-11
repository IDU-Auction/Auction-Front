$(document).ready(function() {
    $(".accordion-button").click(function() {
        var content = $(this).next(".accordion-content");
        var icon = $(this).find("i");
        var isActive = $(this).hasClass("active");
        
        $(".accordion-content").slideUp();
        $(".accordion-button").removeClass("active");
        $(".accordion-button i").removeClass("fa-chevron-up").addClass("fa-chevron-down");
        
        if (!isActive) {
            content.slideDown();
            $(this).addClass("active");
            icon.removeClass("fa-chevron-down").addClass("fa-chevron-up");
        }
    });
});