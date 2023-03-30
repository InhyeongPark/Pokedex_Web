<?php
	if(!session_start()) {
		header("Location: error.php");
		exit;
	}

	$loggedIn = empty($_SESSION['loggedin']) ? false : $_SESSION['loggedin'];
	
	if ( $loggedIn ) {
		header("Location: mainPage.php");
        exit;
	}
	
	
	$action = empty($_POST['action']) ? '' : $_POST['action'];
	
	if ($action == 'do_login') {
		handle_login();
	} else {
		login_form();
	}
	
	function handle_login() {
		$username = empty($_POST['username']) ? '' : $_POST['username'];
		$password = empty($_POST['password']) ? '' : $_POST['password'];
	
        if ( $username == "test" && $password == "pass" ) {
			$_SESSION['loggedin'] = $username;	
            header("Location: mainPage.php");
            exit;
		} else if ($username != 'test' && $password != 'pass') {
			$error = 'Error: Incorrect username and password';
			require "index.php";
		} else if ($password != 'pass') {
			$error = 'Error: Incorrect password';
			require "index.php";
		} else {
			$error = 'Error: Incorrect username';
			require "index.php";
		}	
	}
	
	function login_form() {
		$username = "";
		$error = "";
		require "index.php";
	}
	
	
?>