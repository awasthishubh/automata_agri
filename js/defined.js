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
        }
    }).done(function(data){
        console.log(data)
        $('#totalyield').html(data.yield)
        if(data.type==0)  $('#lowYield').show()
        if(data.type==1)  $('#normalYield').show()
        if(data.type==2)  $('#highYield').show()
        $('#loader').fadeOut('fast')
        $('#result').fadeIn('slow')
    }).catch(function(data){
        $('#loader').fadeOut('fast')
        $('#select').fadeIn('slow')

    })
    

}