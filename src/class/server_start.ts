import express from 'express';
import http from 'http';
import socketio from 'socket.io';
export class ServerStart {

    public socketIo: SocketIO.Server;
    public serverOptions: SocketIO.ServerOptions;

    public startServer(): void {
        const server = new http.Server(express());
        this.socketIo = socketio(server);
        console.log('#### Server is running ####');
    }
}