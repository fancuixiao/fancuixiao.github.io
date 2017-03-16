/*
 * @description : javaScript recalc_@_clientWidth
 * 				: reset_@_font-size
 * @author   :(cc)
 * @date     : 2017-01-1
 * 移动端rem的使用方法-默认375的屏幕宽度开发 
 * PS:1rem == 100px
 */
(function(){
	resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
	recalc = function (){
		var cWidth = document.documentElement.clientWidth || document.body.clientWidth;
		if (!cWidth) return;
		document.documentElement.style.fontSize = cWidth/3.75 + 'px';
		//电脑端
		if(cWidth>1240){
					document.documentElement.style.fontSize = cWidth/7 + 'px';
		}
	};
	if (!document.addEventListener) return;
	window.addEventListener(resizeEvt, recalc, false);
    document.addEventListener('DOMContentLoaded', recalc, false);
})();




