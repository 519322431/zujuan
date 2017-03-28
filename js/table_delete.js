$(function(){
    //表格中的全部删除
    $(".zsslb_shanchu").click(function(){
        layer.confirm('您确定要全部删除吗？', {
            btn: ['确定','取消'] //按钮
        }, function(){
            layer.msg('已经全部删除', {icon: 1});
        })
    })

    //表格中的删除
    $(".zsslb").delegate(".zsslb_delete","click",function(){
        layer.confirm('您确定要删除吗？', {
            btn: ['确定','取消'],//按钮
            shade:0
        }, function(){
            layer.msg('已经删除', {icon: 1});
        });
    })
})