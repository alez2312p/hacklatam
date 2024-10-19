import { NextResponse } from "next/server";
import dbConnect from "../../utils/dbConnect";

export async function GET() {
  try {
    await dbConnect();
    return NextResponse.json({ message: "Conexión exitosa a MongoDB" });
  } catch (error) {
    return NextResponse.json(
      { message: "Error al conectar a MongoDB", error },
      { status: 500 }
    );
  }
}
