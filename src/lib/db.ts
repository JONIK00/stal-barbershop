import { PrismaClient } from '@prisma/client'

const PRISMA_CACHE_VERSION = 'v1-init'

const globalForPrisma = globalThis as unknown as Record<string, PrismaClient | undefined>

function createClient() {
  return new PrismaClient({
    log: ['query'],
  })
}

const cacheKey = `__prisma_${PRISMA_CACHE_VERSION}`

export const db =
  globalForPrisma[cacheKey] ??
  (() => {
    Object.keys(globalForPrisma).forEach((k) => {
      if (k.startsWith('__prisma_') && k !== cacheKey) {
        try { globalForPrisma[k]?.$disconnect() } catch {}
        globalForPrisma[k] = undefined
      }
    })
    const client = createClient()
    globalForPrisma[cacheKey] = client
    return client
  })()
