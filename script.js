




$(window).on("load", function () {
    $("profile_inner").hide();
    $("#hi ").hide();
    $("#mynameis").hide();
    $("#femi").hide();

    $("#phone ").hide();
    $("#mail2 ").hide();
    $("#title ").hide();

    $("#hi").toggle(1000, function () {
        $(".profile_inner").show();
       
        $("#mynameis").toggle(1000, function () {

            $("#femi").toggle(1000, function () {

                setTimeout(() => {

                    callnext();
                }, 100)
            })

        })
        
    })




    function callnext() {

        $("#title ").toggle(1000, function () {

            $("#phone ").toggle(1000, function () {

                $("#mail2 ").toggle(1000)

            })
        })


    }



    setInterval(() => {
        $(".profile #hi").effect("bounce", { times: 8, distance: -60 }, 1000);
        $(".profile #mynameis").effect("bounce", { times: 8, distance: -50 }, 1000);
        $(".profile  #femi").effect("bounce", { times: 10, distance: -20 }, 1000);
    }, 3000)







}

)

