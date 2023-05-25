
import { IUser } from "@/interface/iUser";
import mongoose, { Schema, model, Model } from "mongoose";

const userSchema = new Schema(
  {

    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    passwordHash: { type: String, required: true },
    role: 
        {
          type: String,
          enum: { values: ["admin", "client"] },
          message: "{VALUE} no es un tamaño válido",
          default: "client",
          required: true,
        },
  },
  {
    timestamps: true,
  }
);

// TODO: Crear indice de MONGO
//  Este indice es para que el campo "title" y "tags" puedan ser buscados
userSchema.index({ title: "text", tags: "text" });

const User: Model<IUser> =
  mongoose.models.User || model("User", userSchema);

export default User;
