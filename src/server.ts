import CustomRouter from './routes/Router';
import App from './app';
import CarController from './controllers/Car';
import { Car } from './interfaces/CarInterface';
import MotorcycleController from './controllers/Motorcycle';
import { Motorcycle } from './interfaces/MotorcycleInterface';

const server = new App();

const carController = new CarController();
const motoController = new MotorcycleController();

const carRouter = new CustomRouter<Car>();
const motoRouter = new CustomRouter<Motorcycle>();

carRouter.addRoute(carController);
motoRouter.addRoute(motoController);

server.addRouter(carRouter.router);
server.addRouter(motoRouter.router);

export default server;
