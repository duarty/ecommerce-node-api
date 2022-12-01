import { Router} from "express";
import { runInContext } from "vm";

const routes = Router()

routes.get('/', (request, response) => response.json({message: "Hello dev!"}))

export default routes
