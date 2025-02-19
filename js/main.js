$(document).ready(function(){
    $('.category-toggle').click(function(){
        $('.hide-category').toggleClass('d-none');
        $('.show-more').toggleClass('d-none');
        $('.show-less').toggleClass('d-none');
    });
});