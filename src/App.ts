import express from "express";
import { router } from './routes';

class App {
    
    public app: express.Application;

    constructor(){
        this.app = express();
        this.middleware();
        this.router();
    }

    private middleware() {
        this.app.use(express.json());
    }

    private router() {
        this.app.use(router);
    }

}

export default App;