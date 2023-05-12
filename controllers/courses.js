import {
    addCourse,
    deleteCourse,
    getCourse,
    getCourses,
    editCourse,
} from "../actions/courses.js";

import {
    getStudent,
    getStudents,
    getUser,
    editStudent,
    getProfessor,
} from "../actions/users.js";

export const getCourseHandler = async (req, res) => {
    try {
        const course = await getCourse(req?.params?.id);
        // const user = await getUser(req?.authData.id);
        const user = req?.authData;
        if (
            user?.userType === "STUDENT" &&
            course.students?.includes(user?.id)
        ) {
            res.status(200)
                .json({
                    data: course,
                    status: 200,
                    error: null,
                    ok: true,
                    message: "",
                })
                .end(() => {
                    // log
                });
        } else if (
            user?.userType === "PROFESSOR" &&
            course.professor?.id === user?.id
        ) {
            res.status(200)
                .json({
                    data: course,
                    status: 200,
                    error: null,
                    ok: true,
                    message: "",
                })
                .end(() => {
                    // log
                });
        } else if (user?.userType === "EDU_MANAGER") {
            res.status(200)
                .json({
                    data: course,
                    status: 200,
                    error: null,
                    ok: true,
                    message: "",
                })
                .end(() => {
                    // log
                });
        } else if (user.userType === "IT_MANAGER") {
            res.status(200)
                .json({
                    data: course,
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
                message: "error in get course",
            })
            .end(() => {
                // log
            });
    }
};