$(document).ready(function(){
    $('#open-btn').click(function(){
        $('#close-btn').removeClass('d-none');
        $('#drop-menu').removeClass('d-none');
        $(this).addClass('d-none');
    });
    $('#close-btn').click(function(){
        $('#open-btn').removeClass('d-none');
        $('#drop-menu').addClass('d-none');
        $(this).addClass('d-none');
    });


    listState = $('.stateoff');
    // console.log(listState);

    $('.style-message .btn').click(function(){
        
        varx = $(this).find('.stateoff').text();
        // console.log(varx);
        $('.stateoff').text('+');
        if(varx == '+'){
            $(this).find('.stateoff').text('-')
        }
        else{
            $(this).find('.stateoff').text('+')
        }
    });
    

})