import {UserModel} from "../models/index.js";
import { generatePasswordHash } from "../utils/hash.js";
import {generateAccessToken} from "../utils/jwt-helper.js";
import {validateEmail, validatePassword} from "../utils/validators.js";

export const loginUser = async (email = "", password = "") => {
    try {
        console.log("login =>", email, password);
        if ((id?.length > 0) && validatePassword(password)) {
            const user = await UserModel.findOne({email});
            if (await comparePasswordHash(user.password, password)) {
                const token = generateAccessToken({
                    id: user.id,
                    email: user.email,
                    userType: user.userType,
                });
                return token;
            }
        }
        return null;
    } catch (error) {
        return null;
    }
};

export const registerUser = async (registerData) => {
    try {
        // Validate Email and Password
        if (
            (registerData?.id?.length>0) &&
            validatePassword(registerData?.password)
        ) {
            console.log("after validate");
            // Check if account already exists
            const existingUser = await UserModel.findOne({
                id: registerData.id,
            });
            if (!existingUser) {
                // Create user
                const newUser = new UserModel({
                    ...registerData,
                    password: await generatePasswordHash(registerData.password),
                });
                await newUser.save();
                const token = generateAccessToken({
                    id: newUser.id,
                    email: newUser.email,
                    userType: newUser.userType,
                });
                return token;
            }
        }
        return null;
    } catch (error) {
        console.log("error => ", error);
        return null;
    }
};