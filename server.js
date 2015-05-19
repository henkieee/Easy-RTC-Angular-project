var http = require('http'),
    path = require('path'),
    socketio = require('socket.io'),
    express = require('express'),
    easyrtc = require("easyrtc"),
    app = express();

var server = http.createServer(app),
    socketServer = socketio.listen(server, {"log level":1}),
    rtcServer = easyrtc.listen(app, socketServer);

app.use(express.static(path.resolve(__dirname, 'client')));
app.use('/libs', express.static(path.resolve(__dirname, 'bower_components')));

var expressServer = server.listen(process.env.PORT || 3000, process.env.IP || "0.0.0.0", function(){
    var addr = server.address();
    console.log("Server listening at", addr.address + ":" + addr.port + '!! Wie');
});

exports = module.exports = server;

exports.use = function() {
    app.use.apply(app, arguments);
};