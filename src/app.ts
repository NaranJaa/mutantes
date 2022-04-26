
import express, { RequestHandler, } from 'express';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
const routes = require('./routes');


class App {
  public app: express.Application;

  constructor() {
    this.app = express();
    this.config();
    this.routerSetup();
  }

  private config() {

    this.app.use(logger('dev'));
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: false }));
    this.app.use(cookieParser());
  }

  private routerSetup() {
    this.app.use('/api', routes);
  }

}

export default new App().app;