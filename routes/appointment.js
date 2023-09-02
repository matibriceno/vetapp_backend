const { Router } = require("express");
const router = Router();
const { ownerRegister, petRegister, savingDate } = require("../controllers/appointment");
const { check } = require("express-validator");
const { validations } = require("../middlewares/validations");

router.post("/owner", 
    [
        check("name", "El nombre del dueño es obligatorio").not().isEmpty(),
        check("email", "Debe ingresar el correo correctamente").isEmail(),
        check("address", "La dirección es obligatoria").not().isEmpty(),
        validations
    ],
    ownerRegister);

router.post("/pet", 
    [
        check("name", "El nombre del dueño es obligatorio").not().isEmpty(),
        check("specie", "El tipo de mascota es obligatorio").not().isEmpty(),
        check("comments", "Los comentarios acerca de tu mascota son obligatorios").not().isEmpty(),
        check("ownerEmail", "Es necesario el email para identificar al dueño de la mascota").isEmail(),
        validations
    ],
    petRegister);

router.post("/date", 
[
    check("date", "La fecha es obligatoria").isDate(),
    check("dateType", "El tipo de atención es obligatoria").not().isEmpty(),
    check("ownerEmail", "Es necesario el email del dueño para registrar la cita").isEmail(),
    check("petName", "Es necesario el nombre de la mascota para registrar la cita").not().isEmpty(),
    validations
],savingDate)

module.exports = router;