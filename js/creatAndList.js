$(function(){
	$('.xxgm_xinxi input').focus(function(){
		var i=$('.xxgm_xinxi input').index(this)
		$('.xxgm_xinxi input').eq(i).css('border','1px solid #9ce4ff')
	})
	$('.xxgm_xinxi input').blur(function(){
		var i=$('.xxgm_xinxi input').index(this)
		$('.xxgm_xinxi input').eq(i).css('border','1px solid #b5b5b5')
	})
	$('.zsslb_nianji').toggle(function(){
		var i=$('.zsslb_nianji').index(this);
			$('.zsslb_nianji').show().eq(i).css("background","url(../images/sanjiao1.png) right center no-repeat");
	},function(){
			var i=$('.zsslb_nianji').index(this);
			$('.zsslb_nianji').show().eq(i).css("background","url(../images/sanjiao.png) right center no-repeat");	
	})
	$(".zsslb_quanxuan").click(function(){   
	    if(this.checked){ 
	        $("input[name='checkname']").attr('checked', true)
	    }else{ 
	        $("input[name='checkname']").attr('checked', false)
	    } 
	}); 

	var cjzss_select=$(".cjzss_select");
	var cjzss_xx=$(".cjzss_xx");
	cjzss_select.attr('sel_State','true');

	//select的点击
	cjzss_select.each(function(i,obj){
		var index=i;
		$(obj).find("input").val($($(obj).parent().find(".cjzss_xx li")[0]).html());
		$(obj).click(function(){
			cjzss_select.each(function(i,obj){
				if(i!=index){
					$(obj).parent().find(".cjzss_xx").css("display","none");
					$(obj).attr("sel_State","true");
				}
			})
			if(i==2&&$(obj).hasClass("cjzss_sel_default")){
				return;
			}else{
				if($(obj).attr("sel_State")=='true'){
					$(obj).parent().find(".cjzss_xx").css("display","block");
					$(obj).attr("sel_State","false");
				}else{
					$(obj).parent().find(".cjzss_xx").css("display","none");
					$(obj).attr("sel_State","true");
				}
			}
		})

	})

	//option的选择
	cjzss_xx.each(function(i,obj){
		$(obj).find("li").click(function(){
			$(obj).parent().find(".cjzss_select").attr("sel_State","true").find("input").val($(this).html());
			$(obj).css("display","none");
		})
	})
})