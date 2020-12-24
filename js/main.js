$(".face").click(function(){
    alert("别点我头像CDD");
})

$(".msg").click(function(){
    alert("别点了没效果的!");
})

$(".search-icon").click(function(){
    var text = $(".search_input").val();
    if(text != ""){
        alert("输入了你也搜索不了");
    }else{
        alert("你毛都不输入点什么搜索哦!");
    }
    
})