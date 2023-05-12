import {mongoose_client} from "../utils/mongodb-atlas/mongoose.js";
const Schema = mongoose_client.Schema;

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

//Create Approved Course Schema

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

// Compile model from schema
export const UserModel = mongoose_client.model("user", userSchema);
export const CourseModel = mongoose_client.model("course", courseSchema);

UserModel.watch().on("change", (data) => console.log(new Date(), data));
CourseModel.watch().on("change", (data) => console.log(new Date(), data));

(async () => {
    const ITMAN = await UserModel.findOne({
        id: "12344321",
        userType: "IT_MANAGER",
    }).exec();
    if (!ITMAN) {
        const itManager = new ItManagerModel({
            firstName: "it",
            lastName: "manager",
            id: "14021402",
            password: "AdminUser1402",
            email: "adminuser@gmail.com",
            mobileNumber: "09111111111",
            userType: "IT_MANAGER",
        });
        await itManager.save();
        console.log("it manager saved");
    } else {
        console.log("it manager => ", ITMAN);
    }
})();