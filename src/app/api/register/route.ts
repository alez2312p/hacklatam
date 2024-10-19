import { NextApiRequest, NextApiResponse } from "next";
import bcrypt from "bcryptjs";
import dbConnect from "@/app/utils/dbConnect";
import User from "@/app/models/User";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") return res.status(405).end();

  await dbConnect();

  const { email, password } = req.body;

  const hashedPassword = await bcrypt.hash(password, 10);

  try {
    const user = new User({ email, password: hashedPassword });
    await user.save();

    return res.status(201).json({ message: "User created" });
  } catch (error) {
    console.error({ error });
    return res.status(400).json({ message: "User already exists" });
  }
}
