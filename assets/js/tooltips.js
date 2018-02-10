/*
$(function() {
  $(document).tooltip({
    items: ".class",
    content: function() {
      let cmu_class_id = $(this).find(".class_id")[0].innerHTML;
      console.log(cmu_class_id);
      return courses_dict[cmu_class_id];
    }
  });
});*/


function hover() {
    $('.class').hover(function () {  
        var target = $(this).find(".class_id")[0].innerHTML;
        $(target).show();
        moveLeft = $(this).outerWidth();
        moveDown = ($(target).outerHeight() / 2);
    }, 

    function () {
        var target = $(this).find(".class_id")[0].innerHTML;
        if (!($(".class").hasClass("show"))) {
            $(target).hide(); //dont hide popup if it is clicked
        }   
    });

/*
    $('.class').click(function (e) {
        var target = $(this).find(".class_id")[0].innerHTML;
        if (!($(this).hasClass("show"))) {
            $(target).show();
        }
    $(this).toggleClass("show");
    }*/
}