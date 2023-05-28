import { db } from "@/database";
import { User } from "@/models";
import bcrypt from "bcryptjs";
import { jwt, validations } from '@/utils';
import { NextRequest, NextResponse } from "next/server";

  export async function POST(req: NextRequest, res: NextResponse) {
  
      const {email,passwordHash, name = ""} = await req.json()
  
      await db.connect();
      const user = await User.findOne({ email }).lean();
  
      if (user) {
        db.disconnect();
        return NextResponse.json({ message: "Invalid credentials, user already Register"},{status:400});
    }


      if (passwordHash.length < 6) {
        return NextResponse.json({ message: "Password must be at least 6 characters long"},{status:400});
      }

      if (name.length < 2) {
        return NextResponse.json({ message: "Name must be at least 2 characters long"},{status:400});
      }


    if (!validations.isValidEmail(email)) {
        return NextResponse.json({ message: "Email is not valid"},{status:400});
       }

  const newUser = new User({
    email: email.toLowerCase(),
    passwordHash: bcrypt.hashSync(passwordHash, 10),
    role: "client",
    name: name.toLowerCase(),
  });

  try {
    await newUser.save({ validateBeforeSave: true });
    db.disconnect();
  } catch (err) {
    console.log(err);
    return NextResponse.json({ message: "Something went wrong"},{status:400});
  }

  const { _id } = newUser;

  const token = jwt.signToken(_id, email);

  return NextResponse.json({ 
    token, // token: token
    user: {
      email,
      role: "client",
      name,
    }},
    { 
      status:200
    }
)}  

    

    
   
  
  
  
