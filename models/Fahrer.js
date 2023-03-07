import mongoose from "mongoose";

const FahrerSchema = new mongoose.Schema(
  {

    vorname: String,
    nachname: String,
    email:{
      type: String,
      required: true,
    }
  },
  { timestamps: true }
);

const Fahrer = mongoose.model("Fahrer", FahrerSchema);
export default Fahrer;
