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

export const getCoursesHandler = async (req, res) => {
    try {
        const courses = await getCourses();
        const user = await getUser(req?.authData.id);
        if (user?.userType === "STUDENT") {
            res.status(200)
                .json({
                    data: courses.filter((c) => user.courses.includes(c.id)),
                    status: 200,
                    error: null,
                    ok: true,
                    message: "",
                })
                .end(() => {
                    // log
                });
        } else if (user?.userType === "PROFESSOR") {
            res.status(200)
                .json({
                    data: courses.filter((c) => c.professorId === user.id),
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
                    data: courses,
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
                    data: courses,
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

export const editCourseHandler = async (req, res) => {
    try {
        // const user = await getUser(req?.authData.id);
        const user = req?.authData;
        if (user?.userType === "EDU_MANAGER") {
            const updatedCourse = await editCourse(req?.params?.id, req?.body);
            res.status(200)
                .json({
                    data: updatedCourse,
                    status: updatedCourse !== null ? 200 : 400,
                    error: null,
                    ok: updatedCourse !== null,
                    message: "",
                })
                .end(() => {
                    // log
                });
        } else if (user.userType === "IT_MANAGER") {
            const updatedCourse = await editCourse(req?.params?.id, req?.body);
            res.status(200)
                .json({
                    data: updatedCourse,
                    status: updatedCourse !== null ? 200 : 400,
                    error: null,
                    ok: updatedCourse !== null,
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
                message: "error in updating course",
            })
            .end(() => {
                // log
            });
    }
};

export const deleteCourseHandler = async (req, res) => {
    try {
        // const user = await getUser(req?.authData.id);
        const user = req?.authData;
        if (user?.userType === "EDU_MANAGER") {
            const ok = await deleteCourse(req?.params?.id);
            res.status(200)
                .json({
                    data: ok,
                    status: 200,
                    error: null,
                    ok: ok,
                    message: "",
                })
                .end(() => {
                    // log
                });
        } else if (user.userType === "IT_MANAGER") {
            const ok = await deleteCourse(req?.params?.id);
            res.status(200)
                .json({
                    data: ok,
                    status: 200,
                    error: null,
                    ok: ok,
                    message: "",
                })
                .end(() => {
                    // log
                });
        } else {
            res.status(400)
                .json({
                    data: false,
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
                data: false,
                status: 400,
                error: error,
                ok: false,
                message: "error in deleting course",
            })
            .end(() => {
                // log
            });
    }
};


export const addCourseHandler = async (req, res) => {
    try {
        // const user = await getUser(req?.authData.id);
        const user = req?.authData;
        if (user?.userType === "EDU_MANAGER") {
            const course = await addCourse(req?.body);
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
            const course = await addCourse(req?.body);
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

export const addStudentToCourseHandler = async (req, res) => {
    try {
        // const user = await getUser(req?.authData.id);
        const user = req?.authData;
        if (user?.userType === "EDU_MANAGER") {
            const course = await getCourse(req?.body?.courseId);
            const student = await getStudent(req?.body?.studentId);
            const updatedCourse = await editCourse(course.id, {
                ...course,
                students: [...course.students, student.id],
            });
            const updatedStudent = await editStudent(student.id, {
                ...student,
                courses: [...student.courses, course.id],
            });
            res.status(200)
                .json({
                    data: {
                        course: updatedCourse,
                        student: updatedStudent,
                    },
                    status: 200,
                    error: null,
                    ok: true,
                    message: "student added",
                })
                .end(() => {
                    // log
                });
        } else if (user.userType === "IT_MANAGER") {
            const course = await getCourse(req?.body?.courseId);
            const student = await getStudent(req?.body?.studentId);
            const updatedCourse = await editCourse(course.id, {
                ...course,
                students: [...course.students, student.id],
            });
            const updatedStudent = await editStudent(student.id, {
                ...student,
                courses: [...student.courses, course.id],
            });
            res.status(200)
                .json({
                    data: {
                        course: updatedCourse,
                        student: updatedStudent,
                    },
                    status: 200,
                    error: null,
                    ok: true,
                    message: "student added",
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
