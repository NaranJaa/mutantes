"use strict";
/**
 * Module dependencies.
 */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("module-alias/register");
const dotenv_1 = require("dotenv");
(0, dotenv_1.config)();
const app_1 = __importDefault(require("@/app"));
const debug_1 = __importDefault(require("debug"));
const http_1 = __importDefault(require("http"));
const debug = (0, debug_1.default)('mutante:server');
const loggers_1 = require("@/utils/loggers");
(0, loggers_1.bootstrapLogger)();
const app_2 = require("firebase/app");
const firebaseConfig = {
    apiKey: "AIzaSyDrqjYBV6ZfGHjIbhNGoGFcuAWoLSQqOtM",
    authDomain: "mutantes-10a24.firebaseapp.com",
    projectId: "mutantes-10a24",
    storageBucket: "mutantes-10a24.appspot.com",
    messagingSenderId: "941419987508",
    appId: "1:941419987508:web:875a070db140aac7de8061"
};
// Initialize Firebase
(0, app_2.initializeApp)(firebaseConfig);
/**
 * Get port from environment and store in Express.
 */
const port = normalizePort(process.env.PORT || '3000');
app_1.default.set('port', port);
/**
 * Create HTTP server.
 */
const server = http_1.default.createServer(app_1.default);
/**
 * Listen on provided port, on all network interfaces.
 */
server.listen(port, () => console.log('🚀 ~ server launch  ~ port', port));
server.on('error', onError);
server.on('listening', onListening);
/**
 * Normalize a port into a number, string, or false.
 */
function normalizePort(val) {
    var port = parseInt(val, 10);
    if (isNaN(port)) {
        // named pipe
        return val;
    }
    if (port >= 0) {
        // port number
        return port;
    }
    return false;
}
/**
 * Event listener for HTTP server "error" event.
 */
function onError(error) {
    if (error.syscall !== 'listen') {
        throw error;
    }
    var bind = typeof port === 'string' ? 'Pipe ' + port : 'Port ' + port;
    // handle specific listen errors with friendly messages
    switch (error.code) {
        case 'EACCES':
            console.error(bind + ' requires elevated privileges');
            process.exit(1);
            break;
        case 'EADDRINUSE':
            console.error(bind + ' is already in use');
            process.exit(1);
            break;
        default:
            throw error;
    }
}
/**
 * Event listener for HTTP server "listening" event.
 */
function onListening() {
    const addr = server.address();
    const bind = typeof addr === 'string' ? 'pipe ' + addr : 'port ' + (addr === null || addr === void 0 ? void 0 : addr.port);
    debug('Listening on ' + bind);
}
