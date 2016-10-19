<?php 
header('Content-Type: application/json');
function getUsers(){
	$buscar = $_POST['param'];
	$ch = curl_init();
	curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
	curl_setopt($ch, CURLOPT_HTTPHEADER, array( 'Content-Type: application/json' ));
	curl_setopt($ch, CURLOPT_URL, "https://api.github.com/search/users?q=".$buscar);
	curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
	curl_setopt($ch, CURLOPT_USERAGENT, "Awesome-Octocat-App");
	echo curl_exec($ch);
	curl_close($ch);
	
}
getUsers();




?>