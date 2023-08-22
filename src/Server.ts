import App from "./App";

const server = new App();

server.app.listen('3000', () => {
    console.log('Server Started !');
})  