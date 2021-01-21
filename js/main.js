jQuery(document).ready(function($){
    $('.toggle-menu').click(function(){
        $('.menu .nav').addClass('open-menu');
    });
    $('.close-menu').click(function(){
        $('.menu .nav').removeClass('open-menu');
    });
});