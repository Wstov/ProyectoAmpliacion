import express from "express";
import { contactar } from '../controllers/formularioController.js'

const router = express.Router()



// Routing
router.post('/registoContacto', contactar )


export default router