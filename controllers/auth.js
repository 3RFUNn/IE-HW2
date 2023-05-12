import {loginUser, registerUser} from "../actions/auth.js";

export const registerUserHandler = async (req, res) => {
    try {
        console.log("register =>", req?.body);
        const token = await registerUser(req?.body);
        if (token) {
            res.status(200)
                .setHeader("Authorization", `Bearer ${token}`)
                .json({
                    data: token,
                    status: 200,
                    error: null,
                    ok: true,
                    message: "",
                })
                .end(() => {});
        } else {
            res.status(400)
                .json({
                    data: token,
                    status: 400,
                    error: "invalid data",
                    ok: false,
                    message: "error in register",
                })
                .end(() => {});
        }
    } catch (error) {
        console.log("error =>", error);
        res.status(400)
            .json({
                data: null,
                status: 400,
                error: error,
                ok: false,
                message: "error in register",
            })
            .end(() => {});
    }
};

export const loginUserHandler = async (req, res) => {
    try {
        const token = await loginUser(req?.body?.id, req?.body?.password);
        if (token) {
            res.setHeader("Authorization", `Bearer ${token}`)
                .status(200)
                .json({
                    data: token,
                    status: 200,
                    error: null,
                    ok: true,
                    message: "",
                })
                .end(() => {});
            return;
        } else {
            res.status(400)
                .json({
                    data: token,
                    status: 400,
                    error: "invalid data",
                    ok: true,
                    message: "error in login",
                })
                .end(() => {});
            return;
        }
    } catch (error) {
        console.log("error => ", error);
        res.status(400)
            .json({
                data: null,
                status: 400,
                error: error,
                ok: true,
                message: "error in login",
            })
            .end(() => {});
        return;
    }
};
