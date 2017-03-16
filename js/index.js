window.onload  = function(){
	//设置朋友圈动态的样式
	var spans  = document.getElementsByClassName("hot_span");
		for(var j = 0; j<spans.length; j++){
			var spanHeight = spans[j].offsetHeight;
			if(spanHeight>=90 ||spanHeight>=108){
				spans[j].className = "curr";
			}
			
		}
	var selected      = document.getElementsByClassName("selected");
	var other_comment = document.getElementsByClassName("other_comment");
	//评论展开收起
	for(var i = 0; i<selected.length;i++){

			selected[i].onclick = function(){
			var thistext =[];
			var that = this;
			thistext.push(this.innerHTML);			
				if(that.innerHTML == "收起"){
					that.previousElementSibling.style.display = "none";
					that.innerHTML = thistext[0];
					console.log(that.innerHTML);
				}else{
					that.innerText = "收起";
					that.previousElementSibling.style.display = "block";
					console.log(that.innerHTML);
				}	
			}
	}
	
	
	//照片
	var aparent = document.getElementsByClassName("pecure");
	console.log(aparent);
	for(var i =0; i<aparent.length;i++){
		var a = aparent[i].getElementsByTagName("a");
		if(a.length==2){
			for (var j=0; j<a.length;j++) {
				a[j].className = "curr";
			}
		}
		if(a.length==3){
			for (var j=0; j<a.length;j++) {
				a[j].className = "currs";
			}
		}
		if(a.length==4){
			for (var j=0; j<a.length;j++) {
				a[j].className = "curr";
			}
		}
		if(a.length>=6){
			for (var j=0; j<a.length;j++) {
				a[j].className = "currs";
			}
		}
	}
}
$(".delete").on("click",function(){
	$(this).parents("article").remove();
})
$(".pecure a").on("click",function(){
	$(".hide").show();
	var that = $(this).find("img").attr("src");
	$(".hide img").attr("src",that);
})
