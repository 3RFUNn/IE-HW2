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