$(function(){

    //menu-burger in header
    $('.menu__btn').on('click', function(){
        $('.menu__list').slideToggle();
    });

    //menu-burger in footer
    $('.footer__menu-btn').on('click', function(){
        $('.footer__menu-list').slideToggle();
    });

});