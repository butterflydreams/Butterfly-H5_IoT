const WebSocketServer = require("ws").Server;
const Url = require("url");

const STATE = {
    Connecting: 0,
    Connected: 1,
    Disconnecting: 2,
    Disconnected: 3,
    Error: -1
};

let server = new WebSocketServer({ port: 10005 });
let clients = new Map();

server.on("connection", (ws, req) => {
    let uid = Url.parse(req.url, true).query.uid;
    if (!uid) {
        console.log("!! invalid user uid !!");
        return;
    }
    console.log(`>> user[${uid}] is online!`);
    clients.set(uid, { socket: ws, state: STATE.Connected });
    clients.forEach((value) => {
        if (value.socket && value.state == STATE.Connected) {
            value.socket.send(JSON.stringify({
                type: "login",
                uid,
                message: JSON.stringify(Array.from(clients).map(([key, value]) => {
                    return { uid: key, state: value.state }
                }))
            }));
        }
    });

    ws.on("close", () => {
        console.log(`>> user[${uid}] is offline!`);
        clients.set(uid, { socket: null, state: STATE.Disconnected })
        clients.forEach((value,) => {
            if (value.socket && value.state == STATE.Connected) {
                value.socket.send(JSON.stringify({
                    type: "logout",
                    uid,
                    message: JSON.stringify(Array.from(clients).map(([key, value]) => {
                        return { uid: key, state: value.state }
                    }))
                }));
            }
        });
    });

    ws.on("message", (msg) => {
        console.log(`user[${uid}]: ${msg}`);
        clients.forEach((value) => {
            if (value.socket && value.state == STATE.Connected) {
                value.socket.send(JSON.stringify({ type: "message", uid, message: `${msg}` }))
            }
        });
    })
})

