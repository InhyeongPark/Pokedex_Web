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
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
        <title>Main Page</title>
        <link href="jquery-ui-1.12.1.custom/jquery-ui.css" rel="stylesheet">
        <script src="jquery-ui-1.12.1.custom/external/jquery/jquery.js"></script>
        <script src="jquery-ui-1.12.1.custom/jquery-ui.js"></script>
        <link href="mainPage.css" rel="stylesheet" type="text/css">
        <link href="background.css" rel="stylesheet" type="text/css">
        <script src="mainPage.js"></script>
    </head>
    <body>
        <div class="container">
            <div class="show">
                <div class="block">
                    <div id="tellMe" class="status text white">GOOD</div>
                    <div class="image place"></div>
                </div>
                <div class="block leftBorder">
                    <div class="status text white name">PIKACHU</div>
                    
                    <div class="text white HP">HP</div>
                    <div id="Progress" class="progressing">
                      <div id="ProgressHP" class="myProgressBar">100%</div>
                    </div>
                    
                    <div class="text white HP MP">MP</div>
                    <div class="progressing">
                      <div id="ProgressMP" class="myProgressBar MPBar">100%</div>
                    </div>
                    
                    <div class="text Skills">SKILLS</div>
                    <div class="text Skills skill">THUNDER</div>
                </div>
            </div>
            
            <div class="place behind hospital"></div>
            <div class="speechBubble commentNurse"></div>
            
            <div class="place behind lookPokemon"></div>
            <div class="speechBubble commentPokemon"></div>
           
            <div class="place front starter">
                <div id="you" class="user text white">YOU</div>
            </div>
            
            <div class="place front logout"></div>
            <div class="speechBubble commentLogOut"></div>
            
            <div class="place front music"></div>
            <div class="speechBubble commentMusic"></div>
            <div class="speechBubble commentMusicOut"></div>
            
            <div id="musicBox" class="showVideo">
                <iframe id="myVideo" src="https://www.youtube.com/embed/-BKfhq_TtcE?version=3&enablejsapi=1" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>

            <div id="survey" class="text">
                <form>
                    <div class="assess">
                        WAS IT GOOD?
                    </div>
                    <input id="good" type="radio" name="assessing" value="good">
                    <label for="good">GOOD</label>
                    <input id="bad" type="radio" name="assessing" value="bad">
                    <label for="bad">BAD</label>
                    <div>
                        <input id="submit" type="button" value="Submit">
                    </div>
                </form>
            </div>
        </div>
    </body>
</html>