$(".schedBoxRow").click(function () {

    $schedbox = $(this);
    //getting the next element
    $content = $schedbox.next();
    //open up the content needed - toggle the slide- if visible, slide up, if not slidedown.
    $content.slideToggle(100);


});
