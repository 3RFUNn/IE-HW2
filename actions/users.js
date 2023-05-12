import {UserModel} from "../models/index.js";


export const addProfessor = async (professorData) => {
    try {
        if (professorData?.firstName?.length > 0) {
            const professor = new UserModel({
                ...professorData,
                userType: "PROFESSOR",
            });
            await professor.save();
            return professor;
        }
        return false;
    } catch (error) {
        return false;
    }
};


export const editProfessor = async (id, professorData) => {
    try {
        if (id.length > 0) {
            const result = await UserModel.findOneAndUpdate(
                {id},
                professorData,
            ).exec();
            return result;
        }
        return null;
    } catch (error) {
        return null;
    }
};

export const deleteProfessor = async (id) => {
    try {
        if (id.length > 0) {
            await UserModel.findOneAndRemove({id}).exec();
            return true;
        }
        return false;
    } catch (error) {
        return false;
    }
};

export const getProfessor = async (id) => {
    try {
        if (id.length > 0) {
            const professor = await UserModel.findOne({
                id,
                userType: "PROFESSOR",
            }).exec();
            return professor;
        }
        return null;
    } catch (error) {
        return null;
    }
};

export const getProfessors = async () => {
    try {
        const professors = await UserModel.find({userType: "PROFESSOR"}).exec();
        return professors;
    } catch (error) {
        return [];
    }
};

export const addStudent = async (studentData) => {
    try {
        if (studentData?.firstName?.length > 0) {
            const student = new UserModel({
                ...studentData,
                userType: "STUDENT",
            });
            await student.save();
            return student;
        }
        return null;
    } catch (error) {
        return null;
    }
};

export const editStudent = async (id, studentData) => {
    try {
        if (id.length > 0) {
            const result = await UserModel.findOneAndUpdate({id}, studentData).exec();
            return result;
        }
        return null;
    } catch (error) {
        return null;
    }
};

export const deleteStudent = async (id) => {
    try {
        if (id.length > 0) {
            await UserModel.findOneAndRemove({id}).exec();
            return true;
        }
        return false;
    } catch (error) {
        return false;
    }
};

export const getStudent = async (id) => {
    try {
        if (id.length > 0) {
            const student = await UserModel.findOne({id, userType: "STUDENT"}).exec();
            return student;
        }
        return null;
    } catch (error) {
        return null;
    }
};

export const getStudents = async () => {
    try {
        const students = await UserModel.find({userType: "STUDENT"}).exec();
        return students;
    } catch (error) {
        return [];
    }
};

export const addITManager = async (managerData) => {
    try {
        if (managerData?.firstName?.length > 0) {
            const manager = new UserModel({
                ...managerData,
                userType: "IT_MANAGER",
            });
            await manager.save();
            return manager;
        }
        return null;
    } catch (error) {
        return null;
    }
};

export const editITManager = async (id, managerData) => {
    try {
        if (id.length > 0) {
            const result = await UserModel.findOneAndUpdate(
                {id, userType: "IT_MANAGER"},
                managerData,
            ).exec();
            return result;
        }
        return null;
    } catch (error) {
        return null;
    }
};

export const deleteITManager = async (id) => {
    try {
        if (id.length > 0) {
            await UserModel.findOneAndRemove({id, userType: "IT_MANAGER"}).exec();
            return true;
        }
        return false;
    } catch (error) {
        return false;
    }
};

