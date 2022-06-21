import CustomRouter from './routes/Router';

import App from './app';

// import exampleController from './controllers/controller-example';
import CarController from './controllers/Car';

// import { example } from './interfaces/ExampleInterface';
import { Car } from './interfaces/CarInterface';

const server = new App();

// const exampleController = new exampleController();
const carController = new CarController();

// const exampleRouter = new CustomRouter<Car>();
const carRouter = new CustomRouter<Car>();
// exampleRouter.addRoute(exampleController);
carRouter.addRoute(carController);

// server.addRouter(exampleRouter.router);
server.addRouter(carRouter.router);

export default server;
