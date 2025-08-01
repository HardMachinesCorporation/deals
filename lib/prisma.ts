import { PrismaClient } from '@prisma/client'

const prismaClientSingleton = () => {
  return new PrismaClient()
}

declare const globalThis: {
  prismaGlobal: ReturnType<typeof prismaClientSingleton>;
} & typeof global;

const prisma = globalThis.prismaGlobal ? globalThis.prismaGlobal || prismaClientSingleton() : new PrismaClient({ log: ['query', "error"]})

export default prisma

if (process.env.NODE_ENV !== 'production') globalThis.prismaGlobal = prisma
