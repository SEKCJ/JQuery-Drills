$(document).ready(function () {
    let text_status = true;
    $('#btnSubmit').prop('disabled', text_status);

    $('#text').keyup(function () {
        if ($('#text').val() !== "") {
            text_status = false;
        } else {
            text_status = true;
        }
        $('#btnSubmit').prop('disabled', text_status);
    })

    //$('body').append("<div></div>");

    $('body').append('<ul></ul>')

    $('#btnSubmit').click(function (event) {
        event.preventDefault();
        text_content = $('#text').val();
        $('#btnSubmit').prop('disabled', true);
        $('#text').val("");

        /* $('div').append('<h2>'+text_content+'</h2>');
        $('h2').mouseover(function(){
            $(this).css({"background-color": "green", "border-radius": "2em"})
        })
        $('h2').mouseout(function(){
            $(this).css({"background-color": "white"})
        }) */

        $('ul').append('<li>' + text_content + '</li>')
        $('li').click(function () {
            rando1 = Math.floor(Math.random() * 255);
            rando2 = Math.floor(Math.random() * 255);
            rando3 = Math.floor(Math.random() * 255);
            $(this).css({ "color": `rgb(${rando1}, ${rando2}, ${rando3})` })
        })

        $('li').dblclick(function () {
            $(this).remove();
        });
    });
});