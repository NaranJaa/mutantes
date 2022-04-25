"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const morgan_1 = __importDefault(require("morgan"));
const routes = require('./routes');
class App {
    constructor() {
        this.app = (0, express_1.default)();
        this.config();
        this.routerSetup();
    }
    config() {
        this.app.use((0, morgan_1.default)('dev'));
        this.app.use(express_1.default.json());
        this.app.use(express_1.default.urlencoded({ extended: false }));
        this.app.use((0, cookie_parser_1.default)());
    }
    routerSetup() {
        this.app.use('/api', routes);
    }
}
exports.default = new App().app;
// "sh etc/build.sh"
// npm run build && node --inspect ./dist/bin/www.js
