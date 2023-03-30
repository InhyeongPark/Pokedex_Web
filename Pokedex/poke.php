<?php 
    
    if ( !session_start() ) {
        header("Location: error.php");
        exit;
    }

    $loggedIn = empty($_SESSION['loggedin']) ? false : $_SESSION['loggedin'];

    if ( ! $loggedIn ) {
        header ("Location: login.php");
        exit;
    }
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Pokemon</title>
    <script src="poke.js"></script>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.4.1/semantic.min.css">
    <link rel="stylesheet" href="poke.css">
    <link href="background.css" rel="stylesheet" type="text/css">
<!--    url: https://medium.com/@sergio13prez/fetching-them-all-poke-api-62ca580981a2-->
</head>
<body>
<!--
    <div id="leftball" class="pokeballContainer hide">
        <div class="pokeball left"></div>
    </div>
-->
    
    <div id="container">
        <div id="poke-container" class="ui cards">
                <!-- will hold the cards for all the pokemon -->
                <button id="generate-pokemon" class="ui secondary button">Generate Pokemon</button>
        </div>
    </div>
    
<!--
    <div id="rightball" class="pokeballContainer hide">
        <div class="pokeball right"></div>
    </div>
-->
    <div>
        <button id="return" class="ui secondary button">RETURN</button>
    </div>
    
    
    <div id="delete-container">
            <button id="delete-btn" class="ui red button">Delete</button>
    </div>
   
</body>
</html>