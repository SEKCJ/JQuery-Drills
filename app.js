$(document).ready( function(){
    let text_status = true;
    $('#btnSubmit').prop('disabled', text_status);

    $('#text').keyup(function() { 
        if($('#text').val() !== ""){
            text_status = false;
        } else{
            text_status = true;
        } 
        $('#btnSubmit').prop('disabled',text_status);
    })

    

    

    
    $('#btnSubmit').click(function (){
        text_content = $('#text').val();
        alert(text_content)
    });
});