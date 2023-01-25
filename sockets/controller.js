

export const socketController = (socket) => {

    console.log('Cliente conectado', socket.id );

    socket.on('disconnect', () => {
        console.log('Cliente desconectado', socket.id );
    })

    socket.on('sent-message', ( payload, callback ) => {

        const id = 123456;
        callback( id );

        socket.broadcast.emit('sent-message', payload );
    })
}