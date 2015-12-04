<?php
include("header.php");
?>

<?php
	if(isset ($_GET['page'])){ 
		$page = $_GET['page'] ;

		if($page=='application'){
			include("data.php");
		}else{
			include("404.php");
		}
	}else
		include("data.php");
?>

<?php
include("footer.php");
?>