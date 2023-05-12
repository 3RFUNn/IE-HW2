import {Router} from "express";
import {
    getStudentHandler,
    addEDUManagerHandler,
    addITManagerHandler,
    addProfessorHandler,
    addStudentHandler,
    deleteITManagerHandler,
    deleteProfessorHandler,
    deleteStudentHandler,
    editITManagerHandler,
    editProfessorHandler,
    editStudentHandler,
    getEDUManagersHandler,
    getITManagerHandler,
    getITManagersHandler,
    getProfessorHandler,
    getProfessorsHandler,
    editEDUManagerHandler,
    deleteEDUManagerHandler,
    getEDUManagerHandler,
    getStudentsHandler,
} from "../controllers/users.js";
import {authenticateToken} from "../utils/jwt-helper.js";