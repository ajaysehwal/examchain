import dotenv from "dotenv";
dotenv.config();
const env = process.env.NODE_ENV || "development";

const requiredEnvVars = [
  "PORT",
  "JWT_SECRET",
  "CONSOLE_LOGS",
  "NODE_ENV",
  "SESSION_SECRET",
] as const;

function validateEnv() {
  const missingVars = requiredEnvVars.filter(
    (varName) => !process.env[varName]
  );
  if (missingVars.length > 0) {
    throw new Error(
      `Missing required environment variables: ${missingVars.join(", ")}`
    );
  }
}

validateEnv();

const baseConfig = {
  port: parseInt(process.env.PORT || "8000", 10),
  nodeEnv: env,
  jwtSecret: process.env.JWT_SECRET as string,
  consoleLogs: (process.env.CONSOLE_LOGS === "true") as boolean,
  SESSION_SECRET: process.env.SESSION_SECRET as string,
};

export default { ...baseConfig };
