$(window).on("load", function () {
  $("profile_inner").hide();
  $("#hi ").hide();
  $("#femi").hide();

  $("#hi").toggle(1000, function () {
    $(".profile_inner").show();

    $("#femi").toggle(1000, function () {
      setTimeout(() => {
        // callnext();
      }, 100);
    });
  });

  setInterval(() => {
    $(".profile #hi").effect("bounce", { times: 8, distance: -60 }, 1000);
    $(".profile  #femi").effect("bounce", { times: 10, distance: -20 }, 1000);
  }, 3000);
});

$(document).ready(() => {
  $("#dkmodebutton").click(() => {
    $(".body1, .body2, .body3, .foot, .welcomemessage").toggleClass("dkmode");

    if ($(".body1").hasClass("dkmode")) {
      $("#dkmodebutton").text("Switch to default");
      $("#dkmodebutton").css("background-color", "#000000d2");
      $("#dkmodebutton").css("color", "white");
      $("#dkmodebutton").css("border", "1px solid white");
    } else {
      $("#dkmodebutton").text("Switch to darkmode");
      $("#dkmodebutton").css("background-color", "#6a4e3083");
    }
  });
});
