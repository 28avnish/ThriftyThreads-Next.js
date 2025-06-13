import { PrismaClient } from "../../generated/prisma/client/index.js";

const prisma = new PrismaClient({
  log: ["query"],
});

export default prisma;
