let dark = false;
$(".btn").click(function(){
if(dark){
    $("body").css("background-image", "linear-gradient(270deg, #2376ae 0%, #c16ecf 100%)");
    
}
else{
    $("body").css("background-image", "linear-gradient(270deg, #123b57 0%, #603767 100%)");
}
dark=!dark;
})
// light theme
$("body").css("background-image", "linear-gradient(270deg, #2376ae 0%, #c16ecf 100%)");
// dark theme
$("body").css("background-image", "linear-gradient(270deg, #123b57 0%, #603767 100%)");
