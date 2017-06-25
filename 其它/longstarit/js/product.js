$(document).ready(function(){
	current = 1;//�����Ƶ�����
	var image_all = document.querySelectorAll(".image_each");
	var images = image_all.length;//��ȡ��classͼƬ����
	width = 240;//�Ƶ�һ�ŵľ���
	 var n=4;//��ǰ��ʾ����

	for(i=1;i<=n;i++){
		$(image_all[i-1]).animate({"left":+(width*(i-1))+"px"},400,"swing");
	}

	$("#next").click(function(){
		current++
		if(current>=(images-n+2)){
			current=images-n+2;
		    document.div.onclick=function(){return false;}
		}
		animateLeft(current, n)		
	});
	
	$("#previous").click(function(){	
		current--
		if(current == 0){
			current=1
		document.div.onclick=function(){return false;}
		}
		animateRight(current, n)				
	});
	//�����Ƶ�next
	function animateLeft(current, n){
		//$('#p' + current).css("left", width + "px");
		$(image_all[current-2]).animate({"left": -width + "px"},400,"swing");//�Ƴ���ǰ��һ��
		
		for(i=1;i<=n;i++){
			$(image_all[current+i-2]).animate({"left":+(width*(i-1))+"px"},400,"swing");
		}	
		setbutton()
	}
	//�����Ƶ�
	function animateRight(current, n) {				
			
		$(image_all[current+n-1]).animate({"left": +(width*n) + "px"},400,"swing");//�Ƴ��ڶ��� 
		for(i=1;i<=n;i++){
			$(image_all[current+i-2]).animate({"left":+(width*(i-1))+"px"},400,"swing");
		}		        		       
		setbutton()
	}	
	function setbutton(){
		
		$('#image_each' + current).children("image_each").removeClass("current");
		$('#image_each' + current).children("image_each").addClass("current");	
	}

});