import { PrismaClient } from '@prisma/client';
const chalk = require('chalk')
const prisma = new PrismaClient();

export async function checkDatabaseConnection() {
  try {
    await prisma.$connect();
    console.log(chalk.bgGreen("  Connected to database  "));
  } catch (error) {
    console.log(chalk.bgRed("  Not connect to database  "));
  } finally {
    await prisma.$disconnect();
  }
}