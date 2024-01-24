import { handleError } from "./error.js";
import jwt from 'jsonwebtoken';

export const verifyUser = (req, res, next) => {
    const token = req.cookies.accesstoken;

    if (!token) {
        return next(handleError(401, "Unauthorized"));
    }

    jwt.verify(token, process.env.SECRET_KEY, (err, user) => {
        if (err) {
            return next(handleError(403, 'Forbidden'));
        }

        req.user = user;
        next();
    });
};
