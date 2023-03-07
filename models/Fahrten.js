import mongoose from "mongoose";

const FahrtenSchema = new mongoose.Schema({
    //id: Number,
    // startpunkt: String,
    // endpunkt: String,
    fahrer: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Fahrer'
    },
    fahrzeuge: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Fahrzeuge'
    },
    km: Number,
    /*Fahrers:[
        {type: Schema.Types.ObjectId, ref: 'Fahrer'}
    ],
    Fahrzeuges:[
        {type: Schema.Types.ObjectId, ref: 'Fahrzeuge'}
    ],*/
}, { timestamps: true });

const Fahrten = mongoose.model("Fahrten", FahrtenSchema);
export default Fahrten;