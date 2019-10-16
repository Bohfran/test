$(".sec_one a").on ('click', function() {
    $(".sec_two ul").slideToggle('fast');
});


$(".sec_two ul li a").on('click', function () {
    $('.sec_two ul').hide()

});

function getSelectedValue(id) {
    return $("#" +id).find(".sec_one a span.value").html();
}


$(document).bind('click', function(e) {
    var clicked = $(e.target);
    if (!clicked.parents().hasClass("dropdown")) $(".sec_two ul").hide();
});


$('.multiSelect input[type="checkbox"]').on('click', function() {

    var title = $(this).closest('.mutliSelect').find('input[type="checkbox"]').val(),
        title = $(this).val() + ",";

    if ($(this).is(':checked')) {
        var html = '<span title="' + title + '">' + title + '</span>';
        $('.multiSel').append(html);
        $('.hida').hide();
    }else{
        $('span[title="' + title + '"]').remove();
        var ret = $(".hida");
        $('.sec_one a').append(ret);
    }


});