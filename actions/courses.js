import {CourseModel} from "../models/index.js";

export const addCourse = async (courseData) => {
    try {
        if (courseData?.name?.length > 0) {
            const course = new CourseModel(courseData);
            await course.save();
            return course;
        }
        return null;
    } catch (error) {
        return null;
    }
};

export const getCourse = async (id) => {
    
    try {
        if (id?.length > 0) {
            const course = await CourseModel.findOne({id}).exec();
            return course;
        }
        return null;
    } catch (error) {
        return null;
    }
};

export const editCourse = async (id, courseData) => {
    try {
        if (courseData?.id?.length > 0) {
            const course = await CourseModel.findOneAndUpdate({id}, courseData).exec();
            return course;
        }
        return null;
    } catch (error) {
        return null;
    }
};