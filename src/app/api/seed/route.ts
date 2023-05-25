import type { NextApiRequest, NextApiResponse } from "next";
import { db, seedDatabase } from '@/database';
import { NextResponse } from 'next/server';
import User from '../../../models/User';

type Data = {
  name: string;
};

export async function GET(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (process.env.NODE_ENV === "production") {
    res.status(404).json({ name: "No tiene acceso a esta API" });
  }

  await db.connect();

  //await Product.deleteMany();

   await User.insertMany(seedDatabase.initialData.users);

  // await Product.deleteMany();

  // await Product.insertMany(seedDatabase.initialData.products);

  await db.disconnect();

  return NextResponse.json({ name: "Todo Salio Bien" });


}
