import { PrismaClient } from "../../generated/prisma/client.js/index.js";

const prisma = new PrismaClient({
  log: ["query"],
});

export default prisma;
