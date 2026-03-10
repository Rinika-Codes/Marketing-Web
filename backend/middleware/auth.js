const jwt = require("jsonwebtoken");

const auth = (req, res, next) => {

  const token = req.headers.authorization;

  if (!token) {
    return res.status(401).json({ message: "No token provided" });
  }

  try {

    const actualToken = token.startsWith("Bearer ")
      ? token.split(" ")[1]
      : token;

    const decoded = jwt.verify(actualToken, process.env.JWT_SECRET);

    req.user = decoded;

    next();

  } catch (error) {
    res.status(401).json({ message: "Invalid token" });
  }
};

module.exports = auth;