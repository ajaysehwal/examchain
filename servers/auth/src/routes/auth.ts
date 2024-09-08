import BaseRoute from ".";
import { NextFunction, Request, Response } from "express";
import AuthController from "../controller/AuthController";

export class AuthRoute extends BaseRoute {
  private auth: AuthController;
  constructor() {
    super("/auth");
    this.auth = new AuthController();
  }
  protected initializeRoutes(): void {
    this.router.post(
      `${this.path}/signin`,
      this.handleRequest(this.auth.signIn)
    );
    this.router.post(
      `${this.path}/signup`,
      this.handleRequest(this.auth.signUp)
    );
  }
  private handleRequest(
    controllerMethod: (
      req: Request,
      res: Response,
      next: NextFunction
    ) => Promise<void>
  ) {
    return async (req: Request, res: Response, next: NextFunction) => {
      try {
        await controllerMethod.call(this.auth, req, res, next);
      } catch (error) {
        next(error);
      }
    };
  }
}
