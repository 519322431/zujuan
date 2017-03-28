$(function(){
	$('.daohang li').mouseover(function(){
		var i=$('.daohang li').index(this);
		$('.daohang li').removeClass('liang').eq(i).addClass('liang');
		$('.daohang li a').removeClass('liang1').eq(i).addClass('liang1');
	})
	$('.daohang').mouseout(function(){
		$('.daohang li').removeClass('liang');
		$('.daohang li a').removeClass('liang1');
		$('.dui').addClass('liang');
		$('.dui1').addClass('liang1');
	})
	$('.znzj_fl li').mouseover(function(){
		var i=$('.znzj_fl li').index(this);
		$('.znzj_fl li').removeClass('znzj_fl_hover').eq(i).addClass('znzj_fl_hover');
	})
	$('.znzj_fl').mouseout(function(){
		$('.znzj_fl li').removeClass('znzj_fl_hover');
		$('.hover').addClass('znzj_fl_hover');
	})
	$('.login_input').focus(function(){
		var i=$('.login_input').index(this);
		$('.login_input').css('border','1px solid #a8a8a8').eq(i).css('border','1px solid #ff6700')
	})
	$('.login_input').blur(function(){
		$('.login_input').css('border','1px solid #a8a8a8')
	})
	$('.zhuce_xieyi a').click(function(){
		$('.xieyi').show();
	})
	$('.xieyi img').click(function(){
		$('.xieyi').hide();
	})
	$('.ggmm_ymm input').focus(function(){
		var i=$('.ggmm_ymm input').index(this);
		$('.ggmm_ymm input').css('border','1px solid #a8a8a8').eq(i).css('border','1px solid #ff6700')
	})
	$('.ggmm_ymm input').blur(function(){
		$('.ggmm_ymm input').css('border','1px solid #a8a8a8')
	})
	$('.wdsc_px').click(function(){
		var i=$('.wdsc_px').index(this);
		$('.wdsc_px').css('color','#000').eq(i).css('color','#ff6700')
		$('.wdsc_px').removeClass('jiantou').eq(i).addClass('jiantou')
	})
	$('.xzt_cksj').toggle(function(){
		var i=$('.xzt_cksj').index(this)
		$('.xzt_da').eq(i).show();
		$('.xzt_cksj').eq(i).html('返回');
	},function(){
		var i=$('.xzt_cksj').index(this)
		$('.xzt_da').eq(i).hide();
		$('.xzt_cksj').eq(i).html('查看答案');
	})
	$('.xzt_jrsj').toggle(function(){
		var i=$('.xzt_jrsj').index(this);
		$('.xzt_jrsj').eq(i).attr('id','xuanzhong');
		$('.xzt_jrsj').eq(i).html('移出试卷');
		$('.xzt_jrsj').eq(i).addClass('xzt_btn_hover');
		var timu=$('.xzt_jrsj[id="xuanzhong"]').length;
		$('.stl_title span').html(timu);
		if (timu==0) {
			$('.stl_sztm1').hide();
			$('.stl_sztm').show();
		}else{
			$('.stl_sztm1').show();
			$('.stl_sztm').hide();
			$('.stl_xzt span').html(timu);
		}
	},function(){
		var i=$('.xzt_jrsj').index(this);
		$('.xzt_jrsj').eq(i).removeAttr('id','xuanzhong');
		$('.xzt_jrsj').eq(i).html('加入试卷');
		$('.xzt_jrsj').eq(i).removeClass('xzt_btn_hover');
		var timu=$('.xzt_jrsj[id="xuanzhong"]').length;
		$('.stl_title span').html(timu);
		if (timu==0) {
			$('.stl_sztm1').hide();
			$('.stl_sztm').show();
		}else{
			$('.stl_sztm1').show();
			$('.stl_sztm').hide();
			$('.stl_xzt span').html(timu);
		}
	})
	$('.xzt_qxsc1').click(function(){
		var i=$('.xzt_qxsc1').index(this);
		$('.wdsc_xzt').eq(i).remove();
	})
	$('.xzt_qxsc2').toggle(function(){
		var i=$('.xzt_qxsc2').index(this)
		$('.xzt_qxsc2').eq(i).html('取消收藏');
	},function(){
		var i=$('.xzt_qxsc2').index(this)
		$('.xzt_qxsc2').eq(i).html('收藏试题');
	})
	$('.stl_qkst').click(function(){
        layer.confirm('是否清空？', {
        	area:['406px','170x'],
        	title:"提示",
            btn: ['是','否'] //按钮
        }, function(){
            layer.msg('已经全部清空', {icon: 1});
			$('.stl_xzt span').html(0);
			$('.stl_title span').html(0);
			$('.stl_sztm1').hide();
			$('.stl_sztm').show();
			$('.xzt_jrsj').removeAttr('id','xuanzhong');
			$('.xzt_jrsj').html('加入试卷')
        })
	})
	$('.znzj_shanchu').click(function(){
        layer.confirm('是否删除？', {
        	area:['406px','170x'],
        	title:"提示",
            btn: ['是','否'] //按钮
        }, function(){
            layer.msg('已经全部删除', {icon: 1});
        })
	})
	$('.zsslb_delete').click(function(){
        layer.confirm('是否删除？', {
        	area:['406px','170x'],
        	title:"提示",
            btn: ['是','否'] //按钮
        }, function(){
            layer.msg('已经删除', {icon: 1});
        })
	})
	$('.znzj_title li').click(function(){
		var i=$('.znzj_title li').index(this);
		$('.znzj_title li').removeAttr('class','znzj_click').eq(i).attr('class','znzj_click');
	})
	$('.yxzj_nr p span').click(function(){
		var i=$('.yxzj_nr p span').index(this);
		$('.yxzj_nr p').eq(i).remove();
		$('.yxzj_1').html($('.yxzj_2 p').length)
		$('.yxzj2').html($('.yxzj_3 p').length)
	})
	// $('.yxzj_2 p').click(function(){
	// 	var i=$('.yxzj_nr p span').index(this);
	// 	$('.yxzj_1').html($('.yxzj_2 p').length-1)
	// 	$('.yxzj_nr p').eq(i).remove();
	// })
	$('.dxt_jian').click(function(){
		var i=$('.dxt_jian').index(this)
		var dxt_sl=$('.dxt_sl').eq(i).val();
		if (dxt_sl>0) {
			dxt_sl-=1;
			$('.dxt_jian').eq(i).css({'border':'1px solid #ff6700','background':'#ff6700','color':'#fff'})
			$('.dxt_sl').eq(i).val(dxt_sl)
		}else{
			$('.dxt_jian').eq(i).css({'border':'1px solid #dcdcdc','background':'#dcdcdc','color':'#000'})
			$('.dxt_sl').eq(i).val('')
			$('.dxt_tiliang').eq(i).show();
		};
	})
	$('.dxt_jia').click(function(){

		var i=$('.dxt_jia').index(this);
		$('.dxt_tiliang').eq(i).hide();
		var dxt_sl=$('.dxt_sl').eq(i).val();
		dxt_sl++;
		$('.dxt_sl').eq(i).val(dxt_sl)
		if (dxt_sl>0) {
			$('.dxt_jian').eq(i).css({'border':'1px solid #ff6700','background':'#ff6700','color':'#fff'})
		}
	})
	$('.nddj li').click(function(){
		var i=$('.nddj li').index(this);
		$('.nddj li').css({'background':'#fff','color':'#000'}).eq(i).css({'background':'#ff6700','color':'#fff'})
	})
	$('.tixing_box2 li').click(function(){
		var i=$('.tixing_box2 li').index(this);
		$('.tixing_box2 li').css({'color':'#000','background':'none'}).eq(i).css({'color':'#fff','background':'#ff6700'})
	})
	$('.tixing_box1 li').click(function(){
		var i=$('.tixing_box1 li').index(this);
		$('.tixing_box1 li').css({'color':'#000','background':'none'}).eq(i).css({'color':'#fff','background':'#ff6700'})
	})
	$('.timu_daan').toggle(function(){
		var i=$('.timu_daan').index(this)
		$('.xzt_da').eq(i).show();
		$('.timu_daan').eq(i).html('隐藏');
	},function(){
		var i=$('.timu_daan').index(this)
		$('.xzt_da').eq(i).hide();
		$('.timu_daan').eq(i).html('答案');
	})
	$('.nj_box li').click(function(){
		var i=$('.nj_box li').index(this);
		$('.nj_box li').removeClass('nj_box_click').eq(i).addClass('nj_box_click')
	})
})