 
$(document).ready(function(){
    var originalText;
    
    $("li").hover(function(){
        $(this).fadeTo(1000, 0.25);}, 
        function(){
        $(this).fadeTo(100, 1);
    
});
$('li').click(function(){
	$(this).css("background-color", "yellow");
	var savetext = $(this).text();

	if ($(this).text()==="clicked"){
	$(this).text(savetext);

	}
	else{$(this).text("clicked");}
	
});
    

});



/* $(document).ready(function(){
    $("li").hover(function(){
        $(this).css("background-color", "yellow");}, 
        function(){
        $(this).css("background-color", "pink");
    });
    $("li").click(function(){
    $("li").fadeTo(1000, 0.4);
});
    $("li").click(function(){
    $("li").fadeTo(100, 1);
});
    $("li").click(function(){
    $("li").text("clicked");
    var savetext = $(this).text();
    
}); 

});*/