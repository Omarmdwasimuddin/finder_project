import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  // Example seeding logic for Donor model
  await prisma.donor.create({
    data: {
      name: 'John Doe',
      email: 'john.doe@example.com',
      password: 'password123',  // You may want to hash this in a real application
      phone: '1234567890',
      bloodGroup: 'O+',
      area: 'Dhaka',
    },
  });

  console.log('Seeding complete!');
}

main()
  .catch(e => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
