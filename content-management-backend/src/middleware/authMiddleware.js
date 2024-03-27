module.exports.auth = (req, res, next) => {
    const authHeader = req.headers.authorization;

    const authType = authHeader?.split(" ")[0];
    const authToken = authHeader?.split(" ")[1] ;

    if (!authHeader || !authToken) return res.sendStatus(401);

    if (authType === "Bearer") {
        if (authToken === "abc123") {
            return next();
        }
    }

    res.sendStatus(401);  // 401 Unauthorized
}