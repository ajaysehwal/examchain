import express, { Application } from "express";
import "dotenv/config";
import morgan from "morgan";
import http from "http";
import { log } from "./services/logger";
import cors from "cors";
import { routes } from "./manager";
import config from "./config";
import session from "express-session";
import { passport } from "./config/passport";
class Server {
  private app: Application;
  private readonly origin: string[] = ["http://localhost:3000"];
  constructor() {
    this.app = express();
    this.initMiddleware();
    this.initRoutes();
  }
  private initMiddleware() {
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(
      morgan("combined", {
        stream: { write: (message) => log.info(message.trim()) },
      })
    );
    this.app.use(
      cors({
        origin: this.origin,
        methods: ["GET", "POST", "PUT", "DELETE"],
        allowedHeaders: [
          "Origin",
          "X-Requested-With",
          "Content-Type",
          "Authorization",
        ],
        preflightContinue: false,
        optionsSuccessStatus: 200,
        credentials: true,
      })
    );
    this.app.use(
      session({
        secret: config.SESSION_SECRET,
        resave: false,
        saveUninitialized: true,
        cookie: { secure: true },
      })
    );
    this.app.use(passport.initialize());
    this.app.use(passport.session()); 
  }
  private initRoutes() {
    this.app.use("/", routes);
  }
  private shutdown(server: http.Server) {
    log.info("Server shutting down...");
    server.close(() => {
      log.info("Server has been shut down");
      process.exit(0);
    });
    setTimeout(() => {
      log.error(
        "Could not close connections in time, forcefully shutting down"
      );
      process.exit(1);
    }, 10000);
  }
  public listen() {
    const server = this.app.listen(config.port, () => {
      log.info(`Server running on port ${process.env.PORT}`);
    });
    process.on("SIGTERM", () => this.shutdown(server));
    process.on("SIGINT", () => this.shutdown(server));
  }
}

(async () => {
  try {
    const server = new Server();
    server.listen();
  } catch (err) {
    log.error((err as Error).message);
    process.exit(1);
  }
})();
