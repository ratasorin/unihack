import { PrismaClient } from "@prisma/client";

// See here: https://github.com/prisma/prisma-client-js/issues/228#issuecomment-618433162
let prisma: PrismaClient;
if (process.env.NODE_ENV === "production") {
  prisma = new PrismaClient();
}
// `stg` or `dev`
else {
  if (!(global as any).prisma) {
    (global as any).prisma = new PrismaClient();
  }

  prisma = (global as any).prisma;
}

export default prisma;
