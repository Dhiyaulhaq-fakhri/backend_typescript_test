import "dotenv/config";
import { PrismaClient } from "@prisma/client";

console.log("DATABASE_URL:", process.env.DATABASE_URL);

const prisma = new PrismaClient();

async function main() {
  try {
    console.log("Connecting to database...");
    const result = await prisma.$queryRaw`SELECT 1`;
    console.log("✅ Connection successful!");
  } catch (error) {
    console.error("❌ Connection failed:", error);
  } finally {
    await prisma.$disconnect();
  }
}

main();