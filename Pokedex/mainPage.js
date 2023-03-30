$(document).ready(function(){  
   
    var i = 0;
    var count = 0;
    var width = 100;
    var mpPercentage = 100;
    var bar = $("#ProgressHP");
    var mpBar = $("#ProgressMP");
    var text = $("#tellMe");
    var url = "https://www.youtube.com/embed/-BKfhq_TtcE";
    
    $(".starter").draggable(); 
                
    $(".hospital").droppable({
        drop: function(event,ui) {
            count = 0; width = 100; 
            mpPercentage = 100;
            mpBar.width(mpPercentage + "%");
            mpBar.text(mpPercentage + "%");
            move();
        }             
    });
    
    $(".lookPokemon").droppable({
        drop: function(event,ui) {
            if (width == 0) {
                alert("You Should Go To The Nurse!");
            } else {
                window.location = "poke.php";   
            }
        }             
    });
    
    $(".logout").droppable({
        drop: function(event,ui) {
            window.location = "logout.php";
        }             
    });
    
    $(".music").droppable({
        drop: function(event,ui) {
            if (width == 0) {
                alert("You Should Go To The Nurse!");
                return;
            }else {
                move();
                $("#musicBox").removeClass("showVideo");   
            }
        }             
    });
    
//    $(".music").dblclick(function() {
//        console.log("123");
//        $("#myVideo")[0].contentWindow.postMessage('{"event":"command","func":"' + 'stopVideo' + '","args":""}', '*');
//        $("#musicBox").addClass("showVideo");
//    });
    
    $(".music").click(function() {
        $("#myVideo")[0].contentWindow.postMessage('{"event":"command","func":"' + 'stopVideo' + '","args":""}', '*');
        $("#musicBox").addClass("showVideo");
    });
    
    $(".skill").click(function() {
        mp();
        move();
    });
    
    $("#submit").click(function() {
            
            var value = document.querySelector('input[name="assessing"]:checked').value;      
            var xmlHttp = new XMLHttpRequest();
  
            xmlHttp.onreadystatechange = function () {
                if (xmlHttp.readyState == 4 && xmlHttp.status == 200) {
                    var response = xmlHttp.responseText;
                    
                    var you = document.getElementById("you");
                    
                    if (response == "good") {
                        you.innerText = "⭐";
                    } else {
                        you.innerHTML = "✰";
                    }
                }
            };

            var url = "survey.php?assessing=" + value; 
            xmlHttp.open("GET",url,true);

            xmlHttp.send();
    });
    
    function mp() {
        if (mpPercentage == 0) {
            alert("NO MP: GO TO The Nurse");
        } else {
            mpPercentage = mpPercentage - 20;
            mpBar.width(mpPercentage + "%");
            mpBar.text(mpPercentage + "%");
            var time = 5;
            var thunder = setInterval(skill, 1000);
            
            function skill() {
                if (time == 0) {
                    clearInterval(thunder);
                    $(".starter").css({
                        "background" : "url('startPokemon.gif')",
                        "background-size" : "contain",
                        "background-position" : "center",
                        "background-repeat" : "no-repeat"
                    });
                } else {
                    time --;
                    $(".starter").css({
//                        image-url: https://www.deviantart.com/wildfoxart/art/Pikachu-Thunder-Gif-690255173
                        "background" : "url('thunder.gif')",
                        "background-size" : "contain",
                        "background-position" : "center",
                        "background-repeat" : "no-repeat"
                    });
                }
            }
        }
    }
    
//    url: https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_progressbar_label_js
    function move() {
        if (i == 0 && count == 0) {
            i = 1;
            count = 1;
            var id = setInterval(frame, 1000);
            
            function frame() {
                if (width == 0) {
                    clearInterval(id);
                    i = 0;
                } else {
                    width --;
                    bar.width(width + "%");
                    bar.text(width + "%");
                    if (width <= 100) {
                        $(".image").css({
                            "background" : "url('status1.gif')",
                            "background-size" : "contain",
                            "background-position" : "center",
                            "background-repeat" : "no-repeat"
                        }); 
                        bar.css("backgroundColor", "green");
                        text.css("color", "green");
                        text.text("GOOD");
                    } if (width <= 80) {
                        bar.css("backgroundColor", "greenyellow");
                    } if (width <= 60) {
                        bar.css("backgroundColor", "yellow");
                    } if (width <= 50) {
                        $(".image").css({
                            "background" : "url('status2.gif')",
                            "background-size" : "contain",
                            "background-position" : "center",
                            "background-repeat" : "no-repeat"
                        }); 
                        text.css("color","orange");
                        text.text("Hmm...");
                    } if (width <= 40) {
                        bar.css("backgroundColor", "orange");
                    } if (width <= 20) {
                        $(".image").css({
                            "background" : "url('status3.gif')",
                            "background-size" : "contain",
                            "background-position" : "center",
                            "background-repeat" : "no-repeat"
                        });
                        bar.css("backgroundColor", "red");
                        text.css("color","red");
                        text.text("HURRY...!");
                    }
                }
            }
        }
    }
});