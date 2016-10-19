// JavaScript Document
$(document).ready(function() {
$("#busca").keyup(function(e) {
	if(e.which == 13 ){
	busca=$(this).val();
	$(".titulo").html("Resultados para "+ busca);
	$('#user_list').html("");
    $.ajax({
        type: "POST",
        url: "sys/getusers.php",
        dataType: "json",
		data:{param:busca},
		
        success: function(result) {
        	for(var i in result.items) {
				
               $("#user_list").append(
			   		"<li> <span class=moldura> <img src=' "+ result.items[i].avatar_url +" ' class=perfil /> </span> <h1 class=nome_usuario>" + result.items[i].login + "</h1> <span class=dados_user id=type>Tipo: <span>"+ result.items[i].type +" </span></span> <span class=dados_user id=score>Score: <span> "+ result.items[i].score +"</spam> </span><input id='"+ result.items[i].id+"' type=button class=verRepositorios repositorio='" +result.items[i].repos_url+ "' value='Ver Repositorios' /></div> <ul class=repos_list></ul> <div class=clear></li>"
					/*
                    "<li><img src='"+ result.items[i].avatar_url+"'><a href='" + result.items[i].url +"' target='_blank'>"+ result
					.items[i].login + "</a></li>"
                */);
			
			}
        }
    });
	}
});
});