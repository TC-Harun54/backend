import Fahrer from "../models/Fahrer.js";
import Fahrten from "../models/Fahrten.js";
import Fahrzeuge from "../models/Fahrzeuge.js";

export const getFahrer = async(req, res) => {
    try {
        await Fahrer.find().then((result) => {
            res.status(200).json(result);
        }).catch((err) => {

        });
    } catch (error) {
        res.status(404).json(err);
    }
};

export const getFahrzeuge = async(req, res) => {
    try {
        await Fahrzeuge.find().then((result) => {
            res.status(200).json(result);
        }).catch((err) => {
            res.status(404).json(err);
        });
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};

export const fahrerAdd = async(req, res) => {
    try {
        const { vorname, nachname, email } = req.body
        const fahrer = new Fahrer({
            vorname,
            nachname,
            email
        });
        fahrer.save().then((result) => {
            res.status(200).json(result);
        }).catch((err) => {
            res.status(404).json({ message: "error" });
        });
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};

export const fahrzeugeAdd = async(req, res) => {
    try {
        const {
            ort,
            mitte,
            nummer,
            marke,
            modell,
            kilometerstand
        } = req.body
        const fahrzeuge = new Fahrzeuge({
            ort,
            mitte,
            nummer,
            marke,
            modell,
            kilometerstand
        });
        fahrzeuge.save().then((result) => {
            res.status(200).json(result);
        }).catch((err) => {
            res.status(404).json({ message: "error" });
        });
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};

export const fahrzeugeDelete = async(req, res) => {
    try {
        const { id } = req.params
        Fahrzeuge.findByIdAndDelete(id).then((result) => {
            res.status(200).json(result)
        }).catch((err) => {
            res.status(500).json(err)
        });
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};

export const fahrerDelete = async(req, res) => {
    try {
      const { _id } = req.params
      console.log("fahrerDelete called with id", _id)
      Fahrer.findByIdAndDelete(_id).then((result) => {
        console.log("Item deleted with id", _id)
        res.status(200).json(result)
      }).catch((err) => {
        console.log("Error while deleting item with id", _id, err)
        res.status(500).json(err)
      });
    } catch (error) {
      console.log("Error while deleting item with id", _id, error)
      res.status(404).json({ message: error.message });
    }
  };

export const fahrten = async(req, res) => {
    await Fahrten.find()
        .populate('fahrer')
        .populate('fahrzeuge')
        .then((result) => {
            res.status(200).json(result)
        }).catch((err) => {
            res.status(500).json(err)
        });
}

export const fahrtenAdd = async(req, res) => {
    const { fahrer, fahrzeuge, km } = req.body

    const fahrten = new Fahrten({ fahrer, fahrzeuge, km })

    fahrten.save().then((result) => {
        Fahrzeuge.findById(result.fahrzeuge).then((f) => {
            var newKm = f.kilometerstand + km
            console.log(newKm);
            Fahrzeuge.findByIdAndUpdate(result.fahrzeuge, {
                kilometerstand: newKm
            }).then((r) => {
                res.status(200).json(result)
            }).catch((err) => {
                console.log(err)
            });
        }).catch((err) => {
            console.log(err)
        });
    }).catch((err) => {
        console.log(err)
    });
}