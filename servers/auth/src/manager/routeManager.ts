import BaseRoute from "../routes";
import express, { Router } from "express";
import { HealthCheck } from "../routes/health";
import { AuthRoute } from "../routes/auth";
class RouteManager {
  private routes: BaseRoute[];
  constructor() {
    this.routes = [];
  }
  public addRoute(route: BaseRoute) {
    route.init();
    this.routes.push(route);
  }
  public getRouter(): Router {
    const router = express.Router();
    this.routes.forEach((route) => {
      router.use("/", route.router);
    });
    return router;
  }
}
const routeManager = new RouteManager();
routeManager.addRoute(new HealthCheck());
routeManager.addRoute(new AuthRoute());
const routes = routeManager.getRouter();
export { routes };
