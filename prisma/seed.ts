import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  await prisma.project.upsert({
    where: { slug: "paularity-portfolio" },
    update: {},
    create: {
      title: "Paularity Portfolio",
      slug: "paularity-portfolio",
      summary: "Personal portfolio site.",
      stack: "Next.js, Prisma, TailwindCSS",
      featured: true,
      tags: {
        connectOrCreate: [
          { where: { name: "nextjs" }, create: { name: "nextjs" } },
          { where: { name: "prisma" }, create: { name: "prisma" } },
        ],
      },
    },
  });
}

main()
  .then(() => prisma.$disconnect())
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
