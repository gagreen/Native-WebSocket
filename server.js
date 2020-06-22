var WebSocketSever = require('ws').Server;
var wss = new WebSocketSever({port: 3000});

// 연결이 되면 클라언트에게 메시지 전송, 클라이언트로부터 수신
wss.on('connection', (ws) => {
    ws.send("Hello World!, I'm server.");
    ws.on('message', (message) => {
        console.log(`Received: ${message}`)
    })
})