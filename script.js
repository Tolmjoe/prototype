
$(window).on("load", function () {
    $("profile_inner").hide();
    $("#hi ").hide();
    $("#femi").hide();

   

    $("#hi").toggle(1000, function () {
        $(".profile_inner").show();
       
            $("#femi").toggle(1000, function () {

                setTimeout(() => {

                    callnext();
                }, 100)
            })
 
    })



    setInterval(() => {
        $(".profile #hi").effect("bounce", { times: 8, distance: -60 }, 1000);
        $(".profile  #femi").effect("bounce", { times: 10, distance: -20 }, 1000);
    }, 3000)

}

)

