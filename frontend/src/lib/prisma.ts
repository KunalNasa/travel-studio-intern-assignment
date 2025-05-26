/**
 * Ideally this code must be in shared package but since we are not using 
 * any mono repo framework or any workspaces therefore we have to rewrite this code.
 */

// Singleton prisma client.
import { PrismaClient } from '@prisma/client'

const globalForPrisma = global as unknown as { prisma: PrismaClient }

export const prisma =
  globalForPrisma.prisma ||
  new PrismaClient({
    log: ['query'],
  })

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma
