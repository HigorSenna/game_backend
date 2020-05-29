import express from 'express';
import http from 'http';
import socketio from 'socket.io';
export class ServerStart {

    public socketIo: SocketIO.Server;
    public serverOptions: SocketIO.ServerOptions;

    public startServer(port: number): void {
        const server = new http.Server(express());
        this.socketIo = socketio(server);

        server.listen(port, function(){
            console.log(`#### Server is running on port: ${port} ####`);
        });
    }
}