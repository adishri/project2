

$(document).ready(function(){
    $(".submenu").hide();
    $("a").click(function(){
        $(".submenu").show();
    });
});

$(document).ready(function(){
    $(".menu1").hide();
    $("#b1").click(function(){
        $(".menu2").hide();
        $(".menu3").hide();
        $(".menu4").hide();
        $(".menu1").show();
    });
});

$(document).ready(function(){
    $(".menu1").hide();
    $("#b2").click(function(){
        //$(".menu1").replaceWith();
        $(".menu1").hide();
        $(".menu3").hide();
        $(".menu4").hide();
        $(".menu2").show();
    });
});


$(document).ready(function(){
    $(".menu2").hide();
    $("#b3").click(function(){
        $(".menu2").hide();
        $(".menu1").hide();
        $(".menu4").hide();
        $(".menu3").show();
    });
});


$(document).ready(function(){
    $(".menu3").hide();
    $("#b4").click(function(){
        $(".menu2").hide();
        $(".menu3").hide();
        $(".menu1").hide();
        $(".menu4").show();
    });
});

$(document).ready(function(){
    $(".menu4").hide();});
