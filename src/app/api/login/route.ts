import type { NextApiRequest, NextApiResponse } from "next";
import { db } from "@/database";
import { User } from "@/models";
import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import { jwt } from "@/utils";

// TODO: terminar de implementar

type Data =
  | { message: string }
  | { token: string; user: { email: string; role: string; name: string } };

  export async function POST(
  req: NextRequest ,
  res: NextResponse
) {

    const {email,passwordHash} = await req.json()

    await db.connect();
    const user = await User.findOne({ email }).lean();
    db.disconnect();
  
    if (!user) {
        return NextResponse.json({ message: "Invalid credentials"},{status:400});
    }
  
    if (!bcrypt.compareSync(passwordHash, user.passwordHash!)) {
        return NextResponse.json({ message: "Invalid credentials failed"},{status:400});
    }
  
    const { role, name, _id } = user;
  
    const token = jwt.signToken(_id, email);
  
  return NextResponse.json({ 
    token, // token: token
    user: { email, role, name },
    
   });
}


