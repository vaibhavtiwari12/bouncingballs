$(document).ready(function() {
    var divWidth  = $( "div" ).width();
    var documentWidth = $( window ).width()-divWidth;
    var documentHeight = $( window ).height()-divWidth;

    var ranzomizer = function (Maxlimit){
        return Math.floor(Math.random() * Maxlimit) + 0 
    }
    var actuator = true;
    var Animator = function(idNumber,timer){
        var randomX;
        var randomY;
        ramdomX = ranzomizer(documentWidth);
        randomY = ranzomizer(documentHeight);
        $("#b"+idNumber).animate(
            {left: ramdomX+'px', top: randomY+'px'},
            {
                easing: 'linear',
                duration: timer,
                complete: function(){
                    console.log("animated");
                    Animator(idNumber,timer); 
                }
            }
        );
    };
    Animator("0",2000);
    Animator("1",2500);
    Animator("2",2300);
    Animator("3",3000);
    Animator("4",3300);
    Animator("5",3500);
    Animator("6",4000);
    Animator("7",2700);
    Animator("8",3200);
    Animator("9",4100);
    Animator("10",2900);
});

  
    
    
