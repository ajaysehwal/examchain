import { Response, Request, NextFunction } from "express";
import passport from "passport";
import { Role, User } from "@prisma/client";

export class Middleware {
  static validateToken(req: Request, res: Response, next: NextFunction) {
    passport.authenticate(
      "jwt",
      { session: false },
      (
        err: Error | null,
        user: User | false | null,
        info: { message: string } | undefined
      ) => {
        if (err) {
          return next(err);
        }
        if (!user) {
          return res.status(401).json({ message: "Invalid token" });
        }
        req.user = user;
        next();
      }
    )(req, res, next);
  }

  static validateRole(roles: Role[]) {
    return (req: Request, res: Response, next: NextFunction) => {
      const user = req.user as User;
      if (!user) {
        return res.status(401).json({ message: "Unauthorized" });
      }
      if (!roles.includes(user.role)) {
        return res
          .status(403)
          .json({ message: "Forbidden: insufficient rights" });
      }
      next();
    };
  }
}

export default Middleware;
