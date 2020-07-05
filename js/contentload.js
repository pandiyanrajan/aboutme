

$(".navClick").click(function(){
	$("#root").load( "template/"+this.id+".html" );	

  	$('li').removeClass('active');
  	$('#'+this.id).parent().addClass('active');

  	if("publication" == this.id)
  	{
  		// alert(loadCard());
  		// $("#publicationCard").html(loadCard());
  	}
});
$( document ).ready(function() {
    $('[data-toggle="tooltip"]').tooltip()
    $("#root").load( "template/home.html" );  
});