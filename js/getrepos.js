// JavaScript Document
$(document).ready(function() {
$("body").on('click','.verRepositorios', function() {
	busca=$(this).attr('repositorio');
	id = $(this).attr('id').toString();
    $.ajax({
        type: "POST",
        url: "sys/geturepos.php",
        dataType: "json",
		data:{param:busca},
		
        success: function(result) {
        	for(var i in result) {
				
               $("#"+id+"+ .repos_list").append(
			   		
                    "<li><a href='" + result[i].html_url +"' target='_blank'>"+result[i].name+ "</a></li>"
               );
			
			}
        }
    });
});
});