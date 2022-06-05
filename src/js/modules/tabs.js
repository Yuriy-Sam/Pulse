// const e = require("cors");

$(document).ready(function(){

    $('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function() {
        $(this)
          .addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
          .closest('div.container').find('div.catalog__content').removeClass('catalog__content_active').eq($(this).index()).addClass('catalog__content_active');
    });

    function toggleSlide(item) {
        $(item).each(function(i) {
            $(this).on('click', function(e) {
                e.preventDefault();
                $('.catalog__item_content').eq(i).toggleClass('catalog__item_content_active');
                $('.catalog__item_list').eq(i).toggleClass('catalog__item_list_active');
            })
        });
    };

    toggleSlide('.catalog__item_link');
    toggleSlide('.catalog__item_list_link');

});
