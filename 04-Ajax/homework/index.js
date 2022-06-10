$('#boton').click(function(e){
    $('#lista').empty()
    $.get('http://localhost:9090/amigos', function(data){
        data.forEach(data => {
            $('#lista').append(`<li id="${data.id}">${data.name}</li>`)
        })
    })
})
//usar $('#boton').click es el mismo selector que  document.querySelector('#boton').addEventListener


$('#search').click(function(){
    $('#input').empty()
    let input = $('#input').val()
    console.log(input)
    $.get(`http://localhost:9090/amigos/${input}`, function(data){
        console.log(data)
        $('#amigo').append(`<li id="${data.id}"> ${data.name}</li>`)
        }
    )
}
)

$('#delete').click(function(){
    let remove = $('#inputDelete').val()
    console.log(remove)
   $.get('http://localhost:9090/amigos', function(data){
       if (data.length === 0) return $('#success').append(`No hay mas amigos por eliminar`)
   })
    $.ajax({
        url: `http://localhost:9090/amigos/${remove}`,
        type: 'DELETE',
        success: function(result) {
            $.get('http://localhost:9090/amigos', function(data){
            data.forEach(data => {
                $('#lista').append(`<li id="${data.id}">${data.name}</li>`)}
        )
    })
            return $('#success').append(`${remove} fue borrado con exito`)
        }
        
    });
    }
)