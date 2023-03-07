import mongoose from "mongoose";

const FahrzeugeSchema = new mongoose.Schema(
  {
    ort: {
      type: String,
      required: true,
      min: 1,
      max: 3,
    },

    mitte: {
      type: String,
      required: true,
      min: 1,
      max: 3,
    },

    nummer: {
      type: Number,
      required: true,
    },
    marke: {
      type: String,
      required: true,
    },
    modell: {
      type: String,
      required: true,
    },

    kilometerstand: {
      type: Number,
    },
  },
  { timestamps: true }
);

const Fahrzeuge = mongoose.model("Fahrzeuge", FahrzeugeSchema);
export default Fahrzeuge;
