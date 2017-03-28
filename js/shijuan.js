$(function(){
	// 隐藏一系列东西
	function yincang (obj,Class){
		if ($(obj).hasClass('shezhi_xuanzhong')) {
			$(Class).hide();
		}else{
			$(Class).show();
		}	
	}
	// 输入框选中
	$('.zbt_bjk').focus(function(){
		var i=$('.zbt_bjk').index(this);
		$('.zbt_bjk').css('border','1px solid #a8a8a8').eq(i).css('border','1px solid #ff6700')
	})
	$('.zbt_bjk').blur(function(){
		$('.zbt_bjk').css('border','1px solid #a8a8a8')
	})
	function tihaoshengcheng(){
		var arr=['一','二','三','四','五','六','七','八','九','十','十一','十二','十三','十四','十五'];
		$(".tishu").each(function(i,obj){
			$(obj).html(arr[i])	
		})
	}
	tihaoshengcheng();
	// 大题题号
	function datitihao(){
		var arr=['一','二','三','四','五','六','七','八','九','十','十一','十二','十三','十四','十五'];
		$(".dati_tihao").each(function(i,obj){
			$(obj).html(arr[i-1])	
		})
	}
	datitihao()
	// 给大题动态添加id
	// var xuanzeti_geshu=$('.xuanzeti').length
	for (var i = 0; i < $('.xuanzeti').length; i++) {
		$($('.xuanzeti')[i]).attr('id','xuanzeti'+i)
		$($('.xuanzeti')[i]).addClass('xuanzeti'+i)
	};
	for (var i = 0; i < $('.xzt_sg').length; i++) {
		$($('.xzt_sg')[i]).attr('id','xzt_sg'+i)
		$($('.xzt_sg')[i]).addClass('xzt_sg'+i)
	};
	// 题型注释加括号
	$('.dyj_zhushi').html('('+($('.dyj_zhushi').html())+")")
	var juan_parents;
	// 克隆大题 添加新题型
	$(document).delegate('.tianjian_qd','click',function(event){
		var i=$('.dyj_xzt').length;
		var clone=$($('.muban1')[0]).clone();
		clone.find('.dyj_timu').html($('.tixing_xinzeng').val())
		clone.find('.dyj_zhushi').html('('+$('.tixing_xinzeng1').val()+")")
		clone.show().addClass("1111").addClass("muban1"+i).appendTo(juan_parents);
		$('.tixing_xinzeng').val('');
		$('.tixing_xinzeng1').val('');
		layer.closeAll('page');
		// 头部表格数量
		var timu_length=$('.dyj_timu').length-1;
		var tishu_length=$('.tishu').length;
		for (var i = tishu_length; i < timu_length; i++) {
			var clone_timu=$($('.tishu')[0]).clone();
			clone_timu.insertAfter($('.tishu').last());
			var clone_timu=$($('.fenshu')[0]).clone();
			clone_timu.insertAfter($('.fenshu').last())
			/*alert(timu_length+','+i)*/
		};
		datitihao()
		tihaoshengcheng();
	})
		
	// 问题题号
	$(document).delegate('.wenti','each',function(i,obj){
		$(obj).find('.tihao').html(i+1)	
	})
	$(document).delegate('.wenti1','each',function(i,obj){
		$(obj).find('.tihao1').html(i+1)	
	})
	// 题目删除
	$(document).delegate('.timu_shanchu','click',function(event){
		var i=$('.timu_shanchu').index(this);
		layer.confirm('是否删除？', {
        	area:['406px','170x'],
        	title:"提示",
            btn: ['是','否'] //按钮
        }, function(){
            layer.msg('已经全部删除', {icon: 1});
			$('.timu').eq(i).remove();
			$('.wenti').each(function(i,obj){
				$(obj).find('.tihao').html(i+1)	
			})
			$('.wenti1').each(function(i,obj){
				$(obj).find('.tihao1').html(i+1)	
			})
        })
	})
	// 选择题 删除
	$(document).delegate('.xzt_shanchu','click',function(event){
		var i=$('.xzt_shanchu').index(this);
		layer.confirm('是否删除？', {
        	area:['406px','170x'],
        	title:"提示",
            btn: ['是','否'] //按钮
        }, function(){
            layer.msg('已经删除', {icon: 1});
			$('.xuanzeti').eq(i).remove();
        })
	})
	// 小题上移
	$(document).delegate('.zxt_shangyi','click',function(event){
		var i=$('.zxt_shangyi').index(this)
		if (i>0) {
			$('.timu1').eq(i).insertBefore($('.timu1').eq(i-1))
		};
		$('.wenti').each(function(i,obj){
			$(obj).find('.tihao').html(i+1)	
		})
	})
	// 小题下移
	$(document).delegate('.zxt_xiayi','click',function(event){
		var i=$('.zxt_xiayi').index(this)
		var tishu=$('.zxt_xiayi').length
		if (i<tishu) {
			$('.timu1').eq(i).insertAfter($('.timu1').eq(i+1))
		};
		$('.wenti').each(function(i,obj){
			$(obj).find('.tihao').html(i+1)	
		})
	})
	// 第二卷小题上移
	$(document).delegate('.zxt_shangyi1','click',function(event){
		var i=$('.zxt_shangyi1').index(this)
		if (i>0) {
			$('.timu2').eq(i).insertBefore($('.timu2').eq(i-1))
		};
		$('.wenti1').each(function(i,obj){
			$(obj).find('.tihao1').html(i+1)	
		})
	})
	// 第二卷小题下移
	$(document).delegate('.zxt_xiayi1','click',function(event){
		var i=$('.zxt_xiayi1').index(this)
		var tishu=$('.zxt_xiayi1').length
		if (i<tishu) {
			$('.timu2').eq(i).insertAfter($('.timu2').eq(i+1))
		};
		$('.wenti1').each(function(i,obj){
			$(obj).find('.tihao1').html(i+1)	
		})
	})

	// 第一卷大题上移
	$(document).delegate('.1111 .xzt_shangyi','click',function(event){
		var i=$('.1111 .xzt_shangyi').index(this)
		if (i>0) {
			$('.1111').eq(i).insertBefore($('.1111').eq(i-1))
		};
	})
	// 第一卷大题下移
	$(document).delegate('.1111 .xzt_xiayi','click',function(event){
		var i=$('.1111 .xzt_xiayi').index(this)
		var tishu=$('.1111 .xzt_xiayi').length
		if (i<tishu) {
			$('.1111').eq(i).insertAfter($('.1111').eq(i+1))
		};
	})
	// 第二卷大题上移
	$(document).delegate('.2222 .xzt_shangyi','click',function(event){
		var i=$('.2222 .xzt_shangyi').index(this)
		if (i>0) {
			$('.2222').eq(i).insertBefore($('.2222').eq(i-1))
		};
	})
	// 第二卷大题下移
	$(document).delegate('.2222 .xzt_xiayi','click',function(event){
		var i=$('.2222 .xzt_xiayi').index(this)
		var tishu=$('.2222 .xzt_xiayi').length
		if (i<tishu) {
			$('.2222').eq(i).insertAfter($('.2222').eq(i+1))
		};
	})

	// 第一卷上移
	$(document).delegate('.dyj_shangyi','click',function(event){
		var i=$('.dyj_shangyi').index(this)
		if (i>0) {
			$('.diyijuan').eq(i).insertBefore($('.diyijuan').eq(i-1))
		};
	})
	// 第一卷下移
	$(document).delegate('.diyijuan_xiayi','click',function(event){
		var i=$('.diyijuan_xiayi').index(this)
		var tishu=$('.diyijuan_xiayi').length
		if (i<tishu) {
			$('.diyijuan').eq(i).insertAfter($('.diyijuan').eq(i+1))
		};
	})
	$('.sj_shezhi').click(function(){
		layer.open({
	        type: 1,
	        title:"试卷设置",
	        skin: 'stl_scst1',
	        closeBtn: 0, //不显示关闭按钮
	        area:['624px','699px'],
	        content:$(".shijuan_shezhi")
		});
	})
	$('.shezhi_qx').click(function(){
		layer.closeAll('page');
	})
	$('.sj_baocun').click(function(){
		layer.open({
	        type: 1,
	        title:"设置试卷名称",
	        skin: 'stl_scst1',
	        closeBtn: 0, //不显示关闭按钮
	        area:['540px','265px'],
	        content:$(".shijuan_baocun")
		});
		$('.shezhi_mingcheng').val($('.sj_zbt_1').html())
	})
	
	$('.sj_xiazai').click(function(){
		layer.open({
	        type: 1,
	        title:"下载设置",
	        skin: 'stl_scst1',
	        closeBtn: 0, //不显示关闭按钮
	        area:['595px','358px'],
	        content:$(".shijuan_xiazai")
		});
	})
	var mubiao,mubiao1,titou_tixing,titou_zhushi
	$(document).delegate('.xzt_sg','click',function(event){
		layer.open({
	        type: 1,
	        title:"题头设置",
	        skin: 'stl_scst1',
	        closeBtn: 0, //不显示关闭按钮
	        area:['540px','512px'],
	        content:$(".shijuan_titou")
		});
	
		mubiao=$(this).parent().parent().parent().parent().find('.dyj_timu');
		mubiao1=$(this).parent().parent().parent().parent().find('.dyj_zhushi');
		titou_tixing=$(this).parent().parent().parent().find('.dyj_timu');
		titou_zhushi=$(this).parent().parent().parent().find('.dyj_zhushi');
			if (mubiao.css('display')=='none') {
				$('.zbt_yc_1').addClass('shezhi_xuanzhong')
			}else{
				$('.zbt_yc_1').removeClass('shezhi_xuanzhong')
			}
			if (mubiao1.css('display')=='none') {
				$('.zbt_yc_2').addClass('shezhi_xuanzhong')
			}else{
				$('.zbt_yc_2').removeClass('shezhi_xuanzhong')
			}
	})
	$('.titou_qd').click(function(){
		yincang('.zbt_yc_1',mubiao);
		yincang('.zbt_yc_2',mubiao1);
		titou_tixing.html($('.zbt_bjk_1').val());
		titou_zhushi.html('('+$('.zbt_bjk_2').val()+')');
		$('.zbt_bjk_2').val('');
		$('.zbt_bjk_1').val('');
		layer.closeAll('page');
	})
	$('.shezhi_qd').click(function(){
		layer.closeAll('page');
	})
	$('.sj_fenzhi').click(function(){
		layer.open({
	        type: 1,
	        title:"设置分值",
	        skin: 'stl_scst1',
	        closeBtn: 0, //不显示关闭按钮
	        area:['464px','582px'],
	        content:$(".shezhi_fenzhi")
		});
	})
	$(document).delegate('.sj_fjt1','click',function(event){
		layer.open({
	        type: 1,
	        title:'分卷头设置',
	        skin: 'stl_scst1',
	        closeBtn: 0, //不显示关闭按钮
	        area:['591px','459px'],
	        content:$(".fenjuantou_shezhi1")
		});
	})
	$(document).delegate('.sj_fjt2','click',function(event){
		layer.open({
	        type: 1,
	        title:'分卷头设置',
	        skin: 'stl_scst1',
	        closeBtn: 0, //不显示关闭按钮
	        area:['591px','459px'],
	        content:$(".fenjuantou_shezhi2")
		});
	})
	$(document).delegate('.sj_tjtx','click',function(event){
		juan_parents=$(this).parent().parent().parent().parent();
		layer.open({
	        type: 1,
	        title:"添加新题型",
	        skin: 'stl_scst1',
	        closeBtn: 0, //不显示关闭按钮
	        area:['534px','454px'],
	        content:$(".tianjia_tixing")
		});
	})
	// 下载
	$('.xiazai_geshi1 span').click(function(){
		var i=$('.xiazai_geshi1 span').index(this);
		$('.xiazai_geshi1 span').css({'background':'#fff','color':'#000'}).eq(i).css({'background':'#ff6700','color':'#fff'})
	})
	$('.xiazai_geshi2 span').click(function(){
		var i=$('.xiazai_geshi2 span').index(this);
		$('.xiazai_geshi2 span').css({'background':'#fff','color':'#000'}).eq(i).css({'background':'#ff6700','color':'#fff'})
	})

	//大题的hover框
	$(document).delegate('.dyj_xzt','hover',function(event){
		var type = event.type; 
		var i=$('.dyj_xzt').index(this);
	    if(type == "mouseenter"){ //移入  
			$('.xuanzeti').eq(i).css('border','2px solid #ff6700')
	    }else{//mouseleave 移出  
			$('.xuanzeti').eq(i).css('border','2px solid #fff')
	    }  
	})

	// 卷子hover框
	$(document).delegate('.sjy_dyj','hover',function(event){
		var type = event.type; 
		var i=$('.sjy_dyj').index(this)
	    if(type == "mouseenter"){ //移入  
			$('.diyijuan').eq(i).css('border','2px solid #ff6700')
	    }else{//mouseleave 移出  
		$('.diyijuan').eq(i).css('border','2px solid #fff')
	    }  
	})
	// 打印
	$('.sj_dayin').click(function(){
		$('.header').hide();
		$('.title').hide();
		$('.sjy_fl').hide();
		$('.timu_liebiao').hide();
		$('.wljy').hide();
	})
	// 更改各种标题
	// 试卷设置中更改
	$('.shijuan_shezhi .zbt_yc').toggle(function(){
		var i=$('.shijuan_shezhi .zbt_yc').index(this);
		$('.shijuan_shezhi .zbt_yc').eq(i).addClass('shezhi_xuanzhong');
	},function(){
		var i=$('.shijuan_shezhi .zbt_yc').index(this);
		$('.shijuan_shezhi .zbt_yc').eq(i).removeClass('shezhi_xuanzhong');
	})
	
	$('.shijuan_qd').click(function(){
		var zbt=$('.shijuan_shezhi .shijuan_zbt').val();
		var fbt=$('.shijuan_shezhi .shijuan_fbt').val();
		var bmbq=$('.shijuan_shezhi .shijuan_bmbq').val();
		var sjxxl=$('.shijuan_shezhi .shijuan_sjxxl').val();
		var kssrl=$('.shijuan_shezhi .shijuan_kssrl').val();
		var zysx=$('.shijuan_shezhi .shijuan_zysx').val();
		$('.sj_zbt').html(zbt);
		$('.sj_fbt').html(fbt);
		$('.sj_juemi').html(bmbq);
		$('.sj_ksfw').html(sjxxl);
		$('.sj_grxx').html(kssrl);
		$('.zysx_zi1').html(zysx);
		for (var i = 0; i < 8; i++) {
			yincang('.zbt_yc'+(i+1),'.sj_zbt_'+(i+1))
		};
		layer.closeAll('page');
	})
	// 题头设置中的隐藏
	$('.shijuan_titou .zbt_yc').toggle(function(){
		var i=$('.shijuan_titou .zbt_yc').index(this);
		$('.shijuan_titou .zbt_yc').eq(i).addClass('shezhi_xuanzhong');
	},function(){
		var i=$('.shijuan_titou .zbt_yc').index(this);
		$('.shijuan_titou .zbt_yc').eq(i).removeClass('shezhi_xuanzhong');
	})
	
	// 大题清空小题
	$('.xzt_qk').click(function(){
		var i=$('.xzt_qk').index(this);
		$('.xuanzeti').eq(i).find('.dyj_tmzw').remove()
	})
	// 分卷头内的设置
		$('.fenjuantou_yc1').toggle(function(){
			$('.fenjuantou_yc1').addClass('shezhi_xuanzhong');
		},function(){
			$('.fenjuantou_yc1').removeClass('shezhi_xuanzhong');
		})
		$('.fenjuantou_yc2').toggle(function(){
			$('.fenjuantou_yc2').addClass('shezhi_xuanzhong');
		},function(){
			$('.fenjuantou_yc2').removeClass('shezhi_xuanzhong');
		})
	$('.fenjuantou_qd1').click(function(){
		if ($('.fenjuantou_yc1').hasClass('shezhi_xuanzhong')) {
			$('.dyj_title1').addClass('yincang');
		}else{
			$('.dyj_title1').addClass('xianshi');
		};
		if ($(".dyj_title1").hasClass('yincang')) {
			$('.fenjuantou_yc1').addClass('shezhi_xuanzhong')
		}else{
			$('.fenjuantou_yc1').removeClass('shezhi_xuanzhong')
		};
		var juanbiao=$('.shijuan_juanbiao1').val();
		var shijuan_shuoming1=$('.shijuan_shuoming1').val();
		$('.juanbiao').html(juanbiao);
		$('.sj_shuoming').html('('+shijuan_shuoming1+")");
		layer.closeAll('page');
	})
	$('.fenjuantou_qd2').click(function(){
		if ($('.fenjuantou_yc2').hasClass('shezhi_xuanzhong')) {
			$('.dyj_title2').addClass('yincang');
		}else{
			$('.dyj_title2').addClass('xianshi');
		};
		if ($(".dyj_title2").hasClass('yincang')) {
			$('.fenjuantou_yc2').addClass('shezhi_xuanzhong')
		}else{
			$('.fenjuantou_yc2').removeClass('shezhi_xuanzhong')
		};
		var juanbiao=$('.shijuan_juanbiao2').val();
		var shijuan_shuoming1=$('.shijuan_shuoming2').val();
		$('.juanbiao1').html(juanbiao);
		$('.sj_shuoming1').html('('+shijuan_shuoming1+")");
		layer.closeAll('page');
	})
	// 给设置分值的输入框动态添加类名
	for (var i = 0; i < $('.diyi_dati .fenzhi_input').length; i++) {
		$($('.diyi_dati .fenzhi_input')[i]).addClass('fenzhi_input'+i)
	};
	for (var i = 0; i < $('.dier_dati .fenzhi_input').length; i++) {
		$($('.dier_dati .fenzhi_input')[i]).addClass('fenzhi_input'+i)
	};
	// 小题删除
})