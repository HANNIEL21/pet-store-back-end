const JWT = require("jsonwebtoken")

async  function verifyUser(req, res, next) {
const token = await req.header("auth-token");
if (!token)  return res.status(401).json({message: Access-Denied});

try {
    const verified = JWT.verify(token, process.env.TOKEN_SECRET);
    req.user = verified;
    next();
} catch (error) {
    res.status(400).json({message: "Invalid User"})
}
}



module.exports 