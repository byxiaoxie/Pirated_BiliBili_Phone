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

$(".box_item_left").click(function(){
    alert("椎名ましろが世界一かわいい( ´ ω ` )");
})

$(".box_item_right").click(function(){
    alert("椎名ましろが世界一かわいい( ´ ω ` )");
})

$(".buttom-item a").click(function(){
    alert("假的别点了CDD( ´ ω ` )");
})

$(".v-switcher_header_ul a").click(function(){
    var index = $("ul a").index(this);
    $("a").removeClass("v-switcher_header_a_select");
    $(".v-switcher_header_ul a").eq(index).addClass("v-switcher_header_a_select");
    
    $(".v-switcher_header_anchor").removeClass("v-switcher_header_anchor_1");
    $(".v-switcher_header_anchor").removeClass("v-switcher_header_anchor_2");
    $(".v-switcher_header_anchor").removeClass("v-switcher_header_anchor_3");
    $(".v-switcher_header_anchor").removeClass("v-switcher_header_anchor_4");
    $(".v-switcher_header_anchor").removeClass("v-switcher_header_anchor_5");
    $(".v-switcher_header_anchor").removeClass("v-switcher_header_anchor_6");

    if (index == 0){
        $(".v-switcher_header_anchor").addClass("v-switcher_header_anchor_1");
    }else if(index == 1){
        $(".v-switcher_header_anchor").addClass("v-switcher_header_anchor_2");
    }else if(index == 2){
        $(".v-switcher_header_anchor").addClass("v-switcher_header_anchor_3");
    }else if(index == 3){
        $(".v-switcher_header_anchor").addClass("v-switcher_header_anchor_4");
    }else if(index == 4){
        $(".v-switcher_header_anchor").addClass("v-switcher_header_anchor_5");
    }else if(index == 5){
        $(".v-switcher_header_anchor").addClass("v-switcher_header_anchor_6");
    }

})