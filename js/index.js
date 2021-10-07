// 메인 배너 이미지 //

img1();

function img1(){
	setTimeout(function(){
		$("#dotForRadio-2").trigger('click');
	},3000);
	setTimeout(function(){
		$("#dotForRadio-3").trigger('click');
	},6000);
	setTimeout(function(){
		$("#dotForRadio-1").trigger('click');
	},9000);
};


setInterval("img1()",12000);




