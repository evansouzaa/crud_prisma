import { PrismaClient } from "@prisma/client";

export const prisma = new PrismaClient();

//check db connect
(async function checkDb() {
    const connectOk = await prisma.$queryRaw`SELECT 1`;
    if(!connectOk) return console.log("database not connect")
    console.log("database connect")
})()
