import jwt from "jsonwebtoken";

const SECRET_KEY = process.env.SECRET_KEY || "3454#ccgfhjkg454$%$f7nm,nm#$jkk";

export const authenticateToken = (req, res, next) => {
    console.log("in auth =>", req.path);
    const route = req.path;
    const authHeader = req.headers["authorization"];
    const token = authHeader && authHeader.split(" ")[1];
    console.log("token => ", token);
    if (token == null) return res.sendStatus(401);

    jwt.verify(token, SECRET_KEY, (err, authData) => {
        if (err) {
            return res.status(403).json({
                data: null,
                error: err,
                message: "token authentication error",
                ok: false,
            });
        } else if (
            authData.userType !== "IT_MANAGER" &&
            route.startsWith("/admin/")
        ) {
            return res.status(403).json({
                data: null,
                error: "access denied",
                message: "you don't have required permissions",
                ok: false,
            });
        }
        req.authData = authData;
        next();
    });
};

export const generateAccessToken = (data) => {
    const token = jwt.sign(data, SECRET_KEY, {expiresIn: "1800s"});
    console.log("token => ", token, SECRET_KEY);
    return token;
};