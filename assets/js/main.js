var projects = $(".project .btn");
var backButtons = $("i");
console.log(projects);

function showProject(){

}

projects.on("click", function(){
    // alert($(this).index(".btn"));
    
    $(".main-content").toggle("slow", function(){});
    
    $(".project-info").eq($(this).index(".btn")).toggle("slow", function(){});
});

backButtons.on("click", function(){
    // alert($(this).index(".btn"));
    
    $(".main-content").toggle("slow", function(){});
    
    $(".project-info:visible").toggle("slow", function(){});
});