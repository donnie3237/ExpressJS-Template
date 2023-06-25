import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function checkDatabaseConnection() {
  try {
    await prisma.$connect();
    console.log('Connected to the database.');
  } catch (error) {
    console.error('Failed to connect to the database:', error);
  } finally {
    await prisma.$disconnect();
  }
}

