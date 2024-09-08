import winston from "winston";
import config from "../config";
class Logger {
  private logger: winston.Logger;

  constructor() {
    const env = config.nodeEnv || "development";
    const isDev = env === "development";

    this.logger = winston.createLogger({
      level: this.getLogLevel(env),
      format: this.getLogFormat(),
      transports: this.getTransports(isDev),
    });

    this.logEnvironmentInfo(env);
  }

  private getLogLevel(env: string): string {
    return env === "production" ? "info" : "debug";
  }

  private getLogFormat(): winston.Logform.Format {
    return winston.format.combine(
      winston.format.timestamp(),
      winston.format.errors({ stack: true }),
      winston.format.splat(),
      winston.format.json()
    );
  }

  private getTransports(isDev: boolean): winston.transport[] {
    const transports: winston.transport[] = [
      new winston.transports.File({ filename: "error.log", level: "error" }),
      new winston.transports.File({ filename: "combined.log" }),
    ];

    if (isDev || config.consoleLogs) {
      transports.push(
        new winston.transports.Console({
          format: winston.format.combine(
            winston.format.colorize(),
            winston.format.simple(),
            winston.format.printf(this.formatLogMessage)
          ),
        })
      );
    }

    return transports;
  }

  private formatLogMessage = (
    info: winston.Logform.TransformableInfo
  ): string => {
    const { timestamp, level, message, stack } = info;
    return `${timestamp} [${level}]: ${message}${stack ? "\n" + stack : ""}`;
  };

  private logEnvironmentInfo(env: string): void {
    this.logger.info(`Logger initialized in ${env} mode`);
  }

  info(message: string, ...meta: any[]): void {
    this.logger.info(message, ...meta);
  }

  warn(message: string, ...meta: any[]): void {
    this.logger.warn(message, ...meta);
  }

  error(message: string, ...meta: any[]): void {
    this.logger.error(message, ...meta);
  }

  debug(message: string, ...meta: any[]): void {
    this.logger.debug(message, ...meta);
  }

  verbose(message: string, ...meta: any[]): void {
    this.logger.verbose(message, ...meta);
  }
}

const log = new Logger();

export { log };
