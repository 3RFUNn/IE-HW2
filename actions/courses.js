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

