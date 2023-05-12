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