import { NextFunction, Request, Response } from "express";
import AuthService from "../services/AuthService";
import { Role } from "@prisma/client";

class AuthController {
  private authService: AuthService;

  constructor() {
    this.authService = new AuthService();
  }

  async signUp(req: Request, res: Response): Promise<void> {
    try {
      const { email, password, role } = req.body;
      if (!email || !password || !role) {
        res.status(400).json({ error: "Missing required fields" });
        return;
      }

      const user = await this.authService.signUp(email, password, role as Role);
      res
        .status(201)
        .json({ message: "User created successfully", userId: user.id });
    } catch (error) {
      res.status(500).json({ error: (error as Error).message });
    }
  }

  async signIn(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const { email, password, role } = req.body;
      if (!email || !password || !role) {
        res.status(400).json({ error: "Missing required fields" });
        return;
      }
      const token = await this.authService.signIn(email, password);
      res.status(201).json({ message: "SignIn Successfully !", token });
    } catch (error) {
      res.status(500).json({ error: (error as Error).message });
    }
  }
}

export default AuthController;
