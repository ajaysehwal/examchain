import { Router } from "express";

abstract class BaseRoute {
  public router: Router;
  protected path: string;
  constructor(path: string) {
    this.router = Router();
    this.path = path;
  }
  public init() {
    this.initializeRoutes(); 
  }

  protected abstract initializeRoutes(): void;

}

export default BaseRoute;