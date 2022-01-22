const express  =  require("express");
const router   = express.Router();
const controller = require('../controllers/students.controllers')

router.get('/' , controller.getStudents);

router.get('/:id', controller.getStudent);

router.delete("/:id",controller.deleteStudent);

router.post("/", controller.createStudent);

router.patch("/:id",controller.updateStudent );

module.exports = router;