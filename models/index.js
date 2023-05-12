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

