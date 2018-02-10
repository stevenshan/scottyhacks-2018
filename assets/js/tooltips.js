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


$(document).ready(function(){
    $(".class").hover(function(){
        let cmu_class_id = $(this).find(".class_id")[0].innerHTML;
        console.log(cmu_class_id);
        var target = courses_dict[cmu_class_id]; 
        $(target).show();
        moveLeft = $(this).outerWidth();
        moveDown = ($(target).outerHeight() / 2);
    });
});

/*
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
}