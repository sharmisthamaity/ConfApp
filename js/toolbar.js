$( document ).ready(function() {

  $( window ).load(function() {
    $("#scheduleContent").css("display","block");
    $(".ti-calendar").css("color","#21bf27")
  });

    $(".ti-home").click(function () {

      $(".icon").css("color","black");

      $(this).css("color","#21bf27");

      $("#headerTitle").text("WELCOME TO AUSTIN");

      $(".mainContent").css("display","none");

      $("#austinContent").css("display","block");

    });

    $(".ti-calendar").click(function () {

      $(".icon").css("color","black");

      $(this).css("color","#21bf27");

      $("#headerTitle").text("SCHEDULE");

      $(".mainContent").css("display","none");

      $("#scheduleContent").css("display","block");

    });

    $(".ti-book").click(function () {

      $(".icon").css("color","black");

      $(this).css("color","#21bf27");

      $("#headerTitle").text("SESSIONS");

      $(".mainContent").css("display","none");

      $("#sessionContent").css("display","block");

    });

    $(".ti-map-alt").click(function () {

      $(".icon").css("color","black");

      $(this).css("color","#21bf27");

      $("#headerTitle").text("MAP");

      $(".mainContent").css("display","none");

      $("#mapContent").css("display","block");

    });

});
