const AppointmentDate = require("../models/AppointmentDate");
const Owner = require("../models/Owner");
const Pet = require("../models/Pet");



const ownerRegister = async(req, res) => {
        const {name} = req.body
    try {
        let user = new Owner(req.body);
        res.status(200).json({
            ok: true,
            msg: `El dueño ${name} ha sido registrado correctamente`
        })
        await user.save();
    } catch (error) {
        console.log(error)
        res.status(500).json({
            ok: false,
            msg: "Error interno, favor comunicarse con el administrador"
        })
    };
};

const petRegister = async (req, res) => {
    const { name, specie, weight, comments, ownerEmail } = req.body;

    try {
        
        const owner = await Owner.findOne({ email: ownerEmail });

        if (!owner) {
            return res.status(404).json({
                ok: false,
                msg: `No se encontró ningún propietario con el correo electrónico ${ownerEmail}`
            });
        }

        const pet = new Pet({
            name,
            specie,
            weight,
            comments,
            owner: owner._id, 
        });

        await pet.save();

        res.status(200).json({
            ok: true,
            msg: `Se registró la mascota ${name} satisfactoriamente`
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: "Error interno, favor comunicarse con el administrador"
        });
    }
};

const savingDate = async(req, res) => {
    const { date, dateType, ownerEmail, petName } = req.body;

    try {
      
        const owner = await Owner.findOne({ email: ownerEmail });
        const pet = await Pet.findOne({ name: petName });

        if (!owner) {
            return res.status(404).json({
                ok: false,
                msg: `No se encontró ningún propietario con el correo electrónico ${ownerEmail}`
            });
        }
        if (!pet) {
            return res.status(404).json({
                ok: false,
                msg: `No se encontró ninguna mascota con el nombre ${petName}`
            });
        }
        const appointmentDate = new AppointmentDate({
            date,
            dateType,
            owner: owner._id,
            pet: pet._id,
        });

        await appointmentDate.save();

        res.status(200).json({
            ok: true,
            msg: `Se registró la fecha de atención`
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: "Error interno, favor comunicarse con el administrador"
        });
    }
};

module.exports = {
    ownerRegister,
    petRegister,
    savingDate,
}