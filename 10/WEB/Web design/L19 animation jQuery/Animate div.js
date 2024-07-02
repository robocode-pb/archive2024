$(document).ready(function(){
   $("#but1").click(function(){
        $("div").animate({left:100});
        $("div").animate({top:150});
        $("div").animate({left:0});
        $("div").animate({top:50}, "fast");
   })
   $("#but2").click(function(){
    $("div").animate({
        left:100,
        height:100,
        width:100,
        
    });
})
$("#but3").click(function(){
 
    $("div").animate({
        height:400,
        width:400,
        
    });
    $("div").animate({
        height:100,
        width:400,
        
    });
    $("div").animate({
        height:100,
        width:100,
        
    });
})


});