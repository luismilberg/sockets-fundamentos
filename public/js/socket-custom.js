var socket = io();

// Escuchar

socket.on('connect', function (){
    console.log('Conectado al servidor');
});

socket.on('disconnect', function(){
    console.log('Perdimos conexión con el servidor');
});

// Enviar información
socket.emit('enviarMensaje', {
    usuario: 'Luis',
    mensaje: 'Hola Mundo'
}, function (resp){
    console.log(resp);
});

// Escuchar información:

socket.on('enviarMensaje', (mensaje) => {
    console.log(mensaje);
});