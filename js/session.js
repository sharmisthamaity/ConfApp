$( document ).ready(function() {
  $(".session-button").click(function() {

    $(this).css("color","#21bf27");

    setTimeout(function(){
      $(".mainContent").css("display","none");

      $("#sessionDescription").slideToggle("slow");

      $(".session-button").css("color","black");

    }, 500);

  });


});
