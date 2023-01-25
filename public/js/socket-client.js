
// Referencias del HTML
const lblOnline = document.querySelector('#lblOnline');
const lblOffline = document.querySelector('#lblOffline');
const txtMessage = document.querySelector('#txtMessage');
const btnSent = document.querySelector('#btnSent');

const socket = io();

socket.on('connect', () => {
    // console.log('conectado');

    lblOffline.style.display = 'none';
    lblOnline.style.display = '';
});

socket.on('disconnect', () => {
    console.log('desconectado');
    lblOnline.style.display = 'none';
    lblOffline.style.display = '';
});

socket.on('sent-message', ( payload ) => {
    console.log(payload);
})

btnSent.addEventListener( 'click', () => {
    const message = txtMessage.value;
    const payload = {
        message,
        id: 'abc123',
        fecha: new Date().getTime()
    }

    socket.emit('sent-message', payload, ( id ) => {
        console.log('Desde el server', id);
    });
})