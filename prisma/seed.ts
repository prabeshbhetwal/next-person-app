import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  // Add any seed data you want here
  // For example:
  /*
  await prisma.user.createMany({
    data: [
      {
        name: 'Test User',
        email: 'test@example.com',
        phoneNumber: '0422018632',
      },
      // Add more test users as needed
    ],
  })
  */
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
