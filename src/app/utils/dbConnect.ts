import mongoose, { Mongoose } from "mongoose";

const MONGODB_URI: string | undefined = process.env.MONGODB_URI;

if (!MONGODB_URI) {
  throw new Error("Please define the MONGODB_URI environment variable");
}

interface CachedMongoose {
  conn: Mongoose | null;
  promise: Promise<Mongoose> | null;
}

declare global {
  let mongoose: CachedMongoose | undefined;
}

let cached: CachedMongoose = global.mongoose || { conn: null, promise: null };

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null };
}

async function dbConnect(): Promise<Mongoose> {
  if (cached.conn) {
    return cached.conn;
  }

  if (!cached.promise) {
    const opts = {
      bufferCommands: false,
    };

    cached.promise = mongoose
      .connect(MONGODB_URI as string, opts)
      .then((mongoose) => {
        return mongoose;
      });
  }

  mongoose.connection.on("connected", () => {
    console.log("Conectado a MongoDB");
  });

  mongoose.connection.on("error", (err) => {
    console.error("Error en la conexión a MongoDB:", err);
  });

  mongoose.connection.on("disconnected", () => {
    console.log("Desconectado de MongoDB");
  });

  cached.conn = await cached.promise;
  return cached.conn;
}

export default dbConnect;
