import { PrismaClient } from "@prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";
import { Pool } from "pg";

/**
 * Prisma Client Singleton
 *
 * Prisma 7 requires a driver adapter. We use @prisma/adapter-pg with the
 * native `pg` Pool, pointing at DATABASE_URL from the environment.
 *
 * In development, Next.js hot-reloads modules which would create
 * multiple PrismaClient instances. This singleton pattern ensures
 * only ONE connection pool is maintained across hot reloads.
 */

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined;
};

function createPrismaClient() {
  const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
    // Respect Supabase's session-mode pooler limits
    max: 10,
  });

  const adapter = new PrismaPg(pool);

  return new PrismaClient({
    adapter,
    log:
      process.env.NODE_ENV === "development"
        ? ["query", "error", "warn"]
        : ["error"],
  });
}

export const prisma = globalForPrisma.prisma ?? createPrismaClient();

if (process.env.NODE_ENV !== "production") {
  globalForPrisma.prisma = prisma;
}

export default prisma;
