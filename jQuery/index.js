$('.wrap .tab').on('click', function(){
    $(this).addClass('active')
           .siblings()
           .removeClass('active');

    $(this).parents('.wrap')
           .find('.panel')
           .eq($(this).index())
           .addClass('active')
           .siblings()
           .removeClass('active');
});