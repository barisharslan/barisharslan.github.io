var projects = $(".project .btn");
var backButtons = $("i");

projects.on("click", function(){
    $(".main-content").toggle("slow", function(){});
    $(".project-info").eq($(this).index(".btn")).toggle("slow", function(){});
});

backButtons.on("click", function(){
    $(".main-content").toggle("slow", function(){});
    $(".project-info:visible").toggle("slow", function(){});
});