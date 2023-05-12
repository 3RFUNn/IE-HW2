import {mongoose_client} from "../utils/mongodb-atlas/mongoose.js";

const userSchema = new Schema({
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true,
    },
    id: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    mobileNumber: {
        type: String,
        required: true,
    },
    userType: {
        type: String,
        enum: ["STUDENT", "PROFESSOR", "IT_MANAGER", "EDU_MANAGER"],
        required: true,
    },
    level: {
        type: String,
    },
    entryYear: {
        type: Number,
    },
    entryTerm: {
        type: String,
    },
    gpa: {
        type: Number,
        required: function () {
            return this.userType === "STUDENT";
        },
    },
    department: {
        type: String,
    },
    subject: {
        type: String,
    },
    rank: {
        type: Number,
    },
    courses: {
        type: [String],
        default: [],
    },
});

//Course Schema creation

const courseSchema = new Schema({
    id: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    prerequisite: {
        type: [String],
        required: true,
    },
    coPrerequisite: {
        type: [String],
        required: true,
    },
    unit: {
        type: Number,
        required: true,
    },
    type: {
        type: String,
        enum: ["APPROVED", "TERM"],
        default: "APPROVED",
        required: true,
    },
    classTime: {
        type: String,
    },
    examTime: {
        type: String,
    },
    examLocation: {
        type: String,
    },
    professorName: {
        type: String,
    },
    professorId: {
        type: String,
        required: true,
    },
    capacity: {
        type: Number,
    },
    term: {
        type: String,
    },
    students: {
        type: [String],
        default: [],
    },
});
