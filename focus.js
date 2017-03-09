$(function(){
			//首先实现轮播功能；
			var i=0;
			var j=0;
			setInterval(function(){
				if(i>4){
					i=0;
				}
				if(i<0){
					i=0;
				}
				$("#focus span:eq("+i+")").css({"background":"url(images/dotActive.png)"}).siblings().css({"background":"url(images/dot.png)"});
				$("#focusimg img").attr("src","images/"+i+".jpg");
				$("#focusimg a").attr("href",i+".html");
				 j=i;
				 i++;
			},2000);
			//实现点播功能；
			$("#focus span").click(function(){
				$(this).css({"background":"url(images/dotActive.png)"}).siblings().css({"background":"url(images/dot.png)"});
				$("focusimg img").attr("src","images/"+($(this).index())+".jpg");
				$("#focusimg a").attr("href",($(this).index())+".html");
				i=$(this).index();
			});
			//实现点左边的按钮切换图片
			$(".left").click(function(){
				j--;
				if(j<0){
					j=4;
				}
				$("#focus span:eq("+j+")").css({"background":"url(images/dotActive.png)"}).siblings().css({"background":"url(images/dot.png)"});
				$("#focusimg img").attr("src","images/"+j+".jpg");
				$("#focusimg a").attr("href",j+".html");
				 i=j;
			});
			//实现点右边的按钮切换图片；
			$(".right").click(function(){
				j++;
				if(j>4){
					j=0;
				}
				$("#focus span:eq("+j+")").css({"background":"url(images/dotActive.png)"}).siblings().css({"background":"url(images/dot.png)"});
				$("#focusimg img").attr("src","images/"+j+".jpg");
				$("#focusimg a").attr("href",j+".html");
				i=j;
			});
			//实现鼠标划上去划下来的效果；
			$("#focusing").mouseover(function(){
				$("#focusimg span").css({"display":"inline-block"});
			}).mouseout(function(){
				$("#focusimg span").css({"display":"none"});
			});
		});