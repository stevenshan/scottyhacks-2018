
$(function() {
  $(document).tooltip({
    items: ".class",
    content: function() {
      let cmu_class_id = $(this).find(".class_id")[0].innerHTML;
      console.log(cmu_class_id);
      return courses_dict[cmu_class_id];
    }
  });
});
/*

var course_files = ["classes/fall-2017.json", "classes/spring-2018.json"];

function hover() {
    $('.class').hover(function () {  
        var target = '#' + ($(this).desc('data-popbox'));
        $(target).show();
        moveLeft = $(this).outerWidth();
        moveDown = ($(target).outerHeight() / 2);
    }, 

    function () {
        var target = '#' + ($(this).attr('data-popbox'));
        if (!($(".class").hasClass("show"))) {
            $(target).hide(); //dont hide popup if it is clicked
        }   
    });


    $('.class').click(function (e) {
        var target = '#' + ($(this).attr('data-popbox'));
        if (!($(this).hasClass("show"))) {
            $(target).show();
        }
    $(this).toggleClass("show");
    }
}*/