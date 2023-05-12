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

export const getITManagerHandler = async (req, res) => {
    try {
        const itManager = await getITManager(req?.params?.id);
        if (req?.authData?.id === itManager.id) {
            res.status(200)
                .json({
                    data: itManager,
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
                message: "error in get IT managers",
            })
            .end(() => {
                // log
            });
    }
};

export const getITManagersHandler = async (req, res) => {
    try {
        const itManagers = await getITManagers();
        if (
            req?.authData?.id === itManagers.id ||
            req?.authData?.userType === "IT_MANAGER"
        ) {
            res.status(200)
                .json({
                    data: itManagers,
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
                message: "error in get IT managers",
            })
            .end(() => {
                // log
            });
    }
};

export const getEDUManagersHandler = async (req, res) => {
    try {
        const eduManagers = await getEDUManagers();
        if (req?.authData?.userType === "IT_MANAGER") {
            res.status(200)
                .json({
                    data: eduManagers,
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
                message: "error in get EDU Managers",
            })
            .end(() => {
                // log
            });
    }
};

export const addProfessorHandler = async (req, res) => {
    try {
        if (req?.authData?.userType === "IT_MANAGER") {
            const professorAdded = await addProfessor(req.body);
            res.status(200)
                .json({
                    data: professorAdded,
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
                message: "error in adding professor",
            })
            .end(() => {
                // log
            });
    }
};

export const editProfessorHandler = async (req, res) => {
    try {
        if (
            req?.authData?.id === req?.params?.id ||
            req?.authData?.userType === "IT_MANAGER"
        ) {
            const professorEdited = await editProfessor(
                req?.params?.id,
                req.body,
            );
            res.status(200)
                .json({
                    data: professorEdited,
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
                message: "error in editing professor",
            })
            .end(() => {
                // log
            });
    }
};

export const deleteProfessorHandler = async (req, res) => {
    try {
        if (req?.authData?.userType === "IT_MANAGER") {
            const professorDeleted = await deleteProfessor(req?.params?.id);
            res.status(200)
                .json({
                    data: professorDeleted,
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
                message: "error in deleting professor",
            })
            .end(() => {
                // log
            });
    }
};

export const addStudentHandler = async (req, res) => {
    try {
        if (req?.authData?.userType === "IT_MANAGER") {
            const studentAdded = await addStudent(req.body);
            res.status(200)
                .json({
                    data: studentAdded,
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
                message: "error in adding student",
            })
            .end(() => {
                // log
            });
    }
};

export const editStudentHandler = async (req, res) => {
    try {
        if (
            req?.authData?.id === req?.params?.id ||
            req?.authData?.userType === "IT_MANAGER"
        ) {
            const studentEdited = await editStudent(req?.params?.id, req.body);
            res.status(200)
                .json({
                    data: studentEdited,
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
                message: "error in editing student",
            })
            .end(() => {
                // log
            });
    }
};

export const deleteStudentHandler = async (req, res) => {
    try {
        if (req?.authData?.userType === "IT_MANAGER") {
            const studentDeleted = await deleteStudent(req?.params?.id);
            res.status(200)
                .json({
                    data: studentDeleted,
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
                message: "error in deleting student",
            })
            .end(() => {
                // log
            });
    }
};

export const addITManagerHandler = async (req, res) => {
    try {
        if (req?.authData?.userType === "IT_MANAGER") {
            const ITManagerAdded = await addITManager(req.body);
            res.status(200)
                .json({
                    data: ITManagerAdded,
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
                message: "error in adding IT manager",
            })
            .end(() => {
                // log
            });
    }
};

export const editITManagerHandler = async (req, res) => {
    try {
        if (
            req?.authData?.id === req?.params?.id &&
            req?.authData?.userType === "IT_MANAGER"
        ) {
            const ITManagerEdited = await editITManager(
                req?.params?.id,
                req.body,
            );
            res.status(200)
                .json({
                    data: ITManagerEdited,
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
                message: "error in editing IT Manager",
            })
            .end(() => {
                // log
            });
    }
};