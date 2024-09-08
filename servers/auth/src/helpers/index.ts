import { Role } from "@prisma/client";
import Jwt from "jsonwebtoken";
import config from "../config";
export const generateToken = (userId: string, role: Role) => {
  return Jwt.sign({ userId, role }, config.jwtSecret, { expiresIn: "1h" });
};

export const verifyToken = (token: string) => {
  return Jwt.verify(token, config.jwtSecret) as { userId: number; role: Role };
};
