$(function(){
    $('.header i').on('click',function(){
        $('.shower').toggleClass('xiaos')
    })
    $('.content').on('click',function(){
        if($('.shower').hasClass('xiaos')){
            $('.shower').removeClass('xiaos')
        }
    })
    $('.botbox .wbox').on('click',function(){
        $('.aa').removeClass('out')
        $('.weixinbox').addClass('out')
    })
    $('.botbox .tbox').on('click',function(){
        $('.aa').removeClass('out')
        $('.tongxunbox').addClass('out')
    })
    $('.botbox .mbox').on('click',function(){
        $('.aa').removeClass('out')
        $('.minebox').addClass('out')
    })
    $('.botbox .fbox').on('click',function(){
        $('.aa').removeClass('out')
        $('.findbox').addClass('out')
    })
})