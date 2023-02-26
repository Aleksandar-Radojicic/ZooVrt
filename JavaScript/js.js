$(document).ready(function(){



    var imgBr=1;
    $('#'+imgBr).css("opacity","1");

    /*dugmici*/
    $("#radnoklik").on('click',function(){
        $('html, body').animate({
            scrollTop: $("#radimo").offset().top
        }, 800);
    });

    $("#peket").on('click',function(){
        window.open('paketi.html','_self');
    });

    $("#ulaznica").on('click',function(){
        window.open('ulaznice.html','_self');
    });


    /*dugmici sa animacijom*/
    $('#visedugme').on('mouseover',function(){
        $('#anim').css('width','20vw');
    });
    $('#visedugme').on('mouseout',function(){
        $('#anim').css('width','0vw');
    });
    $("#visedugme").on('click',function(){
        window.open('ovrtu.html','_self');
    });

    $('#zivodugme').on('mouseover',function(){
        $('#animm').css('width','20vw');
    });
    $('#zivodugme').on('mouseout',function(){
        $('#animm').css('width','0vw');
    });
    $("#zivodugme").on('click',function(){
        window.open('zivotinje.html','_self');
    });
    /*dugmici sa animacijom*/
    /*dugmici*/

    /*slajder*/
    $('.desnodugme').on('click',function(){
        clearInterval(myVar);

        $('#'+imgBr).css("opacity","0");
        imgBr++;

        if(imgBr==5)
        {
            reset();
            imgBr=1;
        }
        $('#'+imgBr).css("opacity","1");

        myVar = setInterval(myTimer, 3000);
    });

    function reset()
    {
        for(i=0;i<5;i++)
        {
            $('#'+i).css("opacity","0");
        }
    }

    $('.levodugme').on('click',function(){
        clearInterval(myVar);

        $('#'+imgBr).css("opacity","0");
        imgBr--;

        if(imgBr==0)
        {
            reset();
            imgBr=3;
        }
        $('#'+imgBr).css("opacity","1");

        myVar = setInterval(myTimer, 3000);
    });
 
    
    function myTimer() {
        $('#'+imgBr).css("opacity","0");
        imgBr++;

        if(imgBr==5)
        {
            reset();
            imgBr=1;
        }
        $('#'+imgBr).css("opacity","1");
    }
    
    var myVar = setInterval(myTimer, 3000);


    


    function elementInView(elem){
        return $(window).scrollTop() < $(elem).offset().top + $(elem).height() ;
      };
      
      $(window).scroll(function(){
        if (!elementInView($(".triger")))
        {
            console.log('there it is, wooooohooooo!');
            kljuc=true;
        }
      });

    var kljuc = false;
    var brojevi = 0;
    function myTimer1() {
        if(kljuc==true)
     {
        brojevi++;
        if(brojevi<240){
            $('.p239').text(brojevi.toString());
        }
        else
        {
            clearTimeout(myVar1);
        }       
     }
    }
    
    var myVar1 = setInterval(myTimer1, 5);
});
