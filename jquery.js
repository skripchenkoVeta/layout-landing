$(function(){
$("#leadMore").on('click',function(){
    $(".lead").load('lead.html',function(){
        $(this).fadeIn(1000);
    });
    
$("#leadMore").fadeOut(100);
});
});