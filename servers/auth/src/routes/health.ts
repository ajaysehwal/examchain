import express, { Response, Request } from "express";
import BaseRoute from ".";
import { prisma } from "../services/prisma";
import os from "os";
export class HealthCheck extends BaseRoute {
  private requestCount: number;
  private totalResponseTime: number;

  constructor() {
    super("/health");
    this.requestCount = 0;
    this.totalResponseTime = 0;
  }
  protected initializeRoutes() {
    this.router.get(this.path, this.getHealthCheck);
  }

  private getHealthCheck = async (req: Request, res: Response) => {
    const startTime = process.hrtime();

    try {
      await this.checkDatabase();
      const duration = this.calculateDuration(startTime);
      this.updateRequestMetrics(duration);

      const healthCheck = {
        status: "OK",
        message: "Server is healthy",
        timestamp: new Date().toISOString(),
        databaseStatus: "Connected",
        databaseResponseTime: `${duration.toFixed(2)}ms`,
        serverMetrics: await this.getSystemMetrics(),
        requestMetrics: this.getRequestMetrics(),
        environmentInfo: this.getEnvironmentInfo(),
      };

      res.json(healthCheck);
    } catch (error) {
      console.error("Health check failed:", error);
      res.status(500).json({
        status: "ERROR",
        message: "Server health check failed",
        timestamp: new Date().toISOString(),
        error: error instanceof Error ? error.message : String(error),
      });
    }
  };
  private async checkDatabase() {
    await prisma.$queryRaw`SELECT 1`;
  }

  private getRequestMetrics() {
    return {
      totalRequests: this.requestCount,
      averageResponseTime:
        (this.totalResponseTime / this.requestCount).toFixed(2) + "ms",
    };
  }

  private calculateDuration(startTime: [number, number]): number {
    const endTime = process.hrtime(startTime);
    return endTime[0] * 1000 + endTime[1] / 1000000;
  }

  private updateRequestMetrics(duration: number) {
    this.requestCount++;
    this.totalResponseTime += duration;
  }

  private async getSystemMetrics() {
    return {
      uptime: process.uptime(),
      cpuUsage: process.cpuUsage(),
      memoryUsage: {
        ...process.memoryUsage(),
        totalSystemMemory: os.totalmem(),
        freeSystemMemory: os.freemem(),
      },
      loadAverage: os.loadavg(),
    };
  }
  private getEnvironmentInfo() {
    return {
      nodeVersion: process.version,
      platform: process.platform,
      pid: process.pid,
      env: process.env.NODE_ENV || "development",
    };
  }
}
