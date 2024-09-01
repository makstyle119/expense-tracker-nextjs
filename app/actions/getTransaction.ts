"use server";

import { db } from "@/lib/db";
import { Transaction } from "@/types/transaction";
import { auth } from "@clerk/nextjs/server";

async function getTransaction(): Promise<{
  transactions?: Transaction[];
  error?: string;
}> {
  const { userId } = auth();

  if (!userId) {
    return { error: "User not found" };
  }

  try {
    const transactions = await db.transaction.findMany({
      where: {
        userId,
      },
      orderBy: {
        createdAt: "desc",
      },
    });

    return { transactions: transactions };
  } catch (error) {
    return { error: "database error" };
  }
}

export default getTransaction;
