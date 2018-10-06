$(document).ready(function(){
    $('select').formSelect();
  });
function back(){
    console.log('back')
    $('#result').fadeOut()
    $('#select').fadeIn()
}
function submit(){
    if(!$('#crop').val()) return
    console.log(marker1.getPosition().lat())
    console.log(marker1.getPosition().lng())
    console.log($('#crop').val())
    $.ajax({
        url:'http://localhost:5000/?lat='+marker1.getPosition().lat()+'&lng='+marker1.getPosition().lng()+'&crop='+$('#crop').val(),
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