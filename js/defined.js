$(document).ready(function(){
    $('select').formSelect();
    $('.sidenav').sidenav();
  });
function back(){
    console.log('back')
    $('#result').fadeOut()
    $('#select').fadeIn()
}
$(window).scroll(function() {
    if($(this).scrollTop()>300 && $("#staticNav").hasClass("transparent")){
        $("#staticNav").removeClass('z-depth-0')
        $("#staticNav").removeClass('transparent')
        $("#staticNav").addClass('pplr')
        $("#staticNav").addClass('z-depth-2')
    }
    else if($(this).scrollTop()<300 && $("#staticNav").hasClass("pplr")){
        $("#staticNav").addClass('z-depth-0')
        $("#staticNav").addClass('transparent')
        $("#staticNav").removeClass('pplr')
        $("#staticNav").removeClass('z-depth-2')
    }
 });
function scroll2(id){
    $([document.documentElement, document.body]).animate({
        scrollTop: $("#"+id).offset().top-100
    }, 800);
}

function submit(){
    if(!$('#crop').val()) return
    console.log(marker1.getPosition().lat())
    console.log(marker1.getPosition().lng())
    console.log($('#crop').val())
    $.ajax({
        url:'https://automata-agri.herokuapp.com/?lat='+marker1.getPosition().lat()+'&lng='+marker1.getPosition().lng()+'&crop='+$('#crop').val(),
        beforeSend: function(){
            $('#select').fadeOut()
            $('#loader').fadeIn()
            $('#card-color').removeClass('green')
            $('#card-color').removeClass('red')
            $('#lowYield').hide()
            $('#normalYield').hide()
            $('#highYield').hide()
        }
    }).done(function(data){
        console.log(data)
        $('#totalyield').html(data.yield)
        if(data.type==0){
            $('#lowYield').show()
            $('#card-color').addClass('red')
        }
        if(data.type==1){
            $('#normalYield').show()
            $('#card-color').addClass('green')
        }
        if(data.type==2){
            $('#highYield').show()
            $('#card-color').addClass('red')
        }
        $('#loader').fadeOut('fast')
        $('#result').fadeIn('slow')
    }).catch(function(data){
        $('#loader').fadeOut('fast')
        $('#select').fadeIn('slow')

    })
    

}