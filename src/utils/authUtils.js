import jwt from "jsonwebtoken";
import { JWT_SECRET } from "../Config/serverConfig.js";

export const createToken = function(payload) {
    return jwt.sign(payload, JWT_SECRET, {expiresIn: "7d"})
};

export const verifyToken = (token) => {
    console.log("Token to verify:", token);
    console.log("JWT_SECRET:", process.env.JWT_SECRET);

    return new Promise((resolve, reject) => {
        jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
            if (err) {
                console.error("JWT Verification Error:", err);
                return reject(err);
            }
            console.log("Decoded token:", decoded);
            resolve(decoded);
        });
    });
};