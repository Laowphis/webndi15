<?php
include("header.php");
include("menu.php");
?>

<?php
	if(isset ($_GET['page'])){ 
		$page = $_GET['page'] ;

		if($page=='application'){
			include("content.php");
		}elseif($page=='contact'){
			include("contact.php");
		}elseif($page=='telechargement'){
			include("telechargement.php");
		}else{
			include("404.php");
		}
	}else
		include("content.php");
?>

<?php
include("footer.php");
?>