import { PrismaClient } from "@prisma/client";

/**
 * Prisma Client Singleton
 * 
 * In development, Next.js hot-reloads modules which would create
 * multiple PrismaClient instances. This singleton pattern ensures
 * only ONE connection is maintained across hot reloads.
 * 
 * In production, this is simply a normal module-level singleton.
 */

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined;
};

export const prisma =
  globalForPrisma.prisma ??
  new PrismaClient({
    log:
      process.env.NODE_ENV === "development"
        ? ["query", "error", "warn"]
        : ["error"],
  });

if (process.env.NODE_ENV !== "production") {
  globalForPrisma.prisma = prisma;
}

export default prisma;
