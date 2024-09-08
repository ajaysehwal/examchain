import passport from "passport";
import { Strategy as LocalStrategy } from "passport-local";
import { Strategy as JwtStrategy, ExtractJwt } from "passport-jwt";
import AuthService from "../services/AuthService";
import { User } from "@prisma/client";

import { JwtPayload } from "../types";
import config from ".";

const authService = new AuthService();

passport.use(
  new LocalStrategy(
    {
      usernameField: "email",
      passwordField: "password",
    },
    async (email: string, password: string, done: Function) => {
      try {
        const token = await authService.signIn(email, password);
        return done(null, token);
      } catch (error) {
        return done(null, false, { message: (error as Error).message });
      }
    }
  )
);
passport.use(
  new JwtStrategy(
    {
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: config.jwtSecret,
    },
    async (jwtPayload: JwtPayload, done: Function) => {
      try {
        const user = await authService.findUserById(jwtPayload.id);
        if (user) {
          return done(null, user);
        }
        return done(null, false);
      } catch (error) {
        return done(error, false);
      }
    }
  )
);

passport.serializeUser((user, done) => {
  done(null, (user as User).id);
});
passport.deserializeUser(
  async (id: string, done: (err: any, user?: User) => void) => {
    try {
      const user = await authService.findUserById(id);
      done(null, user as User);
    } catch (error) {
      done(error);
    }
  }
);

export { passport };
