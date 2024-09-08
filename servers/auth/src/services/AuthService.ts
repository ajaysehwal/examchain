import { User, Role } from "@prisma/client";
import bcrypt from "bcrypt";
import { prisma } from "./prisma";
import { generateToken } from "../helpers";
class AuthService {
  private static MAX_ATTEMPTS = 4;
  private static LOCKOUT_DURATION = 60 * 60 * 1000; // 1 hour in milliseconds

  async signUp(email: string, password: string, role: Role): Promise<User> {
    const existingUser = await prisma.user.findUnique({ where: { email } });
    if (existingUser) {
      throw new Error("User already exists");
    }

    const hashedPassword = await bcrypt.hash(password, 12);
    const user = await prisma.user.create({
      data: {
        email,
        passwordHash: hashedPassword,
        role,
      },
    });

    return user;
  }
  public async signIn(email: string, password: string): Promise<string> {
    const user = await prisma.user.findUnique({ where: { email } });

    if (!user) {
      throw new Error("Invalid email or password");
    }
    const isLockedOut = user.lockoutUntil && user.lockoutUntil > new Date();
    if (isLockedOut) {
      const lockoutTimeLeft = this.getLockoutTimeLeft(
        user.lockoutUntil as Date
      );
      throw new Error(
        `Account is temporarily locked. Please try again after ${lockoutTimeLeft}.`
      );
    }

    const isPasswordValid = await bcrypt.compare(password, user.passwordHash);

    if (!isPasswordValid) {
      const remainingAttempts =
        AuthService.MAX_ATTEMPTS - user.failedLoginAttempts - 1;

      await this.handleFailedLoginAttempt(user);
      throw new Error(
        `Invalid email or password. You have ${remainingAttempts} attempt(s) left.`
      );
    }
    await prisma.user.update({
      where: { id: user.id },
      data: { failedLoginAttempts: 0, lockoutUntil: null },
    });

    return generateToken(user.id, user.role);
  }
  public async findUserById(id: string): Promise<User | null> {
    return await prisma.user.findUnique({ where: { id } });
  }
  private getLockoutTimeLeft(lockoutUntil: Date): string {
    const now = new Date();
    const timeDifference = lockoutUntil.getTime() - now.getTime();

    const minutesLeft = Math.floor(timeDifference / (1000 * 60));
    const secondsLeft = Math.floor((timeDifference % (1000 * 60)) / 1000);

    return `${minutesLeft} minute(s) and ${secondsLeft} second(s)`;
  }
  private async handleFailedLoginAttempt(user: User) {
    let updates: any = {
      failedLoginAttempts: user.failedLoginAttempts + 1,
    };

    if (updates.failedLoginAttempts >= AuthService.MAX_ATTEMPTS) {
      updates.lockoutUntil = new Date(
        Date.now() + AuthService.LOCKOUT_DURATION
      );
      updates.failedLoginAttempts = 0;
    }

    await prisma.user.update({
      where: { id: user.id },
      data: updates,
    });
  }
}

export default AuthService;
