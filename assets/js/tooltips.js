$(document).ready(function(){
    $(".class").hover(function(){
        let cmu_class_id = get_elem_id(this);
        console.log(cmu_class_id);
        var target = courses_dict[cmu_class_id].desc; 
        $(target).show();
        moveLeft = $(this).outerWidth();
        moveDown = ($(target).outerHeight() / 2);
    });
});
