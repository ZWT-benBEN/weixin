/*$(function(){
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
})*/
var weixin = angular.module('weixin',['ngRoute']);
weixin.controller('wx',['$scope',function($scope){}]);

weixin.config([
	'$routeProvider',
	function($routeProvider){
		$routeProvider.when('/',{
			templateUrl:'html/shouye.html',
		})
		.when('/liaotian',{
				templateUrl:'html/shouye.html',
		})
		.when('/lianxi',{
			templateUrl:'html/tongxun.html',
		})
		.when('/pengyou',{
			templateUrl:'html/pengyou.html',
		})
		.when('/wo',{
			templateUrl:'html/wo.html',
		})
	}
])
