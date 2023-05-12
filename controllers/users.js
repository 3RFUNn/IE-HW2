import {
    addEDUManager,
    addITManager,
    addProfessor,
    addStudent,
    deleteEDUManager,
    deleteITManager,
    deleteProfessor,
    deleteStudent,
    editEDUManager,
    editITManager,
    editProfessor,
    editStudent,
    getEDUManager,
    getEDUManagers,
    getITManager,
    getITManagers,
    getProfessor,
    getProfessors,
    getStudent,
    getStudents,
} from "../actions/users.js";

export const getStudentsHandler = async (req, res) => {
    try {
        if (
            req?.authData?.userType === "IT_MANAGER" ||
            req.authData?.userType === "EDU_MANAGER"
        ) {
            const students = await getStudents();
            res.status(200)
                .json({
                    data: students,
                    status: 200,
                    error: null,
                    ok: true,
                    message: "",
                })
                .end(() => {
                    // log
                });
        } else {
            res.status(400)
                .json({
                    data: null,
                    status: 400,
                    error: "access denied",
                    ok: false,
                    message: "you dont have permission",
                })
                .end(() => {
                    // log
                });
        }
    } catch (error) {
        res.status(400)
            .json({
                data: null,
                status: 400,
                error: error,
                ok: false,
                message: "error in get students",
            })
            .end(() => {
                // log
            });
    }
};

export const getStudentHandler = async (req, res) => {
    try {
        if (
            req?.authData?.id === req?.params?.id ||
            req?.authData?.userType === "IT_MANAGER" ||
            req.authData?.userType === "EDU_MANAGER"
        ) {
            const student = await getStudent(req?.params?.id);
            res.status(200)
                .json({
                    data: student,
                    status: 200,
                    error: null,
                    ok: true,
                    message: "",
                })
                .end(() => {
                    // log
                });
        } else {
            res.status(400)
                .json({
                    data: null,
                    status: 400,
                    error: "access denied",
                    ok: false,
                    message: "you dont have permission",
                })
                .end(() => {
                    // log
                });
        }
    } catch (error) {
        res.status(400)
            .json({
                data: null,
                status: 400,
                error: error,
                ok: false,
                message: "error in get student",
            })
            .end(() => {
                // log
            });
    }
};

export const getProfessorHandler = async (req, res) => {
    try {
        const professor = await getProfessor(req?.params?.id);
        if (
            req.authData?.id === professor.id ||
            req.authData?.userType === "IT_MANAGER" ||
            req.authData?.userType === "EDU_MANAGER"
        ) {
            res.status(200)
                .json({
                    data: professor,
                    status: 200,
                    error: null,
                    ok: true,
                    message: "",
                })
                .end(() => {
                    // log
                });
        } else {
            res.status(400)
                .json({
                    data: null,
                    status: 400,
                    error: "access denied",
                    ok: false,
                    message: "you dont have permission",
                })
                .end(() => {
                    // log
                });
        }
    } catch (error) {
        res.status(400)
            .json({
                data: null,
                status: 400,
                error: error,
                ok: false,
                message: "error in get professors",
            })
            .end(() => {
                // log
            });
    }
};

export const getProfessorsHandler = async (req, res) => {
    try {
        const professors = await getProfessors();
        if (
            req.authData?.userType === "IT_MANAGER" ||
            req.authData?.userType === "EDU_MANAGER"
        ) {
            res.status(200)
                .json({
                    data: professors,
                    status: 200,
                    error: null,
                    ok: true,
                    message: "",
                })
                .end(() => {
                    // log
                });
        } else {
            res.status(400)
                .json({
                    data: null,
                    status: 400,
                    error: error,
                    ok: false,
                    message: "error in get student",
                })
                .end(() => {
                    // log
                });
        }
    } catch (error) {
        res.status(400)
            .json({
                data: null,
                status: 400,
                error: error,
                ok: false,
                message: "error in get professors",
            })
            .end(() => {
                // log
            });
    }
};