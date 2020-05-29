import {ServerStart} from './class/server_start';
import { ServerSocketConstants } from './constants/server_sockets_constants';
import { ClientSocketConstants } from './constants/client_sockets_constants';
import { UserResponseDTO } from './dto/response/user_response_dto';

const startServer: ServerStart = new ServerStart();
startServer.startServer(3000);

startServer.socketIo.on('connection', function(socket: SocketIO.Socket) {
    console.log('#### Connection Open ####');

    socket.on('ping', function(data: UserResponseDTO) {
        console.log('### Processing Data ###');
        console.log(data.name);

        const messageToSendServer = {
            message: 'pong message!!'
        }
        socket.emit('pong', messageToSendServer)
    });

    socket.on(ServerSocketConstants.LOGIN_SOCKET, function(data){
        console.log('### Processing Data ###');
        console.log(data);

        //emite somente para o client que solicitou
        socket.emit(ClientSocketConstants.LOGIN_SUCCESS_SOCKET);


        //emite para todos os clientes que estão escutando
        socket.broadcast.emit(ClientSocketConstants.LOGIN_SUCCESS_SOCKET);
    });
    
});