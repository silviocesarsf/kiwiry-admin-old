import { PrismaClient } from '@prisma/client';

export const prisma = new PrismaClient().$extends({
  query: {
    user: {
      async update({ args, query }) {
        args.data.updated_at = new Date();
        return query(args);
      },
    },
  },
});