$(document).ready(function(){
    var half_width = $(".rotating-img-left").width() / 2;
    $(".rotating-img-left").css("left", -half_width);
    var half_width = $(".rotating-img-right ").width() / 2;
        $(".rotating-img-right").css("right", -half_width);
});